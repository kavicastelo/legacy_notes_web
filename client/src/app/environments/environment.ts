// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  baseUrl:"http://localhost:5000/api/v1/",
  firebaseConfig: {
    apiKey: "AIzaSyAB7ffHBhmSYkwRCMOSZdSkx805C8IRuGU",
    authDomain: "legacy-notes.firebaseapp.com",
    projectId: "legacy-notes",
    storageBucket: "legacy-notes.appspot.com",
    messagingSenderId: "936569344179",
    appId: "1:936569344179:web:095f7f25531fc72733e0c6",
    measurementId: "G-FTFSE852X7"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
