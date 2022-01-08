
// Saves Bookmark
const saveBookmark = e => {
    // Prevent form from submitting
    e.preventDefault();
    
    // Get form values
    const siteName = document.getElementById('siteName').value;
    const siteURL = document.getElementById('siteURL').value;

    if (!validateForm(siteName, siteURL)) {
        return false;
    }

    const bookmark = {
        name: siteName,
        url: siteURL
    }

    // Add to local storage

    // Initialize array of Bookmarks
    if (localStorage.getItem('bookmarks') === null) {
        let bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    } else {
        // Add to exising array of Bookmarks
        let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    };

    // Clear fields
    document.getElementById('myform').reset();

    fetchBookmarks();
};

// Delete Bookmark
const deleteBookmark = url => {
    // Get bookmarks from localStorage
    let bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

    bookmarks.forEach(bookmark => {
        if (bookmark.url == url) {
            bookmarks.splice(bookmarks.indexOf(bookmark), 1);
        }
    });
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    // Re-fetch Bookmarks
    fetchBookmarks();
};

// Fetch bookmarks
const fetchBookmarks = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    const bookmarksResults = document.getElementById('bookmarksResults');

    // Build output to put into HTML
    bookmarksResults.innerHTML = '';

    bookmarks.forEach(bookmark => {
        const name = bookmark.name;
        const url = bookmark.url;

        bookmarksResults.innerHTML += '<div class="well mb-4">'+
                                      '<h3>' + name + 
                                      ' <a class="btn btn-sm btn-outline-primary" target="_blank" href="'+url+'">Visit</a> '+
                                      ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-sm btn-outline-danger" href="#">Remove</a> '+
                                      '</h3>' +
                                      '</div>';
    });
};

function showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.style = `text-align: center`;
    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.card-body');
    const form = document.querySelector('#myform');
    container.insertBefore(div, form);

    // Vanish after X time
    setTimeout(() => document.querySelector('.alert').remove(), 3000);
};

function validateForm(siteName, siteURL) {
    if (!siteName || !siteURL) {
        showAlert('Please fill in all fields', 'warning');
        return false;
    };

    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (!siteURL.match(regex)) {
        showAlert('Please enter a valid URL', 'warning');
        return false;
    };

    return true;
};

// Listen for submit
document.getElementById('myform').addEventListener('submit', saveBookmark);
