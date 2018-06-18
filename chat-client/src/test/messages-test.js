const webdriver = require("selenium-webdriver");
const assert = require("assert");

describe("messages test", function () {
    // e2e tests are too slow for default Mocha timeout
    this.timeout(5000);

    const user = {
        name: "Manu",
        age: "23",
        city: "BsAs"
    };

    const receiver = {
        name: "Lu",
        age: "23",
        city: "BsAs"
    };

    const message = "Hola";

    var driver;
    var chatsPage;
    var tabsSwitcher;
    var loginpage;

    driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();

    beforeEach(async () => {
        driver = new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        tabsSwitcher = require('../test/utils/tabsSwitcher')(driver);
        chatsPage = require('./pages/chats')(driver);
        loginpage = require('../test/pages/login')(driver);

        loginpage.navigate();
        await tabsSwitcher.init();
    });

    it("messagesTest", async() => {
        await loginpage.login(user.name, user.age, user.city);

        var user1Tab = await tabsSwitcher.getTabIdentifier();
        var user2Tab = await tabsSwitcher.openNewTab();

        await tabsSwitcher.switchTab(user2Tab);

        // Logueo la segunda persona
        await loginpage.navigate();
        await loginpage.login(receiver.name, receiver.age, receiver.city);

        // El user1 va a enviar un mensaje al otro user
        await tabsSwitcher.switchTab(user1Tab);
        await chatsPage.openChat(receiver.name);
        await chatsPage.sendMessage(message);

        assert(receiver.name, await chatsPage.getChatHeader());
        assert(true, await chatsPage.checkLastSentMessage(user.name, message));

        await tabsSwitcher.switchTab(user2Tab);
        await chatsPage.openChat(user.name);
        assert(user.name, await chatsPage.getChatHeader());
        assert(true, await chatsPage.checkLastReceivedMessage(user.name, message));
    });

    after(function (done) {
        driver.quit().then(() => done());
    });
});