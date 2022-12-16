import { Link } from "react-router-dom";
import publications from '../publications.json';


const Aside = () => {

    return(
        <div className="col-lg-4 m-0 p-3 ps-lg-5">
            <div className="sidebar-2">
                <div className="resources">
                    <h1 className="fs-3 pb-3 fw-bold">
                        Recommended
                    </h1>

                    {
                        publications && publications.slice(0,5).map(e => (
                            <div className="card my-2" style={{padding: '10px'}} key={e.id}>
                                <Link className="card-title fs-6 mb-0" to={"/topic/" + e.topic}>{e.topic}</Link>
                            </div>
                        ))
                    }
                </div>

                <div className="resources mt-5">
                    <h1 className="fs-3 pb-3 fw-bold">
                        Categories
                    </h1>

                    <div className="d-inline-flex justify-content-start flex-wrap">
                        <Link to="/publications/Engineering" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Engineering</Link>
                        <Link to="/publications/Computer Science" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Computer Science</Link>
                        <Link to="/publications/Medicine" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Medicine</Link>
                        <Link to="/publications/Accounting" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Accounting</Link>
                        <Link to="/publications/Agriculture" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Agriculture</Link>
                        <Link to="/publications/Commerce" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Commerce</Link>
                        <Link to="/publications/History" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">History</Link>
                        <Link to="/publications/Geography" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Geography</Link>
                        <Link to="/publications/Geography" className="btn fs-lg-5 m-2 btn-outline-primary col-main rounded-0">Geography</Link>
                    </div>
                </div>

                <div className="resources mt-5">
                    <div className="advert">Advert Space</div>
                </div>
            </div>
        </div>
    )

}

const Footer = () => {

    return(
        <footer className="p-5 px-lg-5 px-2 text-center" style={{background: 'var(--my-black)'}}>
            <ul style={{listStyleType: 'none'}} className="p-0 m-0 mb-3">
                <li>
                    <Link to="#">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
                <li>
                    <Link to="hire">Hire Researchers</Link>
                </li>
                <li>
                    <Link to="publications">Topics</Link>
                </li>
            </ul>
            <ul style={{listStyleType: 'none'}} className="p-0 m-0 mb-3">
                <li>
                    <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                    <Link className="text" to="#">Terms and Condition</Link>
                </li>
            </ul>
            <p className="m-0 p-0" style={{color: '#aaa'}}>&copy; explorehub.com 2021</p>
        </footer>
    )

}

const Navbar = () => {
    return(
        <nav className="d-flex justify-content-between p-3 px-4 border-bottom">
            <Link to="/">
                <h1 className="m-0">
                    <span className="col-black">explore</span><span>hub</span>
                </h1>
            </Link>

            <div className="links">
                <Link className="py-2 px-3 mx-3" to="#">About Us</Link>
                <Link className="py-2 px-3 mx-3" to="/login">Login</Link>
                <Link className="py-2 px-3 mx-3" id="register" to="/register">Register</Link>
            </div>
        </nav>
    )
}

const Sidebar = () => {
    
    const menuClick = () => {
        let ul = document.querySelector('ul.sidebar');
        if(!ul.classList.contains('close')){
            return ul.classList.add('close');
        }
        
        ul.classList.remove('close');
    }

    return(
        <ul className="sidebar fw-bold pt-0 d-lg-inline d-none close">
            <li className="d-flex justify-content-between align-items-center m-0 title" 
                style={{height: '73px', position: 'relative', borderBottom: '1px solid #555'}}
            >
                <button className="menu px-3" onClick={menuClick}>
                    <i className="fa fa-bars" aria-hidden="true"></i>
                </button>
                <Link className="p-0 pe-3" to="/">
                    <h1 className="m-0 fs-3">
                        <span>explore</span><span>hub</span>
                    </h1>
                </Link>
            </li>
            <li>
                <Link className="active" to="/publications">
                    <i className="fa fa-home" style={{marginRight: '10px'}} aria-hidden="true"></i>
                    <span className="link-text">Topic</span>
                </Link>
            </li>
            <li>
                <Link to="/saved">
                    <i className="fa fa-book" style={{marginRight: '10px'}} aria-hidden="true"></i>
                    <span className="link-text">Saved Documents</span>
                </Link>
            </li>
            <li>
                <Link to="/hire">
                    <i className="fa fa-graduation-cap" style={{marginRight: '10px'}} aria-hidden="true"></i>
                    <span className="link-text">Hire Researcher</span>
                </Link>
            </li>
            <li>
                <Link to="/become">
                    <i className="fa fa-user-check" style={{marginRight: '10px'}} aria-hidden="true"></i>
                    <span className="link-text">Become A Researcher</span>
                </Link>
            </li>


            <li className="/log-out">
                <Link to="#">
                    <i className="fa fa-user-circle" style={{marginRight: '10px'}} aria-hidden="true"></i>
                    <span className="link-text">Log-out</span>
                </Link>
            </li>
        </ul>
    )

}

export { Aside, Footer, Navbar, Sidebar }