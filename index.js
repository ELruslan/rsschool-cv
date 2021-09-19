$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger,.header__menu').toggleClass('active');

    })
});
$(document).on("click", ".header__list", function () {
    $(".header__list").closest(".header__menu").removeClass("active").block();
    $('body').toggleClass('lock');
});
const skills = document.getElementById('skills');
const progressBar = document.querySelectorAll('.progress-bar');

function showProgress() {
    progressBar.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity = 1;
        progressBar.style.width = `${value}%`;
    })
}
function hideProgress() {
    progressBar.forEach(p => {
        p.style.opacity = 0;
        p.style.width = 0
    })
}

window.addEventListener('scroll', () => {
    const sectionPos = skills.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;


    if (sectionPos < screenPos) {
        showProgress();
    } else {
        hideProgress();
    }
})

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substr(1)

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}

