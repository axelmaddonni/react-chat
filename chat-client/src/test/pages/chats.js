const webdriver = require("selenium-webdriver");
const By = webdriver.By;
const Key = webdriver.Key;
const until = webdriver.until;

module.exports = function(driver){
    const element = {
        userName: By.id('userName'),
        userAge: By.id('userAge'),
        userCity: By.id('userCity')
    };

    return{
        url: 'http://localhost:3000/',



        navigate: function () {
            driver.navigate().to(this.url);
            return this.waitUntilVisible();
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

        checkLastSentMessage: function(name, message) {
            //chequea si el ultimo mensaje que se muestra es el que se pasa por parametro

            let webElements = driver.findElements(By.name('sent'));

            //TODO revisar
            //TODO debería agregarle un id al mensaje y hacer getText()?? (y no agregarle un atributo con datos)

            let lastMessage = webElements.get(webElements.length - 1);

            return lastMessage.getAttribute("data-message-nick") == name && lastMessage.getAttribute("data-message") == message;

            //webElements.then(function (elements) {
             //   return elements.length != 0;
            //});
        }
    }

};