function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, fnCallback)
        }, 100);
    } else if (typeof fnCallback == 'function') {
        fnCallback();
    }
}

function startTypingAnimation() {
    var text = "Week Two Blog Post";
    typeWriter(text, 0, function () {
    });
}

startTypingAnimation();


const box = document.getElementById("animated-box");
        let isAnimating = false;

        box.addEventListener('click', () => {
            if (!isAnimating) {
                isAnimating = true;
                box.style.transform = 'translateX(200px)';
                
                setTimeout(() => {
                    isAnimating = false;
                    box.style.transform = 'translateX(0)';
                }, 1000);
            }
        });

