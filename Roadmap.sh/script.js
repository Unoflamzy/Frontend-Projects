const tabs = document.querySelectorAll('.tab-link');
const tabContents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs and contents
        tabs.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Add active class to clicked tab
        tab.classList.add('active');

        // Get tab ID and show corresponding content
        const tabID = tab.getAttribute('data-tab');
        document.getElementById(`tab-content-${tabID.slice(-1)}`).classList.add('active');
    });
});
