document.addEventListener("DOMContentLoaded", function() {
    const texts = document.querySelectorAll('.flipping-text');
    let index = 0;

    function showNextText() {
        texts.forEach((text, idx) => {
            text.classList.remove('show');
            if (idx === index) {
                text.classList.add('show');
            }
        });
        index = (index + 1) % texts.length;
    }

    showNextText();
    setInterval(showNextText, 2500);
});
