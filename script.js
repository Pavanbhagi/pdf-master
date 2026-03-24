function openTool(toolType) {
    const modal = document.getElementById('tool-modal');
    const title = document.getElementById('modal-title');
    
    modal.style.display = "block";
    
    // Customize the modal based on which tool was clicked
    if(toolType === 'img-to-pdf') {
        title.innerText = "Convert JPG to PDF";
    } else if(toolType === 'word-to-pdf') {
        title.innerText = "Convert Word to PDF";
    } else {
        title.innerText = "PDF Tool";
    }
}

function closeTool() {
    // document.getElementById('tool-modal').style.display = "none";
    document.getElementById('drop-zone').style.borderColor = "#4285F4";
    document.getElementById('drop-zone').style.background = "#e8f0fe";
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
    const modal = document.getElementById('tool-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
