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
