const events = [
    {
        id: 1,
        title: "International Yoga Day",
        date: "21/06/2024",
        description: "At GL Bajaj, we believe in nurturing both the mind and body. On this International Day of Yoga, we embrace the ancient practice of yoga to find inner peace, balance, and harmony. Join us as we celebrate with mindful yoga sessions and meditation, fostering a sense of unity and well-being within our community. Let’s come together to honor this day and promote a healthy, balanced lifestyle.",
        image: "/images/event-page/yoga_day1.jpg",
        type: "past"
    },
    {
        id: 2,
        title: "Finxthon Hackathon",
        date: "29/11/2023",
        description: "Finxthon Hackathon tend to have a specific focus, which can include the programming language used, the operating system, an application, an API, or the subject and the demographic group of the programmers. There is no restriction on the type of software or hardware being created. The Club provides the students with a platform to solve some of the pressing problems we face in our daily lives, and thus inculcate a culture of product innovation and a mindset of problem-solving.",
        image: "/images/event-page/finxthon.webp",
        type: "past"
    },
    {
        id: 3,
        title: "Exclusive Interactive Session with Sandeep Jain (GFG Founder)",
        date: "11/11/2022",
        description: "The two signs of intelligence are knowledge with imagination, to know what you know, and knowing what you don't is true knowledge.💛\n We CodeSpace community organized our first Offline session by the founder and CEO of GeeksforGeeks, Mr. Sandeep Jain.",
        image: "/images/event-page/gfg.jpg",
        type: "past"
    },
    {
        id: 4,
        title: "Ganming Event by Codespace Club",
        date: "19/09/2024",
        description: "Get ready for an adrenaline-pumping experience at GL Bajaj’s Gaming Extravaganza! Join us for an exciting day filled with intense competitions, including a Valorant Tournament, E-Sports LAN battles, and an immersive Experience Zone. Whether you’re a seasoned gamer or just looking for some fun, there’s something for everyone.",
        image: "/images/event-page/gaming.jpg",
        type: "upcoming"
    },
];

// Function to generate event cards
function generateEventCards(events, container) {
    events.forEach((event) => {
        const eventCard = document.createElement("div");
        eventCard.className = "event-card";
        eventCard.innerHTML = `
            <img src="${event.image}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>${event.date}</p>
            <p>${event.description}</p>
        `;
        container.appendChild(eventCard);
    });
}

// Generate past event cards
const pastEventsContainer = document.getElementById("past-events").querySelector(".event-grid");
generateEventCards(events.filter((event) => event.type === "past"), pastEventsContainer);

// Generate upcoming event cards
const upcomingEventsContainer = document.getElementById("upcoming-events").querySelector(".event-grid");
generateEventCards(events.filter((event) => event.type === "upcoming"), upcomingEventsContainer);