window.onload = cursor;
let cursorPOS = document.querySelector(".cursor");

function cursor() {
    document.onmousemove = getCursorXY;

    function getCursorXY(e) {
        let x = (window.Event) ? e.pageX : e.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
        let y = (window.Event) ? e.pageY : e.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
        setTimeout(function() {
            cursorPOS.style.opacity = "1";
            cursorPOS.style.transform = `translate(${x}px,${y}px)`;
        }, 50);
    }
}