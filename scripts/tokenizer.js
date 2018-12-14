const theo = require('theo');

theo.convert({
  transform: {
    type: 'web',
    file: '../design-tokens/button.yml'
  },
  format: {
    type: 'custom-properties.css'
  }
}).then(css => {
  console.log(css);
}).catch(error => console.log(`Tokenizer error: ${error}`));
