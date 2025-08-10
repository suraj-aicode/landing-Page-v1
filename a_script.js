    // Back to Top Button Functionality
    document.getElementById('backToTop').addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Show/hide Back to Top button based on scroll position
    window.addEventListener('scroll', function() {
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 300) {
            backToTop.style.display = 'inline-flex';
        } else {
            backToTop.style.display = 'none';
        }
    });

    // Initialize - hide button on page load
    document.addEventListener('DOMContentLoaded', function() {
        document.getElementById('backToTop').style.display = 'none';
    });

    // Language Toggle Functionality
    const languageToggle = document.getElementById('languageToggle');
    let isMarathi = false;

    // Marathi translations for About Us page
    const marathiTexts = {
      // Hero Section
      heroTitle: "ETI डायनॅमिक्स बद्दल",
      heroSubtitle: "नाविन्य आणि तंत्रज्ञानाद्वारे उद्याच्या दिवसासाठी शाश्वत उपाय",
      
      // Our Story Section
      storyTitle: "आमची गोष्ट",
      storyDescription: "पर्यावरणीय शाश्वततेच्या क्षेत्रात बदल घडवून आणण्याच्या दृष्टीकोनातून ETI डायनॅमिक्सची स्थापना करण्यात आली.",
      
      // Card 1
      card1Title: "आमची सुरुवात",
      card1Content: "२०१० मध्ये स्थापन झालेली ETI डायनॅमिक्स एका छोट्या पर्यावरणप्रेमी टीमसह सुरू झाली ज्यांना सर्वांसाठी शाश्वतता प्राप्त करण्याचा मोठा स्वप्न होता.",
      
      // Card 2
      card2Title: "आमची वाढ",
      card2Content: "रणनीतिक भागीदारी आणि नाविन्यपूर्ण प्रकल्पांद्वारे आम्ही चार खंडांमध्ये आमच्या कार्याचा विस्तार केला आहे आणि ५०हून अधिक यशस्वी अंमलबजावणी केली आहे.",
      
      // Card 3
      card3Title: "आमचे भविष्य",
      card3Content: "समुदाय त्यांच्या पर्यावरणाशी कसे संवाद साधतात हे पुनर्परिभाषित करणारी नवीन पिढीची शाश्वत तंत्रज्ञान विकसित करण्यासाठी आम्ही वचनबद्ध आहोत.",
      
      // Mission Section
      missionTitle: "आमचे ध्येय आणि दृष्टी",
      missionContent1: "ETI डायनॅमिक्समध्ये, आमचा विश्वास आहे की शाश्वतता विलासिता नसून प्रत्येक समुदायाचा मूलभूत पैलू असावा. आमचे ध्येय असे नाविन्यपूर्ण पर्यावरणीय उपाय विकसित करणे आणि लागू करणे आहे जे आर्थिकदृष्ट्या व्यवहार्य आणि पर्यावरणीयदृष्ट्या जबाबदार आहेत.",
      missionContent2: "आम्ही अशा जगाची कल्पना करतो जिथे शाश्वत पद्धती दैनंदिन जीवनात सहजतेने एकत्रित केल्या जातात, मानवी विकास आणि पर्यावरण संरक्षण यांच्यात समतोल निर्माण करतात.",
      
      // Stats
      stat1Number: "५०+",
      stat1Label: "प्रकल्प",
      stat2Number: "१२",
      stat2Label: "देश",
      stat3Number: "२००+",
      stat3Label: "तज्ञ",
      stat4Number: "१.५ कोटी+",
      stat4Label: "प्रभावित जीवन",
      
      // Team Section
      teamTitle: "आमचे नेतृत्व परिचय",
      teamDescription: "आमच्या मिशनला पुढे नेणाऱ्या तज्ञ आणि उत्साही लोकांची मंडळी",
      
      // Team Members
      member1Name: "डॉ. राजेश कुमार",
      member1Position: "संस्थापक आणि मुख्य कार्यकारी अधिकारी",
      member1Bio: "पर्यावरण अभियांत्रिकीत पीएचडी आणि २५+ वर्षांचा अनुभव",
      
      member2Name: "प्रिया शर्मा",
      member2Position: "मुख्य तंत्रज्ञान अधिकारी",
      member2Bio: "नूतन ऊर्जा प्रणाली आणि स्मार्ट ग्रीडमधील तज्ञ",
      
      member3Name: "अमित पटेल",
      member3Position: "ऑपरेशन्स संचालक",
      member3Bio: "मोठ्या प्रमाणात शाश्वतता अंमलबजावणीतील तज्ञ",
      
      member4Name: "नेहा गुप्ता",
      member4Position: "संशोधन प्रमुख",
      member4Bio: "शाश्वत शेतीमधील आमच्या नाविन्याचे नेतृत्व",
      
      // Footer
      footerAbout: "ETI डायनॅमिक्स",
      footerDesc: "नाविन्य आणि तंत्रज्ञानाद्वारे उद्याच्या दिवसासाठी शाश्वत उपाय तयार करणे.",
      quickLinks: "द्रुत दुवे",
      contactLink: "आमच्याशी संपर्क साधा",
      careersLink: "करिअर",
      projectsLink: "आमचे प्रकल्प",
      aboutLink: "आमच्याबद्दल",
      contactInfo: "संपर्क माहिती",
      locationText: "जागतिक मुख्यालय",
      hoursText: "सोम-शुक्र: सकाळी ९ ते संध्याकाळी ५",
      privacyLink: "गोपनीयता धोरण",
      termsLink: "सेवा अटी",
      cookiesLink: "कुकीज",
      copyrightText: "© २०२५ ETI डायनॅमिक्स. सर्व हक्क राखीव.",
      toggleButton: "English",
      backToTopText: "वर जा"
    };

    // English texts (original)
    const englishTexts = {
      // Hero Section
      heroTitle: "About ETI Dynamics",
      heroSubtitle: "Pioneering sustainable solutions for a better tomorrow through innovation and technology",
      
      // Our Story Section
      storyTitle: "Our Story",
      storyDescription: "Founded with a vision to transform the environmental sustainability sector, ETI Dynamics has grown into a global leader in sustainable solutions.",
      
      // Card 1
      card1Title: "Our Beginning",
      card1Content: "Established in 2010, ETI Dynamics started as a small team of environmental enthusiasts with a big dream to make sustainability accessible to all.",
      
      // Card 2
      card2Title: "Our Growth",
      card2Content: "Through strategic partnerships and innovative projects, we've expanded our operations across four continents with over 50 successful implementations.",
      
      // Card 3
      card3Title: "Our Future",
      card3Content: "We're committed to developing next-generation sustainable technologies that will redefine how communities interact with their environment.",
      
      // Mission Section
      missionTitle: "Our Mission & Vision",
      missionContent1: "At ETI Dynamics, we believe that sustainability shouldn't be a luxury but a fundamental aspect of every community. Our mission is to develop and implement innovative environmental solutions that are both economically viable and ecologically responsible.",
      missionContent2: "We envision a world where sustainable practices are seamlessly integrated into daily life, creating harmony between human development and environmental preservation.",
      
      // Stats
      stat1Number: "50+",
      stat1Label: "Projects",
      stat2Number: "12",
      stat2Label: "Countries",
      stat3Number: "200+",
      stat3Label: "Experts",
      stat4Number: "15M+",
      stat4Label: "Lives Impacted",
      
      // Team Section
      teamTitle: "Meet Our Leadership",
      teamDescription: "The brilliant minds driving our mission forward with expertise and passion",
      
      // Team Members
      member1Name: "Dr. Rajesh Kumar",
      member1Position: "Founder & CEO",
      member1Bio: "PhD in Environmental Engineering with 25+ years of experience",
      
      member2Name: "Priya Sharma",
      member2Position: "Chief Technology Officer",
      member2Bio: "Specialist in renewable energy systems and smart grids",
      
      member3Name: "Amit Patel",
      member3Position: "Director of Operations",
      member3Bio: "Expert in large-scale sustainability implementations",
      
      member4Name: "Neha Gupta",
      member4Position: "Head of Research",
      member4Bio: "Leading our innovation in sustainable agriculture",
      
      // Footer
      footerAbout: "ETI Dynamics",
      footerDesc: "Creating sustainable solutions for a better tomorrow through innovation and technology.",
      quickLinks: "Quick Links",
      contactLink: "Contact Us",
      careersLink: "Careers",
      projectsLink: "Our Projects",
      aboutLink: "About Us",
      contactInfo: "Contact Info",
      locationText: "Global Headquarters",
      hoursText: "Mon-Fri: 9AM - 5PM",
      privacyLink: "Privacy Policy",
      termsLink: "Terms of Service",
      cookiesLink: "Cookies",
      copyrightText: "© 2025 ETI Dynamics. All rights reserved.",
      toggleButton: "मराठी",
      backToTopText: "Back to top"
    };

    // Function to toggle language
    function toggleLanguage() {
      isMarathi = !isMarathi;
      const texts = isMarathi ? marathiTexts : englishTexts;
      
      // Update all text elements
      document.querySelector('.hero-content h1').textContent = texts.heroTitle;
      document.querySelector('.hero-content p').textContent = texts.heroSubtitle;
      
      // Our Story Section
      document.querySelector('.section-title h2').textContent = texts.storyTitle;
      document.querySelector('.section-title p').textContent = texts.storyDescription;
      
      // Cards
      const cards = document.querySelectorAll('.about-card');
      cards[0].querySelector('h3').textContent = texts.card1Title;
      cards[0].querySelector('p').textContent = texts.card1Content;
      cards[1].querySelector('h3').textContent = texts.card2Title;
      cards[1].querySelector('p').textContent = texts.card2Content;
      cards[2].querySelector('h3').textContent = texts.card3Title;
      cards[2].querySelector('p').textContent = texts.card3Content;
      
      // Mission Section
      document.querySelector('.mission-container h2').textContent = texts.missionTitle;
      const missionParagraphs = document.querySelectorAll('.mission-container p');
      missionParagraphs[0].textContent = texts.missionContent1;
      missionParagraphs[1].textContent = texts.missionContent2;
      
      // Stats
      const stats = document.querySelectorAll('.stat-item');
      stats[0].querySelector('.stat-number').textContent = texts.stat1Number;
      stats[0].querySelector('.stat-label').textContent = texts.stat1Label;
      stats[1].querySelector('.stat-number').textContent = texts.stat2Number;
      stats[1].querySelector('.stat-label').textContent = texts.stat2Label;
      stats[2].querySelector('.stat-number').textContent = texts.stat3Number;
      stats[2].querySelector('.stat-label').textContent = texts.stat3Label;
      stats[3].querySelector('.stat-number').textContent = texts.stat4Number;
      stats[3].querySelector('.stat-label').textContent = texts.stat4Label;
      
      // Team Section
      document.querySelector('.team-section .section-title h2').textContent = texts.teamTitle;
      document.querySelector('.team-section .section-title p').textContent = texts.teamDescription;
      
      // Team Members
      const members = document.querySelectorAll('.team-member');
      members[0].querySelector('h3').textContent = texts.member1Name;
      members[0].querySelectorAll('p')[0].textContent = texts.member1Position;
      members[0].querySelectorAll('p')[1].textContent = texts.member1Bio;
      
      members[1].querySelector('h3').textContent = texts.member2Name;
      members[1].querySelectorAll('p')[0].textContent = texts.member2Position;
      members[1].querySelectorAll('p')[1].textContent = texts.member2Bio;
      
      members[2].querySelector('h3').textContent = texts.member3Name;
      members[2].querySelectorAll('p')[0].textContent = texts.member3Position;
      members[2].querySelectorAll('p')[1].textContent = texts.member3Bio;
      
      members[3].querySelector('h3').textContent = texts.member4Name;
      members[3].querySelectorAll('p')[0].textContent = texts.member4Position;
      members[3].querySelectorAll('p')[1].textContent = texts.member4Bio;
      
      // Footer
      const footerColumns = document.querySelectorAll('.footer-column');
      footerColumns[0].querySelector('h3').textContent = texts.footerAbout;
      footerColumns[0].querySelector('p').textContent = texts.footerDesc;
      
      footerColumns[1].querySelector('h3').textContent = texts.quickLinks;
      const footerLinks = footerColumns[1].querySelectorAll('.footer-links a span');
      footerLinks[0].textContent = texts.contactLink;
      footerLinks[1].textContent = texts.careersLink;
      footerLinks[2].textContent = texts.projectsLink;
      footerLinks[3].textContent = texts.aboutLink;
      
      footerColumns[2].querySelector('h3').textContent = texts.contactInfo;
      const contactItems = footerColumns[2].querySelectorAll('.footer-links li');
      contactItems[2].querySelector('span').textContent = texts.locationText;
      contactItems[3].querySelector('span').textContent = texts.hoursText;
      
      const legalLinks = document.querySelectorAll('.footer-legal a');
      legalLinks[0].textContent = texts.privacyLink;
      legalLinks[1].textContent = texts.termsLink;
      legalLinks[2].textContent = texts.cookiesLink;
      
      document.querySelector('.copyright').textContent = texts.copyrightText;
      document.getElementById('backToTopText').textContent = texts.backToTopText;
      document.getElementById('languageToggle').innerHTML = `<i class="fas fa-language"></i> ${texts.toggleButton}`;
    }

    // Add click event to language toggle button
    languageToggle.addEventListener('click', toggleLanguage);

