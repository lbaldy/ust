const puppeteer = require('puppeteer');

async function wait(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setViewport({
        width: 6000,
        height: 6000
    })

    await page.goto('https://www.google.pl/maps/@52.190747,20.9775442,17z');
    await wait(10000);
    await page.screenshot({
        path: 'example.png'
    });
    await browser.close();

})();