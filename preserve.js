document.addEventListener('DOMContentLoaded', () => {
  const eventDetails = {
    event1: {
      title: "Raghurajpur Mela",
      date: "October 15, 2025",
      time: "10:00 AM - 5:00 PM",
      place: "Raghurajpur Artist Village, Puri",
      description: "An artistic fair celebrating Pattachitra painting, palm leaf engraving, and traditional Odia crafts."
    },
    event2: {
      title: "Cultural Parade",
      date: "November 5, 2025",
      time: "3:00 PM - 8:00 PM",
      place: "Bhubaneswar Main Street",
      description: "A cultural extravaganza showcasing folk dances, tribal costumes, and music across Odisha."
    },
    event3: {
      title: "Odissi Dance Festival",
      date: "December 2, 2025",
      time: "6:00 PM - 10:00 PM",
      place: "Konark Temple Grounds",
      description: "Experience the grace of classical Odissi dance under the heritage site of Konark."
    }
  };

  const cards = document.querySelectorAll('.leaf-card');
  const section = document.getElementById('eventDetails');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const id = card.dataset.id;
      const data = eventDetails[id];

      document.getElementById('eventTitle').textContent = data.title;
      document.getElementById('eventDate').textContent = data.date;
      document.getElementById('eventTime').textContent = data.time;
      document.getElementById('eventPlace').textContent = data.place;
      document.getElementById('eventDesc').textContent = data.description;

      section.classList.remove('hidden');
      section.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Form handling
  document.getElementById('registrationForm').addEventListener('submit', e => {
    e.preventDefault();
    alert("🎉 Thank you! Your pass is confirmed.");
    e.target.reset();
  });
});
