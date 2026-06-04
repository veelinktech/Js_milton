let demo = [10,'JavaScript', true, null, {}]

console.log(demo[1])

console.log("==========")

const Testingtools = [

    {lang:"JS", AutomationTool:"Cypress", year:2025},
    {lang:"Java", AutomationTool:"Selenium", year:2014},
    {lang:"JS", AutomationTool:"Playwright", year:2026},
    {lang:"Python",AutomationTool:"Playwright",year:2026}
]


console.log(Testingtools[1])
console.log(Testingtools[2].AutomationTool)

console.log("==============")

Testingtools.forEach((e) => {
    console.log(e.lang)
    console.log(e.AutomationTool)
    console.log(e.year)
})

console.log("=============")



