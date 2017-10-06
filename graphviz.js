const shell = require("shelljs")

module.exports = {
  convert: (dotFile, format, outputFile) => {
    console.log(`Dotfile:${dotFile} Format:${format} outputFile:${outputFile}`)
    if (shell.exec(`dot -T${format} ${dotFile} -o ${outputFile}.${format}`).code !== 0) {
      console.log("Conversion of dot file failed.")
      shell.exit(1)
    } else {
      console.log("Conversion successful")
    }
  }
}
