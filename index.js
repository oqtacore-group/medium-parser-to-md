const TurndownService = require('turndown');
const axios = require('axios');
const cheerio = require('cheerio');


exports.articleParser = async function (url) {
    const response = await axios(url);
    const $ = cheerio.load(response.data);

    let title = $('.pw-post-title').text();
    let author = $('.gi > div:nth-child(1) > div:nth-child(1) > a').text();
    let image = [];
    let img = $('picture > source').each((i, el) => {
        image.push(($(el).attr('srcset')).split(' ')[0]);
    });
    let date = $('.pw-published-date').text();

    $('*').each((idx, el) => {
        let attr = Object.keys($(el).get(0).attribs).map((key) => {
            if (key != 'srcSet' && key != 'href' && key != 'src') {
                $(el).removeAttr(key);
            }
        });
    });
    $('*').find('picture').each((i, el) => {
        $(el).replaceWith(`<img> ${image[i]} </ img>`);
    });
    const article = [];
    let description = $('section').html();

    const turndownService = new TurndownService();
    const markdownDescription = turndownService.turndown(description);

    article.push({
        title: title,
        author: author,
        image: image, //return all image
        date: date,
        description: markdownDescription
    });
    return article;
}
