document.addEventListener('DOMContentLoaded', () => {
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const responseMessage = document.getElementById('responseMessage');

    // Function to handle "Yes" button click
    yesBtn.addEventListener('click', () => {
        // Nothing happens when this button is clicked now!
        // The buttons remain visible, and no message appears.
    });

    // Function to handle "Absolutely!" (No) button click
    noBtn.addEventListener('click', () => {
        responseMessage.textContent = "Awesome! You should flash me! 😉"; // Or whatever emoji you chose last
        responseMessage.classList.remove('hidden');
        responseMessage.classList.add('show');
        yesBtn.style.display = 'none'; // Hide the "Yes" button
        noBtn.style.display = 'none';  // Hide the "Absolutely" button
    });
});