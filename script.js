// Scroll to bottom on page load
  window.addEventListener('load', () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'instant'
    });
  });

  // Scroll to top when "Scroll the Altitude" is clicked
function scrollUp() {
    const longImage = document.getElementById('longImage');
  
    window.scrollTo({
      top: longImage.offsetTop + longImage.offsetHeight - window.innerHeight,
      behavior: 'smooth'
    });
  }
  

const altitudeText = document.querySelector('.altitude-text');
const altitudeIndicator = document.getElementById('altitude-indicator');

// Map of scroll positions (pixels from top) to altitude labels
const altitudeMap = [
  { y: 0, label: "10⁴ MEGAPARSECS" },
  { y: 60, label: "1,000 MEGAPARSECS" },
  { y: 420, label: "100 MEGAPARSECS" },
  { y: 810, label: "10 MEGAPARSECS" },
  { y: 1160, label: "1,000 KILOPARSECS" },//
  { y: 1540, label: "500 KILOPARSECS" },//
  { y: 2000, label: "1 KILOPARSECSc" },//
  { y: 2620, label: "100 PARSECS" },//
  { y: 2970, label: "10 PARSECS" },//
  { y: 3340, label: "1 PARSECS" },//
  { y: 3720, label: "10,000 ASTRONOMICAL UNITS" },//
  { y: 3840, label: "1,000 ASTRONOMICAL UNITS" },//
  { y: 4280, label: "100 ASTRONOMICAL UNITS" },//
  { y: 4690, label: "10 ASTRONOMICAL UNITS" },
  { y: 5080, label: "5 ASTRONOMICAL UNITS" },
  { y: 5500, label: "1 ASTRONOMICAL UNITS" },
  { y: 5900, label: "0.1 ASTRONOMICAL UNITS" },
  { y: 6200, label: "1,000,000 KILOMETERS" },
  { y: 6590, label: "100,000 KILOMETERS" },
  { y: 6900, label: "10,000 KILOMETERS" },
  { y: 7150, label: "1,000 KILOMETERS" },
  { y: 7400, label: "0 KILOMETERS" }
];

// Function to find the closest label
function getAltitudeLabel(scrollTop) {
  for (let i = 0; i < altitudeMap.length - 1; i++) {
    const current = altitudeMap[i];
    const next = altitudeMap[i + 1];
    if (scrollTop >= current.y && scrollTop < next.y) {
      return current.label;
    }
  }
  return altitudeMap[altitudeMap.length - 1].label;
}

window.addEventListener('scroll', () => {
  const scrollTop = document.documentElement.scrollTop;

  // Show the altitude indicator when not at bottom
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  altitudeIndicator.style.opacity = scrollTop < maxScroll - 50 ? 1 : 0;

  // Set altitude label
  altitudeText.textContent = getAltitudeLabel(scrollTop);
});


  