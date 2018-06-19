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
        const messageNick = await lastMessage.getAttribute("data-message-nick");
        const messageData = await lastMessage.getAttribute("data-message");
        return  messageNick === name &&  messageData === message;
    }

    return {
        url: 'http://localhost:3000/',

        waitForProfileIsVisible: async function() {
            await driver.wait(until.elementLocated(selectors.userName), 10000);
            await driver.wait(until.elementLocated(selectors.userAge), 10000);
            await driver.wait(until.elementLocated(selectors.userCity), 10000);
        },

        getUserName: async function() {
            return await driver.findElement(selectors.userName).getText();
        },

        getUserAge: async function () {
            return await driver.findElement(selectors.userAge).getText();
        },

        getUserCity: async function() {
            return await driver.findElement(selectors.userCity).getText();
        },

        openChat: async function(name) {
            await driver.findElement(By.css('[data-nick="' + name + '"]')).click();
        },

        sendMessage: async function(message) {
            await driver.findElement(By.id("message-input")).sendKeys(message);
            await driver.findElement(By.id("message-input")).sendKeys(Key.RETURN);
        },

        getChatHeader: async function() {
            return await driver.findElement(By.id("chat-header")).getText();
        },

        checkLastSentMessage: async function(name, message) {
            return await checkLastMessage(By.className('sent'), name, message)
        },

        checkLastReceivedMessage: async function(name, message) {
            return await checkLastMessage(By.className('replies'), name, message)
        },

        clickOnNewGroup: async function() {
            await driver.findElement(By.id("newGroup")).click();
        },

        clickOnChats: async function() {
            await driver.findElement(By.id("chats")).click();
        },

        setGroupName: async function(groupName) {
            await driver.findElement(By.id("groupName-input")).sendKeys(groupName);
            await driver.findElement(By.id("groupName-input")).sendKeys(Key.RETURN);
        },

        selectGroupMember: async function(nick) {
            await driver.findElement(By.css('[data-nick="' + nick + '"]')).click();
        },

        createGroup: async function() {
            await driver.findElement(By.id("addNewGroup")).click();
        },

        openGroup: async function(groupName) {
            await driver.findElement(By.css('[data-group-id="' + groupName + '"]')).click();
        }
    }

};