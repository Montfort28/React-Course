const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1 className = 'title'>Dojo Blog</h1>
            <div className="links">
                <a href='/' className = 'link'>Home</a>
                <a href='/create' className = 'link'>About</a>
                <a href='/' className = 'link'>Contact</a>
                <a href='/' className = 'link'>Profile</a>
            </div>
        </nav>
    );
}
 
export default Navbar;