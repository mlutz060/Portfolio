
import Layout from '../Layout';
import PictureOfMe from '../../assets/color.jpg'
import './component.scss';



function Home(){

    return(

            <div className="home">
            <Layout>
                <div className='home-top'>
                    <img src={PictureOfMe} alt="" />
                    <div className="title">
                        <h1>Madison Blotter</h1>
                        <h2>Software Engineer</h2>
                    </div>
                </div>

                <div className="resume">
                    <div className="experience">
                        <div className='company'></div>
                        <div className='exp-details'>
                            <div className='exp-head'>
                                <h2>IT Co-op Intern</h2>
                                <h3>Sep 2023 - Dec 2023</h3>
                            </div>
                            <h3>Copeland</h3>
                            <ul>
                                <li>
                                    Communicate with people across the company to 
                                    produce a solution to better track and store 
                                    new product development key performance indicators
                                </li>
                                <li>
                                    Developed a website using Angular and Angular Material 
                                    to support an existing mobile application and retain 
                                    customers
                                </li>
                                <li>
                                    Helped to optimize business processes by developing storage 
                                    solutions and visual displays
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                </Layout>
            </div>
    )
}

export default Home;