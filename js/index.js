// 跟随下划线
(function () {

    var target = document.querySelector(".target");
    var links = document.querySelectorAll(".mynav a");
    var colors = ["#FFC600", "#FFC600", "#FFC600", "#FFC600", "#FFC600", "#FFC600", "#FFC600"];

    function mouseenterFunc() {
        if (!this.parentNode.classList.contains("active")) {
            for (var i = 0; i < links.length; i++) {
                if (links[i].parentNode.classList.contains("active")) {
                    links[i].parentNode.classList.remove("active");
                }
                links[i].style.opacity = "0.5";
            }

            this.parentNode.classList.add("active");
            this.style.opacity = "1";

            var width = this.getBoundingClientRect().width;
            var height = this.getBoundingClientRect().height;
            var left = this.getBoundingClientRect().left + window.pageXOffset;
            var top = this.getBoundingClientRect().top + window.pageYOffset;
            var color = colors[Math.floor(Math.random() * colors.length)];

            target.style.width = width + "px";
            target.style.height = height + "px";
            target.style.left = left + "px";
            target.style.top = top + "px";
            target.style.borderColor = color;
            target.style.transform = "none";
        }
    }

    for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
            return e.preventDefault();
        });
        links[i].addEventListener("mouseenter", mouseenterFunc);
    }

    function resizeFunc() {
        var active = document.querySelector(".mynav li.active");

        if (active) {
            var left = active.getBoundingClientRect().left + window.pageXOffset;
            var top = active.getBoundingClientRect().top + window.pageYOffset;

            target.style.left = left + "px";
            target.style.top = top + "px";
        }
    }

    window.addEventListener("resize", resizeFunc);
})();
//----------------------------------------------------------------------