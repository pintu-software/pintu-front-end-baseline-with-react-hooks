# Pintu Front End Baseline

The scaffolding for this project has been modified from Max Stoiber [react-boilerplate v4.0.0](https://github.com/react-boilerplate/react-boilerplate)

---

## Tips

1.  use `npm run generate` command to generate new component

## Intent

Development of the front end should be simple and safe. Modularity is key.

## Details

### Overall Directory Structure

At a high level, the structure looks roughly like this:

```
webapp/
  |- app/
  |  |- api/
  |  |  |- <API config & APIs>
  |  |- components/
  |  |  |- <unconnected components>
  |  |- containers/
  |  |  |- App/
  |  |  |  |- <main component entry>
  |  |  |- Core/
  |  |  |  |- <BAMBU Core feature>
  |  |  |- Pages/
  |  |  |  |- <application pages>
  |  |  |- Providers/
  |  |  |  |- <providers components (theme, lang, etc)>
  |  |- images/
  |  |  |- <static files>
  |  |- schema/
  |  |  |- <shared validation schema>
  |  |- styles/
  |  |  |- <shared .styles.js and .styled.js files>
  |  |- tests/
  |  |- theme/
  |  |  |- <application wide theme setup>
  |  |- translations/
  |  |- utils/
  |  |- app.js
  |  |- configureStore.js
  |  |- global-styles.js
  |  |- i18n.js
  |  |- index.html
  |  |- reducers.js
  |- docs/
  |- internals/
  |  |  |- <config files>
  |- server/
  |- .env-cmdrc
  |- .eslintrc
  |- .nvmrc
  |- .prettierrc
  |- .stylelintrc
  |- .travis.yml
  |- .appveyor.yml
  |- package.json
```

## Boilerplate Documentation

- [**The Hitchhikers Guide to `react-boilerplate`**](docs/general/introduction.md): An introduction for newcomers to this boilerplate.
- [Overview](docs/general): A short overview of the included tools
- [**Commands**](docs/general/commands.md): Getting the most out of this boilerplate
- [Testing](docs/testing): How to work with the built-in test harness
- [Styling](docs/css): How to work with the CSS tooling
- [Your app](docs/js): Supercharging your app with Routing, Redux, simple
  asynchronicity helpers, etc.
- [**Troubleshooting**](docs/general/gotchas.md): Solutions to common problems faced by developers.
