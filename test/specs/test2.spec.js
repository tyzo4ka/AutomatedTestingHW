import { expect, browser, $ } from '@wdio/globals'

describe('basic WDIO Commands', () => {
    it('should login with valid credentials', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tomsmith')
        await $('#password').setValue('SuperSecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('should login with valid credentials using addValue', async () => {
        await browser.url(`https://the-internet.herokuapp.com/login`)

        await $('#username').setValue('tom')
        await $('#username').addValue('smith')

        await $('#password').setValue('Super')
        await $('#password').addValue('SecretPassword!')
        await $('button[type="submit"]').click()

        await expect($('#flash')).toBeExisting()
        await expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!')
    })

    it('should check display element', async () => {
        await browser.url(`https://the-internet.herokuapp.com/context_menu`)

        const rectangleElement = await $('div#hot-spot')
        await expect(rectangleElement).toBeEnabled()
    })

    it('should check existing element', async () => {
        await browser.url(`https://the-internet.herokuapp.com/context_menu`)

        const scriptElement = await $('//*[@id="content"]/script')
        await expect(scriptElement).not.toBeDisabled()

        const isExisting = await scriptElement.isExisting()
        console.log(isExisting); // outputs: true
        
    })
    
})

