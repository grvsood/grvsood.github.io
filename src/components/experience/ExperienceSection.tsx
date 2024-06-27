import moment from 'moment';
import "./ExperienceSection.css"
import isro from "../../assets/isro.png";
import amazon from "../../assets/amazon.png";
import wipro from "../../assets/wipro.png";


export default function ExperienceSection() {

    const currenDate = moment(new Date());
    const startOfExperience = moment([2020,4])
    const diff = currenDate.diff(startOfExperience, 'year', true);
    const yearsOfExperience = Math.round((diff + Number.EPSILON) * 100) / 100

    return (
        <div className='experienece'>
            <div className='experience-text'>
                <p>
                As a seasoned full-stack software developer and with {yearsOfExperience} years of experience,
                I bring a comprehensive skill set that spans both frontend and backend development,
                enabling me to design and implement end-to-end solutions with finesse.
                I have developed highly scalable and available software systems for companies including: 
                </p>
            </div>
            <div className='experience-images'>
                <img src={isro} />
                <img src={amazon} />
                <img src={wipro} />
            </div>
        </div>
    )
}
