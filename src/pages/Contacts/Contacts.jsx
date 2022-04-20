import "./contacts.scss";
import { FaGithubSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function Contacts() {
    return (
        <div className="contacts">
            <h2 className="contacts__title">Contacts</h2>
            <div className="contacts__main">
                <a className="contacts__item-icon" href="https://github.com/Meerim22"><FaGithubSquare /><b>  Me on GitHub </b></a>
                <a className="contacts__item-icon" href="https://www.instagram.com/meerim.jutankeeva/"><FaInstagramSquare /><b> Me on Instagram </b></a>
            </div>
            <div className="contacts__main">
                <div className="contacts__item">
                    <p><b> Location</b></p>
                    <p>Osh, Kyrgyzstan</p>
                </div>
                <div className="contacts__item">
                    <p><b>Phone number</b></p>
                    <a className="contacts__item-a" href="tel:+996500872254">+996 500 87 22 54</a>
                </div>
                <div className="contacts__item">
                    <p><b>Email</b></p>
                    <a className="contacts__item-a" href="mailto:meerim.jutankeeva.kk@gmail.com">meerim.jutankeeva.kk@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
