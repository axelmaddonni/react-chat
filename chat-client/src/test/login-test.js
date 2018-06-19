const webdriver = require("selenium-webdriver");
const assert = require("assert");
var uncaught = require('uncaught');

describe("login test", function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(10000);

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
    var loginPage;
    var chatsPage;
    var tabsSwitcher;

    before(function () {
        uncaught.start();
        uncaught.addListener(function (error) {
            console.log('Uncaught error or rejection: ', error.message);
        });
    });

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();
        await driver.manage().setTimeouts({ implicit: 10000 });

        loginPage = require('./pages/login')(driver);
        chatsPage = require('./pages/chats')(driver);
        tabsSwitcher = require('./utils/tabsSwitcher')(driver);

        await loginPage.navigate();
        await tabsSwitcher.init();
    });

    it("Log user", async() => {
        await loginPage.login(user.name, user.age, user.city);
        await chatsPage.waitForProfileIsVisible();
        const loggedUserName = await chatsPage.getUserName();
        const loggedUserAge = await chatsPage.getUserAge();
        const loggedUserCity = await chatsPage.getUserCity();

        assert.strictEqual(loggedUserName,user.name);
        assert.strictEqual(loggedUserAge,user.age);
        assert.strictEqual(loggedUserCity,user.city);
    });

    it("Log multiple users and switch tabs", async() => {
        await loginPage.login(user.name, user.age, user.city);
        await chatsPage.waitForProfileIsVisible();

        var mainTabId = await tabsSwitcher.getTabIdentifier();
        var newTabId = await tabsSwitcher.openNewTab();
        await tabsSwitcher.switchTab(newTabId);

        await loginPage.navigate();
        await loginPage.login(user2.name, user2.age, user2.city);
        await chatsPage.waitForProfileIsVisible();
        assert.strictEqual(await chatsPage.getUserName(), user2.name);

        await tabsSwitcher.switchTab(mainTabId);
        assert.strictEqual(await chatsPage.getUserName(), user.name);
    });

    afterEach(function (done) {
        driver.quit().then(() => done());
    });
});