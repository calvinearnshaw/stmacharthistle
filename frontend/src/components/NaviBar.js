import { Link } from 'react-router-dom';
import {BsTwitterX} from "react-icons/bs";
import {FaFacebookF, FaInstagram} from "react-icons/fa";

const NaviBar = () => {
    return (
        <div className="NaviBar">
            <div className="clubLogo">
                <img src={require('../static/Images/smt_crest.png')} alt="clubLogo" />
            </div>
            <div className="naviLinks">
                <Link className="link" to="/">
                    <p>Home</p>
                </Link>
                <Link className="link" to="/about">
                    <p>About</p>
                </Link>
                <Link className="link" to="/news">
                    <p>News</p>
                </Link>
                <Link className="link" to="/fixtures">
                    <p>Fixtures</p>
                </Link>
            </div>
            <div className="socialLinks">
                <a href="https://www.facebook.com/profile.php?id=100094173835652" target="_blank">
                    <FaFacebookF color={"white"} />
                </a>
                <a href="https://www.instagram.com/stmacharthistle" target="_blank">
                    <FaInstagram color={"white"} />
                </a>
                <a href="https://www.twitter.com/stmacharthistle" target="_blank">
                    <BsTwitterX color={"white"} />
                </a>
            </div>
        </div>
    )
}

export default NaviBar;