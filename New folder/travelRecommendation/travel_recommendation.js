// Assuming you have a travel_recommendation_api.json with travel data

function fetchRecommendations(keyword) {
    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            // Process data based on keyword (beach, temple, country)
            // Display results dynamically
        })
        .catch(error => console.error('Error fetching recommendations:', error));
}

// Example usage:
fetchRecommendations('beach');
function search() {
    const keyword = document.getElementById('searchInput').value.toLowerCase();
    if (keyword.includes('beach')) {
        fetchRecommendations('beach');
    } else if (keyword.includes('temple')) {
        fetchRecommendations('temple');
    } else if (keyword.includes('country')) {
        fetchRecommendations('country');
    } else {
        alert('Please enter a valid keyword (beach, temple, country)');
    }
}

// Optional: Clear results function
function clearResults() {
    // Logic to clear the results displayed on the page
}
// Implemented above as clearResults() function

// Example implementation in HTML:
<button onclick="clearResults()">Clear Results</button>
