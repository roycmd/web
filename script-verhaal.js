    var bar = document.getElementById("bar");

    function progressIndicator() {

        var scroll = document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        percentage = (scroll / height) * 100;
        var progressbar = percentage;

        document.getElementById("bar").style.width = progressbar + "%";
    }
    window.addEventListener("scroll", progressIndicator);
