/**
 * 1. 會報錯說corrupted,可以Don't show again
 * 2. 每次更新會失效,需要重新運行這個script
 * 3. 很有可能在某次更新后完全失效
 * 4. 請在admin下運行,否則權限不足會報錯
 */
/**
 * 請用Sync版本
 * 不然兩個promise同時改一個檔案,會出錯
 * 這就是之前執行的時候,有的時候成功,有的時候失敗,有的時候壞掉的原因
 */
import { readFileSync, writeFileSync } from "fs"
import { join } from "path"
import { fixChecksum } from "./fix-checksum"
import path from 'path'
import os from 'os'

function modifyFile(filePath: string, findPattern: string, replacePattern: string) {
    const fileContent = readFileSync(filePath).toString()
    // console.log(fileContent);
    const newFileContent = fileContent.replaceAll(findPattern, replacePattern)
    writeFileSync(filePath, newFileContent)
}
function appendFile(filePath: string, appendContent: string) {
    const fileContent = readFileSync(filePath).toString()
    // console.log(fileContent);
    const newFileContent = fileContent + appendContent
    writeFileSync(filePath, newFileContent)
}
/**
 * Notes:
 * search `35:30` in the js file to find which to modify
 * or search this\.preventZoom\?..\(..\(this.element\)\):1
 */

// const vscodeRootPath = 'D:/Program Files/Microsoft VS Code Insiders'
// const vscodeRootPath = 'C:/Program Files/Microsoft VS Code'
const vscodeRootPath = path.join(os.homedir(), '/AppData/Local/Programs/Microsoft VS Code')
/** */
/**
 * -Step 1-  modify css
 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.css'),
    'zoom:calc(1/var(--zoom-factor))',
    ''
)
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.css'),
    'zoom:var(--zoom-factor)',
    ''
)
appendFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.css'),
    ';#workbench.parts.titlebar {--zoom-factor: 1 !important};',
)
/* 1.82 need this since WCO is forced turned on */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.css'),
    '.monaco-workbench:not(.web):not(.mac) .part.titlebar .titlebar-container.counter-zoom .window-controls-container.primary{width:138px}',
    '',
)
/* 1.94 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.css'),
    '.monaco-workbench:not(.web):not(.mac) .part.titlebar .titlebar-container.counter-zoom .window-controls-container{width:138px}',
    '',
)

/**
 * -Step 2-  modify js
 */

/* 新版本又變了 ~1.73 */
// modifyFile(
// 	join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
// 	'"hidden"||(0,_.getZoomFactor)()<1?',
// 	'"hidden"?'
// )
// modifyFile(
// 	join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
// 	'this.useCounterZoom?(0,R.getZoomFactor)():1',
// 	'1'
// )
/* 1.74 */
// modifyFile(
// join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
// 'this.ub?(0,L.getZoomFactor)():1',
// '1'
// )
/* 1.75~ */
// modifyFile(
// 	join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
// 	'this.wb?(0,D.getZoomFactor)():1',
// 	'1'
// )
/* 1.77 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.wb?(0,L.getZoomFactor)():1',
    '1'
)
/* 1.78~ */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.xb?(0,t.getZoomFactor)():1',
    '1'
)
/* ? */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.xb?(0,L.getZoomFactor)():1',
    '1'
)
/* 1.80 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.xb?(0,L.$0M)():1',
    '1'
)
/* 1.81 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.xb?(0,L.$xN)():1',
    '1'
)
/* 1.82 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.xb?(0,I.$JN)():1',
    '1'
)
/* 1.83 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.Bb?(0,I.$7N)():1',
    '1'
)
/* 1.84 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.Bb?(0,I.$qO)():1',
    '1'
)
/* 1.85 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.Tb?(0,I.$UO)():1',
    '1'
)
/* 1.86 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,E.$pP)((0,a.getWindow)(this.element)):1',
    '1'
)
/* 1.87 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,E.$iQ)((0,l.getWindow)(this.element)):1',
    '1'
)
/* 1.88 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,E.$RQ)((0,c.getWindow)(this.element)):1',
    '1'
)
/* 1.89 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,E.$AR)((0,o.getWindow)(this.element)):1',
    '1'
)
/* 1.92 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,C.$gS)((0,h.getWindow)(this.element)):1',
    '1'
)
/* 1.93 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?(0,v.$KS)((0,h.getWindow)(this.element)):1',
    '1'
)
/* 1.94 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?EC(Le(this.element)):1',
    '1'
)
/* 1.96 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?$C(ke(this.element)):1',
    '1'
)
/* 1.97 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?Bw(xe(this.element)):1',
    '1'
)
/* 1.98 */
modifyFile(
    join(vscodeRootPath, 'resources/app/out/vs/workbench/workbench.desktop.main.js'),
    'this.preventZoom?Jw(Se(this.element)):1',
    '1'
)

/**
 * -Step 3-  fix checksum
 */

fixChecksum(vscodeRootPath)