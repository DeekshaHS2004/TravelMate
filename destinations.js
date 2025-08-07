//Destinations information
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
export { destinationData };
