import { expect, browser, $ } from '@wdio/globals'

describe("WebdriverIO's Advanced commands", () => {

    it('should change style border of list', async () => {
        await browser.url(`https://the-internet.herokuapp.com`)
        const listItems = await $('#content > ul')

        await browser.execute(function(listItems) {
            listItems.style.border = 'blue dotted 4px';
        }, listItems);
        await browser.pause(3000);

    })

    it('should wait until text has changed', async () => {
        await browser.url(`https://the-internet.herokuapp.com/dynamic_controls`)
        await $("//*[@id=\"checkbox-example\"]/button").click();

        await browser.waitUntil(
            async () => await $("//*[@id=\"message\"]").getText() === "It's gone!",
            { timeout: 5000, interval: 600, timeoutMsg: "not loaded" }
        );
    })

    it('drag and drop action', async () => {
        await browser.url(`https://the-internet.herokuapp.com/drag_and_drop`)

        const squareFrom = await $('#column-a')
        const squareTo = await $('#column-b')

        await squareFrom.dragAndDrop(squareTo)
        await browser.pause(2000)
    })

    it('should get cookies', async () => {
        await browser.url(`https://the-internet.herokuapp.com`)

        const cookies = await browser.getCookies()
        console.log("Cookies")
        console.dir(cookies)
    })

})

