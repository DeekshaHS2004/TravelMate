// Destination data with detailed information
const destinationData = {
    amristar: {
        name: "Golden Temple, Amristar",
        coordinates: { lat: 31.6340, lng: 74.8723 },
        attractions: ["Golden Temple", "Jallianwala Bagh", "Wagah Border", "Partition Museum"],
        activities: ["Temple visit", "Historical tour", "Border ceremony", "Local cuisine"],
        avgCostPerDay: 2500,
        bestTime: "Oct-Mar"
    },
    darjeeling: {
        name: "Darjeeling",
        coordinates: { lat: 27.0360, lng: 88.2627 },
        attractions: ["Tiger Hill", "Darjeeling Himalayan Railway", "Tea Gardens", "Observatory Hill"],
        activities: ["Sunrise viewing", "Toy train ride", "Tea tasting", "Monastery visits"],
        avgCostPerDay: 3000,
        bestTime: "Mar-May, Sep-Nov"
    },
    delhi: {
        name: "Delhi",
        coordinates: { lat: 28.7041, lng: 77.1025 },
        attractions: ["Red Fort", "India Gate", "Lotus Temple", "Qutub Minar", "Chandni Chowk"],
        activities: ["Historical tours", "Street food", "Shopping", "Museum visits"],
        avgCostPerDay: 3500,
        bestTime: "Oct-Mar"
    },
    gangtok: {
        name: "Gangtok",
        coordinates: { lat: 27.3389, lng: 88.6065 },
        attractions: ["Tsomgo Lake", "Nathula Pass", "Rumtek Monastery", "MG Marg"],
        activities: ["Lake visits", "Monastery tours", "Cable car rides", "Local markets"],
        avgCostPerDay: 3200,
        bestTime: "Mar-Jun, Sep-Dec"
    },
    goa: {
        name: "Goa",
        coordinates: { lat: 15.2993, lng: 74.1240 },
        attractions: ["Baga Beach", "Old Goa Churches", "Dudhsagar Falls", "Anjuna Beach"],
        activities: ["Beach activities", "Water sports", "Nightlife", "Heritage tours"],
        avgCostPerDay: 4000,
        bestTime: "Nov-Feb"
    },
    gulmarg: {
        name: "Gulmarg",
        coordinates: { lat: 34.0537, lng: 74.3866 },
        attractions: ["Gulmarg Gondola", "Apharwat Peak", "Golf Course", "Shrine of Baba Reshi"],
        activities: ["Skiing", "Gondola rides", "Trekking", "Photography"],
        avgCostPerDay: 4500,
        bestTime: "Dec-Mar, Apr-Jun"
    },
    hyderabad: {
        name: "Hyderabad",
        coordinates: { lat: 17.3850, lng: 78.4867 },
        attractions: ["Charminar", "Golconda Fort", "Hussain Sagar Lake", "Ramoji Film City"],
        activities: ["Historical tours", "Biryani tasting", "Film city visits", "Shopping"],
        avgCostPerDay: 3000,
        bestTime: "Oct-Feb"
    },
    jaipur: {
        name: "Jaipur",
        coordinates: { lat: 26.9124, lng: 75.7873 },
        attractions: ["Amber Fort", "City Palace", "Hawa Mahal", "Jantar Mantar"],
        activities: ["Palace tours", "Cultural shows", "Shopping", "Camel rides"],
        avgCostPerDay: 3500,
        bestTime: "Oct-Mar"
    },
    kochi: {
        name: "Kochi",
        coordinates: { lat: 9.9312, lng: 76.2673 },
        attractions: ["Chinese Fishing Nets", "Mattancherry Palace", "Fort Kochi", "Marine Drive"],
        activities: ["Heritage walks", "Kathakali shows", "Backwater tours", "Spice market visits"],
        avgCostPerDay: 3200,
        bestTime: "Oct-Feb"
    },
    "Leh-Ladakh": {
        name: "Leh-Ladakh",
        coordinates: { lat: 34.1526, lng: 77.5771 },
        attractions: ["Pangong Lake", "Nubra Valley", "Leh Palace", "Thiksey Monastery"],
        activities: ["High altitude lakes", "Monastery visits", "Camel safari", "Adventure sports"],
        avgCostPerDay: 5000,
        bestTime: "May-Sep"
    },
    manali: {
        name: "Manali",
        coordinates: { lat: 32.2432, lng: 77.1892 },
        attractions: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali"],
        activities: ["Adventure sports", "Snow activities", "Temple visits", "Nature walks"],
        avgCostPerDay: 3800,
        bestTime: "Mar-Jun, Sep-Nov"
    },
    mumbai: {
        name: "Mumbai",
        coordinates: { lat: 19.0760, lng: 72.8777 },
        attractions: ["Gateway of India", "Marine Drive", "Bollywood Studios", "Elephanta Caves"],
        activities: ["City tours", "Bollywood tours", "Street food", "Shopping"],
        avgCostPerDay: 4500,
        bestTime: "Nov-Feb"
    },
    munnar: {
        name: "Munnar",
        coordinates: { lat: 10.0889, lng: 77.0595 },
        attractions: ["Tea Plantations", "Eravikulam National Park", "Mattupetty Dam", "Top Station"],
        activities: ["Tea garden tours", "Wildlife spotting", "Trekking", "Photography"],
        avgCostPerDay: 3000,
        bestTime: "Sep-May"
    },
    mysore: {
        name: "Mysore",
        coordinates: { lat: 12.2958, lng: 76.6394 },
        attractions: ["Mysore Palace", "Chamundi Hills", "Brindavan Gardens", "St. Philomena's Church"],
        activities: ["Palace tours", "Cultural experiences", "Garden visits", "Yoga sessions"],
        avgCostPerDay: 2800,
        bestTime: "Oct-Mar"
    },
    pondicherry: {
        name: "Pondicherry",
        coordinates: { lat: 11.9416, lng: 79.8083 },
        attractions: ["French Quarter", "Aurobindo Ashram", "Paradise Beach", "Arikamedu"],
        activities: ["Heritage walks", "Beach activities", "Spiritual tours", "French cuisine"],
        avgCostPerDay: 3200,
        bestTime: "Oct-Mar"
    },
    rishikesh: {
        name: "Rishikesh",
        coordinates: { lat: 30.0869, lng: 78.2676 },
        attractions: ["Laxman Jhula", "Ram Jhula", "Beatles Ashram", "Triveni Ghat"],
        activities: ["Yoga sessions", "River rafting", "Temple visits", "Meditation"],
        avgCostPerDay: 2500,
        bestTime: "Sep-Nov, Feb-May"
    },
    shimla: {
        name: "Shimla",
        coordinates: { lat: 31.1048, lng: 77.1734 },
        attractions: ["Mall Road", "Christ Church", "Jakhu Temple", "Kufri"],
        activities: ["Hill station walks", "Toy train rides", "Shopping", "Nature photography"],
        avgCostPerDay: 3500,
        bestTime: "Mar-Jun, Sep-Nov"
    },
    tamilnadu: {
        name: "Tamil Nadu",
        coordinates: { lat: 11.1271, lng: 78.6569 },
        attractions: ["Meenakshi Temple", "Mahabalipuram", "Ooty", "Kodaikanal"],
        activities: ["Temple tours", "Cultural experiences", "Hill station visits", "Classical arts"],
        avgCostPerDay: 2800,
        bestTime: "Nov-Mar"
    },
    udaipur: {
        name: "Udaipur",
        coordinates: { lat: 24.5854, lng: 73.7125 },
        attractions: ["City Palace", "Lake Pichola", "Jag Mandir", "Saheliyon Ki Bari"],
        activities: ["Palace tours", "Boat rides", "Cultural shows", "Shopping"],
        avgCostPerDay: 4000,
        bestTime: "Sep-Mar"
    },
    varanasi: {
        name: "Varanasi",
        coordinates: { lat: 25.3176, lng: 82.9739 },
        attractions: ["Kashi Vishwanath Temple", "Dashashwamedh Ghat", "Sarnath", "Ganga Aarti"],
        activities: ["Spiritual tours", "Boat rides", "Temple visits", "Cultural experiences"],
        avgCostPerDay: 2200,
        bestTime: "Oct-Mar"
    }
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    const form = document.getElementById('tripForm');
    const destinationSelect = document.getElementById('destination');
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');

    // Initialize the map
    setTimeout(initializeMap, 500); // Small delay to ensure DOM is ready

    // Set minimum date to today
    const today = new Date().toISOString().split('T')[0];
    startDateInput.min = today;
    endDateInput.min = today;

    // Update end date minimum when start date changes
    startDateInput.addEventListener('change', function() {
        endDateInput.min = this.value;
        if (endDateInput.value && endDateInput.value < this.value) {
            endDateInput.value = '';
        }
    });

    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleFormSubmission();
    });

    // Handle destination selection from cards
    window.selectDestination = function(destinationKey) {
        destinationSelect.value = destinationKey;
        updateMap(destinationKey);
        
        // Smooth scroll to form
        document.getElementById('tripForm').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    };

    // Update map when destination changes
    destinationSelect.addEventListener('change', function() {
        if (this.value) {
            updateMap(this.value);
        }
    });
}

