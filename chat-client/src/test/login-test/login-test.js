const webdriver = require("selenium-webdriver");
const assert = require("assert");

describe("login test", function () {
    const user = {
        name: "Manu",
        age: "23",
        city: "BsAs"
    };
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    const loginpage = require('../pages/login')(driver);

    before( () => loginpage.navigate());

    it("loginTest", function () {

        loginpage.enterInfo(user.name, user.age, user.city);
        const loggedUser = loginpage.getUserInfo();
        assert(user.name, loggedUser.name);
        assert(user.age, loggedUser.age);
        assert(user.city, loggedUser.city);

        // ask the browser to open a page
        // driver.navigate().to('http://localhost:3000/');
        // assert.strictEqual(1,1);
    })
});

