const events = [
    {
        id: 1,
        title: "Yoga Day",
        date: "21/06/2024",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
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