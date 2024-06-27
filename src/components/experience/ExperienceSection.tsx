import moment from 'moment';
import "./ExperienceSection.css"


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
                <img src='src/assets/isro.png' />
                <img src='src/assets/amazon.png' />
                <img src='src/assets/wipro.png' />
            </div>
        </div>
    )
}
