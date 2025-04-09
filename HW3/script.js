let openUrl = "https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindTypeJ&category=6";

let fullData = [];      // 所有原始資料
let filteredData = [];  // 過濾後資料（搜尋用）
let currentPage = 1;
const itemsPerPage = 10;

fetch(openUrl)
  .then(res => res.json())
  .then(data => {
    fullData = data;
    filteredData = data;
    renderTable();
  });

function renderTable() {
  const tableBody = document.querySelector("#csie tbody");
  tableBody.innerHTML = "";

  let startIndex = (currentPage - 1) * itemsPerPage;
  let endIndex = startIndex + itemsPerPage;
  let pageData = filteredData.slice(startIndex, endIndex);

  pageData.forEach(item => {
    const row = tableBody.insertRow();
    row.insertCell(0).innerHTML = item.title;
    row.insertCell(1).innerHTML = item.showInfo[0]?.location || "";
    row.insertCell(2).innerHTML = item.showInfo[0]?.price || "";
  });

  updatePageInfo();
}

function updatePageInfo() {
  let totalPages = Math.ceil(filteredData.length / itemsPerPage);
  document.getElementById("pageInfo").innerText = `第 ${currentPage} / ${totalPages} 頁`;
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

function nextPage() {
  let totalPages = Math.ceil(filteredData.length / itemsPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

function handleSearch() {
  const keyword = document.getElementById("searchInput").value.trim();
  if (keyword === "") {
    filteredData = fullData;
  } else {
    filteredData = fullData.filter(item =>
      item.title.includes(keyword)
    );
  }
  currentPage = 1; // 重設到第1頁
  renderTable();
}