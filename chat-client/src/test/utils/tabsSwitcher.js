module.exports = function (driver) {
    var driverHandles = [];

    return {

        init: async function() {
            driverHandles = await driver.getAllWindowHandles();
        },

        getTabIdentifier: async function () {
            return await driver.getWindowHandle();
        },

        openNewTab: async function () {
            await driver.executeScript("window.open();");
            var newWindowHandle;
            await driver.getAllWindowHandles().then(async function (windowHandles) {
                await windowHandles.forEach(function (handle) {
                    if (!(driverHandles.includes(handle))) {
                        // Switch to new browser window
                        newWindowHandle = handle;
                    }
                });
                driverHandles = windowHandles;
            });
            return newWindowHandle;
        },

        switchTab: async function (handle) {
            if (!driverHandles.includes(handle)) {
                throw Error("Invalid handle, no tab was found.")
            }
            await driver.switchTo().window(handle);
        }
    }
};