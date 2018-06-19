const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const Key = webdriver.Key;
const until = webdriver.until;

module.exports = function(driver){
    const selectors = {
        userName: By.id('userName'),
        userAge: By.id('userAge'),
        userCity: By.id('userCity')
    };

    async function checkLastMessage(selector, name, message) {
        const webElements = await driver.findElements(selector);
        if (webElements.length < 1) {
            return false;
        }
        const lastMessage = webElements[webElements.length - 1];
        return lastMessage.getAttribute("data-message-nick") === name && lastMessage.getAttribute("data-message") === message;
    }

    return {
        url: 'http://localhost:3000/',

        waitForProfileIsVisible: function() {
            driver.wait(until.elementLocated(selectors.userName), 10000);
            driver.wait(until.elementLocated(selectors.userAge), 10000);
            return driver.wait(until.elementLocated(selectors.userCity), 10000);
        },

        getUserName: function () {
            return driver.findElement(selectors.userName).getText();
        },

        getUserAge: function () {
            return driver.findElement(selectors.userAge).getText();
        },

        getUserCity: function () {
            return driver.findElement(selectors.userCity).getText();
        },

        openChat: function (name) {
            return driver.findElement(By.css('[data-nick="'+ name +'"]')).click();
        },

        sendMessage: function (message) {
            driver.findElement(By.id("message-input")).sendKeys(message);
            return driver.findElement(By.id("message-input")).sendKeys(Key.RETURN);
        },

        getChatHeader: function () {
            return driver.findElement(By.id("chat-header")).getText();;
        },

        checkLastSentMessage: async function (name, message) {
            return await checkLastMessage(By.className('sent'), name, message)
        },

        checkLastReceivedMessage: async function (name, message) {
            return await checkLastMessage(By.className('received'), name, message)
        },

        clickOnNewGroup: function () {
            return driver.findElement(By.id("newGroup")).click();
        },

        clickOnChats: function () {
            return driver.findElement(By.id("chats")).click();
        },

        setGroupName: function (groupName) {
            driver.findElement(By.id("groupName-input")).sendKeys(groupName);
            return driver.findElement(By.id("groupName-input")).sendKeys(Key.RETURN);
        },

        selectGroupMember: function (nick) {
            return driver.findElement(By.css('[data-nick="'+ nick +'"]')).click();
        },

        createGroup: function () {
            return driver.findElement(By.id("addNewGroup")).click();
        },

        openGroup: function (groupName) {
            return driver.findElement(By.css('[data-group-id="'+ groupName +'"]')).click();
        }
    }

};