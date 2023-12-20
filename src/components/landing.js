import first from '../Assets/first.jpg';
import './styles/landing.css'


const Landing = () => {


    return (
        <div className='cover-component'>
            <div className="landing-image-container">
                <img src={first} alt=""/>
                <div className="text-overlay">
                    <h1>Giving a Helping Hand To</h1>
                    <h1> Those Who Need It</h1>
                    <button>Explore More</button>
                </div>
            </div>
            <div className="input-values">
                <div className="input-div-text">
                    <h2>We Need Your Help</h2>
                </div>
                <div className="input-div">
                    <input type="text" placeholder="Amount" />
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <button className="donate-btn">Donate</button>  
                </div>
                
            </div>
        </div>


    )
}

export default Landing;