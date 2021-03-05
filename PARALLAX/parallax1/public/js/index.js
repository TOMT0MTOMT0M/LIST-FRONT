document.addEventListener("mousemove", parallax);

function parallax(e) {
    let svg = this.querySelector(".img");
    let speed = 15;
    let x = (window.innerWidth - e.pageX * speed) / 100;
    let y = (window.innerWidth - e.pageY * speed) / 100;
    svg.style.transform = `translateX(${x}px) translateY(${y}px)`
}