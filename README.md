# Project 12 | SportSee – Sports Analytics Dashboard (React + API)

![React](https://img.shields.io/badge/React-17.0.2-blue?logo=react&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-2.1.2-blue)
![Axios](https://img.shields.io/badge/Axios-0.21.4-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-blue?logo=javascript&logoColor=black)

SportSee is a sports analytics dashboard where users can visualize their daily activity, performance, and nutrition data.

This repository is organized in two parts:

- `back/` – Node/Express API (mocked backend already provided by OpenClassrooms)
- `front/` – React application (developed by me)

<img src="https://github.com/Claire-Lavigne/repo-images/blob/main/SportSee.JPG" width="80%">


## Project Goals

This project demonstrates the ability to:

- Interact with a **REST API** using **Axios**
- Develop advanced **data visualizations** with **Recharts**
- Ensure **data quality** (formatting, adapters, error handling)
- Produce clear **technical documentation** for a web application

## Stack

**Front-end**

- React
- Axios (API calls)
- Recharts (charts & graphs)
- JavaScript
- CSS

**Back-end**

- Node.js
- Express
- Mocked data served via REST API

## Prerequisites

- [NodeJS (**version 12.18**)](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/)

If you are working with several versions of NodeJS, you can install [nvm](https://github.com/nvm-sh/nvm) to easily manage your NodeJS versions.

## Installation

**Back End** *(This is the [Original Backend Repo](https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard))*

```
cd back
yarn
yarn dev
```
[View JSON data in browser](http://localhost:3000/user/12)

**Front End**

```
cd front
yarn
yarn start
```

Run the app on another port to [view it in browser](http://localhost:3001/user/12)

## Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}`  
Retrieves a user's main information (id, first name, last name, age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity`  
Retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions`  
Retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance`  
Retrieves a user's performance (energy, endurance, etc.).

**Available userId: 12 and 18**

*Examples of queries:*
- `http://localhost:3000/user/12/performance`
- `http://localhost:3000/user/18`
