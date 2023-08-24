function menu(){
    document.getElementById('menu').classList.toggle('open');
}

document.querySelectorAll('.img').forEach(pic => {
    pic.onclick = () => {
        overlay.classList.add('opened');
        info.textContent = pic.getAttribute('data-info');
        lightboximg.setAttribute('src', pic.getAttribute('src'))
    }
})

function closelightbox() {
    overlay.classList.remove('opened');
}