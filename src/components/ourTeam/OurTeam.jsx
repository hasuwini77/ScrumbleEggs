import styles from './ourTeam.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function OurTeam() {
  let message = "Check out our team members who made this Scrum Guide!"

  return (
    <>
      <section className={styles.sectionWhite}>
        <div className="container mx-auto">
          <div className="text-center pb-5">
            <h2 className='font-semibold text-2xl pb-2'>The Team Behind</h2>
            <p className={styles.sectionSubtitle}>{message}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="col-span-1   ">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className={styles.teamImg} alt="pic" />
                <h3>David Boll</h3>
                <div className={styles.teamInfo}><p>Scrum Mastah</p></div>
                <p className={styles.teamInfoText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                  <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1   ">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className={styles.teamImg} alt="pic" />
                <h3>Erika Lundström</h3>
                <div className={styles.teamInfo}><p>Developer</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  ">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className={styles.teamImg} alt="pic" />
                <h3>Edwin Andermyr</h3>
                <div className={styles.teamInfo}><p>Developer</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1  ">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className={styles.teamImg} alt="pic" />
                <h3>Noah Gordon</h3>
                <div className={styles.teamInfo}><p>Developer</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                  <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className={styles.teamImg} alt="pic" />
                <h3>Martin Ahlsén</h3>
                <div className={styles.teamInfo}><p>Developer</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><FontAwesomeIcon icon={faTwitter} /></a></li>
                  <li><a href="#" className={styles.instagram}><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="#" className={styles.linkedin}><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#" className={styles.facebook}><FontAwesomeIcon icon={faFacebook} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurTeam;