Tutorial Lengkap Pembuatan Aplikasi Wisata Bahari Kivotos. Oleh Hanief Bintang Tri Buana I.2410153

Struktur Project

```
wisata-kivotos/
├── frontend/
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   ├── detail.html
│   ├── tambah.html
│   ├── edit.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   └── package.json
└── README.md
```

1. File Frontend

index.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>Wisata Bahari Kivotos</h1>
            </div>
            <div class="nav-menu">
                <a href="index.html" class="nav-link active">Beranda</a>
                <a href="tambah.html" class="nav-link" id="tambah-link" style="display:none;">Tambah Wisata</a>
                <span id="user-info" style="display:none;"></span>
                <button id="logout-btn" class="btn-logout" style="display:none;">Logout</button>
                <button id="login-btn" class="btn-primary">Login</button>
                <button id="register-btn" class="btn-secondary">Register</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section class="hero">
            <h2>Jelajahi Keindahan Bahari Kivotos</h2>
            <p>Temukan destinasi wisata terbaik di Kivotos</p>
        </section>

        <section class="filter-section">
            <select id="category-filter">
                <option value="all">Semua Kategori</option>
                <option value="Pantai">Pantai</option>
                <option value="Pulau">Pulau</option>
                <option value="Snorkeling">Snorkeling</option>
            </select>
            <input type="text" id="search-input" placeholder="Cari destinasi...">
        </section>

        <section id="wisata-list" class="wisata-grid">
        </section>
    </main>

    <footer>
        <p>Wisata Bahari Kivotos</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

login.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="login-page">
    <div class="login-container">
        <div class="login-form">
            <h1>Wisata Bahari Kivotos</h1>
            <h2>Login</h2>
            <form id="login-form">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit" class="btn-login">Login</button>
            </form>
            <p id="login-message"></p>
            <p>Belum punya akun? <a href="register.html">Register disini</a></p>
            <p><a href="index.html">Kembali ke Beranda</a></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

register.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register - Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body class="login-page">
    <div class="login-container">
        <div class="login-form">
            <h1>Wisata Bahari Kivotos</h1>
            <h2>Register</h2>
            <form id="register-form">
                <div class="form-group">
                    <label for="reg-username">Username</label>
                    <input type="text" id="reg-username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="reg-password">Password</label>
                    <input type="password" id="reg-password" name="password" required>
                </div>
                <div class="form-group">
                    <label for="reg-email">Email</label>
                    <input type="email" id="reg-email" name="email" required>
                </div>
                <div class="form-group">
                    <label for="reg-role">Role</label>
                    <select id="reg-role" name="role" required>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                    </select>
                </div>
                <button type="submit" class="btn-login">Register</button>
            </form>
            <p id="register-message"></p>
            <p>Sudah punya akun? <a href="login.html">Login disini</a></p>
            <p><a href="index.html">Kembali ke Beranda</a></p>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

detail.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Detail Wisata - Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>Wisata Bahari Kivotos</h1>
            </div>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Beranda</a>
                <span id="user-info" style="display:none;"></span>
                <button id="logout-btn" class="btn-logout" style="display:none;">Logout</button>
                <button id="login-btn" class="btn-primary">Login</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section id="wisata-detail">
        </section>

        <section class="rating-section" id="rating-section" style="display:none;">
            <h3>Beri Rating</h3>
            <div class="rating-stars">
                <span class="star" data-value="1"></span>
                <span class="star" data-value="2"></span>
                <span class="star" data-value="3"></span>
                <span class="star" data-value="4"></span>
                <span class="star" data-value="5"></span>
            </div>
            <button id="submit-rating" class="btn-primary">Kirim Rating</button>
        </section>

        <section class="login-prompt" id="login-prompt">
            <p>Login sebagai user untuk memberikan rating</p>
            <a href="login.html" class="btn-primary">Login</a>
        </section>
    </main>

    <footer>
        <p>Wisata Bahari Kivotos</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

