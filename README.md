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

This repository contains nothing but a few essential configuration files for my Node.js project.

This project generated using Turborepo and uses [pnpm](https://pnpm.io) as a package manager.

## Versioning and Publishing packages

Package publishing has been configured using [Changesets](https://github.com/changesets/changesets) and
comes with automated npm releases setup in a [GitHub Action](https://github.com/changesets/action).
To get this working, you will need to create an `NPM_TOKEN` and `GITHUB_TOKEN` in your repository settings.
You should also install the [Changesets bot](https://github.com/apps/changeset-bot) on your GitHub repository as well.

For more information about this automation, refer to the official [changesets documentation](https://github.com/changesets/changesets/blob/main/docs/automating-changesets.md)

### npm

If you want to publish package to the public npm registry and make them publicly available, this is already setup.
To publish packages to a private npm organization scope, **remove** the following from each of the `package.json`

```diff
- "publishConfig": {
-  "access": "public"
- },
```

### Remote Caching

Turborepo can use a technique known as [Remote Caching](https://turbo.build/repo/docs/core-concepts/remote-caching) to share cache artifacts across machines, enabling you to share build caches with your team and CI/CD pipelines.

By default, Turborepo will cache locally. To enable Remote Caching you will need an account with Vercel. If you don't have an account you can [create one](https://vercel.com/signup), then enter the following commands:

```sh
cd configjs
pnpm dlx turbo login
```

## Thanks to...

In general, I'd like to thank every single one who open-sources their source code for their effort
to contribute something to the open-source community. Your work means the world! 🌍 ❤️

## License

This project is open-sourced software licensed under the [MIT License][choosealicense].

Copyrights in this project are retained by their contributors.

See the [license file](./LICENSE) for more information.

[choosealicense]: https://choosealicense.com/licenses/mit/

---

<sub>🤫 Psst! If you like my work you can support me via [GitHub sponsors](https://github.com/sponsors/riipandi).
