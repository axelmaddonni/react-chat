const webdriver = require("selenium-webdriver");
const assert = require("assert");

describe("test", function () {
    it("test", function () {
        const driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        // ask the browser to open a page
        driver.navigate().to('http://localhost:3000/');
        assert.strictEqual(1,1);
    })
});