function handleFormSubmission() {
    const formData = collectFormData();
    
    if (!validateFormData(formData)) {
        showErrorMessage('Please fill in all required fields.');
        return;
    }

    if (!validateDates(formData.startDate, formData.endDate)) {
        showErrorMessage('End date must be after start date.');
        return;
    }

    showLoading(true);
    hideMessages();

    // Simulate API call with timeout
    setTimeout(() => {
        generateTripPlan(formData);
        showLoading(false);
        showSuccessMessage('Trip planned successfully! Check your itinerary below.');
        
        // Show results section
        const resultsSection = document.getElementById('results');
        resultsSection.classList.add('active');
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }, 2000);
}

function collectFormData() {
    return {
        destination: document.getElementById('destination').value,
        startDate: document.getElementById('startDate').value,
        endDate: document.getElementById('endDate').value,
        budget: parseInt(document.getElementById('budget').value),
        travelers: document.getElementById('travelers').value,
        interests: document.getElementById('interests').value
    };
}

function validateFormData(data) {
    return data.destination && data.startDate && data.endDate && 
           data.budget && data.travelers && data.interests;
}

function validateDates(startDate, endDate) {
    return new Date(endDate) > new Date(startDate);
}

function generateTripPlan(formData) {
    const destination = destinationData[formData.destination];
    const days = calculateDays(formData.startDate, formData.endDate);
    const travelers = parseInt(formData.travelers.replace('+', ''));
    
    // Generate itinerary
    generateItinerary(destination, days, formData.interests);
    
    // Generate budget breakdown
    generateBudgetBreakdown(destination, days, travelers, formData.budget);
}

