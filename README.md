# Project 12 - Front-end Dashboard

This repo contains all the source code to run the micro API for the sports analytics dashboard SportSee.

## 1. Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, you can install [nvm](https://github.com/nvm-sh/nvm) to easily manage your NodeJS versions.

## 2. Lauch the project

### 2.1 Back End

This is the [Original Backend Repo](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard)

- `cd back`
- `yarn`
- `yarn dev`
- [View JSON in browser](http://localhost:3000/user/12)

### 2.2 Front End

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- `cd front`
- `yarn`
- `yarn start`
- Run the app on new port to [view it in browser](http://localhost:3001/user/12)

Other scripts :

- `yarn test`
- `yarn build`

## 3. Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

**Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.**

### 3.1 Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
