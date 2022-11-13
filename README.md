# Interview Scheduler

## Project Description

Interview Scheduler is a SPA (Single Page Application) for tracking students interviews built by utilizing React built-in and custom hooks to allow users to add, edit and delete appointments in real time. Data is persisted by the API server using a PostgreSQL database. The client application communicates with an API server over HTTP, using the JSON format. In terms of testing, the project follows best practices of TDD (Test Driven Development), where individual Components are tested in isolation as well as End-to-End testing is performed.

## Technical Specifications

* React
* Webpack, Babel
* Axios, WebSockets
* StorBook, Jest, Testing-Library, Cypress
* Database PostgreSQL

## Final product
!["Scheduler-gif"](https://github.com/wesleyweitianqi/scheduler/blob/master/docs/Scheduler.gif?raw=true)
!["Appointment-Day select in hover mode"](https://github.com/wesleyweitianqi/scheduler/blob/master/docs/appointment%20day%20select%20in%20hover.png?raw=true)
!["Appointment delete and edit"](https://github.com/wesleyweitianqi/scheduler/blob/master/docs/appointment%20delete%20and%20edit.png?raw=true)
!["Appointment book reminder"](https://github.com/wesleyweitianqi/scheduler/blob/master/docs/bookinterview%20reminder.png?raw=true)

## Dependencies

  -  "axios": "^0.27.2",
  -  "classnames": "^2.2.6",
  -  "cypress": "^10.6.0",
  -  "normalize.css": "^8.0.1",
  -  "react": "^16.9.0",
  -  "react-dom": "^16.9.0",
  -  "react-scripts": "3.4.4"

## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```
## Running Jest Test Framework

```sh
npm test
```
## Running Code Coverage

```
npm test -- --coverage --watchAll=false 
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```

