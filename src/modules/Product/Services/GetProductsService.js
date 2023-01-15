const puppeteer = require('puppeteer');

class GetProductsService {
    async execute() {
        return (async () => {
            const browser = await puppeteer.launch();
            const page = await browser.newPage();
            await page.goto('https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops');
        
            let produtos = await page.evaluate(() => {
                let results = [];
                let nodeList = document.querySelectorAll('div.thumbnail');
                let results_ordered = [];
        
                nodeList.forEach((item) => {
                    let description = item.querySelector('p.description').innerText;
                    let price = parseFloat(item.querySelector('h4').innerText.replace('$',''));
                    let name = item.querySelector('a.title').innerText;
                    let quantity_reviews = item.querySelector('p.pull-right').innerHTML;
                    let quantity_stars = item.querySelectorAll('span.glyphicon.glyphicon-star').length;
                
                    if(name.includes("Lenovo")){
                        results.push({
                            name: name,
                            price: price,
                            description: description,
                            quantity_reviews: quantity_reviews,
                            quantity_stars: quantity_stars
                        });
        
                        results_ordered =   results.sort(compare);
        
                    }
        
                    // Função para ordernar a lista de Objetos
                    function compare(a,b){
                        return a.price < b.price ? -1 : a.price > b.price ? 1 : 0;
                        
                    }
        
                
                })
                
                return results_ordered;
            });
        
            //console.log(produtos)

            return produtos;
        })();
    }
}

module.exports = GetProductsService;