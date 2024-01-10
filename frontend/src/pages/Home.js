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
            <div className="league-table">
                <h2>Aberdeenshire AFA Division 2 East</h2>
                <table className="lg-t">
                    <tbody>
                        <tr>
                            <th>Pos</th>
                            <th>Club</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Monymusk</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>FC Polska</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Meldrum United</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>AC Mill Inn Academy</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>5</td>
                            <td>Laurencekirk West End</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>6</td>
                            <td>Ellon Amateurs</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr className="lgPos">
                            <td>7</td>
                            <td>St Machar Thistle</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>8</td>
                            <td>Ferryhill</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>9</td>
                            <td>Byron Sports Club</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                            <td>-</td>
                            <td>0</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="latest-news">
                <span>
                    <h2>Latest News</h2>
                    <Link to={"/news"} className={"news-link"}>
                        <IoIosArrowForward size={'30px'} color={'#851B87'} className={"arrow-fwd"} />
                    </Link>
                </span>
                <div className="entries">
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Category</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                    <div className="news-entry">
                        <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                        <div className="news-details">
                            <h3>News Title</h3>
                            <h2>News Title</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;