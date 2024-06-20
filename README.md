# Delivra 🐧 Workflow 

## Overview
Delivra 🐧 is a client-server application designed to automate workflows involving email and SMS notifications. The client is built with React and Vite, while the server is an Express application.

<br>

## Technologies Used:

<p align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" alt="Redux" />
  <img src="https://img.shields.io/badge/Ant--Design-0170FE?style=for-the-badge&logo=antdesign&logoColor=white" alt="Ant Design" />
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/React--DnD-FF5733?style=for-the-badge&logo=react&logoColor=white" alt="React DnD" />
  <img src="https://img.shields.io/badge/React--Flow-007ACC?style=for-the-badge&logo=reactflow&logoColor=white" alt="React Flow" />
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" alt="Sass" />
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="NodeJS" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express" />
  <img src="https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white" alt="Mongoose" />
  <img src="https://img.shields.io/badge/Nodemailer-007BFF?style=for-the-badge&logo=nodemailer&logoColor=white" alt="Nodemailer" />
  <img src="https://img.shields.io/badge/Twilio-F22F46?style=for-the-badge&logo=twilio&logoColor=white" alt="Twilio" />
</p>

<br>

## Demo Video:

https://github.com/KaziNizamul/Delivra/assets/19683035/0eb79509-b8d7-40c1-b568-1a8927da3965


<br>

## Features
- **Drag-and-Drop Workflow Builder**: Create and manage workflows using a visual interface.
- **Email and SMS Notifications**: Send automated emails and SMS based on workflow conditions.
- **Real-time Updates**: Utilize React and Redux for state management and real-time UI updates.
- **Custom Nodes**: Define custom nodes for various actions like sending emails, SMS, and evaluating conditions.

## Potential Uses
- **Marketing Automation**: Automate email and SMS campaigns.
- **Event Reminders**: Send reminders for upcoming events.
- **User Engagement**: Engage users with personalized notifications.

## Client

### Setup
1. Install dependencies:
```bash
bun install
```

2. Run the development server:
```bash
bun run dev
```

### Environment Variables
- `VITE_BE_URL`: URL of the backend server. Example: `http://localhost:5001`

### Key Dependencies
- `react`, `react-dom`
- `@reduxjs/toolkit`, `react-redux`
- `@mui/material`, `antd`, `@emotion/react`
- `axios`

### Project Structure
- **`src/main.jsx`**: Entry point of the React application.
- **`src/App.jsx`**: Main App component.
- **`src/store`**: Redux store configuration.
- **`src/components`**: Contains all React components.
- **`src/index.css`**: Global CSS styles.

## Server

### Setup
1. Install dependencies:

```bash
npm install
```
2. Run the server:

```bash
npm start
```

### Environment Variables
Create a `.env` file in the root of the server directory with the following variables:
- `PORT`
- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN`
- `TWILIO_PHONE_NUMBER`
- `EMAIL_USER`
- `EMAIL_PASS`
- `CLIENT_PHONE_NUMBER`
- `RECIPIENT_EMAIL`

### Key Dependencies
- `express`
- `mongoose`
- `cors`
- `body-parser`
- `dotenv`

### Project Structure
- **`server.js`**: Entry point of the Express application.
- **`routes`**: Contains route definitions.
- **`controllers`**: Contains request handlers.
- **`models`**: Contains Mongoose models.
- **`workflow.js`**: Workflow logic.

## Development Tools
- **ESLint**: For enforcing JavaScript coding standards.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.

## Credits:
All rights reserved for https://www.rdbrck.com/delivra and https://www.delivra.com
