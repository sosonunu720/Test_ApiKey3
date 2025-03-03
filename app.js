const fetchPriceButton = document.getElementById('fetch-price');
const priceInfo = document.getElementById('price-info');

fetchPriceButton.addEventListener('click', async () => {
    const apiKey = process.env.GEMINI_API_KEY;
    const apiSecret = process.env.GEMINI_API_SECRET;

    if (!apiKey || !apiSecret) {
        priceInfo.innerHTML = '<p>Error: API key or secret not set.</p>';
        return;
    }

    try {
        const response = await fetchPriceFromGemini();
        priceInfo.innerHTML = `
            <h2>Current Price of Bitcoin (BTC):</h2>
            <p>${response.data.price} USD</p>
        `;
    } catch (error) {
        priceInfo.innerHTML = `<p>Error fetching data: ${error.message}</p>`;
    }
});

// Function to fetch data from Gemini API
async function fetchPriceFromGemini() {
    const url = 'https://api.gemini.com/v1/pubticker/btcusd'; // Endpoint for BTC price (adjust if needed)
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
