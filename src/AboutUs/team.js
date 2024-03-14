
import "./team.css";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import team01 from './images/team01.jpeg'


const teamMembers = [
    {
        imgUrl: team01,
        name: 'Elie',
        position: 'Consultant'
    },

    {
        imgUrl: team01,
        name: 'challita',
        position: 'Consultant'
    },

    {
        imgUrl: team01,
        name: 'Maroun',
        position: 'Consultant'
    },

    {
        imgUrl: team01,
        name: 'Charbel',
        position: 'Consultant'
    },
]

const Team = () => {
    return (
        <section >
            <div >
                <div className="members">
                    
                    <h2>
                         Meet our professional team members
                    </h2>
                </div>
                <div className="team">
                    {
                        teamMembers.map((item, index) => (
                            <div className="card" key={index}>
                                <div className="img-container">
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                
                                    <h3 >{item.name}</h3>
                                    <p >{item.position}</p>

                                    <div className="icons">
                                      <FaLinkedin className="icons2" />
                                      <FaFacebook className="icons2"/>
                                      <FaSquareXTwitter className="icons2"/>
                                     </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team