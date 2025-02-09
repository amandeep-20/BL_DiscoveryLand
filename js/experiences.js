document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".disc-gall-header");
    const darkLogo = document.querySelector(".disc-gall-header-nav-dark-logo");
    const lightLogo = document.querySelector(".disc-gall-header-nav-white-logo");
    let lastScrollY = window.scrollY;
    let ticking = false; // Improves performance using requestAnimationFrame

    function handleScroll() {
        let scrollY = window.scrollY;

        if (scrollY > 50) {
            header.style.backgroundColor = "white";
            header.style.color = "black";

            header.querySelectorAll(".disc-gall-header-nav-links div").forEach(link => {
                link.style.color = "black";
            });

            lightLogo.style.display = "none";
            darkLogo.style.display = "block";
        } else {
            header.style.backgroundColor = "transparent";
            header.style.color = "white";

            header.querySelectorAll(".disc-gall-header-nav-links div").forEach(link => {
                link.style.color = "white";
            });

            lightLogo.style.display = "block";
            darkLogo.style.display = "none";
        }

        if (scrollY > 500) {
            header.style.transform = "translateY(-100%)";
        } else {
            header.style.transform = "translateY(0)";
        }

        lastScrollY = scrollY;
        ticking = false;
    }

    window.addEventListener("scroll", function () {
        if (!ticking) {
            requestAnimationFrame(handleScroll);
            ticking = true;
        }
    });
});




document.getElementById("responsiveLink").addEventListener("click", function (event) {
    if (window.innerWidth >= 350) {
        event.preventDefault(); // Prevent navigation
    }
});

