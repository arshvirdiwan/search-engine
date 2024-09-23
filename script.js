document.addEventListener("DOMContentLoaded", () => {
    loadSearchHistory();
});
document.getElementById("search-btn").addEventListener("click", function() {
    let searchInput = document.getElementById("search-input").value;
    if (searchInput) {
        saveSearch(searchInput);
        displaySearchHistory();
        document.getElementById("search-input").value = ""; 
    }
});
function saveSearch(searchTerm) {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    searchHistory.push(searchTerm);
    localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
}
function loadSearchHistory() {
    let searchHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    let historyList = document.getElementById("search-history");
    historyList.innerHTML = "";
    searchHistory.forEach(term => {
        let listItem = document.createElement("li");
        listItem.textContent = term;
        historyList.appendChild(listItem);
    });
}
function displaySearchHistory() {
    loadSearchHistory();
}
document.getElementById("clear-history-btn").addEventListener("click", function() {
    localStorage.removeItem("searchHistory");
    displaySearchHistory();
});