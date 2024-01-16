window.onload = function() {
    appendDivsToSearchResultTitleLinks();
}

function appendDivsToSearchResultTitleLinks() {
    const links = getSearchResultTitleLinks();
    // instead of filling each text node with 'test', set the 'test' instead to 'a-zA-Z0-9' 
    const divs = Array.from(links).map((link, index) => {
        const button = document.createElement("button");
        const indexStr = (index + 1).toString(); 
        const text = document.createTextNode(indexStr);
        
        button.appendChild(text);
        link.appendChild(button);
    });
};

function getSearchResultTitleLinks() {
    const links = document.querySelectorAll('div#search a'); 
    return links;
}

document.addEventListener('keydown', function(event) {
    if (event.key >= '1' && event.key <= '9') {
        // Using the key pressed, click on the corresponding link
        const index = parseInt(event.key) - 1;
        const links = getSearchResultTitleLinks();
        const link = links[index];
        link.click();
        console.log("You pressed: " + event.key);
    }
});