function calculateDays(startDate, endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    const timeDiff = end.getTime() - start.getTime();
    return Math.ceil(timeDiff / (1000 * 3600 * 24)) + 1;
}

function generateItinerary(destination, days, interests) {
    const itineraryContainer = document.getElementById('itinerary');
    itineraryContainer.innerHTML = '';

    const activities = getActivitiesBasedOnInterests(destination, interests);
    
    for (let day = 1; day <= days; day++) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'itinerary-day';
        
        const dayHeader = document.createElement('div');
        dayHeader.className = 'day-header';
        dayHeader.textContent = `Day ${day}`;
        dayDiv.appendChild(dayHeader);

        // Generate 3-4 activities per day
        const dayActivities = getRandomActivities(activities, day === 1 ? 3 : 4);
        dayActivities.forEach(activity => {
            const activityDiv = document.createElement('div');
            activityDiv.className = 'activity';
            activityDiv.innerHTML = `
                <strong>${activity.time}</strong> - ${activity.description}
                <br><small style="color: #718096;">${activity.details}</small>
            `;
            dayDiv.appendChild(activityDiv);
        });

        itineraryContainer.appendChild(dayDiv);
    }
}

function getActivitiesBasedOnInterests(destination, interests) {
    const baseActivities = [
        { time: "9:00 AM", description: "Check-in and breakfast", details: "Start your day with local cuisine" },
        { time: "6:00 PM", description: "Evening leisure", details: "Relax and enjoy local atmosphere" },
        { time: "8:00 PM", description: "Dinner", details: "Try recommended local restaurants" }
    ];

    const interestActivities = {
        culture: [
            { time: "10:00 AM", description: `Visit ${destination.attractions[0]}`, details: "Explore historical significance" },
            { time: "2:00 PM", description: `Cultural tour of ${destination.attractions[1]}`, details: "Learn about local heritage" },
            { time: "4:00 PM", description: "Local art and craft shopping", details: "Support local artisans" }
        ],
        adventure: [
            { time: "7:00 AM", description: destination.activities[0], details: "Early morning adventure activity" },
            { time: "11:00 AM", description: destination.activities[1], details: "Adrenaline-pumping experience" },
            { time: "3:00 PM", description: "Outdoor exploration", details: "Discover hidden gems" }
        ],
        relaxation: [
            { time: "10:00 AM", description: "Spa and wellness", details: "Rejuvenate your body and mind" },
            { time: "2:00 PM", description: "Leisurely sightseeing", details: "Take your time to enjoy" },
            { time: "4:00 PM", description: "Sunset viewing", details: "Perfect photo opportunities" }
        ],
        food: [
            { time: "10:00 AM", description: "Food tour", details: "Taste authentic local flavors" },
            { time: "1:00 PM", description: "Cooking class", details: "Learn traditional recipes" },
            { time: "4:00 PM", description: "Local market visit", details: "Discover fresh ingredients" }
        ]
    };

    return [...baseActivities, ...(interestActivities[interests] || interestActivities.culture)];
}