tambah.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tambah Wisata - Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>Wisata Bahari Kivotos</h1>
            </div>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Beranda</a>
                <a href="tambah.html" class="nav-link active">Tambah Wisata</a>
                <span id="user-info" style="display:none;"></span>
                <button id="logout-btn" class="btn-logout" style="display:none;">Logout</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section class="form-section">
            <h2>Tambah Wisata Baru</h2>
            <form id="tambah-wisata-form">
                <div class="form-group">
                    <label for="nama">Nama Wisata</label>
                    <input type="text" id="nama" name="nama" required>
                </div>
                <div class="form-group">
                    <label for="lokasi">Lokasi</label>
                    <input type="text" id="lokasi" name="lokasi" required>
                </div>
                <div class="form-group">
                    <label for="kategori">Kategori</label>
                    <select id="kategori" name="kategori" required>
                        <option value="">Pilih Kategori</option>
                        <option value="Pantai">Pantai</option>
                        <option value="Pulau">Pulau</option>
                        <option value="Snorkeling">Snorkeling</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="deskripsi">Deskripsi</label>
                    <textarea id="deskripsi" name="deskripsi" rows="5" required></textarea>
                </div>
                <div class="form-group">
                    <label for="gambar_url">URL Gambar</label>
                    <input type="url" id="gambar_url" name="gambar_url" required>
                </div>
                <button type="submit" class="btn-primary">Tambah Wisata</button>
            </form>
        </section>
    </main>

    <footer>
        <p>Wisata Bahari Kivotos</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

edit.html

