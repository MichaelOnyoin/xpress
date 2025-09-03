const sqlite3 = require("sqlite3").verbose();

// Connect to SQLite database (creates file if not exists)
const db = new sqlite3.Database("./db/merxpress.db", sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE, (err) => {
    if (err) {
        console.error("❌ Database Connection Error:", err.message);
    } else {
        console.log("✅ Connected to SQLite Merxpress Database.");
    }
});

// Create the products table if not exists
db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        price NUMERIC NOT NULL,
        originalPrice NUMERIC,
        discount NUMERIC,
        title TEXT NOT NULL,
        description TEXT NOT NULL,
        imageUrl VARCHAR(255) NOT NULL
        
    )`);

db.run(`CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    total REAL NOT NULL,
    status TEXT DEFAULT "pending",
    items JSON,
    user_id TEXT 
    )`);

db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)`);



module.exports = db;