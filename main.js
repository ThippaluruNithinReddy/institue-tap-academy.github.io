// main.js - Dynamic content and interactivity for Tap Academy

document.addEventListener('DOMContentLoaded', function() {
  // Navigation injection
  const navHTML = `
    <nav>
      <a href="index.html">Home</a>
      <a href="courses.html">Courses</a>
      <a href="placements.html">Placements</a>
      <a href="blogs.html">Blogs</a>
      <a href="contactus.html">Contact Us</a>
    </nav>
  `;
  const header = document.querySelector('header');
  if (header) header.insertAdjacentHTML('beforeend', navHTML);

  // Footer injection
  const footer = document.querySelector('footer');
  if (footer) footer.innerHTML = `&copy; ${new Date().getFullYear()} Tap Academy. All rights reserved.`;

  // Example: Dynamic student reviews (for index.html)
  if (document.getElementById('student-reviews')) {
    const reviews = [
      {
        name: 'Jahnavi',
        company: 'Capgemini',
        img: 'How did Jahnavi get placed in Capgemini_ Tap Academy Student Testimonial shorts.mp4',
        text: 'Tap Academy helped me crack Capgemini with their amazing DSA course and mock interviews!'
      },
      {
        name: 'Rohit',
        company: 'Infosys',
        img: 'Rohit.png',
        text: 'The Full Stack course was a game changer for my career. Highly recommend Tap Academy!'
      },
      {
        name: 'Shetty',
        company: 'TCS',
        img: 'shetty.png',
        text: 'Great mentors and placement support. Landed my dream job at TCS.'
      }
    ];
    const reviewsContainer = document.getElementById('student-reviews');
    reviewsContainer.innerHTML = reviews.map(r => `
      <div class="card">
        <img src="${r.img}" alt="${r.name}" class="responsive" style="max-width:120px;">
        <h3>${r.name}</h3>
        <p><strong>${r.company}</strong></p>
        <p>${r.text}</p>
      </div>
    `).join('');
  }

  // Add more dynamic sections as needed for other pages...
});
