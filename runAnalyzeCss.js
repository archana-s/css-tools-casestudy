const fs = require('fs')
const analyzer = require('analyze-css');

/* Include path to the CSS file you want to run analyze css on */
const css = fs.readFileSync(<PATH_TO_YOUR_CSS_FILE>, 'utf8')

new analyzer(css, function(err, results) {
  console.error(err);
  console.log(results.offenders.importants);
});
