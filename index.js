const apiKey = "YOUR_API_KEY";
const apiUrl = "https://api.thecatapi.com/v1/images/search";
const loadCatBtn = document.getElementById('load-cat-btn');
const catImage = document.getElementById('cat-image');
const loadingMessage = document.getElementById('loading-message');
async function fetchCatImage() {
    loadingMessage.style.display = 'block';
    catImage.style.display = 'none';

    try {
    const response = await fetch(apiUrl, {
        headers: {
        "x-api-key": apiKey
        }
    });
    if (response.ok) {
        const data = await response.json();
        const catUrl = data[0].url;
        catImage.src = catUrl;
        catImage.style.display = 'block';
    } else {
        alert("Erro ao carregar a imagem!");
    }
    } catch (error) {
    alert("Erro na requisição à API: " + error);
    } finally {
    loadingMessage.style.display = 'none';
    }
}
loadCatBtn.addEventListener('click', fetchCatImage);