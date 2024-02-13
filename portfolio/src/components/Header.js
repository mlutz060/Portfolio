import './layout.scss'
import { Outlet, Link } from "react-router-dom";

function Header(){

    return(
        <div className="header">
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/blog' className='link'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            <Outlet/>
        </div>
    )
}

export default Header;