```html
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit Wisata - Wisata Bahari Kivotos</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <nav class="navbar">
            <div class="nav-brand">
                <h1>Wisata Bahari Kivotos</h1>
            </div>
            <div class="nav-menu">
                <a href="index.html" class="nav-link">Beranda</a>
                <a href="tambah.html" class="nav-link">Tambah Wisata</a>
                <span id="user-info" style="display:none;"></span>
                <button id="logout-btn" class="btn-logout" style="display:none;">Logout</button>
            </div>
        </nav>
    </header>

    <main class="container">
        <section class="form-section">
            <h2>Edit Wisata</h2>
            <form id="edit-wisata-form">
                <div class="form-group">
                    <label for="edit-nama">Nama Wisata</label>
                    <input type="text" id="edit-nama" name="nama" required>
                </div>
                <div class="form-group">
                    <label for="edit-lokasi">Lokasi</label>
                    <input type="text" id="edit-lokasi" name="lokasi" required>
                </div>
                <div class="form-group">
                    <label for="edit-kategori">Kategori</label>
                    <select id="edit-kategori" name="kategori" required>
                        <option value="">Pilih Kategori</option>
                        <option value="Pantai">Pantai</option>
                        <option value="Pulau">Pulau</option>
                        <option value="Snorkeling">Snorkeling</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="edit-deskripsi">Deskripsi</label>
                    <textarea id="edit-deskripsi" name="deskripsi" rows="5" required></textarea>
                </div>
                <div class="form-group">
                    <label for="edit-gambar_url">URL Gambar</label>
                    <input type="url" id="edit-gambar_url" name="gambar_url" required>
                </div>
                <button type="submit" class="btn-primary">Update Wisata</button>
            </form>
        </section>
    </main>

    <footer>
        <p>Wisata Bahari Kivotos</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

style.css

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
    color: #2c3e50;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
}

.container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

header {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.nav-brand h1 {
    font-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 1.5rem;
}

.nav-link {
    color: #2c3e50;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 20px;
}

.nav-link:hover, .nav-link.active {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.btn-primary, .btn-secondary, .btn-logout, .btn-login {
    padding: 0.5rem 1.5rem;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.3s;
    text-decoration: none;
    display: inline-block;
    text-align: center;
}

.btn-primary {
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

.btn-secondary {
    background: transparent;
    color: #667eea;
    border: 2px solid #667eea;
}

.btn-secondary:hover {
    background: #667eea;
    color: white;
}

.btn-logout {
    background: #e74c3c;
    color: white;
}

.btn-logout:hover {
    background: #c0392b;
}

.hero {
    text-align: center;
    padding: 4rem 0;
    margin-bottom: 2rem;
    color: white;
}

.hero h2 {
    font-size: 3rem;
    margin-bottom: 1rem;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero p {
    font-size: 1.3rem;
    opacity: 0.9;
}

.filter-section {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.filter-section select, 
.filter-section input {
    padding: 0.75rem 1.5rem;
    border: none;
    border-radius: 25px;
    font-size: 1rem;
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.filter-section input {
    min-width: 300px;
}

.wisata-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    margin-bottom: 2rem;
}

.wisata-card {
    background: rgba(255, 255, 255, 0.95);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 8px 25px rgba(0,0,0,0.1);
    backdrop-filter: blur(10px);
}

.wisata-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
}

.wisata-image {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.wisata-content {
    padding: 1.5rem;
}

.wisata-title {
    font-size: 1.4rem;
    margin-bottom: 0.5rem;
    color: #2c3e50;
}

.wisata-location {
    color: #7f8c8d;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.wisata-category {
    display: inline-block;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    padding: 0.3rem 1rem;
    border-radius: 15px;
    font-size: 0.8rem;
    margin-bottom: 1rem;
}

.wisata-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.rating-stars {
    color: #f39c12;
}

.rating-value {
    font-weight: bold;
    color: #2c3e50;
}

.wisata-actions {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.detail-container {
    max-width: 800px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.detail-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 15px;
    margin-bottom: 2rem;
}

.detail-title {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #2c3e50;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.detail-meta {
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.detail-location, .detail-category, .detail-rating {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #7f8c8d;
    font-size: 1.1rem;
}

.detail-description {
    line-height: 1.8;
    margin-bottom: 2rem;
    color: #2c3e50;
    font-size: 1.1rem;
}

.rating-section, .login-prompt {
    margin-top: 2rem;
    padding: 2rem;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 15px;
    text-align: center;
}

.rating-section h3 {
    margin-bottom: 1rem;
    color: #2c3e50;
}

.rating-stars {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
}

.star {
    font-size: 2.5rem;
    cursor: pointer;
    color: #bdc3c7;
    transition: color 0.2s;
}

.star:hover, .star.active {
    color: #f39c12;
}

.form-section {
    max-width: 600px;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.form-section h2 {
    margin-bottom: 2rem;
    text-align: center;
    color: #2c3e50;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.form-group {
    margin-bottom: 1.5rem;
}

.form-group label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: #2c3e50;
}

.form-group input, 
.form-group select, 
.form-group textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 2px solid #e8e8e8;
    border-radius: 10px;
    font-size: 1rem;
    background: white;
    color: #2c3e50;
    transition: border-color 0.3s;
}

.form-group input:focus, 
.form-group select:focus, 
.form-group textarea:focus {
    outline: none;
    border-color: #667eea;
}

.form-group textarea {
    resize: vertical;
}

.login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.login-container {
    width: 100%;
    max-width: 400px;
    padding: 2rem;
}

.login-form {
    background: rgba(255, 255, 255, 0.95);
    padding: 2rem;
    border-radius: 20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
    text-align: center;
}

.login-form h1 {
    color: #2c3e50;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login-form h2 {
    margin-bottom: 2rem;
    color: #7f8c8d;
}

.btn-login {
    width: 100%;
    padding: 0.75rem;
    background: linear-gradient(135deg, #667eea, #764ba2);
    color: white;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-login:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
}

#login-message, #register-message {
    margin-top: 1rem;
    color: #e74c3c;
}

footer {
    background: rgba(255, 255, 255, 0.95);
    color: #2c3e50;
    text-align: center;
    padding: 1.5rem;
    margin-top: 3rem;
    backdrop-filter: blur(10px);
}

@media (max-width: 768px) {
    .navbar {
        flex-direction: column;
        gap: 1rem;
    }
    
    .nav-menu {
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .hero h2 {
        font-size: 2rem;
    }
    
    .wisata-grid {
        grid-template-columns: 1fr;
    }
    
    .detail-meta {
        flex-direction: column;
        gap: 1rem;
    }
    
    .filter-section input {
        min-width: 200px;
    }
}
```

script.js

