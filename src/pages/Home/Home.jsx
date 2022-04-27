import "./home.scss";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Home() {
  return (
    <div className="home">
      <img className="home__img" src="/mika.jpg" alt="My img" />
      <h1 className="home__h1">Meerim Jutankeeva</h1>
      <h3 className="home__h2">FrontEnd разработчик</h3>
      <p className="home__p">Hello, my name is Mika. I am a beginner FrontEnd developer. I am 14 years old and I am still in school, but don't worry, it won't bring any problems in the future, because I am confident in my abilities. I will work hard on my mistakes and learn new things.</p>
      <h2 className="home__contacts-title">Contacts</h2>
      <div className="home__contacts">
        <a className="home__contacts-item-icon" href="https://github.com/Meerim22"><FaGithubSquare /><b>  Me on GitHub </b></a>
        <a className="home__contacts-item-icon" href="https://www.instagram.com/meerim.jutankeeva/"><FaInstagramSquare /><b> Me on Instagram </b></a>
      </div>
      <div className="home__contacts">
        <div className="home__contacts-item">
          <p><b> Location</b></p>
          <p>Osh, Kyrgyzstan</p>
        </div>
        <div className="home__contacts-item">
          <p><b>Phone number</b></p>
          <a className="home__contacts-item-a" href="tel:+996500872254">+996 500 87 22 54</a>
        </div>
        <div className="home__contacts-item">
          <p><b>Email</b></p>
          <a className="home__contacts-item-a" href="mailto:meerim.jutankeeva.kk@gmail.com">meerim.jutankeeva.kk@gmail.com</a>
        </div>
      </div>
    </div>
  );
}

export default Home;
