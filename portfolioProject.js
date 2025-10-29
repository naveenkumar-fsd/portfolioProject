// Resume download simulation
function downloadResume() {
  alert("Resume download feature coming soon!");
}

// Blog search function
function searchBlog() {
  let input = document.getElementById('search').value.toLowerCase();
  let blogs = document.getElementById('blogList').getElementsByClassName('blog-card');

  for (let i = 0; i < blogs.length; i++) {
    let title = blogs[i].getElementsByTagName("h3")[0].innerText.toLowerCase();
    blogs[i].style.display = title.includes(input) ? "" : "none";
  }
}

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let message = document.getElementById('message').value.trim();

  if (name && email && message) {
    document.getElementById('formMsg').innerText = "Thank you for contacting me!";
    document.getElementById('contactForm').reset();
  } else {
    document.getElementById('formMsg').innerText = "Please fill all fields.";
  }
});

// Scroll animation effect
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
}, {threshold: 0.1});

sections.forEach(sec=>observer.observe(sec));