```javascript
const API_BASE_URL = 'http://localhost:3000/api';

let currentUser = null;

function checkAuth() {
    const token = localStorage.getItem('token');
    const userData = localStorage.getItem('user');
    
    if (token && userData) {
        currentUser = JSON.parse(userData);
        updateUI();
        return true;
    }
    return false;
}

function updateUI() {
    const userInfo = document.getElementById('user-info');
    const logoutBtn = document.getElementById('logout-btn');
    const loginBtn = document.getElementById('login-btn');
    const registerBtn = document.getElementById('register-btn');
    const tambahLink = document.getElementById('tambah-link');

    if (currentUser) {
        if (userInfo) {
            userInfo.style.display = 'inline';
            userInfo.textContent = `Halo, ${currentUser.username} (${currentUser.role})`;
        }
        if (logoutBtn) logoutBtn.style.display = 'inline-block';
        if (loginBtn) loginBtn.style.display = 'none';
        if (registerBtn) registerBtn.style.display = 'none';
        if (tambahLink && currentUser.role === 'admin') {
            tambahLink.style.display = 'inline';
        }
    } else {
        if (userInfo) userInfo.style.display = 'none';
        if (logoutBtn) logoutBtn.style.display = 'none';
        if (loginBtn) loginBtn.style.display = 'inline-block';
        if (registerBtn) registerBtn.style.display = 'inline-block';
        if (tambahLink) tambahLink.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    currentUser = null;
    updateUI();
    window.location.href = 'index.html';
}

async function login(username, password) {
    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password })
        });
        
        const result = await response.json();
        
        if (result.success) {
            localStorage.setItem('token', result.token);
            localStorage.setItem('user', JSON.stringify(result.user));
            currentUser = result.user;
            updateUI();
            return { success: true };
        } else {
            return { success: false, message: result.message };
        }
    } catch (error) {
        console.error('Login error:', error);
        return { success: false, message: 'Terjadi kesalahan saat login' };
    }
}

async function register(userData) {
    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Register error:', error);
        return { success: false, message: 'Terjadi kesalahan saat registrasi' };
    }
}

async function fetchWisata() {
    try {
        const response = await fetch(`${API_BASE_URL}/wisata`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching wisata:', error);
        return [];
    }
}

async function fetchWisataById(id) {
    try {
        const response = await fetch(`${API_BASE_URL}/wisata/${id}`);
        if (!response.ok) throw new Error('Network response was not ok');
        return await response.json();
    } catch (error) {
        console.error('Error fetching wisata by ID:', error);
        return null;
    }
}

async function addWisata(wisataData) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/wisata`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(wisataData)
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error adding wisata:', error);
        return { success: false, message: 'Gagal menambahkan wisata' };
    }
}

async function updateWisata(id, wisataData) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/wisata/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(wisataData)
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error updating wisata:', error);
        return { success: false, message: 'Gagal mengupdate wisata' };
    }
}

async function deleteWisata(id) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/wisata/${id}`, {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error deleting wisata:', error);
        return { success: false, message: 'Gagal menghapus wisata' };
    }
}

async function submitRating(wisataId, rating) {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${API_BASE_URL}/wisata/${wisataId}/rating`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify({ rating })
        });
        
        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error submitting rating:', error);
        return { success: false, message: 'Gagal memberikan rating' };
    }
}

async function displayWisata() {
    const wisataList = document.getElementById('wisata-list');
    if (!wisataList) return;
    
    const wisataData = await fetchWisata();
    
    if (wisataData.length === 0) {
        wisataList.innerHTML = '<p class="no-data">Tidak ada data wisata.</p>';
        return;
    }
    
    wisataList.innerHTML = wisataData.map(wisata => `
        <div class="wisata-card" data-category="${wisata.kategori}">
            <img src="${wisata.gambar_url}" alt="${wisata.nama_wisata}" class="wisata-image">
            <div class="wisata-content">
                <h3 class="wisata-title">${wisata.nama_wisata}</h3>
                <div class="wisata-location">${wisata.lokasi}</div>
                <div class="wisata-category">${wisata.kategori}</div>
                <div class="wisata-rating">
                    <div class="rating-stars">${getStarRating(wisata.rating)}</div>
                    <span class="rating-value">${wisata.rating}</span>
                </div>
                <div class="wisata-actions">
                    <a href="detail.html?id=${wisata.id_wisata}" class="btn-primary">Lihat Detail</a>
                    ${currentUser && currentUser.role === 'admin' ? `
                        <a href="edit.html?id=${wisata.id_wisata}" class="btn-secondary">Edit</a>
                        <button class="btn-logout" onclick="deleteWisataHandler(${wisata.id_wisata})">Hapus</button>
                    ` : ''}
                </div>
            </div>
        </div>
    `).join('');
    
    setupFilter();
}

