const fs = require('fs')
const colorguard = require('colorguard')

/* Include path to the CSS file you want to run colorguard on */
const css = fs.readFileSync(<PATH_TO_YOUR_CSS_FILE>, 'utf8')

colorguard.process(css, []).then(function(result) {
  // process results or integrate in linting or development workflow
})

