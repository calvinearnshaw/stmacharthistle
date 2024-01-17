import {FaPlaneDeparture} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import useFetch from "../hooks/useFetch";

const Home = () => {
    const {data: leagueTable, isPending, error} = useFetch("https://stmacharthistleapi.onrender.com/api/league");

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
                        {error && (
                            <tr>
                                <td>{error}</td>
                            </tr>
                        )}
                        {leagueTable && leagueTable.map((club) => {
                            if (club.team === "St Machar Thistle") {
                                return (
                                    <tr style={{fontWeight: "bold"}}>
                                        <td>{club.pos}</td>
                                        <td>{club.team}</td>
                                        <td>{club.played}</td>
                                        <td>{club.win}</td>
                                        <td>{club.draw}</td>
                                        <td>{club.loss}</td>
                                        <td>{club.goalDiff}</td>
                                        <td>{club.pts}</td>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr>
                                        <td>{club.pos}</td>
                                        <td>{club.team}</td>
                                        <td>{club.played}</td>
                                        <td>{club.win}</td>
                                        <td>{club.draw}</td>
                                        <td>{club.loss}</td>
                                        <td>{club.goalDiff}</td>
                                        <td>{club.pts}</td>
                                    </tr>
                                )
                            }
                        })}
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
            <div className="sponsors">
                <h2>Club Sponsors</h2>
                <span>
                    <a href="https://www.facebook.com/theredlion.aberdeen" target="_blank" rel="noopener noreferrer">
                        <img src={require('../static/Images/sponsors/RedLionAberdeen.png')} alt="The Red Lion, Aberdeen" />
                    </a>
                    <a href="https://flakesdiner.com/" target="_blank" rel="noopener noreferrer">
                        <img src={require('../static/Images/sponsors/FlakesDiner.png')} alt="Flakes Diner, Aberdeen" />
                    </a>
                    <a href={"https://www.instantneighbour.co.uk/"} target="_blank" rel="noopener noreferrer">
                        <img src={require('../static/Images/sponsors/InstantNeighbour.png')} alt="Instant Neighbour, Aberdeen" />
                    </a>
                </span>
            </div>
        </div>
    )
}

export default Home;