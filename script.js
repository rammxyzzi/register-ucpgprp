document.addEventListener('DOMContentLoaded', () => {
    const nickInput = document.getElementById('nickInput');
    const kirimButton = document.getElementById('kirimButton');

    // Menampilkan tombol kirim setelah input diisi
    nickInput.addEventListener('input', () => {
        if (nickInput.value.trim() !== '') {
            kirimButton.style.display = 'block';
        } else {
            kirimButton.style.display = 'none';
        }
    });

    // Mengarahkan ke WhatsApp saat tombol kirim ditekan
    kirimButton.addEventListener('click', () => {
        const nick = encodeURIComponent(nickInput.value.trim());
        const whatsappUrl = `https://wa.me/6283897648825?text=Nick%20UCP%20yang%20ingin%20didafar:%20${nick}`;
        window.location.href = whatsappUrl;
    });
});
