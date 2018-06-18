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

    const user2 = {
        name: "Axel",
        age: "23",
        city: "BsAs"
    };

    var driver;
    var loginpage;
    var tabsSwitcher;

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        loginpage = require('../pages/login')(driver);
        tabsSwitcher = require('../utils/tabsSwitcher')(driver);

        loginpage.navigate();
        await tabsSwitcher.init();
    });

    it("oneLoginTest", async() => {
        await loginpage.enterInfo(user.name, user.age, user.city);
        const loggedUserName = await loginpage.getUserName();
        const loggedUserAge = await loginpage.getUserAge();
        const loggedUserCity = await loginpage.getUserCity();

        assert.strictEqual(loggedUserName,user.name);
        assert.strictEqual(loggedUserAge,user.age);
        assert.strictEqual(loggedUserCity,user.city);
    });

    it("multipleLoginTest", async() => {
        await loginpage.enterInfo(user.name, user.age, user.city);

        var mainTabId = await tabsSwitcher.getTabIdentifier();
        var newTabId = await tabsSwitcher.openNewTab();
        await tabsSwitcher.switchTab(newTabId);

        await loginpage.navigate();
        await loginpage.enterInfo(user2.name, user2.age, user2.city);

        await tabsSwitcher.switchTab(mainTabId);
        await tabsSwitcher.switchTab(newTabId);
        await tabsSwitcher.switchTab(mainTabId);
    });

    afterEach(function (done) {
        driver.quit().then(() => done());
    });
});