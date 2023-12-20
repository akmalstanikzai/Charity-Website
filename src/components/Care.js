import "./styles/care.css"
import aks from '../Assets/school_children.jpg'

const Care = () => {

    return (
        <div className="care-container">

            <div className="care-picture">
                <img src={aks} alt='' />
            </div>

            <div className="care-item">
                <h1><strong>To Show Your Care</strong></h1>
                <h2>Give your Share</h2>
                <p>The quick brown fox jumps over the lazy dog.</p>
                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Pack my box with five dozen liquor jugs.</p>
                <button class="donate-button">Donate Now</button>
            </div>
            
        </div>
    )

}

export default Care;