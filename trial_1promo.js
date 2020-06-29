const cheerio = require('cheerio')
const request = require('request')

// get promos by subcat number 
// 1:'Travel', 2:'Lifestyle', 3:'Food & Beverages', 4:'Gadget & Entertainment', 5:'Daily Needs', 6:'Others'

var subcatno = 3
request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
    const $ = cheerio.load(body)

    // link promo URL
    // console.log('https://bankmega.com/' + $('#promolain').find('a')['0']['attribs']['href'])
    
    // promo title
    // console.log($('#promolain').find('a')['0']['children'][1]['attribs']['title'])
    
    // image source
    // console.log('https://bankmega.com/' + $('#promolain').find('a')['0']['children'][1]['attribs']['src'])
    
    // total paginasi
    page = $('.tablepaging').find('tr').contents().length - 4
    // console.log(page)
    
    // total promo per page : 1 page = 6 promo : 0-5
    // console.log($('#promolain').find('a')[10])
    // console.log(typeof($('#promolain').find('a')[10]))
    
    promos = []

    for (p=1; p<=page; p++){
        request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=${p}`, (error, response, body) => {
            const $ = cheerio.load(body)
            for (i=0; i<=5; i++){
                if ($('#promolain').find('a')[i] == undefined){
                    break;
                }
                data = {
                    'promo_title': $('#promolain').find('a')[i]['children'][1]['attribs']['title'],
                    'promo_url': 'https://bankmega.com/' + $('#promolain').find('a')[i]['attribs']['href'],
                    'image_url': 'https://bankmega.com/' + $('#promolain').find('a')[i]['children'][1]['attribs']['src']
                }
                promos.push(data)
            }
            console.log(promos)
            console.log(promos.length)
        })
    }

})    