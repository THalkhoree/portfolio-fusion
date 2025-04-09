// Feed URLs using rss2json that work without a key
const feeds = {
    "BBC World News": "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/news/world/rss.xml",
    "NASA Breaking News": "https://api.rss2json.com/v1/api.json?rss_url=https://www.nasa.gov/rss/dyn/breaking_news.rss",
    "NYT Home": "https://api.rss2json.com/v1/api.json?rss_url=https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
  };
  
  const feedSelector = document.getElementById("feedSelector");
  const feedDisplay = document.getElementById("feedDisplay");
  
  // Load initial feed on page load
  window.addEventListener("load", () => {
    fetchFeed(feedSelector.value);
  });
  
  feedSelector.addEventListener("change", () => {
    fetchFeed(feedSelector.value);
  });
  
  function fetchFeed(url) {
    feedDisplay.innerHTML = "<p class='placeholder'>Loading feed...</p>";
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data && data.items && data.items.length > 0) {
          displayFeed(data.items);
        } else {
          feedDisplay.innerHTML = "<p class='placeholder'>No items found in this feed.</p>";
        }
      })
      .catch(error => {
        console.error("Fetch error:", error);
        feedDisplay.innerHTML = "<p class='placeholder'>Sorry, something went wrong while loading the feed.</p>";
      });
  }
  
  function displayFeed(items) {
    let output = "";
    items.slice(0, 5).forEach(item => {
      output += `
        <div class="feed-item">
          <h3><a href="${item.link}" target="_blank">${item.title}</a></h3>
          <p>${item.description.split(" ").slice(0, 30).join(" ")}...</p>
        </div>
      `;
    });
    feedDisplay.innerHTML = output;
  }
  