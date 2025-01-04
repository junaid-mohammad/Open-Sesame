# Secrets Express Project

This repository contains the source code for **Secrets**, a simple login app where users can input a password to access hidden secrets. The project is built using **Node.js**, **Express**, and custom middleware to handle password validation.

---

## 🖥️ Live Website

You can access the live version of the Secrets app here:  
👉 **[Secrets App](https://secrets-app-hra6bng4agdvbte0.canadacentral-01.azurewebsites.net/)**

Feel free to explore it and try logging in with the password: **ILoveProgramming**.

---

## 🎯 Purpose

The purpose of this project was to strengthen my knowledge of **Node.js**, **Express**, **middleware**, as well as hosting the app using **Microsoft Azure** through a practical, hands-on project. I aimed to:

- Create a backend server using Node.js and Express.
- Implement custom middleware to validate user input.
- Practice managing request/response cycles and serving static files.
- Gain experience deploying web apps on **Microsoft Azure**.

Additionally, this project provided an opportunity to practice creating user-friendly interfaces with **HTML** and **CSS**.

---

## 🚀 Deployment on Azure

The Secrets Login App is deployed on **Microsoft Azure** using **App Service**. Below is a summary of the steps taken to deploy the project:

1. **Created an Azure Organization**: Set up a project in **Azure DevOps**.
2. **Pushed the Code to Azure Repos**: Used the following commands to add Azure as a remote repository and push the code:
   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Secrets%20Express%20Project/_git/Secrets%20Express%20Project
   git push azure --all
   ```
3. **Configured App Service**:
   - Created a new **App Service** in Azure.
   - Linked the Azure Repo to the App Service for continuous deployment.
4. **Set Environment Variables**: Configured the app to use the correct port with:
   ```javascript
   const port = process.env.PORT || 3000;
   ```
5. **Restarted the Service**: Restarted the Azure App Service to finalize the deployment.

---

## 🛠️ Features

- **Login Page**: A simple form for users to input a password to access hidden secrets.
- **Password Validation**: A custom middleware function checks the password entered by users.
- **Access Control**: Users are redirected to a secrets page if they enter the correct password or shown an error page if they enter the wrong one.
- **Error Handling**: An error page provides feedback when the password is incorrect.
- **Responsive Design**: The UI is designed to work smoothly across devices.

---

## 💻 Technologies Used

- **Node.js**: Backend runtime environment for building server-side applications.
- **Express**: Framework for building web applications and APIs.
- **Body-Parser**: Middleware to parse incoming form data.
- **HTML/CSS**: Used to create and style the front-end pages.

---

## 🧩 What I Learned

- Setting up **Express routes** and handling **HTTP requests**.
- Creating **custom middleware** to validate user input.
- Using **body-parser** to handle form submissions.
- Deploying web applications on **Azure App Service**.
- Managing **environment variables** and **dynamic ports** for cloud deployment.

---

## 🤝 Contribution

If you have ideas to improve the Secrets app—such as enhancing the UI or adding more security features—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use as a learning resource or to build upon for their own projects.
