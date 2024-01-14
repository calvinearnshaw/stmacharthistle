import {IoIosArrowForward} from "react-icons/io";
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="subpage">
            <div className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>A page with the selected URL could not be found.</p>
                <Link to={"/"} className={"cta-btn"}>
                    Go Home
                    <IoIosArrowForward className={"arrow-fwd"} />
                </Link>
            </div>
        </div>
    )
}

export default NotFound;