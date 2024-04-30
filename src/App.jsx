import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import SocialMediaBar from "./components/SocialMediaBar";

function App() {
  return (
    <>
      <ScrumNavBar />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <SocialMediaBar/>
    </>
  );
}

export default App;
