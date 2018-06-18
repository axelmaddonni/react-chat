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

    const driver = new webdriver.Builder()
        .forBrowser('chrome')
        .build();
    const chatsPage = require('../pages/chats')(driver);

    before(() => chatsPage.navigate());

    it("messagesTest", async() => {

        await chatsPage.openChat(receiver.name);
        await chatsPage.sendMessage(message);
        assert(receiver.name, await chatsPage.getChatHeader())
        assert(true, await chatsPage.checkLastSentMessage(user.name, message));

    });

    after(function (done) {
        driver.quit().then(() => done());
    });
});