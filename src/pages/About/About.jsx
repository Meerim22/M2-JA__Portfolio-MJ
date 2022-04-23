import "./about.scss";

function About() {
  return (
    <div className="about">
      <h1 className="about__h1">About my career</h1>
      <div className="about__container">
        <div className="about__cnt">
          <h2 className="about__h2">My soft skills</h2>
          <div className="about__item">
            <p className="about__title">HTML</p>
            <div className="about__star-div">
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
            </div>
          </div>
          <div className="about__item">
            <p className="about__title">JavaScript</p>
            <div className="about__star-div">
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
            </div>
          </div>
          <div className="about__item">
            <p className="about__title">UI/UX Design</p>
            <div className="about__star-div">
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
            </div>
          </div>
          <div className="about__item">
            <p className="about__title">Css</p>
            <div className="about__star-div">
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
            </div>
          </div>
          <div className="about__item">
            <p className="about__title">Sass</p>
            <div className="about__star-div">
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
             <img className="about__star" src="https://img.icons8.com/nolan/48/star.png" alt="star" /> 
            </div>
          </div>
        </div>
        <div className="about__cnt about__m-t">
          <h2 className="about__h2">My projects</h2>
          <div className="about__item">
            <p className="about__title">WebSMART</p>
            <p className="about__pj-text">This is a site I created for my first team, under the name "WebSMART"</p>
            <a className="about__pj-link" href="https://websmart-kelechek.github.io/WebSMART/">Learn More</a>
          </div>
          <div className="about__item">
            <p className="about__title">tindog</p>
            <p className="about__pj-text">This is the site I created during one learning sprint</p>
            <a className="about__pj-link" href="https://websmart-kelechek.github.io/TinDog/">Learn More</a>
          </div>
          <div className="about__pj-item">
            <p className="about__title">Active-Box</p>
            <p className="about__pj-text">This is the site I created during one learning sprint</p>
            <a className="about__pj-link" href="https://github.com/Meerim22/Active-Box">Learn More</a>
          </div>
          <div className="about__item">
            <p className="about__title">My-Blog</p>
            <p className="about__pj-text">This is the site I created during one learning sprint</p>
            <a className="about__pj-link" href="https://github.com/Meerim22/My-Blog">Learn More</a>
          </div>
          <div className="about__item">
            <p className="about__title">Landing</p>
            <p className="about__pj-text">This is the site I created during one learning sprint</p>
            <a className="about__pj-link" href="https://github.com/Meerim22/Landing">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
