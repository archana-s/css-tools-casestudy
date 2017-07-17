var fs = require('fs')
var colorguard = require('colorguard')
var css = fs.readFileSync('./styles.css', 'utf8')

colorguard.process(css, []).then(function(result) {
  // console.log(result)
})

