# medium-parser-to-markdown (Medium parser)
A library that takes URL of a Medium article and returns its markdown version in a string.

You can to get title, descripton, images, author, date of an article.

Proudly presented by  [GameTrade Market](https://gametrade.market) - a hypercasual Web3 gaming marketplace. 

This library was created by [Igor Kozlov](https://www.linkedin.com/in/igor-kozlov-910b4b218/) at  [Oqtacore software development](https://oqtacore.com).
# Intallation
    npm i medium-parser-to-markdown

# Example
    const articleParser = require('medium-parser-to-markdown')

    const mediumParser = async (url) => {
        try {
            const article = await articleParser(url);
            console.log(article[0].description);
        }
        catch (e) {
            console.error(e);
        }
    }
    mediumParser('https://medium.com/@treeverse/the-timeless-saga-a813db06024e');

# Result
  We announced Timeless a few weeks ago, and in that time, our plans changed multiple times, all in favour of our community. Check out this summary of what happened.

  **Timeless** was originally planned to be a collection of 11,111 anime characters consisting of different species and 5 1/1s. Each one unique, with different traits. All Treeverse and Nftree holders were allocated a Timeless each, costing 0.222 per plot (free for Nftrees). Each character will have a 3D counterpart inside of Treeverse when we launch.

  ![Treeverse](https://miro.medium.com/max/640/1*8BIJcQOV1815YWv9HckN-Q.png)

  *It was an interesting few weeks for the team, starting from delayed launches and ending in unexpected situations.*

  We officially revealed the associated Timeless with Plots and Trees on 20th November at 10 PM GMT, all holders could go onto our website and view the Timeless for each ID. This caused a spike in volume with some listed Plots that had rare traits going for 3–4 ETH, some going for 10+ and one sold for 50+ (it had a 1/1 associated with it).

  **Watch our first**[**YouTube**](https://www.youtube.com/watch?v=jpAXFXcB1BA)**video teasing Timeless!**

  24 hours after this, on 21st November at 10 PM GMT, you could officially mint the Timeless NFTs from the plot on the same website. Whether or not the associated Timeless was already claimed, the website would clearly let you know, so you wouldn’t have any surprises if buying a Plot or Tree. Here is the official [collection](https://opensea.io/collection/timelessnfts).

  This period lasted 2 weeks, giving all holders a chance to have a go at acquiring a Timeless if they wanted to, with no gas wars. Oh, did I mention [gas was also 70% lower](https://twitter.com/__aizea/status/1468352290428002306) than usual drops?

  > After this phase ended…

  So, this 2 week period ended with around 6500+ mints, far surpassing the expectations of the team. Originally, the rest was going to be given to the treasury but after some community members spoke to us, we changed it to allow any holders from our 3 official collections (Nftrees, Treeverse and Timeless) to mint the remaining Timeless.

  On December 5th at 10 PM GMT, we began this process. People shared their lists and spreadsheets they made of the rare ones they were looking to snipe. We announce on Discord after the contract launched… oh wait, someone created a smart contract to snipe 40 of the rarest Timeless left (Sidhe’s, Golden Armours, Golden Horns) seconds after we launched.

  ![Treeverse](https://miro.medium.com/max/640/1*06wSe4CUiw0UXRam7vuw3Q.png)

  ;/

  An unfortunate situation, one we should have accounted for and also one we didn’t expect. This made a lot of people sad, as they missed out on their only chance at getting one of the rarer Timeless, and one address holding a large supply of rare Timeless wasn’t a very good look.

  In response to this unfortunate event, we decided to burn the Timeless that did not get minted after the 24hr window, reducing the total supply of Timeless.

  Behind the scenes, Loopify and Aizea spoke to the 2 users who created the smart contract. They were supporters of Treeverse and present in the Discord. Thankfully, we ended up coming to an agreement.

  ![Treeverse](https://miro.medium.com/max/640/1*eggaI5DHVS0XLH0maXjojw.png)

  > The unexpected Phase 3…

  As you can see above, the period after 2 weeks ended up in the team changing the original plan of Timeless. From allowing our holders mints, to unexpected burning and even a raffle of rares for 33 lucky people! All information is in our 
  [Discord](https://discord.gg/UDXftjuraE).

  At the time of writing, the addresses picked in the raffle have 72 hours to mint before the next address is chosen. A total of 9,421 Timeless currently exist.

  ## Grants

  The Treeverse treasury kept some of the supply of Timeless. It was kept for active community members, moderators and other members of the team. Here is our first grant list, and certainly not the last.

  * KDK: #11000, #10999
  * EZ: #10998
  * NiftyTable: #10997, #10996
  * alexpanda: #10995
  * Uhcoug: #10994
  * George: #10993
  * Apoxia: #10992

  The primary drop of Timeless has concluded. It’s now time to continue building, like always. We will also be sharing any 3D avatars or prototypes that we are creating for Timeless when we start the process!

# Example
    //you can to get title, descripton, images, author, date
    const mediumParser = async (url) => {
        try {
            const article = await articleParser(url);
            console.log(article[0].title, article[0].author, article[0].date, article[0].images);
        }
        catch (e) {
            console.error(e);
        }
    }
    mediumParser('https://medium.com/@treeverse/the-timeless-saga-a813db06024e');
