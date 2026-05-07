// ================= NAVBAR SCROLL =================
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    if (!nav) return;

    if (window.scrollY > 50) {
        nav.style.background = "#080875";
        nav.style.padding = "10px 0";
    } else {
        nav.style.background = "rgba(8, 8, 117, 0.7)";
        nav.style.padding = "15px 0";
    }
});


// ================= SCROLL TO TOP =================
const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}


// ================= SCROLL REVEAL =================
const elements = document.querySelectorAll(".card, .feature_item, .client_box");

function reveal() {
    let windowHeight = window.innerHeight;

    elements.forEach(el => {
        let elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

// initial state
elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "0.6s";
});

window.addEventListener("scroll", reveal);


// ================= ACTIVE NAV LINK =================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        let sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {
            current = section.className;
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


// ================= TYPING EFFECT =================
const heroTitle = document.querySelector(".header-section h1");

if (heroTitle) {
    let text = "Build Your Landing Page With Bootslander";
    let i = 0;

    heroTitle.innerHTML = "";

    function typing() {
        if (i < text.length) {
            heroTitle.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50);
        }
    }

    typing();
}


// ================= COUNTER ANIMATION =================
const counters = document.querySelectorAll(".client_box h3");

function startCounter() {
    counters.forEach(counter => {
        let target = +counter.innerText;
        let count = 0;

        let update = () => {
            let increment = target / 100;

            if (count < target) {
                count += increment;
                counter.innerText = Math.floor(count);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
}

let counterStarted = false;

window.addEventListener("scroll", () => {
    let section = document.querySelector(".clients");

    if (section && !counterStarted) {
        let sectionTop = section.offsetTop - 300;

        if (window.scrollY >= sectionTop) {
            startCounter();
            counterStarted = true;
        }
    }
});
const elements = document.querySelectorAll(".card, .feature_item, .client_box");

function reveal() {
    let windowHeight = window.innerHeight;

    elements.forEach(el => {
        let top = el.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
}

elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(50px)";
    el.style.transition = "all 0.8s ease-out";
});

window.addEventListener("scroll", reveal);