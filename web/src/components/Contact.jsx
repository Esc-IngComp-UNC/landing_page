import youtube from '/svgs/youtube.svg'
import instagram from '/svgs/instagram.svg'
import linkedin from '/svgs/linkedin.svg'
import twitter from '/svgs/twitterx.svg'

function Contact(){
    //TODO add SVG to each link
    return (
        <div className="contactContainer">
            <div className="infoL">
            <p>Laboratorio de Computación:</p>

            <p>Correo: lc.fcefyn@gmail.com</p>
            <p>Instagram: c.fcefyn</p>
            </div>
            <div className="infoR">
            <p>FCEFYN:</p>

            <div className="socialMedia">
            <p>twitter: https://twitter.com/FCEFyN_UNC</p>
                <img src={twitter} alt="twitterXLogo" />    
            </div>
            <div className="socialMedia">
            <p>Instagram:https://www.instagram.com/fcefyn_unc/</p>
                <img src={instagram} alt="InstagramLogo" />
            </div>
            <div className="socialMedia">
            <p>linkedin: https://www.linkedin.com/school/fcefyn</p>
                <img src={linkedin} alt="linkedinLogo" />
            </div>
            <div className="socialMedia">
            <p>youtube: https://www.youtube.com/channel/UCCBcN5DbyBA2C7iZBX4i9nw</p>
                <img src={youtube} alt="youtubeLogo" />
            </div>
                <p>Location: Av.Velez Sarsfield 1611 Av.Velez Sarsfield 299 , Córdoba, Argentina</p>
            </div>
        </div>

)
}

export default Contact