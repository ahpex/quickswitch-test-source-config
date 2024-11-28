# QuickSwitch: Test-Source-Config

<p align="center">
  <img src="./assets/quickswitch-logo-rounded.png" alt="quickswitch-logo">
</p>

## Overview

The QuickSwitch: Test-Source-Config extension for Visual Studio Code allows you to quickly switch between implementation, test, and configuration files in your project. This extension is designed to streamline your workflow by providing easy navigation between related files.

## Features

- Switch between Config, Implementation, and Test files using dedicated commands
- Use the switchTarget command to select the target file type
- Cycle through Implementation, Config, and Test files with a single command

## Commands

### 1. Switch between Config, Implementation, and Test files

You can use the following commands to switch between related files:

- **Go to Implementation**: QuickSwitch: Go to implementation
- **Go to Test: QuickSwitch**: Go to test
- **Go to Config: QuickSwitch**: Go to config

These commands can be accessed via the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).

### 2. Use the switchTarget command

The switchTarget command allows you to select the target file type from a quick pick menu:

- **Switch Target**: QuickSwitch: Select target...

This command can be accessed via the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac).

### 3. Cycle through Implementation, Config, and Test files

The cycleTarget command allows you to cycle through Implementation, Config, and Test files with a single command:

- **Cycle Target** : QuickSwitch: Cycle...

This command is best used with a shortcut for quick access. You can set up a custom keybinding in your keybindings.json file.

## Naming Convention

For the extension to work correctly, the following naming conventions must be applied to your files:

- Implementation files: `src/*.ts`
- Test files: `test/*.spec.ts`
- Config files: `res/*Config.ts`
- Config test files: `test/res/*Config.spec.ts`

## Installation

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing Ctrl+Shift+X.
3. Search for QuickSwitch: Test-Source-Config.
4. Click the Install button.

## Usage

1. Open a TypeScript file in your project.
2. Use the Command Palette (Ctrl+Shift+P or Cmd+Shift+P on Mac) to access the QuickSwitch commands.
3. Select the desired command to switch between related files.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue on the GitHub repository.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


