// Import necessary modules
import express from "express"; // Express framework for building web servers
import bodyParser from "body-parser"; // Middleware to parse request bodies
import { dirname } from "path"; // Path module to handle file paths
import { fileURLToPath } from "url"; // To get the current file path for ES modules

// Determine the directory name of the current file
const __dirname = dirname(fileURLToPath(import.meta.url));

// Create an instance of the Express application
const app = express();
// Port the server will run on
const port = process.env.PORT || 3000;

// Variables to store the password and its validity status
let password = "";
let correctPassword = false;

// Set up the express.static middleware to serve static files correctly
app.use(express.static("public"));

// Middleware to parse URL-encoded data from incoming requests
app.use(bodyParser.urlencoded({ extended: true }));

// Custom middleware to check the password from the request body
function checkPassword(req, res, next) {
    // Extract the password from the request body
    password = req.body["password"];
    // Debug
    // console.log("Password: ", password); // Log the entered password for debugging
    // console.log("Correct Password is ", correctPassword); // Log the current status of the password check

    // Compare the entered password with the correct one
    if (password === "ILoveProgramming") {
        correctPassword = true; // Set status to true if the password is correct
    } else {
        correctPassword = false; // Otherwise, set it to false
    }

    // Proceed to the next middleware or route handler
    next();
}

// Use the custom password-checking middleware for all routes
app.use(checkPassword);

// GET request handler for the root route ("/")
app.get("/", (req, res) => {
    // Send the index.html file as the response
    res.sendFile(__dirname + "/public/index.html");
});

// POST request handler for the "/check" route
app.post("/check", (req, res) => {
    // Debug
    // console.log("Correct Password down here is: ", correctPassword); // Log the password status

    // Check if the password is correct
    if (correctPassword) {
        // If correct, send the secret.html file as the response
        res.sendFile(__dirname + "/public/secret.html");
    } else {
        // If incorrect, reload the index.html file
        res.sendFile(__dirname + "/public/error.html");
    }
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server running on port ${port}.`); // Log a message when the server starts
});