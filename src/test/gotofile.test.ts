import * as assert from "assert";

import * as vscode from "vscode";
import { gotoConfig, gotoImplementation, gotoTest } from "../gotofile";

suite("GotoFile Test Suite", () => {
    suite("Return the same uri if no mapping is found", () => {
        test("From impl to impl", () => {
            const uri = vscode.Uri.file("src/Calc.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/src/Calc.ts");
        });

        test("From test to test", () => {
            const uri = vscode.Uri.file("test/Calc.spec.ts");
            const newUri = gotoTest(uri);
            assert.strictEqual(newUri.path, "/test/Calc.spec.ts");
        });

        test("From config to config", () => {
            const uri = vscode.Uri.file("res/CalcConfig.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/res/CalcConfig.ts");
        });
    });

    suite("Files are in root folder", () => {
        test("From config to impl", () => {
            const uri = vscode.Uri.file("res/CalcConfig.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/src/Calc.ts");
        });

        test("From config to test", () => {
            const uri = vscode.Uri.file("res/CalcConfig.ts");
            const newUri = gotoTest(uri);
            assert.strictEqual(newUri.path, "/test/res/CalcConfig.spec.ts");
        });

        test("From impl to config", () => {
            const uri = vscode.Uri.file("src/Calc.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/res/CalcConfig.ts");
        });

        test("From impl to test", () => {
            const uri = vscode.Uri.file("src/Calc.ts");
            const newUri = gotoTest(uri);
            assert.strictEqual(newUri.path, "/test/Calc.spec.ts");
        });

        test("From test to impl", () => {
            const uri = vscode.Uri.file("test/Calc.spec.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/src/Calc.ts");
        });

        test("From test to config", () => {
            const uri = vscode.Uri.file("test/Calc.spec.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/res/CalcConfig.ts");
        });

        test("From configtest to config", () => {
            const uri = vscode.Uri.file("test/res/CalcConfig.spec.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/res/CalcConfig.ts");
        });

        test("From configtest to impl", () => {
            const uri = vscode.Uri.file("test/res/CalcConfig.spec.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/res/CalcConfig.ts");
        });
    });

    suite("Files are in nested folders with same name", () => {
        test("From config to impl", () => {
            const uri = vscode.Uri.file("res/res/CalcConfig.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/res/src/Calc.ts");
        });

        test("From config to test", () => {
            const uri = vscode.Uri.file("res/res/CalcConfig.ts");
            const newUri = gotoTest(uri);
            assert.strictEqual(newUri.path, "/res/test/res/CalcConfig.spec.ts");
        });

        test("From impl to config", () => {
            const uri = vscode.Uri.file("src/src/Calc.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/src/res/CalcConfig.ts");
        });

        test("From impl to test", () => {
            const uri = vscode.Uri.file("src/src/Calc.ts");
            const newUri = gotoTest(uri);
            assert.strictEqual(newUri.path, "/src/test/Calc.spec.ts");
        });

        test("From test to impl", () => {
            const uri = vscode.Uri.file("test/test/Calc.spec.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/test/src/Calc.ts");
        });

        test("From test to config", () => {
            const uri = vscode.Uri.file("test/test/Calc.spec.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/test/res/CalcConfig.ts");
        });

        test("From configtest to config", () => {
            const uri = vscode.Uri.file("test/res/test/res/CalcConfig.spec.ts");
            const newUri = gotoConfig(uri);
            assert.strictEqual(newUri.path, "/test/res/res/CalcConfig.ts");
        });

        test("From configtest to impl", () => {
            const uri = vscode.Uri.file("test/res/test/res/CalcConfig.spec.ts");
            const newUri = gotoImplementation(uri);
            assert.strictEqual(newUri.path, "/test/res/res/CalcConfig.ts");
        });
    });
});
