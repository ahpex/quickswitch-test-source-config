import { Uri } from "vscode";

const implementationFolder = "src";
const testFolder = "test";
const configFolder = "res";
const testConfigFolder = "test/res";

const suffix = ".ts";
const specSuffix = ".spec" + suffix;
const configSuffix = "Config" + suffix;
const configSpecSuffix = "Config" + specSuffix;

/**
 * Returns the URI of the implementation file of the given URI.
 *
 * @param uri URI of the file to switch from.
 * @returns URI of the implementation file.
 */
export function gotoImplementation(uri: Uri): Uri {
    if (uri.path.endsWith(configSpecSuffix)) {
        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(`${testConfigFolder}(?!.*${testConfigFolder})`),
                    configFolder
                )
                .replace(specSuffix, suffix),
        });
    }

    if (uri.path.endsWith(configSuffix)) {
        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(`${configFolder}(?!.*${configFolder})`),
                    implementationFolder
                )
                .replace(configSuffix, suffix),
        });
    }

    if (!uri.path.endsWith(configSpecSuffix) && uri.path.endsWith(specSuffix)) {
        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(`${testFolder}(?!.*${testFolder})`),
                    implementationFolder
                )
                .replace(specSuffix, suffix),
        });
    }

    return uri;
}

/**
 * Returns the URI of the test file of the given URI.
 *
 * @param uri URI of the file to switch from.
 * @returns URI of the test file.
 */
export function gotoTest(uri: Uri): Uri {
    if (uri.path.includes(configFolder)) {
        if (uri.path.includes(configSuffix)) {
            return uri.with({
                path: uri.path
                    .replace(
                        new RegExp(`${configFolder}(?!.*${configFolder})`),
                        testConfigFolder
                    )
                    .replace(suffix, specSuffix),
            });
        }

        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(`${configFolder}(?!.*${configFolder})`),
                    testFolder
                )
                .replace(specSuffix, configSpecSuffix),
        });
    }

    if (uri.path.includes(implementationFolder)) {
        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(
                        `${implementationFolder}(?!.*${implementationFolder})`
                    ),
                    testFolder
                )
                .replace(suffix, specSuffix),
        });
    }

    return uri;
}

/**
 * Returns the URI of the config file of the given URI.
 *
 * @param uri URI of the file to switch from.
 * @returns URI of the config file.
 */
export function gotoConfig(uri: Uri): Uri {
    if (uri.path.includes(testFolder)) {
        if (uri.path.includes(configSpecSuffix)) {
            return uri.with({
                path: uri.path
                    .replace(
                        new RegExp(
                            `${testConfigFolder}(?!.*${testConfigFolder})`
                        ),
                        configFolder
                    )
                    .replace(specSuffix, suffix),
            });
        }

        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(`${testFolder}(?!.*${testFolder})`),
                    configFolder
                )
                .replace(specSuffix, configSuffix),
        });
    }

    if (uri.path.includes(implementationFolder)) {
        return uri.with({
            path: uri.path
                .replace(
                    new RegExp(
                        `${implementationFolder}(?!.*${implementationFolder})`
                    ),
                    configFolder
                )
                .replace(suffix, configSuffix),
        });
    }

    return uri;
}

/**
 * Cylces between the implementation, test and config files.
 *
 * @param uri Uri of the file to switch from.
 * @returns Uri of the file to switch to.
 */
export function cycle(uri: Uri): Uri {
    if (uri.path.endsWith(configSpecSuffix)) {
        return gotoConfig(uri);
    }

    if (uri.path.endsWith(configSuffix)) {
        return gotoImplementation(uri);
    }

    if (uri.path.endsWith(specSuffix)) {
        const configUri = gotoConfig(uri);
        return gotoTest(configUri);
    }

    return gotoTest(uri);
}
