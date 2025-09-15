import {Link} from 'react-router-dom'

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className = 'title'>Dojo Blog</h1>
            <div className="links">
                <Link to='/' className = 'link'>Home</Link>
                <Link to='/create' className = 'link'>New Blog</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;