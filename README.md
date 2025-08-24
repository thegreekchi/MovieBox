# 🎬 FilmBox

FilmBox is a modern full-stack movie discovery webapp powered by [TMDB](https://www.themoviedb.org/) and [OpenAI](https://openai.com/), where you can search, explore, and get personalized recommendations based on your mood or context&mdash;all in one place.

---

## 📌 Features

- 🔍 **Movie Search** — Find movies instantly using TMDB’s vast database.  
- 🎥 **Trailers & Details** — View trailers, ratings, and detailed descriptions.  
- ⭐ **Favorites** — Save your must-watch movies.  
- 🤖 **AI Chat Assistant** — Get personalized movie suggestions that suit a desired mood, context, or scene just by chatting with the AI assistant.  
- 📱 **Responsive Design** — Works seamlessly across desktop and mobile.  

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite + TailwindCSS  
- **Backend/DB:** Firebase Authentication + Firestore  
- **AI:** OpenAI GPT-powered movie chat  
- **Data Source:** TMDB API  
- **Hosting/Serverless:** Vercel  

---

## 🚀 Getting Started

Follow these steps to run filmBox locally:

## Prerequisites

- Node.js (v18+)  
- npm or yarn  
- [TMDB API key](https://developer.themoviedb.org/)  
- [Firebase project](https://console.firebase.google.com/) (for auth, Firestore & Firebase Admin SDK credentials)  
- [OpenAI API key](https://platform.openai.com/api-keys) (for AI chat)
- [Vercel Account](https://vercel.com/) (for serverless function deployment)

## Installation

- Clone the repo  

        git clone https://github.com/yourusername/filmBox.git

- Navigate into the project  

        cd filmBox

- Install dependencies  

        npm install

## Local Environment Variables

Create a `.env` file in the project root folder and add the following credentials:

    VITE_TMDB_API_KEY=your_tmdb_api_key
    VITE_FIREBASE_API_KEY=your_firebase_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket 
    VITE_FIREBASE_MESSENGING_SENDER_ID=your_firebase_messaging_sender_id 
    VITE_FIREBASE_APP_ID=your_firebase_app_id
    

## Run Development Server  

You can now run the frontend locally.  

⚠️ *Note that the AI chat feature requires Vercel’s serverless function and will not run locally without deploying to Vercel.*

Run the command:

    npm run dev

Your app will be live at `http://localhost:5173`

## ⚡Deployment

- Push to your [GitHub](https://github.com/) ([GitLab](https://about.gitlab.com/) / [Bitbucket](https://bitbucket.org/product/))

- Connect the repo to [Vercel](https://vercel.com/) from your Vercel dashboard.

- Go to your project on Vercel Dashboard → Settings → Environment Variables and add the same credentials contained in your local `.env` file.

- Create an [OpenAI API key](https://platform.openai.com/api-keys) and add the credentials to your Vercel environment variables
 *(Note that you might need to purchase OpenAI tokens if your free trial is expired)*:

        OPENAI_API_KEY=your_openai_api_key

- Go to your project on Firebase → Project settings → Service accounts and download the Firebase Admin JSON credentials.

- Add the following credentials from the Firebase Admin JSON file to your Vercel environment variables and redeploy:

        FIREBASE_PROJECT_ID=your_Firebase_project_id
        FIREBASE_CLIENT_EMAIL=your_Firebase_client_email
        FIREBASE_PRIVATE_KEY=your_Firebase_private_key

## Screenshots

### Home Page

![Home Page](public\screenshots\home.png)

### Menu

![Menu](public\screenshots\Nav.png)

### Bookmarks

![Bookmarks](public\screenshots\bookmarks.png)

### Search

![Search page](public\screenshots\search.png)

### Movie Details

![Movie Details](public\screenshots\moviedetails.png)

## 🗺️ Roadmap

- [] Dark/Light theme toggle
- [] Multi-language support

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.  

## 📄 License

This project is licensed under the MIT License.

## Live Site

Checkout the deployed version [here](https://movie-box-snowy.vercel.app/)

## 👨‍💻 About

 I’m Godspower Amanze (*call me Greek or Leonard*) — a frontend engineer passionate about building clean, user-friendly web applications  

I enjoy working with **React, Firebase, and modern frontend tools** to create projects that are both functional and easy to use.  

I’ve built portfolio projects like **[filmBox](https://movie-box-snowy.vercel.app/)** (a movie discovery web app with AI-powered recommendations), which showcase my ability to turn ideas into working products.  

I’m currently seeking **opportunities** where I can continue to grow as a developer, and contribute to real-world projects.  

- 🔭 Focus: React, JavaScript, Firebase, TailwindCSS  
- 🌱 Currently building: **LinkNest** (a minimal bookmark organizer)
- 💡 Interested in: Frontend engineering, AI integrations, and clean UI/UX

## 📫 Where to find me

### [LinkedIn](https://linkedin.com/in/godspoweramanze9947) | [Twitter](https://x.com/greek_coder?t=3ZNJZtQElZnw24zQqiG2mQ&s=09)
