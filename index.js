window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('small-header');
    } else {
        header.classList.remove('small-header');
    }
});


function toggleDescription() {
    var moreText = document.getElementById("more-text");
    var btnText = document.getElementById("view-more-btn");

    if (moreText.style.display === "none") {
        moreText.style.display = "inline";
        btnText.innerHTML = "View Less &#x25B2;"; 
    } else {
        moreText.style.display = "none";
        btnText.innerHTML = "View More &#x25BC;"; 
    }
}




