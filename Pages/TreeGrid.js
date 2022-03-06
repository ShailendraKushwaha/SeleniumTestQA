// filename: pages/LoginPage.js
const TABLE_ROWS = { className: 'react-grid-row' }
const ARROW = { className: 'react-grid-cell-tree-arrow' }
// const FIRST_ARROW = { id: 'password' }
// const SUBMIT_BUTTON = { css: 'button' }
// const SUCCESS_MESSAGE = { css: '.flash.success' }

const BASE_URL = "https://react-redux-grid.herokuapp.com/Tree"

class TreeGrid {
  constructor(driver) {
    this.driver = driver
  }

  async load() {
    await this.driver.get(BASE_URL)
  }

  async countRowsInGrid(){
   this.rows =  await this.driver.findElements(TABLE_ROWS)
    console.log(this.rows.length);
    return this.rows.length
  }

  async clickOnFirstArrow(){
    const arrowButton = await this.driver.findElement(ARROW)
    arrowButton.click()
  }

  async clickOnSecondArrow(){
    var staleElement = 0
    const arrowButton = await this.driver.findElements(ARROW)
    console.log("arrow button count")
    console.log(arrowButton.length)
    if (arrowButton.length >= 2) {
      arrowButton[3].click()
    }
  }

  async countVisibleRows(){
    var hiddenElement = 0
    this.rows =  await this.driver.findElements(TABLE_ROWS)

    for(var i=0;i<this.rows.length;i++){
      try{
         const isVisible = await this.rows[i].isDisplayed()
      }catch{
        hiddenElement++
      } 
    }
   
    return this.rows.length - hiddenElement 
  }
  


  async successMessagePresent() {
    try {
       return await this.driver.findElement(SUCCESS_MESSAGE).isDisplayed()
    }
    catch{
      return true
    }
   
  }
}

module.exports = TreeGrid