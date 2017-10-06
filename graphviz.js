const shell = require("shelljs")

module.exports = {
  convert: (dotFile, format, outputFile) => {
    if (shell.exec(`dot -T${format} ${dotFile} -o ${outputFile}.${format}`).code !== 0) {
      console.log("Execution failed.")
      shell.exit(1)
    }
  }
}
