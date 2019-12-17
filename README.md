# MeanCourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Data Management 

The follwoing functions are used to manipulate array's and data. <br>
array.concat(array2) : Adds 2 arrays together & puts array2 last. <br>

## Angular testing

How to use
- `ng test` : Runs all test suites

Find <br>
Mean-stack-app --> src --> app --> app.component.spec.ts

Info
- Karma.config.js is the configuration file for running automative tests in our angular app. 
- test.ts is our test file which is created for us by default 
- app.component.spec.ts file is our first acutal testfile. 
 
Description
- "Descripe" is the first keyword which describes our test suite. 
- "It" is the keyword for the start of each test. 
- "expect(component).toBe(something) is how we expect the test to go. (behavior)
- You can create "stub" data to illustrate how the data should look like from backend.

Functions <br>
.toBeTruthy() : Means something == true <br>
.toContain('something) : will check for substring or element of an array. <br>
.toBe('something') : Gives you an exact match. <br>
.toBeGreatherThan(2) : Self expained <br>
de.query(by.css('h1'))).toBe('alert button') : Checks the element in the dom (HTML)  <br>

## Download and convert files

Converting from JSON to CSV function can be found here.
<br>
https://medium.com/mycoding/export-json-to-csv-file-in-angular-d1b674ec79ed 

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
