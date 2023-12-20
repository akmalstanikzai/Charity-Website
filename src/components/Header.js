import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter } from 'react-icons/ti'
import { CiMail } from "react-icons/ci";
import { MdOutlinePhone } from "react-icons/md";
import { LuHeartHandshake } from "react-icons/lu";
import './styles/header.css'

const Header = () => {

    return (
        <div className="header-container-custom">
            <div className="container-header">
                <div className="social-icons">
                    <TiSocialFacebook />
                    <TiSocialTwitter />
                    <TiSocialLinkedin />
                </div>
                <div className="mail">
                    <CiMail />
                    <p>donate@gamil.com</p>
                </div>
                <div className="phone">
                    <MdOutlinePhone />
                    <p>+00 985 4423 345</p>
                </div>
            </div>
            <div class="straight-line"></div>

            <div className="container-header">

                <div className="container-header">
                    <LuHeartHandshake />
                    <h2 class="charity-heading">Charity</h2>
                </div>

                <div className='vertical-line'></div>

                <div class="Navbarr">
                    <button>Home</button>
                    <button>Explore</button>
                    <button>Campaigns</button>
                    <button>Events</button>
                    <button>Blogs</button>
                    <button>Contact</button>
                </div>

                <div className='vertical-line'></div>

                <div class="button-container">
                    <button class="start-button">START PROJECT</button>
                </div>
            </div>
        </div>
    )
}

export default Header;