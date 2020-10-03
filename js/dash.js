

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
    const notificationsList = document.getElementById("notifications-list");
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
                notificationsList.innerHTML = `<li id="notification-items">No new notifications</li>`;
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
const userField = document.getElementById("userField");
const messageField = document.getElementById("messageField");
const send = document.getElementById("send");

    // send button click event listener
    send.addEventListener('click', () => {
        // ensure user and message fields are filled out
        if (userField.value === "" && messageField.value === "") {
            alert("Please fill out user and message fields before sending");
        } else if (userField.value === "" ) {
            alert("Please fill out user field before sending");
        } else if (messageField.value === "" ) {
            alert("Please fill out message field before sending");
        } else {
            alert(`Message successfully sent to: ${userField.value}`);
            userField.value = "";
            messageField.value = "";
        }
    });

    // search for user autocomplete functionality
    const users = [ "Victoria Chambers", "Dale Byrd", "Dawn Wood", "Dan Oliver" ];

    function autocomplete(inp, arr) {
        /*the autocomplete function takes two arguments,
        the text field element and an array of possible autocompleted values:*/
        var currentFocus;
        /*execute a function when someone writes in the text field:*/
        inp.addEventListener("input", function(e) {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", "autocomplete-list");
            a.setAttribute("class", "autocompleteItems");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) {
              /*check if the item starts with the same letters as the text field value:*/
              if (arr[i].toLowerCase().indexOf(val) > -1 || arr[i].toUpperCase().indexOf(val) > -1) {
                /*create a DIV element for each matching element:*/
                b = document.createElement("DIV");
                /*display matches*/
                b.innerHTML =  arr[i].substr(0, val.length);
                b.innerHTML += arr[i].substr(val.length);
                /*insert a input field that will hold the current array item's value:*/
                b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                /*execute a function when someone clicks on the item value (DIV element):*/
                    b.addEventListener("click", function(e) {
                    /*insert the value for the autocomplete text field:*/
                    inp.value = this.getElementsByTagName("input")[0].value;
                    /*close the list of autocompleted values,
                    (or any other open lists of autocompleted values:*/
                    closeAllLists();
                });
                a.appendChild(b);
              }
            }
        });

        /*execute a function presses a key on the keyboard:*/
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById( "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) {
              /*If the arrow DOWN key is pressed,
              increase the currentFocus variable:*/
              currentFocus++;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 38) { //up
              /*If the arrow UP key is pressed,
              decrease the currentFocus variable:*/
              currentFocus--;
              /*and and make the current item more visible:*/
              addActive(x);
            } else if (e.keyCode == 13) {
              /*If the ENTER key is pressed, prevent the form from being submitted,*/
              e.preventDefault();
              if (currentFocus > -1) {
                /*and simulate a click on the "active" item:*/
                if (x) x[currentFocus].click();
              }
            }
        });
        function addActive(x) {
          /*a function to classify an item as "active":*/
          if (!x) return false;
          /*start by removing the "active" class on all items:*/
          removeActive(x);
          if (currentFocus >= x.length) currentFocus = 0;
          if (currentFocus < 0) currentFocus = (x.length - 1);
          /*add class "autocomplete-active":*/
          x[currentFocus].classList.add("autocompleteActive");
        }
        function removeActive(x) {
          /*a function to remove the "active" class from all autocomplete items:*/
          for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocompleteActive");
          }
        }
        function closeAllLists(elmnt) {
          /*close all autocomplete lists in the document,
          except the one passed as an argument:*/
          var x = document.getElementsByClassName("autocompleteItems");
          for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
            }
          }
        }
        /*execute a function when someone clicks in the document:*/
        document.addEventListener("click", function (e) {
            closeAllLists(e.target);
        });
    }

    // Pass the users array as the second parameter of the autocomplete function
    autocomplete(userField, users);