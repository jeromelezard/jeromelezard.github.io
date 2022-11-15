const banner = document.getElementById("top");
const topBanner = document.getElementById("topNav");
const icons = document.getElementById("icons");
const header = document.getElementById("header");
const subHeader = document.getElementById("subHeader");
const arrow = document.getElementById("arrow");
const navTitle = document.getElementById("navTitle");
const navIcons = document.getElementById("navIcons");

HTMLElement.prototype.alpha = function (a) {
    current_color = getComputedStyle(this).getPropertyValue("background-color");
    match = /rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*\d+[\.\d+]*)*\)/g.exec(
        current_color
    );
    a = a > 1 ? a / 100 : a;
    this.style.backgroundColor =
        "rgba(" + [match[1], match[2], match[3], a].join(",") + ")";
};

document.addEventListener("DOMContentLoaded", () => {
    navTitle.classList.remove("hide");
    navTitle.classList.remove("hide");
});
document.body.addEventListener("touchmove", onScroll);
document.addEventListener("scroll", onScroll);
function onScroll() {
    console.log(
        document.getElementById("location").getBoundingClientRect().top
    );
    if (window.scrollY >= 450 && window.scrollY <= 1050) {
        topBanner.alpha((-2 / 15) * window.scrollY + 160);
        navTitle.style.opacity = 1;
    } else if (window.scrollY > 1050) {
        topBanner.alpha(20);
    } else if (window.scrollY < 450) {
        topBanner.alpha(100);
    }
    if (document.getElementById("location").getBoundingClientRect().top <= 20) {
        navTitle.classList.remove("hide-title");
        navIcons.classList.remove("hide-icons");
    } else {
        navTitle.classList.add("hide-title");
        navIcons.classList.add("hide-icons");
    }
}

arrow.addEventListener("click", () => {
    document.getElementById("location").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("emailBody").addEventListener("click", () => {
    let email = "jerome.lezard@gmail.com";
    navigator.clipboard.writeText(email);

    document.getElementById("copiedBody").innerHTML = "Email copied!";
});
document.getElementById("emailNav").addEventListener("click", () => {
    let email = "jerome.lezard@gmail.com";
    navigator.clipboard.writeText(email);

    document.getElementById("copiedNav").innerHTML = "Email copied!";
});
document.getElementById("icons").addEventListener("mouseleave", () => {
    document.getElementById("copiedBody").innerHTML = "Click to copy email";
});
document.getElementById("navIcons").addEventListener("mouseleave", () => {
    document.getElementById("copiedNav").innerHTML = "Click to copy email";
});
