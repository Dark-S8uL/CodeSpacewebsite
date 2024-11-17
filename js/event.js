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
        type: "past"
    },
    {
        id: 5,
        title: "Second Year Orientation",
        date: "19/09/2024",
        description: "Get ready for an adrenaline-pumping experience at GL Bajaj’s Gaming Extravaganza! Join us for an exciting day filled with intense competitions, including a Valorant Tournament, E-Sports LAN battles, and an immersive Experience Zone. Whether you’re a seasoned gamer or just looking for some fun, there’s something for everyone.",
        image: "/images/event-page/orientation.jpg",
        type: "past"
    },
    {
        id: 6,
        title: "Tech Talk",
        date: "13/11/2024",
        description: "The CodeSpace Club, proudly hosted a tech talk featuring Mr. Bhuvnesh Sharma, an accomplished alumnus from the B.Tech-IT Batch of 2024. Currently working as an SDE 1 at Zelthy, Mr. Sharma is also a GSoC mentor and was a GSoC mentee in 2023 at Django. As the founder of the Django India Community, he brought valuable insights into the tech industry. The session provided students with inspiration and practical knowledge about career paths, open-source contributions, and real-world problem-solving. It was an engaging and enlightening experience for everyone who attended.",
        image: "/images/event-page/techtalk.jpg",
        type: "past"
    },
    {
        id: 7,
        title: "Leetspace",
        date: "19/09/2024",
        description: "Codespace Club proudly announces the winners of the 21-day Leetspace Challenge, held on X (formerly Twitter). This initiative encouraged participants to solve a daily LeetCode problem, testing their consistency and problem-solving skills. Congratulations to Shivang Gupta, Bhavya Singhal, Ashish Soni, and Faaeiz Khan for their dedication and achievement in maintaining their streak and completing all 21 questions. Your commitment to excellence is truly inspiring!",
        image: "/images/event-page/leetspace.png",
        type: "past"
    },
    {
        id: 8,
        title: "Codebyte 6.0",
        date: "19/09/2024",
        description: "What a fabbb contest it was!! 🚀We are overwhelmed😊 with the results and active participation of club members We congratulate🎉 our winners of the contest(codebyte_2.0)",
        image: "/images/event-page/codebytes.png",
        type: "past"
    },
    {
        id: 9,
        title: "Dancing Doodles",
        date: "05/01/2024",
        description: "The 'Dancing Doodles' event was a creative and engaging workshop aimed at exploring the art of doodling. The event featured two fun-filled activities: Doodling on Canvas and Photo Doodling, allowing participants to express their creativity and artistic skills.",
        image: "/images/event-page/dancing-doodles.png",
        type: "past"
    },
    {
        id: 10,
        title: "DSA Bootcamp",
        date: "03/01/2024",
        description: "The DSA Bootcamp was a comprehensive workshop designed to help students enhance their problem-solving skills and prepare for technical interviews. The event featured a series of interactive sessions, including coding challenges, mock interviews, and expert guidance from industry professionals. Participants gained valuable insights into data structures and algorithms, equipping them with the knowledge and confidence to succeed in their careers.",
        image: "/images/event-page/dsa-bootcamp.png",
        type: "past"
    },
    {
        id: 11,
        title: "Codebyte 1.0",
        date: "25/11/2022",
        description: "Codebyte 1.0 was a coding competition organized by the CodeSpace Club, aimed at fostering a spirit of healthy competition and collaboration among students. The event featured a series of challenging problems that tested participants' coding skills and problem-solving abilities. Congratulations to all the winners and participants for their hard work and dedication!",
        image: "/images/event-page/codebyte1.png",
        type: "past"
    },
    {
        id: 12,
        title: "Session with Mr Sandeep Jain",
        date: "11/11/2022",
        description: "300+ students attended the session and got to know about the journey of Mr. Sandeep Jain, how he started GeeksforGeeks, and how he managed to make it the world's largest computer science portal. He also shared his experiences and learnings from his journey. The session was very interactive and students got to ask their queries and doubts from Mr. Sandeep Jain.",
        image: "/images/event-page/sandeep.png",
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
// const upcomingEventsContainer = document.getElementById("upcoming-events").querySelector(".event-grid");
// generateEventCards(events.filter((event) => event.type === "upcoming"), upcomingEventsContainer);