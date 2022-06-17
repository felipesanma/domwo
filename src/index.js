const puppeteer = require("puppeteer");
const url = "https://www.previred.com/web/previred/";
(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.screenshot({ path: "previred_home_2.jpg" });

    await browser.close();
})();