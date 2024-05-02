/* import styles from './ourTeam.module.css'

function OurTeam() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;

  return (
    <>
    <section className={styles.sectionWhite}>
      <div className="container mx-auto">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className={styles.sectionTitle}>The Team Behind Pacifico</h2>
            <p className={styles.sectionSubtitle}>{message}</p>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className={styles.teamItem}>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className={styles.teamImg} alt="pic" />
              <h3>JOHNATHAN HAWKINS</h3>
              <div className={styles.teamInfo}><p>Head of SEO</p></div>
              <p>Johnathan is our co-founder and has developed search strategies for a variety of clients from international brands to medium-sized businesses for over five years.</p>
              <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className={styles.teamItem}>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className={styles.teamImg} alt="pic" />
              <h3>ALEXANDRA SMITHS</h3>
              <div className={styles.teamInfo}><p>SEO Specialist</p></div>
              <p>Graduating with a degree in Spanish and English, Alexandra has always loved writing and now she’s lucky enough to do it as part of her new job inside our agency.</p>
              <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-6 col-md-4 col-lg-4">
            <div className={styles.teamItem}>
              <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className={styles.teamImg} alt="pic" />
              <h3>ELISA JOHANSON</h3>
              <div className={styles.teamInfo}><p>Marketing Manager</p></div>
              <p>Elisa first fell in love with digital marketing at the university. He loves to learn and looks forward to being part of this new exciting industry for many years.</p>
              <ul className={styles.teamIcon}>
                <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
} 

export default OurTeam  */


import styles from './ourTeam.module.css';

function OurTeam() {
  let message = `There are many variations of passages of Lorem Ipsum available but the \n majority have suffered alteration in some injected humour.`;

  return (
    <>
      <section className={styles.sectionWhite}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg" className={styles.teamImg} alt="pic" />
                <h3>JOHNATHAN HAWKINS</h3>
                <div className={styles.teamInfo}><p>Head of SEO</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                  <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team2a.jpg" className={styles.teamImg} alt="pic" />
                <h3>ALEXANDRA SMITHS</h3>
                <div className={styles.teamInfo}><p>SEO Specialist</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                  <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-span-1">
              <div className={styles.teamItem}>
                <img src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team3a.jpg" className={styles.teamImg} alt="pic" />
                <h3>ELISA JOHANSON</h3>
                <div className={styles.teamInfo}><p>Marketing Manager</p></div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore quis quod, assumenda exercitationem eveniet, quia iste impedit fugit Laboriosam, voluptatum?</p>
                <ul className={styles.teamIcon}>
                  <li><a href="#" className={styles.twitter}><i className="fa fa-twitter"></i></a></li>
                  <li><a href="#" className={styles.pinterest}><i className="fa fa-pinterest"></i></a></li>
                  <li><a href="#" className={styles.facebook}><i className="fa fa-facebook"></i></a></li>
                  <li><a href="#" className={styles.dribble}><i className="fa fa-dribbble"></i></a></li>
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
