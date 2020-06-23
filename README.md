<video width="320" height="240" controls>
  <source src="demo.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>

# AngularElectron

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
