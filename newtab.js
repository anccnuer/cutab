'use strict';
let clock = document.getElementById("clock");
function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    clock.innerText = hours + ":" + formatMinutes(minutes);
}

function formatMinutes(minutes) {
    return minutes < 10 ? '0' + minutes : minutes.toString();
}

setInterval(updateClock, 1000);

let searchEngine = [
    { id: "0", icon: "./icons/google.png", url: "https://www.google.com/search?q=" },
    { id: "1", icon: "./icons/baidu.png", url: "https://www.baidu.com/s?wd=" },
    { id: "2", icon: "./icons/Yandex.png", url: "https://yandex.com/search/?text=" },
    { id: "3", icon: "./icons/bing.png", url: "https://cn.bing.com/search?q=" },
]
let nowEngine = 3;
let engine = document.getElementById("search-change-btn");
function changeSearch() {
    if (nowEngine == 3) nowEngine = 0;
    else nowEngine++;
    engine.innerHTML = `<img src="${searchEngine[nowEngine].icon}" alt="" srcset="">`
}
engine.onclick = changeSearch;

function doSearch() {
    let input = document.getElementById("input-search");
    window.open(searchEngine[nowEngine].url + input.value);
}

function handleKeyPress(event) {
    if (event.keyCode === 13) {
        doSearch();
    }
}

let searchBtn = document.getElementById("search-btn");
searchBtn.onclick = doSearch;

let urls = [
    { name: "nodeseek", url: "https://www.nodeseek.com/" },
    { name: "assbbs", url: "https://assbbs.com/" },
    { name: "我的博客", url: "https://haomeng.life/" },
    { name: "my gpt", url: "https://ai.ccnu.eu.org/" },
    { name: "免费资源网", url: "https://freeaday.com//" },
    { name: "RSS", url: "http://rss.ccnu.eu.org/" },
    { name: "大佬论坛", url: "https://dalao.net/" },
    { name: "cloudflare", url: "https://cloudflare.com/" },
    { name: "Yan邮箱", url: "https://mail.yandex.com/" },
    { name: "B站", url: "https://www.bilibili.com/" },
    { name: "github", url: "https://github.com/" },
    { name: "free8", url: "https://free8.net/" },
]

urls.forEach(url => {
    let urlsEle = document.getElementById("urls");
    let urlHtml = `<div class="url">
        <a href="${url.url}">
        <div class="icon"><span>${url.name.slice(0, 1)}</span></div>
        </a>
        <span class="name">${url.name}</span>
    </div>`;
    urlsEle.innerHTML += urlHtml;
});