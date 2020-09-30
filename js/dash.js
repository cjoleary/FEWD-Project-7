

// alert banner
const alertBanner = document.getElementById("alert");
    // create the html for the banner
    alertBanner.innerHTML =
        `
        <div class="alert-banner">
        <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks
        to complete</p>
        <p class="alert-banner-close">x</p>
        </div>
        `
    // alert banner event listener
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            setTimeout( function () {alertBanner.style.display = "none"}, 200);
        }
    });