document.getElementById('item_menu').addEventListener('click', function () {
    document.getElementById('content_tab').classList.add('visible');
});

document.getElementById('close_tab').addEventListener('click', function () {
    document.getElementById('content_tab').classList.remove('visible');
});