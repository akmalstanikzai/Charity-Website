import './styles/mission.css'
import moneybag from '../Assets/money_bag.png'
import people from '../Assets/people.png'
import handshake from '../Assets/handshake.png'

const Mission = () => {

    return(
        
        <div className='mission-custom-container'>
            <div className="text">
                <p className='mission-text'>Our Missions</p>
                <h2><strong>What We Do For People</strong></h2>
                <p>Discover Projects just for you and get great recommendations</p>
                <p> when you select your intresets.</p>
            </div>
            
            <div className='mission-options-container'>

                <div className='mission-items'>
                    <img src={moneybag} alt='' />
                    <h3><strong>Donation</strong></h3>
                    <p>Discover Projects just for you and get great recommendations when you select your intresets.</p>
                </div>

                <div className='mission-items'>
                    <img src={people} alt='' />
                    <h3><strong>Become Volunteer</strong></h3>
                    <p>Discover Projects just for you and get great recommendations when you select your intresets.</p>
                </div>

                <div className='mission-items'>
                    <img src={handshake} alt='' />
                    <h3><strong>Get Involved</strong></h3>
                    <p>Discover Projects just for you and get great recommendations when you select your intresets.</p>
                
                </div>

            </div>
        </div>
    )
}

export default Mission;