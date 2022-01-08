// DOM elements
const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// Search states.json and filter
const searchCapitals = async searchText => {
    const response = await fetch('../data/capitals.json');
    const countries = await response.json();

    // Get matches to current text input
    let matches = countries.filter(country => {
        const regex = new RegExp(`^${searchText}`, 'gi');
        return country.country.match(regex);
    });

    if (searchText.length == 0) {
        matches = [];
        matchList.innerHTML = '';
    };

    outputHTML(matches);
};

// Show results in HTML
const outputHTML = matches => {
    if (matches.length > 0) {
        const html = matches.map(match => `
            <div class="card card-body mb-1">
                <h4>${match.country}: <span class="text-primary">${match.city}</span></h4>
            </div>
        `).join('');

        matchList.innerHTML = html;
    };
};

search.addEventListener('input', () => searchCapitals(search.value));