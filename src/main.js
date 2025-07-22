document.addEventListener('DOMContentLoaded', () => {
    // HTML elemanlarını seçiyoruz. ID'lerin HTML'deki karşılıklarına dikkat et!
    const form = document.querySelector('form'); // Formun kendisi
    const input1 = document.getElementById('inputField1'); // İlk input alanı (örn: Adınız)
    const input2 = document.getElementById('inputField2'); // İkinci input alanı (örn: Email Adresiniz)

    // --- 1. Sayfa yenilendiğinde verilerin form elemanlarına yerleştirilmesi ---
    // Sayfa yüklendiğinde (DOM hazır olduğunda) localStorage'dan kaydedilmiş değerleri kontrol ederiz.
    // Eğer varsa, bu değerleri ilgili input alanlarına yerleştiririz.
    if (localStorage.getItem('savedInput1')) {
        input1.value = localStorage.getItem('savedInput1');
    }
    if (localStorage.getItem('savedInput2')) {
        input2.value = localStorage.getItem('savedInput2');
    }

    // Kullanıcı input alanlarına her girdiğinde (değişiklik yaptığında) değeri localStorage'a kaydederiz.
    // Bu sayede, sayfa yenilense bile son girilen veriler korunur.
    input1.addEventListener('input', (event) => {
        localStorage.setItem('savedInput1', event.target.value);
    });
    input2.addEventListener('input', (event) => {
        localStorage.setItem('savedInput2', event.target.value);
    });

    // --- 2. ve 3. Form gönderildiğinde kontroller ve değerlerin konsola yazdırılması ---
    // Form gönderildiğinde (submit edildiğinde) çalışacak olay dinleyicisi.
    form.addEventListener('submit', (event) => {
        // Formun varsayılan HTML gönderme davranışını engelleriz.
        // Bu, sayfanın yenilenmesini ve JavaScript kodunun kesintiye uğramasını önler.
        event.preventDefault();

        // Her iki input alanının da boş olup olmadığını kontrol ederiz (Doğrulama - Validation).
        // .trim() metodu, baştaki ve sondaki boşlukları temizler.
        if (input1.value.trim() === '' || input2.value.trim() === '') {
            alert('Lütfen tüm alanları doldurun!'); // Kullanıcıya uyarı gösteririz.
            return; // Fonksiyonu burada sonlandırırız; eğer alanlar boşsa diğer işlemleri yapmayız.
        }

        // Eğer tüm alanlar doluysa, input değerlerini konsola yazdırırız.
        // Bu, geliştirme aşamasında verileri izlemek için faydalıdır.
        console.log('--- Form Başarıyla Gönderildi ---');
        console.log('Input 1 Değeri:', input1.value);
        console.log('Input 2 Değeri:', input2.value);

        // İsteğe bağlı: Form başarıyla gönderildikten sonra input alanlarını sıfırlarız.
        form.reset();
        // İsteğe bağlı: localStorage'daki kaydedilmiş değerleri de temizleriz,
        // böylece sayfa yenilenince form boş başlar.
        localStorage.removeItem('savedInput1');
        localStorage.removeItem('savedInput2');

        // Kullanıcıya formun gönderildiğini bildiren ek bir uyarı.
        alert('Form başarıyla gönderildi ve değerler konsola yazdırıldı!');
    });
});