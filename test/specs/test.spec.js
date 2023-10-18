
describe('Test suite', () => {
    beforeEach(async () => {
        await browser.url('https://the-internet.herokuapp.com/')
    })

    it('Url contain', async () => {
        await expect(browser).toHaveUrlContaining('app')
    })

    it('Text contain with using xPath', async () => {
        const listItem = await $('//body/div[2]/div/ul/li[5]')
        await expect(listItem).toHaveText('Challenging DOM')
    })

    it('To have attribute using xPath', async () => {
        const listItem = await $('//body/div[3]/div/div/a')
        await expect(listItem).toHaveAttr('target')
    })

    it('To be displayed using CSS', async () => {
        const header = await $('h1.heading')
        await expect(header).toBeDisplayed()
    })

    it('To have text containing using CSS', async () => {
        const listItem = await $('#page-footer > div > div > a')
        await expect(listItem).toHaveTextContaining('Selenium')
    })
})