function getStarRating(rating) {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '★';
    }
    
    if (halfStar) {
        stars += '½';
    }
    
    return stars;
}

async function displayWisataDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    
    if (!id) {
        window.location.href = 'index.html';
        return;
    }
    
    const wisata = await fetchWisataById(id);
    const detailContainer = document.getElementById('wisata-detail');
    const ratingSection = document.getElementById('rating-section');
    const loginPrompt = document.getElementById('login-prompt');
    
    if (!wisata) {
        detailContainer.innerHTML = '<p>Wisata tidak ditemukan.</p>';
        return;
    }
    
    detailContainer.innerHTML = `
        <div class="detail-container">
            <img src="${wisata.gambar_url}" alt="${wisata.nama_wisata}" class="detail-image">
            <h1 class="detail-title">${wisata.nama_wisata}</h1>
            <div class="detail-meta">
                <div class="detail-location">${wisata.lokasi}</div>
                <div class="detail-category">${wisata.kategori}</div>
                <div class="detail-rating">Rating: ${wisata.rating}</div>
            </div>
            <p class="detail-description">${wisata.deskripsi}</p>
            ${currentUser && currentUser.role === 'admin' ? `
                <div class="wisata-actions">
                    <a href="edit.html?id=${wisata.id_wisata}" class="btn-primary">Edit</a>
                    <button class="btn-logout" onclick="deleteWisataHandler(${wisata.id_wisata})">Hapus</button>
                </div>
            ` : ''}
        </div>
    `;
    
    if (currentUser && currentUser.role === 'user') {
        ratingSection.style.display = 'block';
        loginPrompt.style.display = 'none';
        setupRatingStars(id);
    } else if (currentUser && currentUser.role === 'admin') {
        ratingSection.style.display = 'none';
        loginPrompt.style.display = 'none';
    } else {
        ratingSection.style.display = 'none';
        loginPrompt.style.display = 'block';
    }
}

function setupFilter() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterWisata);
    }
    
    if (searchInput) {
        searchInput.addEventListener('input', filterWisata);
    }
}

function filterWisata() {
    const categoryFilter = document.getElementById('category-filter');
    const searchInput = document.getElementById('search-input');
    const wisataCards = document.querySelectorAll('.wisata-card');
    
    const selectedCategory = categoryFilter ? categoryFilter.value : 'all';
    const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
    
    wisataCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const title = card.querySelector('.wisata-title').textContent.toLowerCase();
        const location = card.querySelector('.wisata-location').textContent.toLowerCase();
        
        const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
        const searchMatch = title.includes(searchTerm) || location.includes(searchTerm);
        
        if (categoryMatch && searchMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function setupRatingStars(wisataId) {
    const stars = document.querySelectorAll('.star');
    const submitButton = document.getElementById('submit-rating');
    let selectedRating = 0;
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            selectedRating = parseInt(this.getAttribute('data-value'));
            
            stars.forEach(s => {
                if (parseInt(s.getAttribute('data-value')) <= selectedRating) {
                    s.classList.add('active');
                    s.textContent = '★';
                } else {
                    s.classList.remove('active');
                    s.textContent = '☆';
                }
            });
        });
        
        star.textContent = '☆';
    });
    
    if (submitButton) {
        submitButton.addEventListener('click', async function() {
            if (selectedRating > 0) {
                const result = await submitRating(wisataId, selectedRating);
                if (result.success) {
                    alert('Terima kasih! Rating berhasil diberikan.');
                    location.reload();
                } else {
                    alert(result.message || 'Gagal memberikan rating');
                }
            } else {
                alert('Pilih rating terlebih dahulu!');
            }
        });
    }
}

