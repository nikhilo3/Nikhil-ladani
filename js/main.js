(function () {
    "use strict";

    // Spinner
    function spinner() {
        setTimeout(function () {
            var spinnerElement = document.getElementById('spinner');
            if (spinnerElement) {
                spinnerElement.classList.remove('show');
            }
        }, 1);
    }
    spinner();

    // Back to top button
    window.addEventListener('scroll', function () {
        var backToTopButton = document.querySelector('.back-to-top');
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
            backToTopButton.style.opacity = '1';
            backToTopButton.style.transition = 'opacity 0.5s';
        } else {
            backToTopButton.style.opacity = '0';
            setTimeout(function () {
                if (backToTopButton.style.opacity == '0') {
                    backToTopButton.style.display = 'none';
                }
            }, 500); // Match the fade out time with the CSS transition duration
        }
    });

    document.querySelector('.back-to-top').addEventListener('click', function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

})();


const downloadcv = document.querySelector('#downloadcv');
console.log(downloadcv);

const download = () => {
    const link = document.createElement('a');
    link.href = 'https://smallpdf.com/file#s=b415fccc-3a64-4fa1-b616-c0a432c050e2';
    link.download = 'nikhil ladani resume.pdf';
    link.click();
    link.remove();
}

downloadcv.addEventListener("click", (e) => {
    e.preventDefault();
    download();
})