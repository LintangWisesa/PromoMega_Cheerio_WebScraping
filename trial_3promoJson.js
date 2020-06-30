const cheerio = require('cheerio')
const request = require('request')
const fs = require('fs');

request('https://www.bankmega.com/promolainnya.php', (error, response, body) => {
    const $ = cheerio.load(body)
    var subcat = []
    for (i = 0; i < $('#subcatpromo').find('img').length; i++){
        subcat.push($('#subcatpromo').find('img')[i]['attribs']['title'])
    }
    subcat = [
        subcat[0], subcat[3], subcat[2], subcat[4], subcat[1], subcat[5]
    ]
    
    var promo = {}
    for (i in subcat){
        promo[subcat[i]] = []
    }

    // ====================== Subcat No 1: Travel ======================
    var subcatno = 1
    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
        const $ = cheerio.load(body)
        page = $('.tablepaging').find('tr').contents().length - 4
        var data = {}
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
                    promo[subcat[subcatno-1]].push(data)
                }
                // console.log(promo['Travel'])
                // console.log(promo['Travel'].length)
                data = JSON.stringify(promo);
                fs.writeFile('trial_3result.json', data, (err) => {
                    if (err) throw err;
                    console.log('Data written to file');
                    
                    // ====================== Subcat No 2: Lifestyle ======================
                    var subcatno = 2
                    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
                        const $ = cheerio.load(body)
                        page = $('.tablepaging').find('tr').contents().length - 4
                        var data = {}
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
                                    promo[subcat[subcatno-1]].push(data)
                                }
                                // console.log(promo['Travel'])
                                // console.log(promo['Travel'].length)
                                data = JSON.stringify(promo);
                                fs.writeFile('trial_3result.json', data, (err) => {
                                    if (err) throw err;
                                    console.log('Data written to file');

                                    // ====================== Subcat No 3: Food & Beverages ======================
                                    var subcatno = 3
                                    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
                                        const $ = cheerio.load(body)
                                        page = $('.tablepaging').find('tr').contents().length - 4
                                        var data = {}
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
                                                    promo[subcat[subcatno-1]].push(data)
                                                }
                                                // console.log(promo['Travel'])
                                                // console.log(promo['Travel'].length)
                                                data = JSON.stringify(promo);
                                                fs.writeFile('trial_3result.json', data, (err) => {
                                                    if (err) throw err;
                                                    console.log('Data written to file');
                                                    
                                                    // ====================== Subcat No 4: Gadget & Entertainment ======================
                                                    var subcatno = 4
                                                    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
                                                        const $ = cheerio.load(body)
                                                        page = $('.tablepaging').find('tr').contents().length - 4
                                                        var data = {}
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
                                                                    promo[subcat[subcatno-1]].push(data)
                                                                }
                                                                // console.log(promo['Travel'])
                                                                // console.log(promo['Travel'].length)
                                                                data = JSON.stringify(promo);
                                                                fs.writeFile('trial_3result.json', data, (err) => {
                                                                    if (err) throw err;
                                                                    console.log('Data written to file');

                                                                    // ====================== Subcat No 5: Daily Needs ======================
                                                                    var subcatno = 5
                                                                    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
                                                                        const $ = cheerio.load(body)
                                                                        page = $('.tablepaging').find('tr').contents().length - 4
                                                                        var data = {}
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
                                                                                    promo[subcat[subcatno-1]].push(data)
                                                                                }
                                                                                // console.log(promo['Travel'])
                                                                                // console.log(promo['Travel'].length)
                                                                                data = JSON.stringify(promo);
                                                                                fs.writeFile('trial_3result.json', data, (err) => {
                                                                                    if (err) throw err;
                                                                                    console.log('Data written to file');

                                                                                    // ====================== Subcat No 6: Others ======================
                                                                                    var subcatno = 6
                                                                                    request(`https://www.bankmega.com/promolainnya.php?product=0&subcat=${subcatno}&page=1`, (error, response, body) => {
                                                                                        const $ = cheerio.load(body)
                                                                                        page = $('.tablepaging').find('tr').contents().length - 4
                                                                                        var data = {}
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
                                                                                                    promo[subcat[subcatno-1]].push(data)
                                                                                                }
                                                                                                // console.log(promo['Travel'])
                                                                                                // console.log(promo['Travel'].length)
                                                                                                data = JSON.stringify(promo);
                                                                                                fs.writeFile('trial_3result.json', data, (err) => {
                                                                                                    if (err) throw err;
                                                                                                    console.log('Data written to file');
                                                                                                });
                                                                                            })
                                                                                        }
                                                                                    })

                                                                                });
                                                                            })
                                                                        }
                                                                    })

                                                                });
                                                            })
                                                        }
                                                    })
                                                });
                                            })
                                        }
                                    })

                                });
                            })
                        }
                    })

                });
            })
        }
    })
    
})