async function deleteWisataHandler(id) {
    if (confirm('Apakah Anda yakin ingin menghapus wisata ini?')) {
        const result = await deleteWisata(id);
        if (result.success) {
            window.location.href = 'index.html';
        } else {
            alert(result.message || 'Gagal menghapus wisata');
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    
    const logoutBtn = document.getElementById('logout-btn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', logout);
    }
    
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            window.location.href = 'login.html';
        });
    }
    
    const registerBtn = document.getElementById('register-btn');
    if (registerBtn) {
        registerBtn.addEventListener('click', function() {
            window.location.href = 'register.html';
        });
    }
    
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            const messageEl = document.getElementById('login-message');
            
            const result = await login(username, password);
            
            if (result.success) {
                window.location.href = 'index.html';
            } else {
                messageEl.textContent = result.message;
            }
        });
    }
    
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const userData = {
                username: document.getElementById('reg-username').value,
                password: document.getElementById('reg-password').value,
                email: document.getElementById('reg-email').value,
                role: document.getElementById('reg-role').value
            };
            
            const messageEl = document.getElementById('register-message');
            const result = await register(userData);
            
            if (result.success) {
                messageEl.style.color = '#27ae60';
                messageEl.textContent = 'Registrasi berhasil! Silakan login.';
                setTimeout(() => {
                    window.location.href = 'login.html';
                }, 2000);
            } else {
                messageEl.style.color = '#e74c3c';
                messageEl.textContent = result.message;
            }
        });
    }
    
    const tambahForm = document.getElementById('tambah-wisata-form');
    if (tambahForm) {
        if (!currentUser || currentUser.role !== 'admin') {
            window.location.href = 'index.html';
            return;
        }
        
        tambahForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const wisataData = {
                nama_wisata: formData.get('nama'),
                lokasi: formData.get('lokasi'),
                kategori: formData.get('kategori'),
                deskripsi: formData.get('deskripsi'),
                gambar_url: formData.get('gambar_url'),
                rating: 0
            };
            
            const result = await addWisata(wisataData);
            
            if (result.success) {
                window.location.href = 'index.html';
            } else {
                alert(result.message || 'Gagal menambahkan wisata');
            }
        });
    }
    
    const editForm = document.getElementById('edit-wisata-form');
    if (editForm) {
        if (!currentUser || currentUser.role !== 'admin') {
            window.location.href = 'index.html';
            return;
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        
        if (id) {
            fetchWisataById(id).then(wisata => {
                if (wisata) {
                    document.getElementById('edit-nama').value = wisata.nama_wisata;
                    document.getElementById('edit-lokasi').value = wisata.lokasi;
                    document.getElementById('edit-kategori').value = wisata.kategori;
                    document.getElementById('edit-deskripsi').value = wisata.deskripsi;
                    document.getElementById('edit-gambar_url').value = wisata.gambar_url;
                }
            });
            
            editForm.addEventListener('submit', async function(e) {
                e.preventDefault();
                
                const formData = new FormData(this);
                const wisataData = {
                    nama_wisata: formData.get('nama'),
                    lokasi: formData.get('lokasi'),
                    kategori: formData.get('kategori'),
                    deskripsi: formData.get('deskripsi'),
                    gambar_url: formData.get('gambar_url')
                };
                
                const result = await updateWisata(id, wisataData);
                
                if (result.success) {
                    window.location.href = 'index.html';
                } else {
                    alert(result.message || 'Gagal mengupdate wisata');
                }
            });
        } else {
            window.location.href = 'index.html';
        }
    }
    
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        displayWisata();
    } else if (currentPage === 'detail.html') {
        displayWisataDetail();
    }
});
```

2. File Backend

server.js

```javascript
const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

