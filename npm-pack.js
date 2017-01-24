module.exports = console.log(npmPack())

function npmPack() {
  const packageJSON = require('./package.json')
  const dependencies = []

  Object
    .keys(packageJSON.dependencies)
    .forEach(dependency => getMainFile(`./node_modules/${dependency}`))

  return dependencies

  function getMainFile(modulePath) {
    const packageJSON = require(`${modulePath}/package.json`)
    const mainFile = packageJSON.main

    Object
      .keys(packageJSON.dependencies)
      .forEach(dependency => {
        const pathToDependency = `./node_modules/${dependency}`
        getMainFile(pathToDependency)
        getDistFiles(pathToDependency)
      })

    getDistFiles(modulePath)
    if (mainFile && dependencies.indexOf(`${modulePath}/${mainFile}`) === -1) {
      dependencies.push(`${modulePath}/${mainFile}`)
    }
  }

  function getDistFiles(modulePath) {
    const fs = require('fs')
    const dist = `${modulePath}/dist`
    const distExists = fs.existsSync(dist)

    if (distExists) {
      const distFiles = fs.readdirSync(dist)

      distFiles.forEach(distFile => dependencies.push(`${dist}/${distFile}`))
    }
  }
}
