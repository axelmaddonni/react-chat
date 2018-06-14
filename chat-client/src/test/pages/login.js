const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const until = webdriver.until;

module.exports = function(driver){
    const element = {
        nameinput: By.name('nick'),
        ageinput: By.name('age'),
        cityinput: By.name('city'),
        loginButton: By.name('Login-button')
    };
    return{
        url: 'http://localhost:3000/',
        elements: element,

        waitUntilVisible: function() {
            driver.wait(until.elementLocated(element.ageinput));
            driver.wait(until.elementLocated(element.cityinput));
            return driver.wait(until.elementLocated(element.nameinput));
        },

        navigate: function () {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },

        enterInfo: function (name, age, city) {
            driver.findElement(element.nameinput).sendKeys(name);
            driver.findElement(element.ageinput).sendKeys(age);
            driver.findElement(element.cityinput).sendKeys(city);

            return driver.findElement(element.loginButton).click();
        },

        getUserInfo: function () {
            return JSON.parse(sessionStorage.getItem('user'));

        }
    }

};