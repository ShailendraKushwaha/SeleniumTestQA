const {Builder} = require("selenium-webdriver")
const path = require("path")
const assert = require("assert")
const ComplexGrid = require("../Pages/ComplexGrid")


describe("React Redux Complex Grid check",function(){

	this.timeout(30000)
	let driver 
	let complexPage 

	before(async function(){
      driver = await new Builder().forBrowser("firefox").build()
      complexPage = new ComplexGrid(driver)
      await complexPage.loadURL()
       
	})

	// after(async function(){
	// 	await driver.quit()
	// })

	it("1.Clicking Checkbox ",async function(){
	    complexPage.clickOnCheckBox()
	})

	it("2.Clicking on Popup Menu",async function(){
		complexPage.clickOnTableActions()
		complexPage.clickOnNameOnTableActions()  
	})
})