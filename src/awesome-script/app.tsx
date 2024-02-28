window.addEventListener("load", () => {
  // 尋找所有匹配選擇器的元素
  const ads: NodeListOf<HTMLElement> = document.querySelectorAll(
    ".ads.games-list-item"
  );

  // 遍歷這些元素並將它們隱藏
  ads.forEach(ad => {
    ad.style.display = "none";
  });
});
