const cheerio = require('cheerio')
const request = require('request')

// get all subcategories: 
// 'Travel', 'Lifestyle', 'Food & Beverages', 'Gadget & Entertainment', 'Daily Needs', 'Others'

request('https://www.bankmega.com/promolainnya.php', (error, response, body) => {
    const $ = cheerio.load(body)

    // jumlah subkategori
    // console.log($('#subcatpromo').find('img').length)

    // title subcategory
    var subcat = []
    for (i = 0; i < $('#subcatpromo').find('img').length; i++){
        subcat.push($('#subcatpromo').find('img')[i]['attribs']['title'])
    }
    subcat = [
        subcat[0], subcat[3], subcat[2], subcat[4], subcat[1], subcat[5]
    ]
    console.log(subcat)
})