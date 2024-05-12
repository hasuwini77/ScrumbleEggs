import styles from "./OurTeam.module.css";
import OurTeamCard from "../OurTeamCard/index";
import avatar from "../../assets/images/david-profile.png";
import avatar2 from "../../assets/images/erika-profile.jpg";
import avatar3 from "../../assets/images/edwin-profile.jpeg";
import avatar4 from "../../assets/images/noah-profile.jpg";
import avatar5 from "../../assets/images/martin-profile.jpg";

const OurTeam = () => {
  let message = "Check out our team members who made this Scrum Guide!";

  return (
    <>
      <section className={styles.sectionWhite} id="ourTeam">
        <div className="container mx-auto">
          <div className="text-center pb-5">
            <h2 className="font-semibold text-2xl pb-2">The Team Behind</h2>
            <p className={styles.sectionSubtitle}>{message}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            <OurTeamCard name="David Boll" role="Scrum Master" image={avatar} />
            <OurTeamCard
              name="Erika Lundström"
              role="Developer"
              image={avatar2}
            />
            <OurTeamCard
              name="Edwin Andermyr"
              role="Developer"
              image={avatar3}
            />
            <OurTeamCard name="Noah Gordon" role="Devloper" image={avatar4} />
            <OurTeamCard
              name="Martin Ahlsén"
              role="Developer"
              image={avatar5}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
