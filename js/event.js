const events = [
    {
        id: 1,
        title: "Event 1",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event1.jpeg",
        type: "past"
    },
    {
        id: 2,
        title: "Event 2",
        date: "2022-01-15",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?t",
        image: "/images/event-page/event2.jpeg",
        type: "past"
    },
    {
        id: 3,
        title: "Event 3",
        date: "2022-02-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event3.jpeg",
        type: "upcoming"
    },
    {
        id: 4,
        title: "Event 4",
        date: "2022-03-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?t",
        image: "/images/event-page/event4.jpeg",
        type: "upcoming"
    },
    {
        id: 5,
        title: "Event 5",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event5.jpeg",
        type: "past"
    },
    {
        id: 6,
        title: "Event 6",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event6.jpeg",
        type: "past"
    },
    {
        id: 7,
        title: "Event 7",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event7.jpeg",
        type: "past"
    },
    {
        id: 8,
        title: "Event 8",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event8.jpeg",
        type: "past"
    },
    {
        id: 9,
        title: "Event 9",
        date: "2022-01-01",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus suscipit sit placeat ab obcaecati ducimus velit! Minus culpa corrupti ducimus reiciendis provident sit doloribus corporis?",
        image: "/images/event-page/event1.jpeg",
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