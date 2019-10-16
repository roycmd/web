    var button = document.getElementById("filter-button");
    var hover = document.getElementById("primary-button");
    var story = document.getElementById("verhaal");


    //Functies
    function showFilter() {
        var filter = document.getElementById("filter-test");

        if (filter.style.display === "none") {
            filter.style.display = "block";
        } else {
            console.log("Button works")
            filter.style.display = "none";
        }
    }

    function mouseOver() {
        this.style.backgroundColor = "#CA2B55";
    }

    function mouseOut() {
        this.style.backgroundColor = "#FF3268";
    }

    function shadowOver() {
        this.style.boxShadow = "0 6px 20px 0 rgba(0, 0, 0, 0.20)";
    }

    function shadowOut() {
        this.style.boxShadow = "0 0 0 0";
    }



    //Alle event listeners

    button.addEventListener("click", showFilter);
    hover.addEventListener("mouseover", mouseOver);
    hover.addEventListener("mouseout", mouseOut);
    story.addEventListener("mouseover", shadowOver);
    story.addEventListener("mouseout", shadowOut);
