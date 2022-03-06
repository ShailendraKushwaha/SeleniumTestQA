const {Builder} = require("selenium-webdriver")
const path = require("path")
const assert = require("assert")
const TreeGridPage = require("../Pages/TreeGrid")


describe("TreeGrid Element Count Check",function(){

	this.timeout(30000)
	let driver 
	let treePage 

	beforeEach(async function(){
      driver = await new Builder().forBrowser("firefox").build()
      treePage = new TreeGridPage(driver)
      await treePage.load()
       
	})

	afterEach(async function(){
		await driver.quit()
	})

	it("1.Checking count of Tree Grid rows on page load",async function(){
		const rowsCount = await treePage.countRowsInGrid()
	     assert.equal(rowsCount,8,"RowCount is not 8 on startup")
		// assert( await treePage.countRowsInGrid(),"RowCount is not 8 on startup")
	})

	it("2.Checking count of Tree Grid rows after clicking first arrow button",async function(){
		await treePage.clickOnFirstArrow()
		const rowsCount = await treePage.countVisibleRows()
	    assert.equal(rowsCount,3,"RowCount is not three after click")
	})

	it("3.Checking count of Tree Grid rows after clicking first arrow button then secodn arrow button",async function(){
		await treePage.clickOnFirstArrow()
		await treePage.clickOnSecondArrow()
		const rowsCount = await treePage.countVisibleRows()
	    assert.equal(rowsCount,2,"RowCount is not 2 after second click")
	})

	// it("1.Checking count of Tree Grid rows on page load",async function(){
	// 	await treePage.authenticate("xyx","jjsjsj")
	// 	assert(await treePage.successMessagePresent(),"Not worked")
	// })
})