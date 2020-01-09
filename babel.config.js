module.exports = function (api) {
    if (api.env("test")) {
        return {
            presets: [
                ["@babel/env", { targets: { node: 'current' } }],
                "@babel/typescript"
            ],
            plugins: [
                "@babel/proposal-class-properties",
                "@babel/proposal-object-rest-spread"
            ]
        }
    }

    return {
        presets: [
            ["@babel/env", { modules: false }],
            "@babel/typescript"
        ],
        plugins: [
            "@babel/proposal-class-properties",
            "@babel/proposal-object-rest-spread"
        ]
    };
}
