import {Link} from 'react-router-dom'

const NotFound = () =>{

    return(
        <div className="not-Found">
            <h2>Sorry</h2>
            <p>That page not found</p>
            <Link to="/">Go back to the Home page</Link>
        </div>
    )
}

export default NotFound