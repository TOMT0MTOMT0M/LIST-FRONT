document.querySelector('img').addEventListener('mousemove', title)


function title(e) {
    let title = document.querySelector(".title")
    let rect = e.target.getBoundingClientRect();
    let y = (e.clientY - rect.top);

    title.style.transform = `translate3d(0px, ${y}px, 0px)`

}