//Dependencies
const SMTSALOAW = require("../index.js")

//Main
SMTSALOAW.scrape_links("https://discord.com", function(links){
    console.log(links)
})
