function myFunction() {
    if (x.matches) {
        document.body.style.backgroundColor = "yellow";
    }else {
        document.body.style.backgroundColor = "pink";
    }
};

var x = window.matchMedia("(max-width: 700px)");
myFunction(x);
x.addListener(myFunction);