let demoWisata = [
    {
        id_wisata: 1,
        nama_wisata: "Momoyodou Beach",
        lokasi: "Kivotos",
        kategori: "Pantai",
        deskripsi: "Pantai Momoyodou yang indah dengan pasir putih dan air biru jernih. Tempat perfect untuk bersantai dan berenang.",
        rating: 4.7,
        gambar_url: "https://media.discordapp.net/attachments/1182122295171485769/1439690961771954366/007.jpg?ex=691b7031&is=691a1eb1&hm=5ae4e23ee612aa068a2040d9b57a20a1d3bccb760a7bdcdfa18dc1818e9f167a&=&format=webp&width=1148&height=812",
        total_ratings: 15,
        rating_sum: 70.5
    },
    {
        id_wisata: 2,
        nama_wisata: "Deserted Island off the coast of Trinity",
        lokasi: "Trinity Coast",
        kategori: "Pulau",
        deskripsi: "Pulau terpencil di lepas pantai Trinity dengan pemandangan alam yang masih alami dan belum terjamah.",
        rating: 4.5,
        gambar_url: "https://media.discordapp.net/attachments/1182122295171485769/1439691676741533910/blue-archive-event-1-30-2024.png?ex=691b70db&is=691a1f5b&hm=80e8efc920a757bce86ea0853d8ea0b799554dfa0e4cdb17ce4a1bc394a4708d&=&format=webp&quality=lossless&width=1501&height=812",
        total_ratings: 12,
        rating_sum: 54
    },
    {
        id_wisata: 3,
        nama_wisata: "RABBIT Missing Shrimp",
        lokasi: "Kivotos Bay",
        kategori: "Snorkeling",
        deskripsi: "Tempat snorkeling terbaik dengan terumbu karang yang indah dan kehidupan laut yang beragam. Dikelola oleh Tim RABBIT.",
        rating: 4.8,
        gambar_url: "https://cdn.discordapp.com/attachments/1182122295171485769/1439692393904603297/Memorial_Lobby_Saki_28Swimsuit29.png?ex=691b7186&is=691a2006&hm=5a8978aee336458b16145f23536cd751aba8f411123528a9f2540ddf86dffbb3&",
        total_ratings: 20,
        rating_sum: 96
    }
];

let users = [
    {
        id: 1,
        username: 'admin',
        password: 'admin123',
        email: 'admin@kivotos.com',
        role: 'admin'
    },
    {
        id: 2,
        username: 'user',
        password: 'user123',
        email: 'user@kivotos.com',
        role: 'user'
    }
];

let nextUserId = 3;
let nextWisataId = 4;

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }

    try {
        const user = users.find(u => u.username === token);
        if (!user) {
            return res.status(403).json({ error: 'Invalid token' });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(403).json({ error: 'Invalid token' });
    }
}

app.post('/api/register', (req, res) => {
    const { username, password, email, role } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ success: false, message: 'Semua field harus diisi' });
    }

    const existingUser = users.find(u => u.username === username || u.email === email);
    if (existingUser) {
        return res.status(400).json({ success: false, message: 'Username atau email sudah digunakan' });
    }

    const newUser = {
        id: nextUserId++,
        username,
        password,
        email,
        role: role || 'user'
    };

    users.push(newUser);
    res.json({ success: true, message: 'Registrasi berhasil' });
});

app.post('/api/login', (req, res) => {
    const { username, password } = req.body;

    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ success: false, message: 'Username atau password salah' });
    }

    const userResponse = {
        id: user.id,
        username: user.username,
        email: user.email,
        role: user.role
    };

    res.json({
        success: true,
        token: user.username,
        user: userResponse
    });
});

app.get('/api/wisata', (req, res) => {
    res.json(demoWisata);
});

app.get('/api/wisata/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const wisata = demoWisata.find(w => w.id_wisata === id);
    if (!wisata) {
        return res.status(404).json({ error: 'Wisata not found' });
    }
    res.json(wisata);
});

app.post('/api/wisata', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Hanya admin yang dapat menambah wisata' });
    }

    const { nama_wisata, lokasi, kategori, deskripsi, gambar_url } = req.body;

    if (!nama_wisata || !lokasi || !kategori || !deskripsi || !gambar_url) {
        return res.status(400).json({ error: 'Semua field harus diisi' });
    }

    const newWisata = {
        id_wisata: nextWisataId++,
        nama_wisata,
        lokasi,
        kategori,
        deskripsi,
        gambar_url,
        rating: 0,
        total_ratings: 0,
        rating_sum: 0
    };

    demoWisata.push(newWisata);
    res.json({ id: newWisata.id_wisata, message: 'Wisata added successfully' });
});

