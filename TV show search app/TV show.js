//Credit to tvmaze.com for their api used in this implementation

const form = document.querySelector('#SearchForm');

//Event listener on form submit to send request at a specific api using axios
form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const images = document.querySelectorAll('img');
    removeImages(images);
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const result = await axios.get('https://api.tvmaze.com/search/shows', config);
    addImages(result.data);
    form.elements.query.value = '';
})

//function to loop and append link of the show on tvmaze and the image inside of the show found for the specific query string
function addImages(result) {
    for (res of result) {
        if (res.show.image) {
            const img = document.createElement('IMG');
            const link = document.createElement('a');
            img.src = res.show.image.medium;
            document.body.append(link);
            link.href = res.show.url;
            link.appendChild(img);
        }
    }
}

function removeImages(images) {
    for (img of images) {
        img.remove();
    }
}