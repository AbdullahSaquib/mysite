// Detect if we are on GitHub Pages based on the hostname
const isGitHubPages = window.location.hostname.endsWith('.github.io');

// Set the correct root path
const rootPath = isGitHubPages ? '/mysite' : '';

// Function to adjust root-relative URLs
function adjustRootRelativeLinks() {
  // Adjust all links with href starting with '/'
  document.querySelectorAll('a[href^="/"]').forEach(link => {
    link.href = rootPath + link.getAttribute('href');
  });

  // Adjust all <link> elements for stylesheets or other assets
  document.querySelectorAll('link[href^="/"]').forEach(link => {
    link.href = rootPath + link.getAttribute('href');
  });

  // Adjust all <script> elements
  document.querySelectorAll('script[src^="/"]').forEach(script => {
    script.src = rootPath + script.getAttribute('src');
  });

  // Adjust all image sources
  document.querySelectorAll('img[src^="/"]').forEach(img => {
    img.src = rootPath + img.getAttribute('src');
  });
}

// Call the function to adjust the URLs
adjustRootRelativeLinks();
