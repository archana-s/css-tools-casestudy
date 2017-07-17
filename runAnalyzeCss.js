var fs = require('fs')
var analyzer = require('analyze-css');
var css = fs.readFileSync('./styles.css', 'utf8')

new analyzer(css, function(err, results) {
  console.error(err);
  console.log(results.offenders.importants); // example? see below
});
