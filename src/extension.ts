import * as vscode from "vscode";
import { commands } from "./commands";

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        commands.gotoImplementationCommand,
        commands.gotoConfigCommand,
        commands.gotoTestCommand,
        commands.selectTargetCommand,
        commands.cycleCommand
    );
}

export function deactivate() {}