app.put('/api/wisata/:id', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Hanya admin yang dapat mengedit wisata' });
    }

    const id = parseInt(req.params.id);
    const wisataIndex = demoWisata.findIndex(w => w.id_wisata === id);
    
    if (wisataIndex === -1) {
        return res.status(404).json({ error: 'Wisata not found' });
    }

    const { nama_wisata, lokasi, kategori, deskripsi, gambar_url } = req.body;
    demoWisata[wisataIndex] = {
        ...demoWisata[wisataIndex],
        nama_wisata,
        lokasi,
        kategori,
        deskripsi,
        gambar_url
    };

    res.json({ message: 'Wisata updated successfully' });
});

app.delete('/api/wisata/:id', authenticateToken, (req, res) => {
    if (req.user.role !== 'admin') {
        return res.status(403).json({ error: 'Hanya admin yang dapat menghapus wisata' });
    }

    const id = parseInt(req.params.id);
    const wisataIndex = demoWisata.findIndex(w => w.id_wisata === id);
    
    if (wisataIndex === -1) {
        return res.status(404).json({ error: 'Wisata not found' });
    }

    demoWisata.splice(wisataIndex, 1);
    res.json({ message: 'Wisata deleted successfully' });
});

app.post('/api/wisata/:id/rating', authenticateToken, (req, res) => {
    if (req.user.role !== 'user') {
        return res.status(403).json({ error: 'Hanya user yang dapat memberikan rating' });
    }

    const id = parseInt(req.params.id);
    const wisataIndex = demoWisata.findIndex(w => w.id_wisata === id);
    
    if (wisataIndex === -1) {
        return res.status(404).json({ error: 'Wisata not found' });
    }

    const { rating } = req.body;
    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Rating harus antara 1-5' });
    }

    const wisata = demoWisata[wisataIndex];
    wisata.total_ratings += 1;
    wisata.rating_sum += rating;
    wisata.rating = Math.round((wisata.rating_sum / wisata.total_ratings) * 10) / 10;

    res.json({ success: true, message: 'Rating berhasil diberikan', new_rating: wisata.rating });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
    console.log('Wisata Bahari Kivotos - Demo Mode');
    console.log('Default users:');
    console.log('Admin - username: admin, password: admin123');
    console.log('User  - username: user, password: user123');
});
```

package.json

```json
{
  "name": "wisata-kivotos-backend",
  "version": "1.0.0",
  "description": "Backend for Wisata Bahari Kivotos application",
  "main": "server.js",
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.1"
  }
}
```

3. Cara Menjalankan

Langkah 1: Buat Struktur Project

```bash
mkdir wisata-kivotos
cd wisata-kivotos
mkdir frontend backend
```

Langkah 2: Buat File Frontend

Buat semua file HTML, CSS, dan JavaScript di folder frontend sesuai kode di atas.

Langkah 3: Buat File Backend

Buat file server.js dan package.json di folder backend sesuai kode di atas.

Langkah 4: Install Dependencies

```bash
cd backend
npm install
```

Langkah 5: Jalankan Aplikasi

```bash
npm start
```

Langkah 6: Akses Aplikasi

Buka browser dan akses: http://localhost:3000

4. Fitur Aplikasi

Sistem Autentikasi

· Register dengan role user/admin
· Login dengan validasi credentials
· Token-based authentication
· Role-based access control

Manajemen Wisata

· Admin: CRUD wisata
· User: Hanya bisa melihat dan memberi rating
· Filter dan pencarian wisata
· 3 destinasi default Kivotos

Sistem Rating

· Hanya user yang bisa memberi rating
· Rating 1-5 bintang
· Perhitungan rating rata-rata otomatis

Keamanan

· Token authentication
· Role-based authorization
· Input validation
· CORS protection

5. API Endpoints

Autentikasi

· POST /api/register - Registrasi user baru
· POST /api/login - Login user

Wisata

· GET /api/wisata - Get semua wisata
· GET /api/wisata/:id - Get wisata by ID
· POST /api/wisata - Tambah wisata (admin only)
· PUT /api/wisata/:id - Edit wisata (admin only)
· DELETE /api/wisata/:id - Hapus wisata (admin only)
· POST /api/wisata/:id/rating - Beri rating (user only)

6. Default Accounts

· Admin: username admin, password admin123
· User: username user, password user123
