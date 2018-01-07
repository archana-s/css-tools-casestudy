const fs = require('fs')
const colorguard = require('colorguard')
const css = fs.readFileSync('./styles.css', 'utf8')

colorguard.process(css, []).then(function(result) {
  // process results or integrate in linting or development workflow
})

