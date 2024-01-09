import {Link} from "react-router-dom";

const SMFooter = () => {
    return (
        <div className="SMFooter">
            <img src={require('../static/Images/smt_vector.png')}  alt={"Crest"}/>
            <h2>MON IH MACHAR.</h2>
            <div className="footer-links">
                <Link to={"/"}>
                    <p>Sponsorship</p>
                </Link>
                <Link to={"/"}>
                    <p>Contact Us</p>
                </Link>
                <Link to={"/"}>
                    <p>Content Manager</p>
                </Link>
            </div>
        </div>
    )
}

export default SMFooter;