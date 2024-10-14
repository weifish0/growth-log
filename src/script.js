fetch('./assets/articles/day0.md')
.then(response => response.text())
.then(markdown => {
    const converter = new showdown.Converter();
    const html = converter.makeHtml(markdown);
    document.getElementById('markdown-content').innerHTML += html;
})
.catch(error => {
    console.error('Error fetching the markdown file:', error);
});