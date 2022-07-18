import "./About.css";

const About = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="banner mt-1">
          <h1>
            Welcome To <br />
            Library Management System
          </h1>
        </div>
        <div className="about-content mt-3">
          <p>
            Online Library Management System is an Automated Library System that
            handles the various functions of the library. It provides a complete
            solution to the library management software. The online Library
            Management System is classified into two parts Bar Code System and
            RFID System.
          </p>
          <p>
            Library plays an important role in all schools and colleges, no
            educational institution can exist without Library Administration
            Software. It is an important part of every school and college and it
            helps the librarian to keep records of available books as well as
            issued books. Library Management System software helps in different
            ways by providing students the facility to learn, gather resources,
            promote group learning and improve knowledge and skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
