//Dependencies
const Request = require("request")
const Cheerio = require("cheerio")

//Functions
function scrape_links(url, callback) {
    Request(url, function(err, res, body) {
        if(err){
            callback(err)
            return
        }

        const $ = Cheerio.load(body)
        var links = $("a")
        var results = []

        links.each(function (i, link) {
            results.push($(link).attr("href"))
        })

        callback(results)
    })
}

//Exporter
module.exports = {
    scrape_links: scrape_links
}
