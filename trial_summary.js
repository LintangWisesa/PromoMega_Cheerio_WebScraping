const cheerio = require('cheerio')
const request = require('request')

request('https://www.bankmega.com/promolainnya.php', (error, response, body) => {
    // console.error('error:', error);
    // console.log('statusCode:', response && response.statusCode);
    // console.log('body:', body);
    
    const $ = cheerio.load(body)
    
    // ====================================================
    // ========== jumlah subkategori ==========
    // console.log($('#subcatpromo').find('img').length)

    // ====================================================
    // ========== title subkategori ==========
    let subcat = []
    for (i = 0; i < $('#subcatpromo').find('img').length; i++){
        // console.log($('#subcatpromo').find('img')[i]['attribs']['title'])
        subcat.push($('#subcatpromo').find('img')[i]['attribs']['title'])
    }
    // console.log(subcat)

    // ====================================================
    // ========== sort subcat based on web subcat number ==========
    subcat = [
        subcat[0], subcat[3], subcat[2], subcat[4], subcat[1], subcat[5]
    ]
    console.log(subcat)

    // ====================================================
    // ========== get promo from subcat 1 page 1 ==========   
    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=1&page=1`, (error, response, body) => {
        const $ = cheerio.load(body)

        // link promo URL
        // console.log('https://bankmega.com/' + $('#promolain').find('a')['0']['attribs']['href'])
        
        // promo title
        // console.log($('#promolain').find('a')['0']['children'][1]['attribs']['title'])
        
        // image source
        // console.log('https://bankmega.com/' + $('#promolain').find('a')['0']['children'][1]['attribs']['src'])
        
        // total paginasi
        page = $('.tablepaging').find('tr').contents().length - 4
        console.log(page)
        
        // total promo per page : 1 page = 6 promo : 0-5
        // console.log($('#promolain').find('a')[10])
        // console.log(typeof($('#promolain').find('a')[10]))
        
        promos = []
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
    
    })    

});