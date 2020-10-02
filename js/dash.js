

// alert banner
const alertBanner = document.getElementById("alert");
    // create the html for the banner
    alertBanner.innerHTML =
        `
        <div class="alert-banner">
        <p><strong>ALERT:</strong> You have <strong>6</strong> overdue tasks
        to complete</p>
        <p class="alert-banner-close">x</p>
        </div>
        `
    // alert banner event listener
    alertBanner.addEventListener('click', e => {
        const element = e.target;
        if (element.classList.contains("alert-banner-close")) {
            alertBanner.style.display = "none";
        }
    });

// notification pop up menu
    const notifications = document.getElementById("notifications");
    const notificationClose = document.querySelectorAll('.notifications-close');
    const badge = document.getElementById('badge');

    // when the user clicks the bell, toggle between showing the notification menu
    function myFunction() {
        notifications.classList.toggle("show");
        notifications.classList.toggle("hide");
    }

    // close individual notifications
    notificationClose.forEach( item => {
        item.addEventListener( 'click', (e) => {
            let notificationItems = document.querySelectorAll('#notification-items');
            for (let i = 0; i < notificationItems.length; i++) {
                    e.target.parentNode.remove();
            }
            if ( notificationItems.length < 2 ) {
                notifications.style.display = "none";
                badge.style.opacity = "0";
            }
            console.log(notificationItems.length)
        })
    });

// traffic line graph
const trafficCanvas = document.getElementById("trafficChart");

    // data for traffic line graph
    let trafficData = {
        labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500, 2500],
            backgroundColor: 'rgba(116, 119, 191, .3)',
            borderWidth: 1,
        }]
    };

    let trafficOptions = {
        aspectRatio: 2.5,
        animation: {
            duration: 0
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    };

    // create the chart
    let trafficChart = new Chart(trafficCanvas, {
        type: 'line',
        data: trafficData,
        options: trafficOptions
    });

// daily traffic bar graph
const dailyCanvas = document.getElementById("dailyChart");

    // data for daily traffic bar chart
    const dailyData = {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: '# of Hits',
            data: [75, 115, 175, 125, 225, 200, 100],
            backgroundColor: '#7477BF',
            borderWidth: 1
        }]
    };

    const dailyOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        legend : {
            display: false
        }
    }

    // create the chart
    let dailyChart = new Chart(dailyCanvas, {
        type: 'bar',
        data: dailyData,
        options: dailyOptions
    });

// mobile users doughnut chart
const mobileCanvas = document.getElementById("mobileChart");

    // data for mobile users chart
    const mobileData = {
        labels: ["Desktop", "Tablet", "Phones"],
        datasets: [{
            label: '# of Users',
            data: [2000, 550, 500],
            borderWidth: 0,
            backgroundColor: [
                '#7477BF',
                '#78CF82',
                '#51B6C8'
            ]
        }]
    };

    // chart legend
    const mobileOptions = {
        legend: {
            position: 'right',
            labels: {
                boxWidth: 20,
                fontStyle: 'bold'
            }
        }
    }

    // create the chart
    let mobileChart = new Chart(mobileCanvas, {
        type: 'doughnut',
        data: mobileData,
        options: mobileOptions
    });

// message user widget
const user = document.getElementById("userField");
const message = document.getElementById("messageField");
const send = document.getElementById("send");

    // send button click event listener
    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (user.value === "" && message.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (user.value === "" ) {
            alert("Please fill out user field before sending");
        } else if (message.value === "" ) {
            alert("Please fill out message field before sending");
        } else {
            alert(`Message successfully sent to: ${user.value}`);
            user.value = "";
            message.value = "";
        }
    });