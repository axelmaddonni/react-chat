const webdriver = require("selenium-webdriver");
const assert = require("assert");

describe("group test", function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(5000);

    const user1 = {
        name: "Manu",
        age: "23",
        city: "BsAs"
    };

    const user2 = {
        name: "Lu",
        age: "23",
        city: "BsAs"
    };

    const message = "Hola grupo";
    const groupName = "La posta de React";

    var driver;
    var loginpage;
    var tabsSwitcher;
    var chatsPage;

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        loginpage = require('../test/pages/login')(driver);
        chatsPage = require('../test/pages/chats')(driver);
        tabsSwitcher = require('../test/utils/tabsSwitcher')(driver);

        loginpage.navigate();
        await tabsSwitcher.init();
    });

    it("Create group and send message", async() => {
        // Logueo la primer persona
        await loginpage.login(user1.name, user1.age, user1.city);
        await chatsPage.waitForProfileIsVisible();

        var user1Tab = await tabsSwitcher.getTabIdentifier();
        var user2Tab = await tabsSwitcher.openNewTab();
        await tabsSwitcher.switchTab(user2Tab);

        // Logueo la segunda persona
        await loginpage.navigate();
        await loginpage.login(user2.name, user2.age, user2.city);
        await chatsPage.waitForProfileIsVisible();

        // El user1 va a crear el nuevo grupo
        await tabsSwitcher.switchTab(user1Tab);
        await chatsPage.clickOnNewGroup();
        await chatsPage.setGroupName(groupName);

        await chatsPage.selectGroupMember(user2.name);
        await chatsPage.createGroup();
        await chatsPage.openGroup(groupName);

        await chatsPage.sendMessage(message);
        assert(true, await chatsPage.checkLastSentMessage(user1.name, message));

        await tabsSwitcher.switchTab(user2Tab);
        await chatsPage.clickOnChats();
        await chatsPage.openGroup(groupName);
        assert(true, await chatsPage.checkLastSentMessage(user1.name, message));
    });

    afterEach(function (done) {
        driver.quit().then(() => done());
    });
});