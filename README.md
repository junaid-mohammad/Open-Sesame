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

## 🚀 Deployment & Workflow

The **Secrets Express Project** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

The **Secrets Express Project** app is hosted on **Microsoft Azure App Service** with the code managed across **GitHub** and **Azure DevOps**.

### 🛠 Deployment Setup (Steps We Took)

1. **Created Azure App Service**

   - Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Secrets-Express-Project`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   - Created a project called _Secrets Express Project_ in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   - Used the following to connect local code to Azure DevOps:
     ```bash
     git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Secrets%20Express%20Project/_git/Secrets%20Express%20Project
     ```

5. **Push to Both Remotes**

   - Pushed the same codebase to both GitHub (`origin`) and Azure DevOps (`azure`):
     ```bash
     git push origin main
     git push azure main
     ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - In the App Service Deployment Center, linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   - Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port Configuration**
   - No custom environment variables required since the app already supports:
     ```javascript
     const port = process.env.PORT || 3000;
     ```

---

### 🔥 Deployment Workflow (Current)

Whenever you update code:

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Pushes to GitHub
git push azure main    # Pushes to Azure DevOps and triggers deployment

```

---

## 🤝 Contribution

If you have ideas to improve the Secrets app—such as enhancing the UI or adding more security features—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use as a learning resource or to build upon for their own projects.

```

```
