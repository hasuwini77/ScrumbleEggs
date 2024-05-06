import SocialMediaBar from "../SocialMediaBar";
const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center p-4">
      <SocialMediaBar />
      <div className="p-3">
        <p>Copyright &copy; {currentYear} ScrumbleEggs</p>
      </div>
    </footer>
  );
}

export default Footer