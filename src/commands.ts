import * as vscode from "vscode";
import { gotoImplementation, gotoConfig, gotoTest, cycle } from "./gotofile";

const labelImplementation = "Implementation";
const labelTest = "Test";
const labelConfig = "Config";

export const commands = {
    gotoImplementationCommand: vscode.commands.registerCommand(
        "quickswitch-test-source-config.gotoImplementation",
        () => {
            const activeEditor = vscode.window.activeTextEditor;
            if (activeEditor) {
                const uri = activeEditor.document.uri;
                const newUri = gotoImplementation(uri);
                vscode.window.showTextDocument(newUri);
            }
        }
    ),
    gotoConfigCommand: vscode.commands.registerCommand(
        "quickswitch-test-source-config.gotoConfig",
        () => {
            const activeEditor = vscode.window.activeTextEditor;
            if (activeEditor) {
                const uri = activeEditor.document.uri;
                const newUri = gotoConfig(uri);
                vscode.window.showTextDocument(newUri);
            }
        }
    ),
    gotoTestCommand: vscode.commands.registerCommand(
        "quickswitch-test-source-config.gotoTest",
        () => {
            const activeEditor = vscode.window.activeTextEditor;
            if (activeEditor) {
                const uri = activeEditor.document.uri;
                const newUri = gotoTest(uri);
                vscode.window.showTextDocument(newUri);
            }
        }
    ),
    selectTargetCommand: vscode.commands.registerCommand(
        "quickswitch-test-source-config.selectTarget",
        async () => {
            const options: vscode.QuickPickItem[] = [
                {
                    label: labelImplementation,
                    description: "Go to the implementation",
                },
                { label: labelTest, description: "Go to test" },
                { label: labelConfig, description: "Go to config" },
            ];

            const selection = await vscode.window.showQuickPick(options, {
                placeHolder: "Select file to switch to",
            });

            if (selection) {
                if (selection.label === labelImplementation) {
                    vscode.commands.executeCommand(
                        "quickswitch-test-source-config.gotoImplementation"
                    );
                } else if (selection.label === labelTest) {
                    vscode.commands.executeCommand(
                        "quickswitch-test-source-config.gotoTest"
                    );
                } else if (selection.label === labelConfig) {
                    vscode.commands.executeCommand(
                        "quickswitch-test-source-config.gotoConfig"
                    );
                }
            }
        }
    ),
    cycleCommand: vscode.commands.registerCommand(
        "quickswitch-test-source-config.cycleTarget",
        () => {
            const activeEditor = vscode.window.activeTextEditor;
            if (activeEditor) {
                const uri = activeEditor.document.uri;
                const newUri = cycle(uri);
                vscode.window.showTextDocument(newUri);
            }
        }
    ),
};
