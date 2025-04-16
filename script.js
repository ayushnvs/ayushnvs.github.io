document.addEventListener('DOMContentLoaded', () => {
    const searchInputNavbar = document.querySelector('.search-bar input[type="text"]');
    const searchDialog = document.getElementById('search-dialog');
    const dialogSearchInput = document.getElementById('dialog-search-input');

    // Function to open the search dialog
    function openSearchDialog() {
        searchDialog.classList.add('open');
        dialogSearchInput.focus(); // Focus on the input in the dialog
    }

    // Function to close the search dialog
    function closeSearchDialog() {
        searchDialog.classList.remove('open');
    }

    // Event listener to open the dialog when the navbar search input is clicked
    searchInputNavbar.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent the click from immediately closing the dialog
        openSearchDialog();
    });

    // Event listener to close the dialog when clicking outside the dialog or search bar
    document.addEventListener('click', (event) => {
        if (!searchDialog.contains(event.target) && !document.querySelector('.search-bar-container').contains(event.target)) {
            closeSearchDialog();
        }
    });

    // Event listener to close the dialog when the Escape key is pressed
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeSearchDialog();
        }
    });

    // Keep focus within the dialog when it's open (accessibility)
    searchDialog.addEventListener('keydown', (event) => {
        const focusableElements = searchDialog.querySelectorAll('input[type="text"], button');
        const firstFocusable = focusableElements[0];
        const lastFocusable = focusableElements[focusableElements.length - 1];

        if (event.key === 'Tab' && event.shiftKey) {
            if (document.activeElement === firstFocusable) {
                lastFocusable.focus();
                event.preventDefault();
            }
        } else if (event.key === 'Tab') {
            if (document.activeElement === lastFocusable) {
                firstFocusable.focus();
                event.preventDefault();
            }
        }
    });

    // Optional: Implement actual search functionality here
    dialogSearchInput.addEventListener('input', (event) => {
        const searchTerm = event.target.value.toLowerCase();
        // In a real application, you would filter search results based on this term
        console.log('Searching for:', searchTerm);
        // You would then update the content of the .search-dialog-content
    });
});