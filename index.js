const fs = require('fs')

const employmentContract = fs.readFileSync('markdown/employment_contract-de-DE.md').toString()
const imprint = fs.readFileSync('markdown/imprint-en-DE.md').toString()

module.exports = {
  employmentContract,
  imprint
}