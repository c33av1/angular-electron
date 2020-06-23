# AngularElectron

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Get started with electron in angular app

1. Install `electron` as dev dependency
   `npm install electron --save-dev`

2. In `index.html`, update base tag to `<base href="./" />` (with a ".")

3. In `package.json`, add following:

- "main": "main.js",
- In scripts,
  "electron": "electron .",
  "electron-build": "ng build --prod && electron ."
  This will first run the angular build with head of time compilation and then run electron directly after that.

4. In command line, run `npm run electron-build`

5. This will run the app in an Electron window

6. To build the app further, execute the command to install below package:
   `npm install angular-svg-round-progressbar --save`

7. Install a theme `npm install bulma --save`

8. To package and use in native desktop applications,
   `npm install electron-packager -g`
   `npm install electron-packager -D`

9. Build for specific platforms
   Windows `electron-packager . --platform=win32`
   Mac `electron-packager . --platform=darwin`
