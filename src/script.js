async function downloadImage(
    imageSrc,
    nameOfDownload = 'segline-ss-inline.png',
  ) {
    const response = await fetch(imageSrc);
  
    const blobImage = await response.blob();
  
    const href = URL.createObjectURL(blobImage);
  
    const anchorElement = document.createElement('a');
    anchorElement.href = href;
    anchorElement.download = nameOfDownload;
  
    document.body.appendChild(anchorElement);
    anchorElement.click();
  
    document.body.removeChild(anchorElement);
    window.URL.revokeObjectURL(href);
  }
  
  const btn = document.getElementById('btn');
  
  btn.addEventListener('click', () => {
    downloadImage(
      'imgs/segline-ss-inline.png',
      'segline-ss-inline.png',
    )
      .then(() => {
        console.log('The image has been downloaded');
      })
      .catch(err => {
        console.log('Error downloading image: ', err);
      });
  });