// Initialize AOS animation library
AOS.init({
  duration: 800,
  easing: "ease-in-out",
  once: true,
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Header scroll effect
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 4px 15px rgba(0, 0, 0, 0.1)";
    header.style.padding = "0.5rem 5%";
  } else {
    header.style.boxShadow = "0 2px 15px rgba(0, 0, 0, 0.1)";
    header.style.padding = "1rem 5%";
  }
});

// Language Toggle Functionality
const languageToggle = document.getElementById("languageToggle");
let isMarathi = false;

// Marathi translations
const marathiTexts = {
  deliverText: "प्रदान करत आहे",
  sustainabilityText: "टिकाऊपणा",
  ctaButton: "संपर्क साधा",
  info1:
    "<strong>ETI डायनॅमिक्स</strong> ही पर्यावरण आणि टिकाऊपणा क्षेत्रात एकूण उपाय देणारी कंपनी आहे. आम्ही नाविन्यपूर्ण प्रकल्प, आर्थिक मॉडेल आणि तंत्रज्ञान वाणिज्यीकरणाद्वारे उच्च-प्रभावी उपक्रम तयार करतो.",
  info2: "<strong>आमची मुख्य क्षेत्रे:</strong>",
  sector1: "नूतन ऊर्जा",
  sector2: "पाणी उपाय",
  sector3: "कचरा व्यवस्थापन",
  sector4: "स्मार्ट वसाहती",
  sector5: "शाश्वत शेती",
  sector6: "जागतिक प्रकल्प",
  info3:
    "आफ्रिका, युरोप, दक्षिण आशिया आणि आशिया-पॅसिफिकमधील प्रकल्पांसह, आम्ही मोजता येणारा फरक करणारे शाश्वत उपाय तयार करण्यासाठी वचनबद्ध आहोत.",
  info4:
    "भागीदारीच्या संधी किंवा अधिक माहितीसाठी, कृपया आमच्याशी संपर्क साधा <a href='mailto:info@etidynamics.com'>info@etidynamics.com</a> किंवा आमच्या संपर्क फॉर्मद्वारे.",
  contactLink: "आमच्याशी संपर्क साधा",
  aboutLink: "आमच्याबद्दल",
  backToTopText: "वर जा",
  footerAbout: "ETI डायनॅमिक्स",
  footerDesc:
    "नाविन्य आणि तंत्रज्ञानाद्वारे उद्याच्या दिवसासाठी शाश्वत उपाय तयार करणे.",
  quickLinks: "द्रुत दुवे",
  contactLinkText: "संपर्क साधा",
  aboutLinkText: "आमच्याबद्दल",
  projectsLinkText: "आमचे प्रकल्प",
  careersLinkText: "करिअर",
  contactInfo: "संपर्क माहिती",
  locationText: "जागतिक मुख्यालय",
  hoursText: "सोम-शुक्र: सकाळी 9 ते संध्याकाळी 5",
  privacyLink: "गोपनीयता धोरण",
  termsLink: "सेवा अटी",
  cookiesLink: "कुकीज",
  copyrightText: "© 2025 ETI डायनॅमिक्स. सर्व हक्क राखीव.",
  toggleButton: "English",
};

// English texts (original)
const englishTexts = {
  deliverText: "DELIVERING",
  sustainabilityText: "SUSTAINABILITY",
  ctaButton: "Get in Touch",
  info1:
    "<strong>ETI Dynamics</strong> is a total solutions company focused on the Environment & Sustainability sector. We create high-impact initiatives through innovative projects, financial models, and technology commercialization.",
  info2: "<strong>Our core sectors include:</strong>",
  sector1: "Renewable Energy",
  sector2: "Water Solutions",
  sector3: "Waste Management",
  sector4: "Smart Habitats",
  sector5: "Sustainable Agriculture",
  sector6: "Global Projects",
  info3:
    "With projects spanning Africa, Europe, South Asia, and Asia-Pacific, we're committed to creating sustainable solutions that make a measurable difference.",
  info4:
    "For partnership opportunities or more information, please contact us at <a href='mailto:info@etidynamics.com'>info@etidynamics.com</a> or through our contact form.",
  contactLink: "Contact Us",
  aboutLink: "About Us",
  backToTopText: "Back to top",
  footerAbout: "ETI Dynamics",
  footerDesc:
    "Creating sustainable solutions for a better tomorrow through innovation and technology.",
  quickLinks: "Quick Links",
  contactLinkText: "Contact Us",
  aboutLinkText: "About Us",
  projectsLinkText: "Our Projects",
  careersLinkText: "Careers",
  contactInfo: "Contact Info",
  locationText: "Global Headquarters",
  hoursText: "Mon-Fri: 9AM - 5PM",
  privacyLink: "Privacy Policy",
  termsLink: "Terms of Service",
  cookiesLink: "Cookies",
  copyrightText: "© 2025 ETI Dynamics. All rights reserved.",
  toggleButton: "मराठी",
};

// Function to toggle language
function toggleLanguage() {
  isMarathi = !isMarathi;
  const texts = isMarathi ? marathiTexts : englishTexts;

  // Update all text elements
  document.getElementById("deliverText").textContent = texts.deliverText;
  document.getElementById("sustainabilityText").textContent =
    texts.sustainabilityText;
  document.getElementById("ctaButton").textContent = texts.ctaButton;
  document.getElementById("info1").innerHTML = texts.info1;
  document.getElementById("info2").innerHTML = texts.info2;
  document.getElementById("sector1").textContent = texts.sector1;
  document.getElementById("sector2").textContent = texts.sector2;
  document.getElementById("sector3").textContent = texts.sector3;
  document.getElementById("sector4").textContent = texts.sector4;
  document.getElementById("sector5").textContent = texts.sector5;
  document.getElementById("sector6").textContent = texts.sector6;
  document.getElementById("info3").textContent = texts.info3;
  document.getElementById("info4").innerHTML = texts.info4;
  document.getElementById("contactLink").textContent = texts.contactLink;
  document.getElementById("aboutLink").textContent = texts.aboutLink;
  document.getElementById("backToTopText").textContent = texts.backToTopText;
  document.getElementById("footerAbout").textContent = texts.footerAbout;
  document.getElementById("footerDesc").textContent = texts.footerDesc;
  document.getElementById("quickLinks").textContent = texts.quickLinks;
  document.getElementById("contactLinkText").textContent =
    texts.contactLinkText;
  document.getElementById("aboutLinkText").textContent = texts.aboutLinkText;
  document.getElementById("projectsLinkText").textContent =
    texts.projectsLinkText;
  document.getElementById("careersLinkText").textContent =
    texts.careersLinkText;
  document.getElementById("contactInfo").textContent = texts.contactInfo;
  document.getElementById("locationText").textContent = texts.locationText;
  document.getElementById("hoursText").textContent = texts.hoursText;
  document.getElementById("privacyLink").textContent = texts.privacyLink;
  document.getElementById("termsLink").textContent = texts.termsLink;
  document.getElementById("cookiesLink").textContent = texts.cookiesLink;
  document.getElementById("copyrightText").textContent = texts.copyrightText;
  document.getElementById(
    "languageToggle"
  ).innerHTML = `<i class="fas fa-language"></i> ${texts.toggleButton}`;
}

// Add click event to language toggle button
languageToggle.addEventListener("click", toggleLanguage);

// Back to Top Button Functionality
document.getElementById("backToTop").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Show/hide Back to Top button based on scroll position
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.style.display = "inline-flex";
  } else {
    backToTop.style.display = "none";
  }
});

// Initialize - hide button on page load
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("backToTop").style.display = "none";
});
