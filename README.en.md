<div align="center">
  <a href="README.md">🇪🇸 Español</a> | <a href="README.en.md">🇺🇸 English</a>
</div>

# 🎬 GoodWatch

Web application to manage a personal list of movies (watched and watchlist), combining local data with real-time information from an external API.

Developed as a technical challenge to demonstrate the use of **Node.js**, service architecture, and API consumption.

## 🚀 Key Features

- **Hybrid Architecture:** Local database reading (JSON) dynamically enriched with data from the **OMDb API**.
- **Data Processing:**
  - Filter by status (Watched / Pending).
  - Search by text (Title).
  - Sort by personal rating.
- **Web Service:** Custom RESTful API built with Express.
- **Frontend:** Clean and responsive interface using HTML5, CSS3, and Vanilla JavaScript (no frameworks).

## 🛠️ Tech Stack

- **Runtime:** Node.js
- **Backend Framework:** Express.js
- **HTTP Client:** Axios
- **Utilities:** CORS, Dotenv, File System (fs)
- **Frontend:** HTML / CSS / JS
- **Testing:** Jest

## ⚙️ Installation & Setup

Follow these steps to run the project in your local environment:

### 1. Clone the repository

```bash
git clone https://github.com/mateoromero-dev/GoodWatch
cd GoodWatch
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

This project requires an OMDb API Key. The repository includes a template file named `.env.example` to facilitate this process.

1. Get a free key at [omdbapi.com/apikey.aspx](http://www.omdbapi.com/apikey.aspx).
2. Activate the key using the link sent to your email.
3. Rename the `.env.example` file to `.env` (or create a new one).
4. Edit the `.env` file and assign your key to the variable:

```text
OMDB_API_KEY=your_key_here
```

### 4. Run the server

```bash
npm start
```

You will see a message indicating that the server is running on port **3000**.

### 5. Run tests 🧪

To verify filtering and sorting logic:

```bash
npm test
```

### 6. Access the application

Open your web browser and visit:
`http://localhost:3000`

## 📡 API Documentation

The backend exposes the following public endpoints:

| Method | Route                | Description                                    | Parameters (Query Params)                                                   |
| :----- | :------------------- | :--------------------------------------------- | :-------------------------------------------------------------------------- |
| `GET`  | `/api/movies`        | Returns the complete list of processed movies. | None                                                                        |
| `GET`  | `/api/movies/search` | Performs searches, filtering, and sorting.     | `title` (text), `status` ('watched'/'pending'), `sort` ('rating'/'release') |

### Request Example

```http
GET http://localhost:3000/api/movies/search?title=godfather&status=watched&sort=rating
```

## 📂 Project Structure

```text
GoodWatch/
├── .env                  # Environment variables (API Key) - Not included in repo
├── .env.example          # Configuration template
├── data/
│   └── movies.json       # Local database (IDs and Ratings)
├── public/               # Frontend
│   ├── index.html
│   ├── styles.css
│   ├── app.js
│   └── favicon.ico
├── src/
│   ├── movieService.js
│   └── movieLogic.js
├── tests/
│   └── movieLogic.test.js
├── server.js
└── package.json
```

## 👤 Author

**Mateo Romero**

- GitHub: [@mateoromero-dev](https://github.com/mateoromero-dev)

