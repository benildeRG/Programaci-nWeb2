function generarQR() {
    // Obtener los valores de los inputs
    let input1 = document.getElementById('input1').value.trim();
    let input2 = document.getElementById('input2').value.trim();
    let input3 = document.getElementById('input3').value.trim();
    let input4 = document.getElementById('input4').value.trim();

    // Combinar los valores
    let textoCompleto = `${input1} ${input2} ${input3} ${input4}`.trim();

    // Validar que haya al menos un dato
    if (textoCompleto === "") {
        alert("Por favor, ingresa al menos un dato para generar el QR.");
        return;
    }

    // Crear la URL del código QR
    let qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=350x200&data=${encodeURIComponent(textoCompleto)}`;

    // Crear la imagen del QR
    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt = 'Código QR generado';
    qrImg.classList.add('qr-code');

    // Limpiar contenedor antes de agregar un nuevo QR
    const qrContainer = document.getElementById('qr-code');
    qrContainer.innerHTML = "";
    qrContainer.appendChild(qrImg);
}
