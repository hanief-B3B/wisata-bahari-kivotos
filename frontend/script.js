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
