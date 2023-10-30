function isElementInViewport(el, offset = 0) {
    var rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 - offset &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAnimation() {
    var introElement = document.querySelector('.intro');
    var introRect = introElement.getBoundingClientRect();
    var introHeight = introRect.height;

    if (window.scrollY < introHeight) {
        var introText = document.querySelector('.intro h1');
        if (!introText.classList.contains('fade-in-text')) {
            introText.classList.add('fade-in-text');
        }
    }

    var animatedElements = document.querySelectorAll('.animated');
    var animatedText = document.querySelectorAll('.animate-text');
    animatedElements.forEach(function(element) {
        if (isElementInViewport(element, 200)) {
            if (!element.classList.contains('fade-in')) {
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            }
        } else {
            if (element.classList.contains('fade-in')) {
                element.classList.remove('fade-in');
                element.classList.add('fade-out');
            }
        }
    });
    animatedText.forEach(function(text) {
        if (isElementInViewport(text)) {
            if (!text.classList.contains('fade-in-text')) {
                text.classList.add('fade-in-text');
                text.classList.remove('fade-out-text');
            }
        } else {
            if (text.classList.contains('fade-in-text')) {
                text.classList.remove('fade-in-text');
                text.classList.add('fade-out-text');
            }
        }
    });
}

checkAnimation();

window.addEventListener('scroll', checkAnimation);
