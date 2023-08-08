import React from 'react';
import './Profile.css'; 

const Profile = () => {
  return (
    <div className="profile-container">
    <div className="profile-header">
      <div className="profile-picture">
        <img src="your-profile-picture-url" alt="Profile" />
      </div>
      <div className="profile-info">
        <h1>DHEERESHA</h1>
        <p>Lead Software Engineer</p>
      </div>
    </div>
    <div className="profile-summary">
      <p>
      Lead Software Engineer with 9.8 years in web app and API development. Proficient in Ruby on Rails, Node.js, Angular, ReactJS, and RESTful design. Agile practitioner excelling in cross-functional collaboration, delivering exceptional solutions in dynamic environments.
      </p>
    </div>
    <div className="section">
      <h2>Projects</h2>
      <div className="project-item">
        <h3>Mode</h3>
        <p>Built a modern business intelligence platform that unites data teams with business teams to build analytics that drives business outcomes.</p>
        <h4>Role: Full-Stack Engineer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Angular(v: 14)</li>
          <li>AngularJS(v: 1.8.3)</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Git (Ruby-2.7 and Rails-6.1.7)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>Staff Augmentation</h3>
        <p>Built a shop management system (ERP & light CRM) for car repair shops.</p>
        <h4>Role: Lead Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Angular(v: 14)</li>
          <li>Ruby on Rails</li>
          <li>PostgreSQL</li>
          <li>Git (Ruby-2.6.7 and Rails-6.1.3)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>ABA Web Services</h3>
        <p>Built a web service for managing ABA user certifications.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>Mysql</li>
          <li>Bitbucket (Ruby-2.4.0 and Rails-5.0.1)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>eBook Fulfillment</h3>
        <p>Built a web service for managing ABA user certifications.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>HTML</li>
          <li>JavaScript</li>
          <li>JQuery</li>
          <li>CSS</li>
          <li>Ruby on Rails</li>
          <li>Mysql</li>
          <li>Bitbucket (Ruby-2.4.0 and Rails-5.0.1)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>FrontSteps</h3>
        <p>Built a next-gen condo & HOA management software.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>Angular(V.4)</li>
          <li>Git</li>
          <li>PostgreSQL (Ruby-2.3.3 and Rails-4.2.11)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>HP Latex Mobile</h3>
        <p>Built a Mobile app for remote monitoring of HP Latex printers.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>Angular(V.4)</li>
          <li>Git</li>
          <li>AWS (Ruby-2.1.2 and Rails-4.1.5)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>HP WallArt Suite</h3>
        <p>Built a cloud-based Web solution for decorative applications.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>AngularJs</li>
          <li>Git (Ruby-1.9.3 and Rails-3.0.8)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>HP PrintOS Service Center</h3>
        <p>Built a Web app for service support of HP printers.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>AngularJs(1.4)</li>
          <li>CSS</li>
          <li>Git (Ruby-2.2.6 and Rails-5.0)</li>
        </ul>
      </div>
      <div className="project-item">
        <h3>SQY REWARDS UNLIMITED</h3>
        <p>Built APIs for apps that let users keep track of and avail of their reward points.</p>
        <h4>Role: Developer</h4>
        <h5>Tech Stack:</h5>
        <ul className="tech-stack">
          <li>Ruby on Rails</li>
          <li>AngularJS</li>
          <li>CSS</li>
          <li>Git (Ruby-2.2.6 and Rails-5.0)</li>
        </ul>
      </div>
    </div>
    <div className="section">
      <h2>Skills</h2>
      <ul className="skills-list">
        <li>Angular</li>
        <li>AngularJs</li>
        <li>ReactJs</li>
        <li>Ruby on Rails</li>
        <li>Node.js</li>
      </ul>
    </div>
    <div className="section">
      <h2>Companies</h2>
      <div className="company-item">
          <h3>Sigma Infosolutions Limited</h3>
          <p>Lead Software Engineer</p>
          <p>May 2019 - Present</p>
        </div>
        <div className="company-item">
          <h3>DreamOrbit Softech Pvt Ltd</h3>
          <p>Senior Software Engineer</p>
          <p>June 2018 - May 2019</p>
        </div>
        <div className="company-item">
          <h3>Robosoft Technologies Pvt. Ltd</h3>
          <p>Software Engineer</p>
          <p>2013 - 2018</p>
        </div>
    </div>
    <div className="section">
      <h2>Education</h2>
      <div className="education-item">
        <h3>MCA</h3>
        <p>MIT, Manipal University</p>
        <p>Aggregate: 8.74 CGPA</p>
      </div>
      {/* More education items... */}
    </div>
  </div>
  );
};

export default Profile;
