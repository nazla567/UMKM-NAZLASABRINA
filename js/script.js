// 1. Efek Dinamis: Mengubah gaya bayangan header saat halaman di-scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (header) {
        if (window.scrollY > 30) {
            header.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            header.style.boxShadow = 'none';
        }
    }
});

// 2. Sistem Integrasi: Tombol Beli langsung terhubung otomatis ke WhatsApp
document.addEventListener('DOMContentLoaded', function() {
    const tombolBeli = document.querySelectorAll('.btn-beli');
    
    tombolBeli.forEach(function(tombol) {
        tombol.addEventListener('click', function() {
            const namaProduk = tombol.getAttribute('data-produk') || 'Produk';
            
            // Catatan: Ganti nomor di bawah ini dengan nomor WhatsApp aktif UMKM Anda
            const nomorWA = "628123456789"; 
            const teksPesan = encodeURIComponent("Halo, saya tertarik dan ingin memesan produk " + namaProduk + ". Bagaimana prosedur selanjutnya?");
            
            // Membuka chat WhatsApp di tab baru secara otomatis
            window.open("https://wa.me" + nomorWA + "?text=" + teksPesan, '_blank');
        });
    });
});
