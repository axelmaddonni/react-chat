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
    var groupPage;

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        tabsSwitcher = require('../test/utils/tabsSwitcher')(driver);
        groupPage = require('../test/pages/groupChat')(driver);
        loginpage = require('../test/pages/login')(driver);



        loginpage.navigate();
        await tabsSwitcher.init();
    });

    it("Create group and send message", async() => {
        // Logueo la primer persona
        await loginpage.enterInfo(user1.name, user1.age, user1.city);


        var user1Tab = await tabsSwitcher.getTabIdentifier();
        var user2Tab = await tabsSwitcher.openNewTab();

        await tabsSwitcher.switchTab(user2Tab);

        // Logueo la segunda persona
        await loginpage.navigate();
        await loginpage.enterInfo(user2.name, user2.age, user2.city);

        // El user1 va a crear el nuevo grupo
        await tabsSwitcher.switchTab(user1Tab);
        await groupPage.clickOnNewGroup();
        await groupPage.setGroupName(groupName);
        //var contacts = await groupPage.getContactsList();
        await groupPage.selectGroupMember();
        await groupPage.createGroup();
        await groupPage.openGroup(groupName);

        await groupPage.sendMessage(message);
        var sentMessages = await groupPage.getSentMessages();
        console.log("sentMessages");
        console.log(sentMessages);
        console.log(sentMessages.size());
        assert(true, await groupPage.checkLastSentMessage(user1.name, message));

        await tabsSwitcher.switchTab(user2Tab);
        await groupPage.clickOnChats();
        await groupPage.openGroup(groupName);
        assert(true, await groupPage.checkLastSentMessage(user1.name, message));

    });

    afterEach(function (done) {
        driver.quit().then(() => done());
    });
});