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

        waitUntilVisible: function() {
            driver.wait(until.elementLocated(selectors.ageinput));
            driver.wait(until.elementLocated(selectors.cityinput));
            return driver.wait(until.elementLocated(selectors.nameinput));
        },

        navigate: function () {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },

        login: function (name, age, city) {
            driver.findElement(selectors.nameinput).sendKeys(name);
            driver.findElement(selectors.ageinput).sendKeys(age);
            driver.findElement(selectors.cityinput).sendKeys(city);
            driver.wait(until.elementTextIs(driver.findElement(selectors.nameinput), name));
            return driver.findElement(selectors.loginButton).click();
        }
    }

};