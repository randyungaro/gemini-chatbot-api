Gemini AI Chatbot
A simple and interactive web-based chatbot powered by Google's Gemini AI model. This project demonstrates how to build a basic full-stack application using Node.js (Express), a frontend with HTML, CSS, and JavaScript, and integrate with the Gemini API to generate conversational responses.

✨ Features
Real-time AI Responses: Get dynamic replies from the Gemini 1.5 Flash model.
Conversational Interface: A clean and user-friendly chat interface for sending messages and viewing responses.
Node.js Backend (Express): Handles API requests, integrates with Gemini, and serves static files.
Frontend (HTML, CSS, JS): A responsive and visually appealing chat UI.
Environment Variable Management: Securely handles API keys using dotenv.
🚀 Technologies Used
Backend:
Node.js: JavaScript runtime environment.
Express.js: Fast, unopinionated, minimalist web framework for Node.js.
@google/generative-ai: Official Google Generative AI SDK for Node.js.
dotenv: Loads environment variables from a .env file.
cors: Provides a Connect/Express middleware that can be used to enable CORS with various options.
Frontend:
HTML5
CSS3
JavaScript (ES6+)
📦 Installation & Setup
Follow these steps to get the project up and running on your local machine.

1. Clone the repository
Bash

git clone <your-repo-url>
cd gemini-chatbot-api # or whatever your project folder is named
2. Install dependencies
Navigate to the project root directory in your terminal and install the necessary Node.js packages:

Bash

npm install
3. Set up Environment Variables
Create a file named .env in the root of your project directory (the same level as package.json).

GEMINI_API_KEY=YOUR_YOUR_GOOGLE_GEMINI_API_KEY_HERE
How to get a Gemini API Key:

Go to the Google AI Studio website.
Log in with your Google account.
Create a new API key.
Copy the generated API key and paste it into your .env file as shown above.
4. Run the Backend Server
Start the Node.js Express server:

Bash

node index.js
or, if you have start script defined in package.json:

Bash

npm start
You should see a message in your console indicating that the server is running, for example: Gemini Chatbot running on http://localhost:3000.

5. Access the Chatbot
Open your web browser and navigate to:

http://localhost:3000
You should now see the Gemini AI Chatbot interface.

📁 Project Structure
gemini-chatbot-api/
├── .env                 # Environment variables (e.g., GEMINI_API_KEY)
├── index.js             # Node.js Express server with Gemini API integration
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Records exact dependency versions
└── public/
    ├── index.html       # Main HTML file for the chatbot UI
    ├── style.css        # CSS for styling the chatbot
    └── script.js        # JavaScript for frontend logic and API calls
📝 Usage
Type your message into the input field at the bottom of the chat interface.
Click the "Send" button or press Enter.
The chatbot will display a "Gemini is thinking..." message, then show the AI's response.
🤝 Contributing
Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to:

Fork the repository.
Create a new branch (git checkout -b feature/your-feature-name).
Make your changes.
Commit your changes (git commit -m 'feat: Add new feature').
Push to the branch (git push origin feature/your-feature-name).
Open a Pull Request.
📄 License
This project is licensed under the MIT License