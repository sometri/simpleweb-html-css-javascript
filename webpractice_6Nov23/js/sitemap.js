var sitemap = document.getElementById("sitemap");

// Define your sitemap structure here
var pages = [
  { title: "Home", url: "index.html" },
  { title: "About Us", url: "about.html" },
  { title: "Faculties", url: "faculties.html" },
  { title: "Admission", url: "admission.html" },
  { title: "Alumni", url: "alumni.html" },
  { title: "Industry", url: "industry.html" },
  { title: "Publication", url: "publication.html" },
  { title: "News", url: "news.html" },
  { title: "Countries", url: "countries.html" },
  { title: "Feedback", url: "feedback.html" },
  { title: "Sitemap", url: "sitemap.html" },
  { title: "FAQs", url: "faqs.html" },
  { title: "Webmail", url: "webmail.html" },
  { title: "Register and Login", url: "register-login.html" },
  { title: "Services", url: "services.html" },
  { title: "Contact Us", url: "contact.html" },
  { title: "Facebook", url: "https://www.facebook.com" },
  { title: "Twitter", url: "https://www.twitter.com" },
  { title: "Instagram", url: "https://www.instagram.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" }
];

// Generate the sitemap
var ul = document.createElement("ul");
pages.forEach(function(page) {
  var li = document.createElement("li");
  var a = document.createElement("a");
  a.href = page.url;
  a.textContent = page.title;
  li.appendChild(a);
  ul.appendChild(li);
});
sitemap.appendChild(ul);