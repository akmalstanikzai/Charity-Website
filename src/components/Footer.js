import './styles/footer.css'
import africanwomen from '../Assets/african-women.jpg'
import africanchildren1 from '../Assets/african-children1.jpg'
import africanchildren2 from '../Assets/african-children2.jpg'

const Footer = () => {
    return <div className="footer-container">

        <div className="footer-text-container">
            <h1><strong>Xplore Our All Projects</strong></h1>
            <p>Discover Projects Just for Youand get great recommendations</p>
            <p>when you select your interests</p>
        </div>

        <div className='card-container'>
            <div className='card'>
                <div className='card-image'>
                    <img src={africanwomen} alt=""/>
                </div>
                <div className='card-text'>
                    <h3>Build School for Children</h3>
                    <progress value="50" max="100">50%</progress>
                    <label><strong>$45000</strong></label>
                    <p>Raise of $12000</p>
                    <button class="custom-button">Donate Now</button>
                </div>
            </div>
            <div className='card'>
                <div className='card-image'>
                    <img src={africanchildren1} alt=""/>
                </div>
                <div className='card-text'>
                    <h3>Build School for Children</h3>
                    <progress value="50" max="100">50%</progress>
                    <label><strong>$45000</strong></label>
                    <p>Raise of $12000</p>
                    <button class="custom-button">Donate Now</button>
                </div>
            </div>
            <div className='card'>
                <div className='card-image'>
                    <img src={africanchildren2} alt=""/>
                </div>
                <div className='card-text'>
                    <h3>Build School for Children</h3>
                    <progress value="50" max="100">50%</progress>
                    <label><strong>$45000</strong></label>
                    <p>Raise of $12000</p>
                    <button class="custom-button">Donate Now</button>
                </div>
            </div>
        </div>

    </div>
}

export default Footer;