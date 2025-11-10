const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const music = document.getElementById('romanticMusic');

// Müziği manuel olarak başlatma uyarısı (tarayıcı kısıtlamaları nedeniyle)
document.addEventListener('DOMContentLoaded', () => {
    alert("Hena, teklifi görmeden önce romantik müziği başlatmayı unutma! (Lütfen manuel oynat)");
    // Genellikle tarayıcılar otomatik oynatmayı engeller, bu yüzden bir uyarı/düğme ile başlatılması gerekir.
});


// --- EVET Butonu İşlevi (Konfeti Patlatma) ---
function handleYes() {
    // 1. Müziği durdur/değiştir
    music.pause();
    //music.src = 'kutlama_sarkisi.mp3'; // İsteğe bağlı: Farklı bir şarkı çal
    //music.play();
    
    // 2. Butonları ve metni değiştir
    document.querySelector('h1').textContent = "EVET! TEŞEKKÜR EDERİM!";
    document.querySelector('h2').style.display = 'none';
    document.querySelector('p').textContent = "Bu, hayatımın en mutlu günü!";
    document.querySelector('.buttons').inner = <p style="font-size: 1.5em; color: #d81b60;">Sonsuza dek seninim!</p>;

    // 3. Konfeti Patlatma (Basit bir JS konfeti kütüphanesi kullanılabilir. Örn: confetti.js)
    // Eğer kütüphane kullanmazsanız, bu kısmı basit bir animasyonla değiştirebilirsiniz.
    // Varsayalım window.confetti() fonksiyonu yüklü.
    if (typeof window.confetti === 'function') {
        window.confetti({
            particleCount: 200,
            spread: 90,
            origin: { y: 0.6 }
        });
    } else {
        // Konfeti kütüphanesi yoksa basit bir uyarı
        console.log("Konfetiler patladı! (Görsel kütüphane eklenmeli)");
        document.body.style.backgroundColor = 'gold';
    }
}


// --- HAYIR Butonu İşlevi (EVET Butonunu Büyütme) ---
function handleNo() {
    // "Hayır" butonunu küçült veya gizle
    noButton.style.display = 'none'; 
    
    // "Evet" butonunu büyütme
    let currentSize = parseFloat(yesButton.style.fontSize) || 1.2; 
    currentSize += 0.5; // Font boyutunu büyüt
    yesButton.style.fontSize = ${currentSize}em;
    
    // Boyut büyüdükçe yazıyı değiştir
    if (currentSize < 3) {
        yesButton.textContent = 'Lütfen, EVET!';
        yesButton.style.padding = '20px 40px';
    } else {
        // Çok büyüdüyse komik bir son mesaj
        yesButton.textContent = 'KESİNLİKLE EVET!';
        yesButton.style.backgroundColor = '#ffc107'; // Sarı renk
        alert("O buton çalışmıyor Hena, sadece bir seçenek var!");
    }

}
