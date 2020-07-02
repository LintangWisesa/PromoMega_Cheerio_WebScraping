![simplinnovation](https://4.bp.blogspot.com/-f7YxPyqHAzY/WJ6VnkvE0SI/AAAAAAAADTQ/0tDQPTrVrtMAFT-q-1-3ktUQT5Il9FGdQCLcB/s350/simpLINnovation1a.png)

# Bank Mega's Promos Web Scraping

### A Node.js project to scraping Bank Mega's promos from [BankMega.com](https://bankmega.com/promolainnya.php) into a JSON file.

Write a credit card promotion scraper for [https://www.bankmega.com/promolainnya.php](https://www.bankmega.com/promolainnya.php). As you can see there are many categories in the website (travel and entertainment, lifestyle and wellness, F&B, etc).

Please explore each categories using code written in NodeJS. Do not hard code the url of each category. But it’s ok to hard code this URL [https://www.bankmega.com/promolainnya.php](https://www.bankmega.com/promolainnya.php) as the starting point.

We want you to get all the information about all the promo in each category. So go explore the links in each categories and get all the promotion in that categories. Don’t forget each category has pagination link below so please go through each page in the categories. For each promotion, give me the promotion title, image url, and all other detail that is described in the promotion. For image promotion, you can grab the image from promotion detail, for example: [https://www.bankmega.com/promo_detail.php?id=874](https://www.bankmega.com/promo_detail.php?id=874) has an image and other info that you can grab.

Put all the info in a single json file.
The JSON file has a format like this:

```json
{
    "travel and entertainment": [
        {
            title: "something",
            imageurl: "http://something",
            Other fields:
        },
        {
            title: "sesuatu 2",
            image: "url 2", 
            etc...
        },
    ],
    "lifestyle and wellness": [
        etc...
    ],
    Other categories 
    etc...
}
```

The ordering of the promotions doesn’t matter as long as they are inserted to the correct category. So you can parallelize the scraping to make it faster. (_hint:_ use ```Promise.all``` or ```Promise.map```).

<hr>

#### Lintang Wisesa :love_letter: _lintangwisesa@ymail.com_

[Facebook](https://www.facebook.com/lintangbagus) | 
[Twitter](https://twitter.com/Lintang_Wisesa) |
[LinkedIn](https://www.linkedin.com/in/lintangwisesa/) |
[Youtube](https://www.youtube.com/user/lintangbagus) | 
:octocat: [GitHub](https://github.com/LintangWisesa) |
[Hackster](https://www.hackster.io/lintangwisesa)