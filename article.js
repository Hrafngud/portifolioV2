document.addEventListener("DOMContentLoaded", function () {
    const article = JSON.parse(localStorage.getItem('currentArticle'));
    if (article) {
        document.getElementById('article-title').innerText = article.title;
        document.getElementById('article-description').innerText = article.description;
    }
});
