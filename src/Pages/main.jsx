
import HighlightedFeature from "../components/HighlightedFeature";
import Hero from "../components/Hero/Hero";
import img1 from  "../assets/images/feature1.png";
import img2 from "../assets/images/feature2.png";

const FirstPage = () => {
    return (
        <>
         <Hero />
        <HighlightedFeature   
        title="Feature Title"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris."
        images={[img1, img2]}/>
       
        </>
        
    )
}

export default FirstPage;
