module.exports = {
    "plugins": ["plugins/markdown"],
    "recurseDepth": 10,
    "source": {
        "include": [
            "packages/ilib-istring/src",
            "packages/ilib-locale/src",
            "packages/ilib-address/src",
            "packages/ilib-assemble/src",
            "packages/ilib-env/src",
            "packages/tmxtool/src",
            "packages/ilib-yaml/src",
            "packages/ilib-es6/src",
            "packages/ilib-data-utils/src",
            "packages/ilib-localedata/src",
            "packages/ilib-tmx/src",
            "packages/message-accumulator/src",
            "packages/ilib-ctype/src",
            "packages/ilib-po/src",
            "packages/ilib-lint/src",
            "packages/ilib-loader/src",
            "packages/ilib-casemapper/src",
            "packages/ilib-common/src",
            "packages/ilib-tree-node/src",
            "packages/ilib-tools-common/src",
            "packages/ilib-xliff/src",
            "packages/ilib-lint-react/src",
            "packages/ilib-lint-common/src"
        ],
        "includePattern": "\\.js$",
        "excludePattern": "\\.test\\.js$"
    },
    "tags": {
        "allowUnknownTags": true,
        "dictionaries": ["jsdoc"]
    },
    "templates": {
        "cleverLinks": false,
        "monospaceLinks": false,
        "default": {
            "outputSourceFiles": true,
            "useLongnameInNav": true
        },
        "better-docs": {
            "name": "iLib Documentation"
        }
    },
    "opts": {
        "destination": "./docs",
        "recurse": true,
        "readme": "README.md",
        "template": "node_modules/docdash",
        "package": "package.json",
        "encoding": "utf8"
    }
} 