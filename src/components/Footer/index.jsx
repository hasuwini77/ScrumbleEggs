import SocialMediaBar from "../SocialMediaBar";
const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <SocialMediaBar />
      <div className="text-center">
        <p>Copyright &copy; {currentYear} ScrumbleEggs</p>
      </div>
    </footer>
  );
}

export default Footer