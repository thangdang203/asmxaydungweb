var arr_slide = [
    "img/anh0.png0",
    "img/anh1.1_1.png",
    "img/anh2.2_2.png",
    "img/anh3.3_3.png",
    "img/anh3.4_4.png",
    "img/anh3.5_5.png",
];
var index = 1;
function Prev() {
    index--;
    if (index < 1) index = arr_slide.length - 1;
    document.getElementById("slide").src = arr_slide[index];
}
function Next() {
    index++;
    if (index >= arr_slide.length) index = 1;
    var slide = document.getElementById("slide");
    slide.src = arr_slide[index];
}
setInterval("Next()", 3000);