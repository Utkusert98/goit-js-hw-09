document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.querySelector('form'); 
    const input1 = document.getElementById('inputField1'); 
    const input2 = document.getElementById('inputField2'); 

   
    if (localStorage.getItem('savedInput1')) {
        input1.value = localStorage.getItem('savedInput1');
    }
    if (localStorage.getItem('savedInput2')) {
        input2.value = localStorage.getItem('savedInput2');
    }

    
    input1.addEventListener('input', (event) => {
        localStorage.setItem('savedInput1', event.target.value);
    });
    input2.addEventListener('input', (event) => {
        localStorage.setItem('savedInput2', event.target.value);
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        if (input1.value.trim() === '' || input2.value.trim() === '') {
            alert('Lütfen tüm alanları doldurun!'); 
            return; 
        }

        console.log('--- Form Başarıyla Gönderildi ---');
        console.log('Input 1 Değeri:', input1.value);
        console.log('Input 2 Değeri:', input2.value);

        form.reset();
        localStorage.removeItem('savedInput1');
        localStorage.removeItem('savedInput2');

        alert('Form başarıyla gönderildi ve değerler konsola yazdırıldı!');
    });
});