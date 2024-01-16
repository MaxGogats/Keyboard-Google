document.addEventListener('keydown', function(event) {
    // Check if the key is a number between 1 and 9
    if (event.key >= '1' && event.key <= '9') {
        console.log("You pressed: " + event.key);
        // You can perform further actions here based on the key pressed
    }
});
