const webdriver = require("selenium-webdriver");
const assert = require("assert");

describe("login test", function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(5000);

    const user = {
        name: "Manu",
        age: "23",
        city: "BsAs"
    };
    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    const loginpage = require('../pages/login')(driver);

    before(() => loginpage.navigate());

    it("loginTest", async() => {

        await loginpage.enterInfo(user.name, user.age, user.city);
        const loggedUserName = await loginpage.getUserName();
        const loggedUserAge = await loginpage.getUserAge();
        const loggedUserCity = await loginpage.getUserCity();

        assert.strictEqual(loggedUserName,user.name);
        assert.strictEqual(loggedUserAge,user.age);
        assert.strictEqual(loggedUserCity,user.city);

    });

    after(function (done) {
        driver.quit().then(() => done());
    });
});