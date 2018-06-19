const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

module.exports = function(driver){
    const selectors = {
        nameinput: By.name("nick"),
        ageinput: By.name('age'),
        cityinput: By.name('city'),
        loginButton: By.name('Login-button'),
    };
    return {
        url: 'http://localhost:3000/login',

        waitUntilVisible: async function () {
            await driver.wait(until.elementLocated(selectors.ageinput));
            await driver.wait(until.elementLocated(selectors.cityinput));
            await driver.wait(until.elementLocated(selectors.nameinput));
        },

        navigate: async function () {
            await driver.navigate().to(this.url);
            await this.waitUntilVisible();
        },

        login: async function (name, age, city) {
            await driver.findElement(selectors.nameinput).sendKeys(name);
            await driver.findElement(selectors.ageinput).sendKeys(age);
            await driver.findElement(selectors.cityinput).sendKeys(city);
            await driver.findElement(selectors.loginButton).click();
        }
    }

};