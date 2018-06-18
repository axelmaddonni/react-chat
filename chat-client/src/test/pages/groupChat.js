const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const Key = webdriver.Key;
const until = webdriver.until;

module.exports = function(driver){

    return{
        url: 'http://localhost:3000/',

        waitUntilVisible: function() {
            //TODO esperar a que se vea mi perfil
            driver.wait(until.elementLocated(element.ageinput));
            driver.wait(until.elementLocated(element.cityinput));
            return driver.wait(until.elementLocated(element.nameinput));
        },

        navigate: function () {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
        },

        clickOnNewGroup: function () {
            return driver.findElement(By.id("newGroup")).click();
        },

        setGroupName: function (groupName) {
            driver.findElement(By.id("groupName-input")).sendKeys(groupName);
            return driver.findElement(By.id("groupName-input")).sendKeys(Key.RETURN);
        },

        selectGroupMember: function () {
            return driver.findElement(By.id("newMemberName")).click();
        },

        createGroup: function () {
            return driver.findElement(By.id("addNewGroup")).click();
        },

        openGroup: function (groupName) {
            return driver.findElement(By.id(groupName)).click();
        },

        sendMessage: function (message) {
            driver.findElement(By.id("message-input")).sendKeys(message);
            return driver.findElement(By.id("message-input")).sendKeys(Key.RETURN);
        },

        clickOnChats: function () {
            return driver.findElement(By.id("chats")).click();
        },

        getChatHeader: function () {
            return driver.findElement(By.id("chat-header")).getText();;
        },

        getSentMessages: function () {
            return messages =  driver.findElements(By.className("sent"));
        },


    // ESTA NO ANDA, el resto ya esta. Cuando funcione esto pasa el test.
        checkLastSentMessage: function(name, message) {
            //chequea si el ultimo mensaje que se muestra es el que se pasa por parametro

            let webElements = driver.findElements(By.name("sent"));
            console.log("Web element");
            console.log(webElements);

            //TODO revisar
            //TODO debería agregarle un id al mensaje y hacer getText()?? (y no agregarle un atributo con datos)

            let lastMessage = webElements.getText();
            console.log("last message:");
            console.log(lastMessage);
            return lastMessage.getAttribute("data-message-nick") == name && lastMessage.getAttribute("data-message") == message;

        }
    }

};