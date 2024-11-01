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
                <img src={twitter} alt="twitterXLogo" />    
            <a target='_blank' href='https://twitter.com/FCEFyN_UNC' >twitter</a>
            </div>
            <div className="socialMedia">
                <img src={instagram} alt="InstagramLogo" />
            <a target='_blank' href='https://www.instagram.com/fcefyn_unc/'>Instagram</a>
            </div>
            <div className="socialMedia">
                <img src={linkedin} alt="linkedinLogo" />
            <a target='_blank' href='https://www.linkedin.com/school/fcefyn'>linkedin</a>
            </div>
            <div className="socialMedia">
                <img src={youtube} alt="youtubeLogo" />
            <a target='_blank' href='https://www.youtube.com/channel/UCCBcN5DbyBA2C7iZBX4i9nw'>youtube</a>
            </div>
                <p>Location: Av.Velez Sarsfield 1611 Av.Velez Sarsfield 299 , Córdoba, Argentina</p>
            </div>
        </div>

)
}

export default Contact;