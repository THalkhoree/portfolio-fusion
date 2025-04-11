// DOM Elements
const feedSelect = document.getElementById('feed-select');
const feedContainer = document.getElementById('feed');
const logoContainer = document.getElementById('feed-logo');
const feedCount = document.getElementById('feed-count');

// RSS Sources (via rss2json)
const feedSources = {
  bbc: 'https://api.rss2json.com/v1/api.json?rss_url=http://feeds.bbci.co.uk/news/world/rss.xml',
  mozilla: 'https://api.rss2json.com/v1/api.json?rss_url=https://hacks.mozilla.org/feed/',
  wired: 'https://api.rss2json.com/v1/api.json?rss_url=https://www.wired.com/feed/category/gear/latest/rss'
};

// Logos for each feed
const feedLogos = {
  bbc: 'images/bbc.png',
  mozilla: 'images/mozilla.png',
  wired: 'images/wired.png'
};

// Load default feed on page load
window.addEventListener('DOMContentLoaded', () => {
  fetchFeed('bbc');
  updateFeedLogo('bbc');
});

// Dropdown change handler
feedSelect.addEventListener('change', (e) => {
  const source = e.target.value;
  fetchFeed(source);
  updateFeedLogo(source);
});

// Update feed logo
function updateFeedLogo(source) {
  logoContainer.innerHTML = `<img src="${feedLogos[source]}" class="feed-icon" alt="${source} Logo" />`;
}

// Fetch feed via API
function fetchFeed(source) {
  const url = feedSources[source];
  feedContainer.innerHTML = 'Loading feed...';
  feedCount.textContent = '';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      if (data.items && data.items.length > 0) {
        displayFeed(data.items);
      } else {
        feedContainer.innerHTML = '<p>No feed items found.</p>';
      }
    })
    .catch(() => {
      feedContainer.innerHTML = '<p>Failed to load feed. Please try again later.</p>';
    });
}

// Render feed cards
function displayFeed(items) {
  feedContainer.innerHTML = '';
  const maxItems = 8;
  const visibleItems = items.slice(0, maxItems);

  feedCount.textContent = `Showing ${visibleItems.length} Latest Headlines 📖`;

  visibleItems.forEach(item => {
    const card = document.createElement('div');
    card.className = 'feed-card';
    card.innerHTML = `
      <h3><a href="${item.link}" target="_blank" rel="noopener noreferrer">${item.title}</a></h3>
      <p>${item.description.slice(0, 150)}...</p>
    `;
    feedContainer.appendChild(card);
  });
}
