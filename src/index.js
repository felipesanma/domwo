const puppeteer = require("puppeteer");
const url = "https://www.previred.com/wPortal/login/login.jsp";
const rut = "";
const password = "";

//await puppeteer.launch({ headless: false }) for watch the bot

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    await page.type("#web_rut2", rut);
    //await page.click("#web_rut2");
    await page.type("#web_password", password);
    await page.click(('[name="login"]'));
    await page.waitForSelector("#modificaDatos");

    await page.click(('[id="nanas"]'));
    await page.waitForSelector("#btnPago");

    await page.click(('[id="btnPago"]'))
    await page.waitForSelector(".nom-pn-table");

    const renta_imponible = await page.evaluate(() => {
        const nom_table = document.querySelectorAll('.nom-pn-table p').innerText;

        /*const table_objects = [];
        for (let obj of nom_table) {
            table_objects.push(obj.span);
        }
        */
        return nom_table;

    });

    console.log(renta_imponible)

    await page.screenshot({ path: "previred_pago_cot_mes_actual.jpg" });
    await browser.close();
})();