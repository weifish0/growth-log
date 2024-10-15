document.addEventListener('DOMContentLoaded', () => {
    const dayListElement = document.getElementById('day-list');
    const markdownContentElement = document.getElementById('markdown-content');
    const converter = new showdown.Converter();

    // 從 day-list.json 讀取日記檔案清單
    fetch('./assets/articles/day-list.json')
        .then(response => response.json())
        .then(data => {
            const days = data.days;
            days.forEach(day => {
                // 生成左側的日期清單
                const listItem = document.createElement('li');
                listItem.classList.add('cursor-pointer', 'hover:text-blue-500');
                listItem.textContent = day.day;
                listItem.addEventListener('click', () => {
                    loadMarkdown(day.file);
                });
                dayListElement.appendChild(listItem);
            });
        });

    // 載入 Markdown 檔案並顯示
    function loadMarkdown(filename) {
        fetch(`./assets/articles/${filename}`)
            .then(response => response.text())
            .then(text => {
                const html = converter.makeHtml(text);
                markdownContentElement.innerHTML = html;
            })
            .catch(error => {
                markdownContentElement.innerHTML = `<p>Failed to load content: ${error}</p>`;
            });
    }

    // 預設載入第一個日記
    loadMarkdown('day0.md');
});