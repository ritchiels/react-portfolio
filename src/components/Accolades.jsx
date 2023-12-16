import { 
    Card,
    CardBody,
    CardTitle
} from 'reactstrap'
import FrontEnd from '../img/frontendcertif.png'
import FullStack from '../img/fullstackcertif.png'
import Bootstrap from '../img/Bootstrap_Course_Completion.png'
import ReactPic from '../img/React_Course_Completion.png'
import ReactNativePic from '../img/React_Native_Course_Completion.png'
import BackEnd from '../img/Node_Express_MongoDB_Course_Completion.png'
// import Workspace from '../img/workspace-addons.png'

const Accolades = () => {
    return (
        <section className="items-center hidden md:block relative" id="accolades">
            <div className="accolades-container justify-center">
                <div className="card-group mb-20">
                    <div className="little-card">
                        <img src={Bootstrap} alt="Bootstrap Badge" />
                    </div>
                    <div className="little-card">
                        <img src={ReactPic} alt="React Badge" />
                    </div>
                    <div className="little-card">
                        <img src={ReactNativePic} alt="React Native Badge" />
                    </div>
                    <div className="little-card">
                        <img src={BackEnd} alt="Back End Badge" />
                    </div>
                    <div className="big-card card">
                        <img src={FrontEnd} alt="Front End Cert" />
                    </div>
                    <div className="desc-card">
                        <Card>
                            <CardTitle className="text-center mb-0 mt-4 text-2xl font-semibold font-montserrat">
                                Nucamp
                            </CardTitle>
                            <CardBody className="desc-card-text text-center px-4 py-1 mb-4 font-poppins">
                                In 2023 I graduated from an intensive 6-month bootcamp covering front-end models like Bootstrap, React & React Native, as well as back-end techs like Node.js & MongoDB.
                            </CardBody>
                        </Card>
                    </div>
                    <div className="big-card card">
                        <img src={FullStack} alt="Full Stack Cert" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Accolades