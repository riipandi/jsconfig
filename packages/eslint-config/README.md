<br/>
<div align="center">
  <h1>Prettier Config</h1>
  <h3 align="center">My personal prettier configuration</h3>
  <a href="https://ripandis.com">Website</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://jurnalog.com">Blog</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://twitter.com/riipandi">Twitter</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.linkedin.com/in/aris-ripandi">LinkedIn</a>
  <span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
  <a href="https://www.youtube.com/@riipandi">Youtube</a>
</div>

---

This repository contains nothing but a few essential configuration for ESLint.
Inspired from [@antfu/eslint-config](https://github.com/antfu/eslint-config).

## Usage

### Install dependency

```sh
# Install with pnpm
pnpm add -D @riipandi/eslint-config

# Install with npm
npm install --save-dev @riipandi/eslint-config

# Install with yarn
yarn add -D @riipandi/eslint-config
```

### Config `.eslintrc`

```json
{
    "extends": "@riipandi"
}
```

### Add script for `package.json`

```json
{
    "scripts": {
        "lint": "eslint .",
        "lint:fix": "eslint . --fix"
    }
}
```

## Thanks to...

In general, I'd like to thank every single one who open-sources their source code for their effort to contribute
something to the open-source community. Your work means the world! 🌍 ❤️

## License

This project is open-sourced software licensed under the [MIT License][choosealicense].

Copyrights in this project are retained by their contributors.

See the [license file](./LICENSE) for more information.

[choosealicense]: https://choosealicense.com/licenses/mit/

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).
