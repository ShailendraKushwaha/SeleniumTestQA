// filename: pages/BasePage.js
class Page {

  constructor(driver) {
    this.driver = driver
  }

  async load(url) {
    await this.driver.get(url)
  }

  find(locator) {
    return this.driver.findElement(locator)
  }

  findMultipleElements(locator){
    return this.driver.findElements(locator)
  }

  async click(locator) {
    await this.find(locator).click()
  }

  async type(locator, inputText) {
    await this.find(locator).sendKeys(inputText)
  }

  async isVisible(locator) {
    return await this.find(locator).isDisplayed()
  }
}

module.exports = Page
