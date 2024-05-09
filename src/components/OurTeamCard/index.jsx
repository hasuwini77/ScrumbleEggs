import styles from '../OurTeam/OurTeam.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const index = ({name, role, image}) => {
  return (
    <div className="col-span-1">
        <div className={styles.teamItem}>
            <img src={image} className={styles.teamImg} alt="pic" />
            <h3>{name}</h3>
            <div className={styles.teamInfo}><p>{role}</p></div>
            <p className={styles.teamInfoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
            <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
            </ul>
        </div>
    </div>
  )
}

export default index