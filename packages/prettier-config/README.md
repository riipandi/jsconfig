# @riipandi/prettier-config

This repository contains nothing but a few essential configuration for Prettier formatter.

Inspired from [@egoist/prettier-config](https://github.com/egoist/prettier-config)

## Install

```sh
# Install with pnpm
pnpm add -D @riipandi/prettier-config

# Install with npm
npm install --save-dev @riipandi/prettier-config

# Install with yarn
yarn add -D @riipandi/prettier-config
```

## Usage

In `package.json`:

```json
{
  "prettier": "@riipandi/prettier-config"
}
```

### EditorConfig

This is optional, but if your editor using `.editorconfig` these settings are recomended:

```ini
# editorconfig.org
root = true

[*]
charset = utf-8
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
indent_style = space
indent_size = 2
max_line_length = 100

[*.{prettierrc,json,jsonc}]
indent_size = 4
max_line_length = off
trim_trailing_whitespace = false

[*.txt]
insert_final_newline = false
trim_trailing_whitespace = false
max_line_length = off

[{Makefile,**.mk}]
indent_style = tab
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
