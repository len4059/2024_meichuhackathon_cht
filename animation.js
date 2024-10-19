document.querySelectorAll('.img-container img').forEach((img) => {
    const altText = img.getAttribute('alt');
    const background = img.parentNode.querySelector('.background');
    if (altText === '0') {
        background.style.backgroundColor = 'rgba(76, 175, 80, 0.7)';
    } 
    else if (altText === '1') {
        background.style.backgroundColor = 'rgba(244, 67, 54, 0.7)';
    }
});