## Motivation

From v1.72, vscode's titlebar zoom can't be less than 0

This script is used to hack vscode's code to force enable titlebar zoom. It also fix checksum.

## Usage

1. modify `vscodeRootPath` in `fix-vscode-titlebarzoom.ts` to your vscode's install dir
2. execute `fix-vscode-titlebarzoom.ts`, I recommend using ~~tsx~~ [bun](https://bun.sh) to execute it.

* This script just do search and replace, so you can do it yourself in your favorite language.

## Note

Start from 1.86, vscode use `sha256` to calc checksum instead of `md5`. So if you are using old verions, search and edit the keyword in `fix-checksum.ts`

## Credit

Fix checksum logic is copied from
[Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums)
