// Get the navbar balance element
const navbarBalanceElement = document.getElementById('navbar-balance');
let navbarBalance = 5500; // Initial balance in the navbar

// Function to update navbar balance
function updateNavbarBalance(amount) {
    navbarBalance -= amount;
    navbarBalanceElement.innerHTML = `<img src="/B10A5-DOM-Quest-Build-and-Manipulate-main/assets/coin.png" alt="">${navbarBalance} BDT`;
}

// Function to handle donations for each section
function handleDonation(sectionBalanceId, amountInputId) {
    const donationInput = document.getElementById(amountInputId);
    const donationAmount = parseFloat(donationInput.value);
    const sectionBalanceElement = document.getElementById(sectionBalanceId);
    let sectionBalance = parseFloat(sectionBalanceElement.textContent.replace('BDT', '').trim());

    // Validate the donation amount
    if (isNaN(donationAmount) || donationAmount <= 0) {
        alert("Please enter a valid donation amount (a positive number).");
        return;
    }

    // Check if the donation exceeds available balance
    if (donationAmount > navbarBalance) {
        alert("You don't have enough balance to donate this amount.");
        return;
    }

    // Deduct from navbar balance
    updateNavbarBalance(donationAmount);

    // Add to section balance
    sectionBalance += donationAmount;
    sectionBalanceElement.innerHTML = `<img src="/B10A5-DOM-Quest-Build-and-Manipulate-main/assets/coin.png" alt="">${sectionBalance} BDT`;

    // Clear the input field after donation
    donationInput.value = '';
}

// Event listeners for donation buttons
document.getElementById('noakhali-donate').addEventListener('click', () => {
    handleDonation('noakhali-balance', 'noakhali-amount');
});

document.getElementById('feni-donate').addEventListener('click', () => {
    handleDonation('feni-balance', 'feni-amount');
});

document.getElementById('quota-donate').addEventListener('click', () => {
    handleDonation('quota-balance', 'quota-amount');
});
