module.exports = {
    root: true,
    // This tells ESLint to load the config from the package `eslint-config-riipandi`
    extends: ['riipandi'],
    settings: {
        next: {
            rootDir: ['apps/*/'],
        },
    },
}
