import {FaPlaneDeparture} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";

const Home = () => {
    return (
        <div className="homepage">
            <div className="hero">
                <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                <h1>Since 2023.</h1>
                <h2>The home of St Machar Thistle AFC.</h2>
            </div>
            <div className="fixtures">
                <h2>Upcoming Fixtures</h2>
                <div className="fixture-entry">
                    <FaPlaneDeparture size={"30px"} color={"white"} className={"status"} />
                    <div className="fixture-details">
                        <h3>vs Laurencekirk West End</h3>
                        <span>
                            <p>01/01/2024</p>
                            <p>Memorial Park</p>
                        </span>
                    </div>
                </div>
                <div className="fixture-entry">
                    <FaPlaneDeparture size={"30px"} color={"white"} className={"status"} />
                    <div className="fixture-details">
                        <h3>vs Laurencekirk West End</h3>
                        <span>
                            <p>01/01/2024</p>
                            <p>Memorial Park</p>
                        </span>
                    </div>
                </div>
                <div className="fixture-entry">
                    <FaPlaneDeparture size={"30px"} color={"white"} className={"status"} />
                    <div className="fixture-details">
                        <h3>vs Laurencekirk West End</h3>
                        <span>
                            <p>01/01/2024</p>
                            <p>Memorial Park</p>
                        </span>
                    </div>
                </div>
                <Link to={"/fixtures"} className={"fixtures-link"}>
                    View All Fixtures
                    <IoIosArrowForward className={"arrow-fwd"} />
                </Link>
            </div>
        </div>
    )
}

export default Home;