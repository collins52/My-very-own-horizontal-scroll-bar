// const container = document.querySelector(".container");
// const right = document.getElementById("right");
// const left = document.getElementById("left");

// container.addEventListener("wheel", (event) => {
//     container.scrollLeft += evt.deltaX;
//     container.style.scrollBehavior = "auto";
// })

// right.addEventListener("click", (event) => {
//     container.scrollLeft += 511;
//     container.style.scrollBehavior = "smooth";

//      if(right.style.background = "blue"){
//         left.style.background = "purple"
//         right.style.background = "yellow"
//      }
// })
// left.addEventListener("click", (event) => {
//     container.scrollLeft -= 511;
//     container.style.scrollBehavior = "smooth";

//     if (left.style.background = "purple"){
//         left.style.background = "red";
//         right.style.background = "blue";
//      }
// })
/* this was the code i did on my own but with a little bit of help sha but it's wasn't with chat gpt i just looked at one of my project code but i understand it. !practice make perfect */


// right.addEventListener("click", function(){
//     if (right.style.background = "blue"){
//         right.style.background = "yellow";
//         left.style.background = "purple";
//     }
// })
// left.addEventListener("click", function(){
//     if(left.style.background = "purple"){
//         left.style.background = "red"
//         right.style.background = "blue"
//     }
// })

const container = document.querySelector(".container");
const right = document.getElementById("right");
const left = document.getElementById("left");

container.addEventListener("wheel", (event) => {
    container.scrollLeft += evt.deltaX;
    container.style.scrollBehavior = "auto";
})

right.addEventListener("click", (event) => {
    container.scrollLeft += 1000;
    container.style.scrollBehavior = "smooth";
})
left.addEventListener("click", (event) => {
    container.scrollLeft -= 1000;
    container.style.scrollBehavior = "smooth";
})


