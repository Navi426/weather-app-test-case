const {test,expect}= require('@playwright/test')

test ('my first test', async({page}) => {
await page.goto('https://manohar-openweather.netlify.app/')
await expect(page).toHaveTitle('Weather Forecast App')
})