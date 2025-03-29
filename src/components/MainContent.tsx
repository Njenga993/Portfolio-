// Main Content Component with Sections
import React from "react";
import styles from "../styles/MainContent.module.css";
import ContactForm from "../components/ContactForm";
import Footer from "./Footer.tsx";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const MainContent: React.FC = () => {
  return (
    <main className={styles.content}>
      <section id="home" className="intro-container">
        <div className="intro-text-wrapper">
          <h1 className="intro-text primary-text">
            <span>Hey There!, I am </span>
          </h1>
          <div className="name-title">
            <h1> Kelvin Njenga Kamau.</h1>
            <p>
              <b>Software Engineer.</b> A Bachelors Degree Holder, With an
              enritched Experience in Full stack Web Development.
            </p>
          </div>

          {/* Brief Introduction */}
          <div className="brief-intro">
            <h3></h3>
            <p>
              <b>
                I am a passionate Full Stack Developer with expertise in
                frontend, backend, databases, and graphic design.
              </b>
            </p>
            <ul>
              <li>
                <strong>Frontend:</strong> React, Vue.js, HTML, CSS, JavaScript
              </li>
              <li>
                <strong>Backend:</strong> Django, Node.js, PHP Laravel
              </li>
              <li>
                <strong>Databases:</strong> MySQL, PostgreSQL, Firebase
              </li>
              <li>
                <strong>Graphic Design:</strong> Adobe Photoshop, Figma
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            <h4>Github</h4>
            <a href="https://github.com/Njenga993" target="_blank">
              <FaGithub />
            </a>
            <h4>Linked in</h4>
            <a
              href="https://www.linkedin.com/in/kelvin-kamau-788160277"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <h4>Email</h4>
            <a href="mailto:njengak993@gmail.com">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* Dotted Profile Card */}
        <div className="profileCard"></div>
      </section>

      <section id="home" className={styles.section}>
        <div className="welcomeCards">
          <div className="card">
            <h2>🚀 Front-end Developer</h2>
            <p>
              I specialize in crafting visually appealing and highly interactive
              web applications using modern frontend technologies. With a strong
              command of HTML, CSS, and JavaScript, I build responsive and
              dynamic user interfaces that enhance the user experience.
            </p>
            <div className="skills-images">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                alt="Vue.js"
              />
            </div>
          </div>

          <div className="card">
            <h2>📈 Back-end Developer </h2>
            <p>
              I have a deep understanding of backend development, ensuring that
              applications are fast, secure, and scalable. My experience with
              Node.js, Express.js, Django, and PHP allows me to develop powerful
              APIs and server-side applications. I enjoy working with
              authentication, authorization, real-time data processing, and
              RESTful APIs.
            </p>
            <div className="skills-images">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                alt="Express.js"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg"
                alt="Django"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
                alt="PHP"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                alt="Python"
              />
            </div>
          </div>

          <div className="card">
            <h2>📱 Database Management</h2>
            <p>
              I have hands-on experience with SQL and NoSQL databases, ensuring
              structured and efficient data management. Whether it’s MySQL,
              PostgreSQL, or MongoDB, I design database schemas that allow for
              seamless data retrieval, storage, and security.
            </p>
            <div className="skills-images">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                alt="MySQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
                alt="PostgreSQL"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
                alt="MongoDB"
              />
            </div>
          </div>

          <div className="card">
            <h2>🎨 Graphic Designer</h2>
            <p>
              Beyond development, I have a keen eye for design. I create
              engaging visuals, marketing materials, and branding assets using
              Adobe Photoshop, Illustrator, and Canva. My ability to blend
              design principles with technical skills allows me to craft logos,
              social media graphics, and UI/UX designs that stand out. I believe
              that great design enhances user interaction and brand identity.
            </p>
            <div className="skills-images">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                alt="Photoshop"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg"
                alt="Illustrator"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Canva_icon_2021.svg"
                alt="Canva"
              />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about-container">
        <div className="about-content">
          <div className="profile-image">
            <img
              src="src/assets/CEO.jpeg"
              alt="Kelvin Njenga"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I'm <strong>Kelvin Njenga Kamau</strong>, a passionate{" "}
              <strong>Full-Stack Developer</strong> and
              <strong>Digital Marketer</strong> based in Kenya. With a
              background in
              <strong>Information Science (ICT Option)</strong>, I specialize in
              creating efficient, scalable web applications and optimizing
              digital experiences to enhance brand visibility.
            </p>
            <p>
              My technical expertise includes working with modern web
              technologies such as
              <strong>React, Vue.js, Django, Flutter, and Laravel</strong>. I
              enjoy building user-friendly interfaces and ensuring smooth
              functionality across platforms. Beyond coding, I excel in
              <strong>digital marketing, SEO, and brand strategy</strong>,
              helping businesses grow through engaging content and data-driven
              marketing strategies.
            </p>
            <p>
              I hold a{" "}
              <strong>
                Bachelor’s Degree in Information Science (ICT Option)
              </strong>{" "}
              and am continuously expanding my skills. Recently, I have been
              exploring{" "}
              <strong>Microsoft Dynamics 365, Vue.js, and Flutter</strong> to
              stay ahead in the tech industry.
            </p>
            <p className="cta">
              Let's connect! Feel free to reach out via{" "}
              <a href="mailto:your@email.com"> email</a> or check out my work on
              <a href="https://github.com/yourgithub" target="_blank">
                GitHub
              </a>{" "}
              and
              <a href="https://linkedin.com/in/yourlinkedin" target="_blank">
                LinkedIn
              </a>
              .
            </p>
          </div>
        </div>
      </section>
      <section id="projects" className="projects-section">
        <h2>Projects</h2>
        <p>
          Here are some of the projects I have worked on, ranging from websites
          to full-fledged systems. Each project showcases different skills in
          web development, backend frameworks, and modern UI design.
        </p>

        <div className="projects-container">
          {/* Project 1 - Nyakazi Organics Website */}
          <div className="project-card">
            <img
              src="src/assets/nyakazi.png"
              alt="Nyakazi Organics"
              className="project-image"
            />
            <div className="project-content">
              <h3>Nyakazi Organics</h3>
              <p>
                Nyakazi Organics is a modern e-commerce website dedicated to
                selling organic products. The website features a user-friendly
                design, product categories, and a shopping cart system. It was
                built using HTML, CSS, and JavaScript to ensure a smooth
                browsing experience.
              </p>
              <ul>
                <li>Fully responsive design</li>
                <li>Interactive product display</li>
                <li>Simple and clean UI for easy navigation</li>
              </ul>
              <a
                href="https://nyakazi.org/"
                target="_blank"
                className="view-button"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 2 - Techlungs Website */}
          <div className="project-card">
            <img
              src="src/assets/Techlungs.png"
              alt="Techlungs Website"
              className="project-image"
            />
            <div className="project-content">
              <h3>Techlungs Website</h3>
              <p>
                A website for a technology-focused blog, Techlungs provides the
                latest news, tutorials, and reviews about emerging technologies.
                The design is clean and professional, with an emphasis on
                readability and smooth UI interactions.
              </p>
              <ul>
                <li>Mobile-first responsive design</li>
                <li>Blog post categories and search functionality</li>
                <li>Built with HTML, CSS, and JavaScript</li>
              </ul>
              <a
                href="https://techlungs.co.ke/"
                target="_blank"
                className="view-button"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 3 - Desiderata Website */}
          <div className="project-card">
            <img
              src="src/assets/desiderata.png"
              alt="Desiderata Website"
              className="project-image"
            />
            <div className="project-content">
              <h3>Desiderata Website</h3>
              <p>
                ​Desiderata Consultancy Firm is a forward-thinking organization
                specializing in data analytics and strategic development. They
                are dedicated to empowering businesses by transforming raw data
                into valuable insights that drive growth, innovation, and
                informed decision-making.
              </p>
              <ul>
                <li>Beautiful animations and transitions</li>
                <li>Designed for a high-end brand experience</li>
                <li>Optimized for speed and performance</li>
              </ul>
              <a
                href="https://desiderataconsultancyfirm.com/"
                target="_blank"
                className="view-button"
              >
                View Live
              </a>
            </div>
          </div>

          {/* Project 4 - POS System */}
          <div className="project-card">
            <img
              src="src/assets/POS.png"
              alt="POS System"
              className="project-image"
            />
            <div className="project-content">
              <h3>POS System</h3>
              <p>
                This is a Django-based Point of Sale (POS) system designed for
                small businesses. It allows business owners to manage inventory,
                sales, and generate reports seamlessly.
              </p>
              <ul>
                <li>Admin panel for managing products, sales, and reports</li>
                <li>Automatic stock updating after sales</li>
                <li>Built with Django, Python, and PostgreSQL</li>
              </ul>
              <a href="" target="_blank" className="view-button">
                View Live
              </a>
            </div>
          </div>

          {/* Project 5 - React Portfolio */}
          <div className="project-card">
            <img
              src="src/assets/Portfolio.png"
              alt="Portfolio Website"
              className="project-image"
            />
            <div className="project-content">
              <h3>My Portfolio</h3>
              <p>
                This personal portfolio website showcases my projects, skills,
                and experience in web development. It features a modern
                dashboard layout with smooth transitions and an interactive UI.
              </p>
              <ul>
                <li>Built using React and TypeScript</li>
                <li>Dark and light mode support</li>
                <li>Fully responsive and optimized</li>
              </ul>
              <a href="" target="_blank" className="view-button">
                View Live
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <h1>Contact</h1>
        <ContactForm />
      </section>
      <Footer />
    </main>
  );
};

export default MainContent;
