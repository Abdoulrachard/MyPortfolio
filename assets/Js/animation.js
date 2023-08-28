// window.addEventListener("load", function() {
//     const preloader = document.querySelector(".preloader");
//     preloader.classList.add("preload-finish");
//   });
new fJs.NumberAutoCount({
    timeout: 500 
});
new fJs.AutoWriteText();
new fJs.Intersection({
    elt: '.revealElement',
    class: "animate__animated animate__fadeInUp opacity-100",
    root: null,
    ratio: 0.2,
    rootMargin: '0px',
    threshold: 0.9,
});


