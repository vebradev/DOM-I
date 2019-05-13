const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo

let middleImg = document.getElementById("middle-img");
middleImg.src = siteContent["main-content"]["middle-img-src"];

// Navigation

let nav = document.querySelectorAll("nav a");
for (i = 0; i < nav.length; i++) {
  nav[i].textContent = siteContent.nav[`nav-item-${i+1}`];
  nav[i].style.color = `green`;
}

// Logo

let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// CTA

let cta = document.getElementById("cta-img");
cta.setAttribute("src", siteContent["cta"]["img-src"]);

let ctah1 = document.querySelector("h1");
ctah1.textContent = siteContent["cta"]["h1"];

let ctabtn = document.querySelector("button");
ctabtn.textContent = siteContent["cta"]["button"];

// Main Content

let h4 = document.querySelectorAll("h4");
h4[0].textContent = siteContent["main-content"]["features-h4"]; // Features h4
h4[1].textContent = siteContent["main-content"]["about-h4"]; // About h4
h4[2].textContent = siteContent["main-content"]["services-h4"]; // Services h4
h4[3].textContent = siteContent["main-content"]["product-h4"]; // Products h4
h4[4].textContent = siteContent["main-content"]["vision-h4"]; // Vision h4
h4[5].textContent = siteContent["contact"]["contact-h4"]; // Vision h4


let paragraph = document.querySelectorAll("p");
paragraph[0].textContent = siteContent["main-content"]["features-content"]; // Features p
paragraph[1].textContent = siteContent["main-content"]["about-content"]; // About p
paragraph[2].textContent = siteContent["main-content"]["services-content"];  // Services p
paragraph[3].textContent = siteContent["main-content"]["product-content"]; // Products p
paragraph[4].textContent = siteContent["main-content"]["vision-content"];  // Vision p

paragraph[5].textContent = siteContent["contact"]["address"];  // Vision p
paragraph[6].textContent = siteContent["contact"]["phone"];  // Vision p
paragraph[7].textContent = siteContent["contact"]["email"];  // Vision p
paragraph[8].textContent = siteContent["footer"]["copyright"];  // Vision p

// New Content

let navBegin = document.createElement("a");
navBegin.textContent = "▶️";
navBegin.id = "nav-begin";

let navEnd = document.createElement("a");
navEnd.textContent = "◀️";
navEnd.id = "nav-end";

let header = document.querySelector("header nav");
header.prepend(navBegin);
header.appendChild(navEnd);