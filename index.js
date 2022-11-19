const axios = require('axios');
const cheerio = require('cheerio');
const markdown = require("html-to-md");

const calendar = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12',
}

module.exports = async function (url) {
    const response = await axios(url);
    const $ = cheerio.load(response.data);

    let title = $('.pw-post-title').text();
    let author = $('.gi > div:nth-child(1) > div:nth-child(1) > a').text();
    let images = [];
    let img = $('picture > source:not([type])').each((i, el) => {
        images.push(($(el).attr('srcset')).split(' ')[0]);
    });
    let date = $('.pw-published-date').text();
    let newDate, day, month, year;
    if (date.includes(',')) {
        day = date.split(' ')[1].replace(',', '');
        month = date.split(' ')[0];
        year = date.split(',')[1];
        newDate = `${year.trim()}-${calendar[month]}-${day}`;
    } else {
        day = date.split(' ')[1].replace(' ', '');
        month = date.split(' ')[0];
        newDate = `2022-${calendar[month]}-${day}`;
    }

    $('*').find('.m.jh.l.do').each((i, el) => {
        $(el).replaceWith('IFRAME');
    });

    $('*').each((idx, el) => {
        let attr = Object.keys($(el).get(0).attribs).map((key) => {
            if (key != 'srcSet' && key != 'href' && key != 'src') {
                $(el).removeAttr(key);
            }
        });
    });
    $('*').find('picture').each((i, el) => {
        $(el).replaceWith('replaceableImage');
    });
    $('*').find('br').each((i, el) => {
        $(el).replaceWith('.Break-Line.');
    });

    const article = [];
    let description = $('section').html();

    description = await description.replaceAll('h2', 'h3');
    description = await description.replaceAll('h1', 'h2');

    description = description.replace(title, '');
    description = description.replaceAll('.Break-Line.</strong>', '</strong>.Break-Line.')

    let markdownDescription = await markdown(description);
    markdownDescription = markdownDescription.replaceAll('****', '** <br>')

    images.forEach((elem) => {
        markdownDescription = markdownDescription.replace('replaceableImage', `![${author}](${elem})`);
    })
    markdownDescription = markdownDescription.replaceAll('.Break-Line.', ' <br>');


    article.push({
        title: title,
        author: author,
        image: images,
        date: date,
        description: markdownDescription
    });
    return article;
}
