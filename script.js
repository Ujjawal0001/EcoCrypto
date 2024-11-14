
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top < window.innerHeight && rect.bottom > 0;
}


window.addEventListener('scroll', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.fade-in').forEach(el => {
        if (isInViewport(el)) {
            el.classList.add('active');
        }
    });
});
