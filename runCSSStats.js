const fs = require('fs')
const postcss = require('postcss')
const cssstats = require('cssstats')
 
/* Include path to the CSS file you want to run cssstats on */
const css = fs.readFileSync(<PATH_TO_YOUR_CSS_FILE>, 'utf8')

postcss()
  .use(cssstats())
  .process(css)
  .then(function (result) {
    result.messages.forEach(function (message) {
      console.log(message)
      console.log('Displaying all font size')
      console.log('------------------------')
      console.log(message.stats.declarations.getAllFontSizes())
      console.log('Displaying Selectors and their specificity')
      console.log('------------------------------------------')
      console.log(message.stats.selectors.getSpecificityValues())
    })
  })
