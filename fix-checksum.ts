/**
 * CREDIT: [Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums)
 */

import fs = require('fs')
import path = require('path')
import crypto = require('crypto')





export function fixChecksum(vscodeRootPath: string) {
    const outDirpath = path.join(vscodeRootPath, 'resources/app/out')
    // const appDirpath = 'C:/Program Files/Microsoft VS Code/resources/app'
    const productFilepath = path.join(vscodeRootPath, 'resources/app', 'product.json')
    // const productFilepath = path.join('./test/product.json')


    const product = JSON.parse(fs.readFileSync(productFilepath).toString())
    const origFile = `${productFilepath}.orig,${product.version}`
    let changed = false

    for (const [filePath, curChecksum] of Object.entries(product.checksums)) {
        const checksum = computeChecksum(path.join(outDirpath, ...filePath.split('/')))
        if (checksum !== curChecksum) {
            product.checksums[filePath] = checksum
            changed = true
        }
    }
    if (changed) {
        const json = JSON.stringify(product, null, '\t')
        try {
            if (!fs.existsSync(origFile)) {
                fs.renameSync(productFilepath, origFile)
            }
            fs.writeFileSync(productFilepath, json, { encoding: 'utf8' })
        } catch (err) {
            console.error(err)
        }
    }
}



function computeChecksum(filepath: fs.PathOrFileDescriptor) {
    var contents = fs.readFileSync(filepath)
    return crypto
        .createHash('sha256')
        .update(contents)
        .digest('base64')
        .replace(/=+$/, '')
}


// (function _test() {
//     fixChecksum('C:/Users/Fifv/AppData/Local/Programs/Microsoft VS Code')
// })()