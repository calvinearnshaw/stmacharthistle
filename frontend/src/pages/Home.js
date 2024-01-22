import {FaPlaneDeparture} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoIosArrowForward} from "react-icons/io";
import useFetch from "../hooks/useFetch";
import {Spinner} from "flowbite-react";

const Home = () => {
    const {data: leagueTable, isPending: leaguePending, error: leagueError} = useFetch(process.env.REACT_APP_BACKEND + "/api/league");
    const {data: news, isPending: newsPending, error: newsError} = useFetch(process.env.REACT_APP_BACKEND + "/api/news");
    const {data: fixtures, isPending: fixturesPending, error: fixturesError} = useFetch(process.env.REACT_APP_BACKEND + "/api/fixtures");

    return (
        <div className="homepage">
            <div className="hero">
                <img src={require('../static/Images/heroimg.jpg')} alt="hero" />
                <h1>Since 2023.</h1>
                <h2>The home of St Machar Thistle AFC.</h2>
            </div>
            <div className="fixtures">
                <h2>Upcoming Fixtures</h2>
                {
                    fixtures && fixtures.map((fixture) => {
                        return (
                            <div className="fixture-entry">
                                <FaPlaneDeparture size={"30px"} color={"white"} className={"status"} />
                                <div className="fixture-details">
                                    <h3>vs {fixture.awayTeam}</h3>
                                    <span>
                                        <p>{fixture.date}</p>
                                        <p>{fixture.venue}</p>
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
                <Link to={"/fixtures"} className={"fixtures-link"}>
                    View All Fixtures
                    <IoIosArrowForward className={"arrow-fwd"} />
                </Link>
            </div>
            <div className="league-table">
                <h2>Aberdeenshire AFA Division 2 East</h2>
                {leaguePending && (
                    <div className="loading">
                        <Spinner color="purple" />
                        <h3>Loading Content...</h3>
                    </div>
                )}
                {!leaguePending && (
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
                        {leagueError && (
                            <tr>
                                <td>{leagueError}</td>
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
                )}
            </div>
            <div className="latest-news">
                <span>
                    <h2>Latest News</h2>
                    <Link to={"/news"} className={"news-link"}>
                        <IoIosArrowForward size={'30px'} color={'#851B87'} className={"arrow-fwd"} />
                    </Link>
                </span>
                <div className="entries">
                    {news && news.map((article) => {
                        return (
                            <Link to={"/news/" + article._id} className={"news-link"}>
                                <div className={"news-entry"}>
                                    <img src={article.newsImage} alt={"news"} />
                                    <div className={"news-details"}>
                                        <h3>{article.newsType}</h3>
                                        <h2>{article.newsTitle}</h2>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
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