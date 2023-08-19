function showConsignForm() {
    const consignForm = document.getElementById("consign-form");
    const webcamContainer = document.getElementById("webcam-container");
    const labelContainer = document.getElementById("label-container");
    const classificationResult = document.getElementById("classification-result");

    consignForm.style.display = "block";
    webcamContainer.style.display = "none";
    labelContainer.style.display = "none";
    classificationResult.style.display = "none";
}

function showSellForm() {
    // Implement your logic for selling
    console.log("Selling option selected");
}

function showUploadForm() {
    const consignForm = document.getElementById("consign-form");
    const webcamContainer = document.getElementById("webcam-container");
    const labelContainer = document.getElementById("label-container");
    const classificationResult = document.getElementById("classification-result");

    consignForm.style.display = "block";
    webcamContainer.style.display = "none";
    labelContainer.style.display = "none";
    classificationResult.style.display = "none";
}

function showWebcamForm() {
    const consignForm = document.getElementById("consign-form");
    const webcamContainer = document.getElementById("webcam-container");
    const labelContainer = document.getElementById("label-container");
    const classificationResult = document.getElementById("classification-result");

    consignForm.style.display = "none";
    webcamContainer.style.display = "block";
    labelContainer.style.display = "block";
    classificationResult.style.display = "block";

    init(); // Start the webcam authentication process
}

// ... (Remaining code if needed)
// After successful authentication
// function showApprovedTag() {
//     const classificationResult = document.getElementById("classification-result");
//     const approvalTag = document.createElement("div");
    
//     if (isAuthenticationSuccessful) {
//         approvalTag.textContent = "Approved";
//         approvalTag.classList.add("approved-tag");
//     } else {
//         approvalTag.textContent = "Rejected";
//         approvalTag.classList.add("rejected-tag");
//     }
    
//     classificationResult.appendChild(approvalTag);
// }


function showRetryLaterMessage() {
    const classificationResult = document.getElementById("classification-result");
    classificationResult.innerHTML = "<p class='retry-later-message'>Try again later</p>";
}

function retryAuthentication() {
    authenticationAttempts = 0;
    isAuthenticationSuccessful = false;
    webcam.play(); // Restart the webcam for the next attempt
    document.getElementById("approval-tag").style.display = "none"; // Hide the "Approved" tag
}
