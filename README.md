# Fix vscode Titlebar Zoom

From v1.72, vscode's titlebar zoom can't be less than 0

This script is used to hack vscode's code to force enable titlebar zoom. It also fix checksum.


> 
> 1.67.2 (expected):
> 
> ![expected](https://user-images.githubusercontent.com/75289510/173312206-1d6d947f-65a1-4d74-915a-b6b4a38f30c3.gif)
> 
> 
> 
> 1.68 & 1.69-insider (unexpected):
> 
> ![unexpected](https://user-images.githubusercontent.com/75289510/173312292-e4817b12-d3ea-4fc4-b079-95d86043b711.gif)

## Usage

1. modify `vscodeRootPath` in `fix-vscode-titlebarzoom.ts` to your vscode's install dir
    * by default, `~/AppData/Local/Programs/Microsoft VS Code` is used
2. execute `fix-vscode-titlebarzoom.ts`, I recommend using ~~tsx~~ [bun](https://bun.sh) to execute it.
   *  the `start.bat` use bun to execute the script, install bun before run it

* This script just do search and replace, so you can do it yourself in your favorite language.

## Note

Start from 1.86, vscode use `sha256` to calc checksum instead of `md5`. So if you are using old verions, search and edit the keyword in `fix-checksum.ts`

## Credit

Fix checksum logic is copied from
[Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums)
