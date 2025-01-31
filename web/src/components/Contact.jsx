import youtube from "@assets/svgs/youtube.svg";
import instagram from "@assets/svgs/instagram.svg";
import linkedin from "@assets/svgs/linkedin.svg";
import twitter from "@assets/svgs/twitterx.svg";
import gmail from "@assets/svgs/gmail.svg";

function Contact() {
  return (
    <div className="contactContainer">
      <div className="infoL">
        <p>Laboratorio de Computación:</p>
        <div className="socialMedia">
          <img src={gmail} alt="gmailLogo" id="gmailSvg" />
          <a href="mailto:lc.fcefyn@gmail.com">lc.fcefyn@gmail.com</a>
        </div>
        <div className="socialMedia">
          <img src={instagram} alt="InstagramLogo" />
          <a target="_blank" href="https://www.instagram.com/lc.fcefyn/">
            Instagram
          </a>
        </div>
      </div>
      <div className="infoR">
        <p>FCEFYN:</p>

        <div className="socialMedia">
          <img src={twitter} alt="twitterXLogo" />
          <a target="_blank" href="https://twitter.com/FCEFyN_UNC">
            twitter
          </a>
        </div>
        <div className="socialMedia">
          <img src={instagram} alt="InstagramLogo" />
          <a target="_blank" href="https://www.instagram.com/fcefyn_unc/">
            Instagram
          </a>
        </div>
        <div className="socialMedia">
          <img src={linkedin} alt="linkedinLogo" />
          <a target="_blank" href="https://www.linkedin.com/school/fcefyn">
            linkedin
          </a>
        </div>
        <div className="socialMedia">
          <img src={youtube} alt="youtubeLogo" />
          <a
            target="_blank"
            href="https://www.youtube.com/channel/UCCBcN5DbyBA2C7iZBX4i9nw"
          >
            youtube
          </a>
        </div>
        <p>
          Location: Av.Velez Sarsfield 1611 Av.Velez Sarsfield 299 , Córdoba,
          Argentina
        </p>
      </div>
    </div>
  );
}

export default Contact;
