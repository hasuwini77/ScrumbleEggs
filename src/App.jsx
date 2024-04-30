import ScrumNavBar from "./components/Navbar";
import ButtonComponent from "./components/Button";
import OurTeam from "./components/ourTeam/OurTeam";

function App() {
  return (
    <>
      <ScrumNavBar />
      <h1 className="text-3xl text-center font-bold underline">Hello world!</h1>
      <div className="flex flex-row justify-center">
        <ButtonComponent text="button1" className="px-5 py-5 ml-3 mt-3" />
        <ButtonComponent text="button2" className="px-5 py-5 ml-3 mt-3" />
      </div>
      <OurTeam />
    </>
  );
}

export default App;
