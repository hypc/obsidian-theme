# Obsidian Theme

## Custom build

build with yarn:

```bash
foo@bar:~/obsidian-theme$ yarn install
foo@bar:~/obsidian-theme$ yarn build
```

or build with npm:

```bash
foo@bar:~/obsidian-theme$ npm install
foo@bar:~/obsidian-theme$ npm run build
```

then copy `dist/theme.css` to your vault:

```bash
foo@bar:~/obsidian-theme$ cp dist/theme.css ${your_vault_path}/.obsidian/snippets/theme.css
```

finally, enable the custom css snippet.

## References

* https://github.com/PKief/vscode-material-icon-theme

## Maintainers

[@hypc](https://github.com/hypc)

## License

[MIT](https://github.com/hypc/obsidian-theme/blob/master/LICENSE) © hypc
