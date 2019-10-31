const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
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
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo

//  Nav
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let navButton = document.querySelectorAll("a");
navButton[0].textContent = siteContent.nav["nav-item-1"];
navButton[1].textContent = siteContent.nav["nav-item-2"];
navButton[2].textContent = siteContent.nav["nav-item-3"];
navButton[3].textContent = siteContent.nav["nav-item-4"];
navButton[4].textContent = siteContent.nav["nav-item-5"];
navButton[5].textContent = siteContent.nav["nav-item-6"];

// CTA
let header = document.querySelector("h1");
header.textContent = siteContent["cta"]["h1"];

let headButton = document.querySelector("button");
headButton.textContent = siteContent["cta"]["button"];

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);

const newNav = document.querySelector("nav");

const newNav1 = document.createElement("a");
newNav1.textContent = "Our Team";
newNav1.href = "#";

const newNav2 = document.createElement("a");
newNav2.textContent = "Blog";
newNav2.href = "#";

newNav.prepend(newNav1);
newNav.append(newNav2);

// Top Section
let sectionHead = document.querySelectorAll("h4");
let sectionText = document.querySelectorAll("p");

sectionHead[0].textContent = siteContent["main-content"]["features-h4"];
sectionText[0].textContent = siteContent["main-content"]["features-content"];

sectionHead[1].textContent = siteContent["main-content"]["about-h4"];
sectionText[1].textContent = siteContent["main-content"]["about-content"];

// Mid Section
let sectionImg = document.getElementById("middle-img");
sectionImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// Bottom Section
sectionHead[2].textContent = siteContent["main-content"]["services-h4"];
sectionText[2].textContent = siteContent["main-content"]["services-content"];

sectionHead[3].textContent = siteContent["main-content"]["product-h4"];
sectionText[3].textContent = siteContent["main-content"]["product-content"];

sectionHead[4].textContent = siteContent["main-content"]["vision-h4"];
sectionText[4].textContent = siteContent["main-content"]["vision-content"];

// Contact Section
sectionHead[5].textContent = siteContent["contact"]["contact-h4"];
sectionText[5].textContent = siteContent.contact.address;
sectionText[6].textContent = siteContent.contact.phone;
sectionText[7].textContent = siteContent.contact.email;

// Footer
sectionText[8].textContent = siteContent.footer.copyright;