function getRandomActivities(activities, count) {
    const shuffled = activities.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function generateBudgetBreakdown(destination, days, travelers, totalBudget) {
    const budgetContainer = document.getElementById('budgetBreakdown');
    
    const accommodation = Math.round(totalBudget * 0.35);
    const food = Math.round(totalBudget * 0.25);
    const transport = Math.round(totalBudget * 0.20);
    const activities = Math.round(totalBudget * 0.15);
    const misc = totalBudget - accommodation - food - transport - activities;

    budgetContainer.innerHTML = `
        <div class="budget-breakdown">
            <div class="budget-item">
                <span>🏨 Accommodation (${days} nights)</span>
                <span>₹${accommodation.toLocaleString()}</span>
            </div>
            <div class="budget-item">
                <span>🍽️ Food & Dining</span>
                <span>₹${food.toLocaleString()}</span>
            </div>
            <div class="budget-item">
                <span>🚗 Transportation</span>
                <span>₹${transport.toLocaleString()}</span>
            </div>
            <div class="budget-item">
                <span>🎯 Activities & Sightseeing</span>
                <span>₹${activities.toLocaleString()}</span>
            </div>
            <div class="budget-item">
                <span>🛍️ Shopping & Miscellaneous</span>
                <span>₹${misc.toLocaleString()}</span>
            </div>
            <div class="budget-total">
                <div class="budget-item">
                    <span>Total Budget</span>
                    <span>₹${totalBudget.toLocaleString()}</span>
                </div>
            </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #e6fffa; border-radius: 8px; border-left: 4px solid #38b2ac;">
            <strong>💡 Budget Tips:</strong>
            <ul style="margin-top: 10px; padding-left: 20px;">
                <li>Book accommodation in advance for better deals</li>
                <li>Try local street food for authentic and budget-friendly meals</li>
                <li>Use public transport when possible</li>
                <li>Look for combo tickets for multiple attractions</li>
            </ul>
        </div>
    `;
}

// Map functionality
let map = null;
let currentMarker = null;

function initializeMap() {
    // Check if Leaflet is loaded
    if (typeof L === 'undefined') {
        // Load Leaflet dynamically
        const leafletCSS = document.createElement('link');
        leafletCSS.rel = 'stylesheet';
        leafletCSS.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.css';
        document.head.appendChild(leafletCSS);

        const leafletJS = document.createElement('script');
        leafletJS.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        leafletJS.onload = function() {
            createMap();
        };
        document.head.appendChild(leafletJS);
    } else {
        createMap();
    }
}

function createMap() {
    const mapContainer = document.querySelector('.map-container');
    
    // Replace placeholder with actual map div
    mapContainer.innerHTML = '<div id="map" style="width: 100%; height: 100%; border-radius: 10px;"></div>';
    
    // Initialize map centered on India
    map = L.map('map').setView([20.5937, 78.9629], 5);
    
    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    // Add info panel
    const infoPanel = document.createElement('div');
    infoPanel.id = 'map-info';
    infoPanel.style.cssText = `
        position: absolute;
        top: 10px;
        right: 10px;
        background: rgba(255, 255, 255, 0.95);
        padding: 15px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        z-index: 1000;
        max-width: 250px;
        font-size: 14px;
    `;
    infoPanel.innerHTML = `
        <div style="text-align: center; color: #718096;">
            📍 Select a destination to view location
        </div>
    `;
    mapContainer.appendChild(infoPanel);
    
    // Add all destination markers
    addAllDestinationMarkers();
}

function addAllDestinationMarkers() {
    Object.keys(destinationData).forEach(key => {
        const destination = destinationData[key];
        const marker = L.marker([destination.coordinates.lat, destination.coordinates.lng])
            .addTo(map)
            .bindPopup(`
                <div style="text-align: center;">
                    <h3>${destination.name}</h3>
                    <p><strong>Best time:</strong> ${destination.bestTime}</p>
                    <p><strong>Avg cost:</strong> ₹${destination.avgCostPerDay.toLocaleString()}/day</p>
                    <button onclick="selectDestination('${key}')" style="
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        color: white;
                        border: none;
                        padding: 8px 16px;
                        border-radius: 4px;
                        cursor: pointer;
                        font-size: 12px;
                        margin-top: 8px;
                    ">Select Destination</button>
                </div>
            `);
        
        marker.on('click', function() {
            updateMapInfo(key);
        });
    });
}

function updateMap(destinationKey) {
    const destination = destinationData[destinationKey];
    
    if (!destination) return;
    
    // Initialize map if not already done
    if (!map) {
        initializeMap();
        // Wait for map to load, then update
        setTimeout(() => updateMap(destinationKey), 1000);
        return;
    }
    
    // Center map on destination
    map.setView([destination.coordinates.lat, destination.coordinates.lng], 10);
    
    // Remove current marker if exists
    if (currentMarker) {
        map.removeLayer(currentMarker);
    }
    
    // Add new marker with custom icon
    const customIcon = L.divIcon({
        className: 'custom-marker',
        html: `
            <div style="
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                border-radius: 50%;
                width: 30px;
                height: 30px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: white;
                font-size: 16px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.3);
                border: 3px solid white;
            ">📍</div>
        `,
        iconSize: [36, 36],
        iconAnchor: [18, 18]
    });
    
    currentMarker = L.marker([destination.coordinates.lat, destination.coordinates.lng], {
        icon: customIcon
    }).addTo(map);
    
    updateMapInfo(destinationKey);
}

function updateMapInfo(destinationKey) {
    const destination = destinationData[destinationKey];
    const infoPanel = document.getElementById('map-info');
    
    if (destination && infoPanel) {
        infoPanel.innerHTML = `
            <div style="text-align: center;">
                <h3 style="margin: 0 0 10px 0; color: #4a5568;">${destination.name}</h3>
                <div style="text-align: left; color: #718096;">
                    <p style="margin: 5px 0;"><strong>📍 Location:</strong><br>${destination.coordinates.lat}, ${destination.coordinates.lng}</p>
                    <p style="margin: 5px 0;"><strong>🌟 Best time:</strong><br>${destination.bestTime}</p>
                    <p style="margin: 5px 0;"><strong>💰 Avg cost:</strong><br>₹${destination.avgCostPerDay.toLocaleString()}/day</p>
                    <p style="margin: 5px 0;"><strong>🎯 Top attractions:</strong></p>
                    <ul style="margin: 5px 0; padding-left: 15px; font-size: 12px;">
                        ${destination.attractions.slice(0, 3).map(attraction => `<li>${attraction}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
}

function showLoading(show) {
    const loading = document.getElementById('loading');
    loading.style.display = show ? 'block' : 'none';
}

function showSuccessMessage(message) {
    const successMsg = document.getElementById('successMessage');
    successMsg.textContent = message;
    successMsg.style.display = 'block';
}

function showErrorMessage(message) {
    const errorMsg = document.getElementById('errorMessage');
    errorMsg.textContent = message;
    errorMsg.style.display = 'block';
}

function hideMessages() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('errorMessage').style.display = 'none';
}

// Add some interactive animations
function addInteractiveEffects() {
    const cards = document.querySelectorAll('.destination-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-5px) scale(1)';
        });
    });
}

// Initialize interactive effects when DOM is loaded
document.addEventListener('DOMContentLoaded', addInteractiveEffects);