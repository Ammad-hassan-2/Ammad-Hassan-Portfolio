AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Molecular Imaging Mini-fellow",
    cardImage: "assets/images/experience-page/Stanford Medicine.png",
    place: "Center of Innovation in In Vivo Imaging, Stanford University",
    time: "(May - Sep, 2024)",
    desp: "<li>The first Pakistani to get his proposal accepted for Stanford's Mini-fellowship program as a High School student among fellow Undergraduate and Graduate students from different 18 countries.</li>Completed three rigorous training modules on Molecular Imaging and technologies; Optical luminescent imaging cellular and preclinical applications; Clinical and AI/Deep Learning applications. <li>Presented my breakthrough in Oral Cancer Diagnostics on the International Seminar of Medical Imaging Techniques, Stanford Medicine.</li> <li>Won the Best Research Award and grant to utilize Coral Accerelator devices to scale accessible Diagnostics in under-privilleged areas of my country and the World.</li><li> After the successful deployment of this app, I'm currently working on utilizing these coral accelerators in the area of three main foci of cancer prediction/ prognosis: a) the prediction of cancer susceptibility (i.e. risk assessment); b) the prediction of cancer recurrence and c) the prediction of cancer survivability</li>",
  },
  {
    title: "Member, AIMI NextGen Tech Talks",
    cardImage: "assets/images/experience-page/Screenshot 2024-11-19 114219.png",
    place: "Center of Artificial Intelligence in Medicine & Imaging",
    time: "(Nov, 2024 - Present)",
    desp: "<li>Participated in the AIMI Symposium and NextGen Tech Talks featuring experts such as Dr. Jonathan Chen, Dr. Jessica Maga, and the Chief Data Scientist at Stanford Healthcare, Dr. Nigam Shah. </li>The most important thing I've learnt from this program is the importance of timeline in collection of Medical Data to train Diagnostic Models and create algorithms on. This directly informed my project on a highly accurate computer vision architecture for diagnosing oral carcinoma with a focus on low-resource healthcare environments, as I analyzed and took into account several of the very nuanced underlying factors in Data Collection.<li>Specific case studies presented during the talks allowed me to learn more about Adapt Explainability Techniques; the type of innvovation of AIMI in combining imaging and EHR data that suggests the value of leveraging additional clinical data to enhance model performance; and the focus on scaliblity inspired approach in my dataset preparation and model training strategies.</li>",
  },
  {
    title: "IBM Quantum Challenge and Qiskit Global Summer School",
    cardImage: "assets/images/experience-page/QGSS.png",
    place: "IBM Quantum Platform",
    time: "(Mar - July, 2024)",
    desp: "<li>Successfully completed and won Insignia for the IBM Quantum Challenge on Qiskit for Quantum Computing.</li><li>Created unique solutions for 7 graded labs on the most-pressing utility scale Quantum Computing problems like Quantum Noice Modelling and Error Mitigation.</li><li>Attended the Qiskit Global Summer School as a continum of the Quantum Challenge, and got the opportunity to meet with IBM's Quantum Engineers and Interns.</li><li> Worked on the highly effective Quantum Computation libraries in Qiskit programming language such as the Qiskit Terra for creation, execution and optimization of foundation quantum circuits and algorithms and Qisket AER high-end simulator for testing and debugging noise-affected quantum simulations. Currently, I'm working on Qiskit Machine Learning featuring QGANs and parameterized Quantum circuits (PQC) to seamlessly integrate TensorFlow lite and PyTorch for Quantum-enhanced data classification, regression, and generative models, and possibly enhance my Cancer Diagnostic Deep Learing Framework of ResNet-ViT Ensemble.</li>",
  },
  {
    title: "Artificial Intelligence in Healthcare - Health Techopreneurship",
    cardImage: "assets/images/experience-page/NIC collage.png",
    place: "Founders' Institute, National Incubation Center of Pakistan",
    time: "(Dec, 2023  - Present)",
    desp: "<li>Under the FI, or the Founders' Institute, I'm part of the Idea-Review Sessions which enable me to refine my Healh Tech Initative, PulseAI.</li><li> Through constant efforts and close-up watching industry leading entrepreneurs pitching their ideas to Angel Investors and Venture Capitalists, I learnt not only the tech and non-tech skills but also the importance of deep work and resilience and the ability to remain in the Blue Oceans of Entreprenuership.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Team Lead, Pulse AI @ Junior Academy",
    subtitle: "Junior Academy, New York Academy of Sciences",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  {
    title: "Founding President, Quantum Computing and AI Society",
    subtitle: "Beaconhouse School",
    cardImage: "assets/images/experience-page/2.jpg",
    description:
      "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  },
  {
    title: "Member",
    subtitle: "IYRC STEM Research ",
    cardImage: "assets/images/experience-page/3.jpg",
    description:
      "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  },
  {
    title: "Vice-President",
    subtitle: "Futuristics System Society",
    cardImage: "assets/images/experience-page/4.jpg",
    description:
      "AI-astronautics & vertical farming AI; lauded by Punjab Gov; created quantum computing course; guided team in IBM Quantum Challenge.",
  },
  {
    title: "Computer Science Program Core-Member",
    subtile: "Google Mentorship Program",
    cardImage: "",
    description:
      "After my work on OpenCV, I was selected as a core-member of the Mentorship Program offered by Google's Augmented Reality Department."
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="105" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "Best Research and Presentation",
    subtitle: "Project Award and Grant",
    image: "assets/images/experience-page/Stanford.jpg",
    desp: "My project on implementing a novel, ensemble approach for ViT-ResNets in Oral Carcinoma Diagnostics won the Best Research Award at the Interantional Conference of Medical Imaging Techniques, Stanford University.",
    href: "https://drive.google.com/file/d/1S9dwXKXm0VUiBaOoJA20XhBY3pFyseDa/view?usp=drive_link",
  },
  {
    title: "Honorable Mention",
    subtitle: "International Logic Olympiad",
    image: "assets/images/experience-page/ILO.png",
    desp: "Represented my country at the International Logic Olympiad and trained with team of 20 students. I was one of top 2 performers nationally and got Honorable Mention Award, Internatioanlly. During this competition, I developed new solving techniques for fitch logic in CS, Math",
    href: "https://www.logicolympiad.org/",
  },
  {
    title: "Academic Distinction and Merit Scholarship",
    subtitle: "Federal Board of Education",
    image: "assets/images/experience-page/fbise.png",
    desp: "Ranked 41 out of 101,370 students natioanlly in Grade 10. Ranked 4th in Grade 12 High School Leaving Examinations. Won President's Medal and Merit Scholarship of PKR. 300,000, collectively by the School and Board.",
    href: "https://fbise.edu.pk/scholarships/2022/Merit_Scholarship_List_SSC_Annual_Exams_(1st_and_2nd)_2022.pdf",
  },
  {
    title: "Insignia of Quantum Excellence",
    subtitle: "IBM Quantum Platform",
    image: "assets/images/experience-page/IBM.png",
    desp: "One of the only participants of the IBM Quantum Challenge on Qiskit, this year, to complete all the challenging problems and correct grading of all the labs of Quantum Computation.",
    href: "https://drive.google.com/file/d/154jG3oaosYXodGaX7ubvXp4qBo2nwMGg/view?usp=sharing",
  },
  {
    title: "Valedictorian",
    subtitle: "Cadet College Hasanabdal",
    image: "assets/images/experience-page/newcch.png",
    desp: "Won the highest academic honor, Catchpole Scholar, by placing first in my cohort for both Grade 11 and Grade 12.",
    href: "cch.edu.pk",
  },
    {
    title: "Head Boy",
    subtitle: "AQK School of Science and Technology",
    image: "assets/images/experience-page/aka.png",
    desp: "On the basis of my academic, co-curricular and leadership achievements such as the Secondary School Academic Distinction, Best in Discipline and Turn-out Award amd Best Skit Performer Award, I was appointed as the Headboy of the school.",
    href: "https://aqksafari1.edu.pk/",
  },

  {
    title: "High Achiever Award",
    subtitle: "EducationUSA",
    image: "assets/images/experience-page/USEFP",
    desp: "Won the United States Education Foundation in Pakistan's High Achiever Award at the International Education Week, 2024.",
    href: "https://hackasolution.devpost.com/",
  },
  {
    title: "Duke of Edinburgh's Award",
    image: "assets/images/experience-page/DofE.png",
    desp: "Completed the Community Service, Leadership and Adventure Trips requirements to earn the Duke of Edinburgh's Award.",
    href: "https://www.dofe.org/",
  },
  {
    title: "Captain Cricket Team",
    subtitle: "WICA International Cricket Academy, Cadet College Hasanabdal",
    image: "assets/images/experience-page/atlas.png",
    desp: "Aorld.",
    href: "cch.edu.pk",
  },
  {
    title: "Community Service - Project Leader",
    subtitle: "Judge",
    image: "assets/images/experience-page/neo.png",
    desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
    href: "https://neohacks.org/",
  },

];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
