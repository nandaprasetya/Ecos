gsap.registerPlugin(ScrollTrigger);

var lebarWindow = window.innerWidth;

// Animasi Masuk

if (lebarWindow >= 768) {
  const animation = gsap.to(".imgsave1", {
    duration: 3,
    translateY: "0px",
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: ".imgsave1",
    toggleActions: "restart none reverse none",
    start: "20% 100%",
    scrub: true,
    animation: animation,
  });

  const animation2 = gsap.to(".img-ancaman1", {
    duration: 3,
    translateY: "0px",
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: ".img-ancaman1",
    toggleActions: "restart none restart none",
    start: "30% 100%",
    scrub: true,
    animation: animation2,
  });

  const animation3 = gsap.to(".img-ancaman2", {
    duration: 3,
    translateY: "0px",
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: ".img-ancaman2",
    toggleActions: "restart none restart none",
    start: "30% 100%",
    scrub: true,
    animation: animation3,
  });

  const animation4 = gsap.to(".text-ancaman", {
    duration: 5,
    translateX: "0px",
    opacity: 1,
    ease: "power4.out",
  });

  ScrollTrigger.create({
    trigger: ".text-ancaman",
    toggleActions: "restart none restart none",
    start: "10% 100%",
    end: "120% bottom",
    scrub: true,
    animation: animation4,
  });


  // Pointer Script

  document.addEventListener("mousemove", function (event) {
    var objek = document.getElementById("pointer");
    var posisiX = event.clientX;
    var posisiY = event.clientY;

    objek.style.left = posisiX - objek.offsetWidth / 2 + "px";
    objek.style.top = posisiY - objek.offsetHeight / 2 + "px";
  });

  $(".pointer-hover").mouseenter(function () {
    $("#pointer").addClass("pointer-area-hover");
    $("#content-pointer").addClass("pointer-hovering");
  });

  $(".pointer-hover").mouseleave(function () {
    $("#pointer").removeClass("pointer-area-hover");
    $("#content-pointer").removeClass("pointer-hovering");
  });
}

const animation5 = gsap.to(".box-kegiatan", {
  duration: 1,
  translateX: "-100%",
  opacity: 1,
  ease: "power4.out",
});

ScrollTrigger.create({
  trigger: ".box-kegiatan",
  toggleActions: "restart none restart none",
  start: "80% 100%",
  end: "200%   top",
  scrub: true,
  animation: animation5,
});

function delay(n) {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

let transition1 = document.getElementById("transition1");
let transition2 = document.getElementById("transition2");
let transition3 = document.getElementById("transition3");
let transition4 = document.getElementById("transition4");
let transition5 = document.getElementById("transition5");
var dataHallo = ["Hello", "Hai", "Bonjour", "Ni Hao", "Ohayo", "Ciao"]; // Array dengan teks yang ingin diganti
var index = 0; // Indeks saat ini dalam array
var bawahLoader = document.getElementById("loader-bwh"); // Untuk Animasi Bawah Loader
var areaLoader = document.getElementById("area-loader");
var areaLoaderBwh = document.getElementById("area-loader-bwh");
var navbtn = document.getElementById("nav-btn");
var navmenu = document.getElementById("nav-menu");
var navclose = document.getElementById("nav-close");


// Script Teks Awal Pada Home
setTimeout(() => {
  function ubahTeks() {
    var textHallo = document.getElementById("paragraf-hallo");
    textHallo.innerHTML = dataHallo[index];
    index = index + 1;
    if (index == 6) {
      clearInterval(penambah);
    }
  }

  a = 230 * 6;
  console.log(a);
  var penambah = setInterval(ubahTeks, 230);
}, 400);

setTimeout(() => {
  var textHallo = document.getElementById("paragraf-hallo");
  textHallo.innerHTML = "#SAVEWORLD";
}, 1890);


// Animasi Loader Teks Home Bagian Bawah
setTimeout(() => {

  bawahLoader.style.borderRadius = "10%";
  areaLoader.style.transform = "translateY(-100%)";
  areaLoaderBwh.style.height = "40vh";
  gsap.from(".text-home", { duration: 3, y: "100%", ease: "power4.out" });
}, 2400);


// Script Animasi Masuk Pada Website

function animmsk() {
  setTimeout(() => {
    transition1.style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
  }, 250);

  setTimeout(() => {
    transition2.style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
  }, 350);

  setTimeout(() => {
    transition3.style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
  }, 450);

  setTimeout(() => {
    transition4.style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
  }, 550);

  setTimeout(() => {
    transition5.style.clipPath =
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)";
  }, 650);
}

$(document).ready(function(){
  animmsk();
});


// Animasi Keluar pada Website

function animkeluar() {
  setTimeout(() => {
    transition1.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
  }, 250);

  setTimeout(() => {
    transition2.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
  }, 350);

  setTimeout(() => {
    transition3.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
  }, 450);

  setTimeout(() => {
    transition4.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
  }, 550);

  setTimeout(() => {
    transition5.style.clipPath = "polygon(0 100%, 100% 100%, 100% 0, 0 0)";
  }, 650);
}

// Animasi Untuk Hover Navigation Button

navbtn.addEventListener("mouseenter", () => {
  const barnav1 = document.getElementById("nav-bar1");
  const barnav2 = document.getElementById("nav-bar2");
  barnav1.classList.add("margin0");
  barnav2.classList.add("margin0");
  barnav1.style.width = "80%";
  barnav2.style.width = "80%";
});

navbtn.addEventListener("mouseleave", () => {
  const barnav1 = document.getElementById("nav-bar1");
  const barnav2 = document.getElementById("nav-bar2");
  barnav1.classList.remove("margin0");
  barnav2.classList.remove("margin0");
  barnav1.style.width = "60%";
  barnav2.style.width = "60%";
});


// Script Untuk memunculkan Navigation Button

window.addEventListener("scroll", function () {
  if (window.scrollY >= 80) {
    navbtn.style.transform = "translateY(0px)";
  } else {
    navbtn.style.transform = "translateY(-200px)";
  }
});

navbtn.addEventListener("click", () => {
  navmenu.classList.toggle("nav-open");
});

navclose.addEventListener("click", () => {
  navmenu.classList.remove("nav-open");
});

let elements = document.querySelectorAll(".text");

elements.forEach((element) => {
  let innerText = element.innerText;
  element.innerHTML = "";

  let textContainer = document.createElement("div");
  textContainer.classList.add("block");

  for(let letter of innerText){
    let span = document.createElement("span");
    span.innerText = letter.trim() === "" ? "\xa0" : letter;
    span.classList.add("letter");
    textContainer.appendChild(span);
  }
  element.appendChild(textContainer);
  element.appendChild(textContainer.cloneNode(true));
});

elements.forEach((element) => {
  element.addEventListener("mouseover", ()=>{
    element.classList.remove("play");
  });
});