

# 🖼️ the-gallary

A modern, responsive platform for showcasing and exploring digital artworks.

---

## 📌 **Project Overview**

**the-gallary** is a React + Vite + Firebase–based web application that allows users to upload artwork, explore galleries, favorite items, and interact with a clean, engaging, mobile-friendly user interface. The platform is designed for artists, creators, and art-lovers who want an easy place to showcase and discover creative work.

---

## 🌍 **Live Demo**

🔗 **Live Link:** https://the-gallery-156c4.web.app
🔗 **GitHub Repo:** [https://github.com/00Shawon/the-gallary](https://github.com/00Shawon/the-gallary)

---

## 🖼️ Screenshot

*(Replace the image below with your actual screenshot from the project)*

```
![App Preview](./screenshots/preview.png)
```

---

## 🧱 **Technology Stack**

The main technologies used in this project:

### **Frontend**

* React
* Vite
* JavaScript (ES6+)
* CSS / Tailwind CSS (or your custom styling method)
* DaisyUi

### **Backend**

* Node.js
* Express.js
* MongoDB

### **Backend / Services**

* Firebase Authentication
* Firebase Firestore Database
* Firebase Storage
* Firebase Hosting

### **Development Tools**

* ESLint
* React Hooks
* NPM / Yarn

---

## ⭐ **Core Features**

### 👤 **User Features**

* Artist registration and login
* Profile creation with user details and avatar
* Upload artwork with title, description, and metadata
* Explore artwork uploaded by other users
* Add artworks to favorites
* View personalized artwork list

### 🎨 **Gallery Features**

* Responsive gallery layout
* Clean visual UI
* Organized artwork display
* Smooth navigation

### ⚙️ **Technical Features**

* Firebase Authentication for secure login
* Firestore database for storing user and artwork data
* Firebase Storage for image handling
* Fully mobile-responsive UI
* Fast performance powered by Vite

---

## 📦 **Project Dependencies**

These are the main dependencies used in this project (taken from typical React+Vite projects — adjust based on your package.json):

```
"dependencies": {
  "react": "^18.x",
  "react-dom": "^18.x",
  "firebase": "^11.x"
},
"devDependencies": {
  "vite": "^5.x",
  "eslint": "^9.x",
  "@vitejs/plugin-react": "^4.x"
}
```

*(You can update version numbers after checking your package.json to keep it accurate.)*

---

## 🛠️ **How to Run This Project Locally**

Follow these steps to set up and run **the-gallary** on your local machine:

---

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/00Shawon/the-gallary.git
cd the-gallary
```

---

### 2️⃣ **Install Dependencies**

Using npm:

```bash
npm install
```

Or using yarn:

```bash
yarn install
```

---

### 3️⃣ **Set Up Firebase**

* Go to **Firebase Console**
* Create a project
* Enable:

  * Authentication
  * Firestore
  * Storage
* Copy your Firebase config keys
* Create a `.env.local` file in the project root:

```
VITE_FIREBASE_API_KEY=YOUR_API_KEY
VITE_FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID=YOUR_SENDER_ID
VITE_FIREBASE_APP_ID=YOUR_APP_ID
```

---

### 4️⃣ **Run the Development Server**

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually):
👉 [http://localhost:5173/](http://localhost:5173/)

---

### 5️⃣ **Build for Production**

```bash
npm run build
```

---

### 6️⃣ **Deploy (Optional)**

If deploying to Firebase Hosting:

```bash
firebase deploy
```

---

## 🔗 **Relevant Links**

* Live Website: https://the-gallery-156c4.web.app
* GitHub Repository: [https://github.com/00Shawon/the-gallary](https://github.com/00Shawon/the-gallary)
* API or Backend : https://github.com/00Shawon/the-gallery-server

---

## 🚀 Future Enhancements

Here are some improvements planned or recommended:

* Comment system on artworks
* Artist-to-artist messaging
* Advanced filtering by tags & categories
* Trending artwork section
* Real-time notifications
* Admin dashboard
* Multi-language support
* PWA support (installable app + offline mode)

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork the project, create feature branches, and open pull requests.

---

## 🧑‍💻 Author

**Shawon Hasan**
🔗 GitHub: [https://github.com/00Shawon](https://github.com/00Shawon)

---

If you want, I can also create:
✅ A banner image for your README
✅ A better screenshot layout
✅ A shortened, more attractive repo description

Just tell me: **"Make the banner"** or **"Make the short repo description"**.


The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
