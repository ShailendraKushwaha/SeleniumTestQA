const Page = require("./Page");

const CHECKBOX = { className: 'react-grid-checkbox' }
const ELLIPSIS = { className: 'react-grid-action-container'}
const POP_UP   = {className: 'react-grid-action-menu-container'}
const POP_UP_HEAD = {className: 'react-grid-action-menu-container'}
const POP_UP_CHECKBOX = { tagName: 'input' }

class ComplexGrid extends Page{

  constructor(driver) {
    super(driver)
  }

  async loadURL(){
  	 await this.load("https://react-redux-grid.herokuapp.com/Complex")
  }

  clickOnTableActions(){
  	this.click(ELLIPSIS)
  }

  clickOnNameOnTableActions(){
  	const elementUL = this.find(POP_UP_HEAD)
  	const checkBox  = this.find(POP_UP_CHECKBOX)
    console.log(checkBox.isSelected())
  	console.log(checkBox)
  	checkBox.click()
  }

  clickOnCheckBox(){
  	this.click(CHECKBOX)
  }

  checkAllCheckBoxes(){
  	const checkBoxes = this.findMultipleElements(CHECKBOX)

  	console.log("Check boxes found")
  	console.log(checkBoxes.length)
  }


}

module.exports = ComplexGrid