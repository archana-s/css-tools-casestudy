const fs = require('fs')
const analyzer = require('analyze-css');

/* Include path to your CSS file here */
const css = fs.readFileSync('./styles.css', 'utf8')

new analyzer(css, function(err, results) {
  console.error(err);
  console.log(results.offenders.importants);
});
