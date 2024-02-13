import Header from "./Header";
import Footer from "./Footer";
import './layout.scss';


function Layout({children}){
    return(
        <div className="main">
            <div className="background">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
            <Header/>
            <main>{children}</main>
            <Footer/>  
        </div>
    )
}

export default Layout;