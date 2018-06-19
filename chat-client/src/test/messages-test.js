const webdriver = require("selenium-webdriver");
const assert = require("assert");
const uncaught = require('uncaught');

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
    var loginPage;
    var chatsPage;
    var tabsSwitcher;

    beforeEach(async () => {
        driver = await new webdriver.Builder()
            .forBrowser('chrome')
            .build();

        loginPage = require('../test/pages/login')(driver);
        tabsSwitcher = require('../test/utils/tabsSwitcher')(driver);
        chatsPage = require('../test/pages/chats')(driver);

        await loginPage.navigate();
        await tabsSwitcher.init();
    });

    it("Open private chat and send message", async() => {
        // Logueo la primera persona
        var user1Tab = await tabsSwitcher.getTabIdentifier();
        await loginPage.login(user.name, user.age, user.city);

        // Logueo la segunda persona
        var user2Tab = await tabsSwitcher.openNewTab();
        await tabsSwitcher.switchTab(user2Tab);
        await loginPage.navigate();
        await loginPage.login(receiver.name, receiver.age, receiver.city);

        // El user1 va a enviar un mensaje al otro user
        await tabsSwitcher.switchTab(user1Tab);
        await chatsPage.openChat(receiver.name);
        await chatsPage.sendMessage(message);

        var chatHeader = await chatsPage.getChatHeader();
        assert(chatHeader, receiver.name);

        var checkReceivedMessage = await chatsPage.checkLastSentMessage(user.name, message);
        assert(checkReceivedMessage, true);

        await tabsSwitcher.switchTab(user2Tab);
        await chatsPage.openChat(user.name);

        chatHeader = await chatsPage.getChatHeader();
        assert(chatHeader, user.name);

        checkReceivedMessage = await chatsPage.checkLastReceivedMessage(user.name, message);
        assert(checkReceivedMessage, true);
    });

    after(function (done) {
        driver.quit().then(() => done());
    });
});