var fs = require('fs')
var postcss = require('postcss')
var cssstats = require('cssstats')
 
var css = fs.readFileSync('./styles.css', 'utf8')
postcss()
  .use(cssstats())
  .process(css)
  .then(function (result) {
    result.messages.forEach(function (message) {
      console.log(message)
      console.log('Displaying all font size');
      console.log('------------------------')
      console.log(message.stats.declarations.getAllFontSizes())
      console.log('Displaying Selectors and their specificity')
      console.log('------------------------------------------')
      console.log(message.stats.selectors.getSpecificityValues())
    })
  })
