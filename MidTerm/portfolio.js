    const myButton = document.getElementById("myButton");
    myButton.addEventListener('click', function() {
        let myDescription = document.getElementById('myDescription')
        if (myDescription.style.display == "none") {
            myDescription.style.display = "block";
        } else {
            myDescription.style.display = "none";
        }
    })
