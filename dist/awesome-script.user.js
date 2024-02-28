// ==UserScript==
// @name        隱藏特定廣告
// @namespace   http://tampermonkey.net/
// @description 隱藏頁面上的特定廣告元素
// @match       *://eshop-prices.com/*
// @version     0.0.2
// @author      Nick Lin
// @grant       none
// ==/UserScript==

(async () => {
(function () {
'use strict';

window.addEventListener("load", () => {
  // 尋找所有匹配選擇器的元素
  const ads = document.querySelectorAll(".ads.games-list-item");

  // 遍歷這些元素並將它們隱藏
  ads.forEach(ad => {
    ad.style.display = "none";
  });
});

})();
})();
