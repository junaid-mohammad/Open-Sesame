# Open Sesame 🔑

[![Azure DevOps](https://img.shields.io/badge/Deployed%20via-Azure%20DevOps-blue)](https://dev.azure.com/Junaid-Arif/Open%20Sesame)
[![Azure App Service](https://img.shields.io/badge/Hosted%20on-Azure%20App%20Service-brightgreen)](https://open-sesame-fngub6bjh3a3hebg.canadacentral-01.azurewebsites.net/)

This repository contains the source code for **Open Sesame**, a simple login app where users can input a password to access hidden secrets. The project is built using **Node.js**, **Express**, and custom middleware to handle password validation.

---

## 🖥️ Live Website

You can access the live version of the app here:  
👉 **[Open Sesame](https://open-sesame-fngub6bjh3a3hebg.canadacentral-01.azurewebsites.net/)**

Feel free to explore it and try logging in with the password: **ILoveProgramming**.

---

## 🎯 Purpose

The purpose of this project was to strengthen my knowledge of **Node.js**, **Express**, **middleware**, and web hosting using **Microsoft Azure** through a practical, hands-on project. I aimed to:

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
- **Responsive Design**: The UI works smoothly across devices.

---

## 💻 Technologies Used

- **Node.js** — Backend runtime environment.
- **Express** — Web framework.
- **Body-Parser** — Middleware to parse incoming form data.
- **HTML/CSS** — Front-end structure and styling.
- **Azure App Service** — Hosting platform.
- **Azure DevOps** — CI/CD and code management.
- **GitHub** — Source control.

---

## 🧩 What I Learned

- Setting up **Express routes** and handling **HTTP requests**.
- Creating **custom middleware** for validating user input.
- Using **body-parser** to handle form submissions.
- Deploying web applications on **Azure App Service**.
- Managing **environment variables** and supporting **dynamic ports** for cloud deployment.

---

## 🚀 Deployment & Workflow

The **Open Sesame** app is hosted on **Microsoft Azure App Service** and deployed using **Azure DevOps**, with code managed on **GitHub**.

### 🛠 Deployment Setup

1. **Created Azure App Service**

   - Set up a new App Service instance through the Azure portal.

2. **Created GitHub Repo**

   - Initialized a new GitHub repository (`Open-Sesame`) and pushed all project files to it.

3. **Created Azure DevOps Project**

   - Created a project called _Open Sesame_ in Azure DevOps.

4. **Added Azure DevOps as a Git Remote**

   ```bash
   git remote add azure https://Junaid-Arif@dev.azure.com/Junaid-Arif/Open%20Sesame/_git/Open%20Sesame
   ```

````

5. **Push to Both Remotes**

   ```bash
   git push origin main
   git push azure main
   ```

6. **Configured Azure App Service to Pull from Azure DevOps Repo**

   - Linked the Azure DevOps repo for Continuous Deployment (CI/CD).

7. **Deployment Trigger Testing**

   - Confirmed that pushing to Azure DevOps automatically triggers a deployment to Azure App Service.

8. **Port Configuration**

   ```javascript
   const port = process.env.PORT || 3000;
   ```

---

### 🔥 Deployment Workflow (Current)

```bash
git add .
git commit -m "Your commit message"
git push origin main   # Push to GitHub
git push azure main    # Push to Azure DevOps and deploy
```

---

## 🤝 Contribution

If you have ideas to improve Open Sesame—such as enhancing the UI or adding new features—feel free to fork the repository and submit a pull request. Contributions are always welcome!

---

## 📄 License

This project is open-source and available for anyone to use as a learning resource or to build upon for their own projects.
````
