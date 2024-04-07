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

function initMap() {
    
    var noroffOslo = {
        lat: 59.9126,
        lng: 10.7496
    };
    
    var map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: noroffOslo
        });
 
    var marker = new google.maps.Marker({
        position: noroffOslo,
        map: map
    });
}


