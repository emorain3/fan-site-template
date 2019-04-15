

var pictures = ["../images/fa1.jpg", "../images/fa2.png", "../images/fa3.png", "../images/fa4.png"];
var num_pictures;
var current_pic = 0;

var changePic = (direction) => {
    current_pic += Number(direction);
    var slides = document.getElementsByClassName("slide");
    num_pictures = slides.length;

    if (current_pic < 0) {
        current_pic = num_pictures - 1;
    } 
    else if (current_pic >= num_pictures) {
        current_pic = 0;
    }


    var i = 0;
    while(i < num_pictures) {
        slides[i].style.display = "none";
        i++;
    }
    slides[current_pic].style.display = "block";
}





