async function downloadImage(imageSrc, nameOfDownload = 'segline-ss-inline.png') {
    // ... (função para download da imagem)
}

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', () => {
    downloadImage('imgs/segline-ss-inline.png', 'segline-ss-inline.png')
        .then(() => {
            console.log('A imagem foi baixada com sucesso');
        })
        .catch(err => {
            console.log('Erro ao baixar a imagem: ', err);
        });
});
