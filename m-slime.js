const nav = document.querySelector("nav");

window.addEventListener("scroll",()=>{
    let scrolly = window.scrollY;
    // console.log(scrolly);

    if(scrolly > 300 ){
        nav.classList.add("active");
    }else {
        nav.classList.remove("active");
    }
});

// end nav section

// start slider section
const page1 = document.getElementById("page1"),
    page2 = document.getElementById("page2"),
    page3 = document.getElementById("page3");

const collections = document.querySelectorAll('.episodes-collection');
// console.log(collection);
const sliderbtns = document.querySelectorAll(".slider-btn");
// console.log(sliderbtns);


// Event Listener
sliderbtns.forEach(sliderbtn=>{
    // console.log(sliderbtn);
    sliderbtn.addEventListener("click",()=>{
        removebtnactive();
        sliderbtn.classList.add("active");
        let value = sliderbtn.getAttribute('data-target');
        // console.log(value);

        if(value === "one"){
            removepageactive();
            page1.classList.add("active");
        } else if(value === "two"){
            removepageactive();
            page2.classList.add("active");
        } else if(value === "three"){
            removepageactive();
            page3.classList.add("active");
        }

    });
});

// Remove function
function removepageactive(){
    collections.forEach(collection=>{
        collection.classList.remove("active");
    })
}

function removebtnactive(){
    sliderbtns.forEach(sliderbtn=>{
        sliderbtn.classList.remove("active");
    })
}

// end slider section