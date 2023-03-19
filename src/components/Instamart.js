import {useState} from "react";

const Section = ({title, description, isVisible, setIsVisible}) => {
    // const [isVisible, setIsVisible]= useState(false); //lifting the state up 
    return (
        <div className="p-2 m-2 border border-black">
          <h3 className="font-bold text-xl">{title}</h3>
          {isVisible ? 
          <button className="cursor-pointer underline" onClick={() => setIsVisible()}>Hide</button> : 
          <button className="cursor-pointer underline" onClick={() => setIsVisible()}>Show</button>}
          {isVisible && <p>{description}</p>}
        </div>
    );
}

const Instamart = () => {
    // const [sectionConfig, setSectionConfig] = useState(
    //     {
    //         showAbout: true,
    //         showTeams: true,
    //         showCareers: true
    //     }
    // ); // bad code

    const [visibleSection, setIsVisibleSection] = useState(""); //can use index, key or string(as in this example)

    return(
       <>
       <h1 className="p-2 m-2 text-3xl font-bold">Instamart</h1>
        <div>
            <Section 
                title="About"
                description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
                // isVisible={sectionConfig.showAbout}
                // //not a good way to solve this approach
                // setIsVisible={() => setSectionConfig(
                //     {
                //         showAbout: true,
                //         showTeams: false,
                //         showCareers: false
                //     }
                // )}

                isVisible = {visibleSection==="about"}
                setIsVisible= {() => {visibleSection!=="about"? setIsVisibleSection("about"): setIsVisibleSection("")}}
            />
        </div>

        <div>
            <Section 
                title="Teams"
                description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
                // isVisible={sectionConfig.showTeams}
                // setIsVisible={() => setSectionConfig(
                //     {
                //         showAbout: false,
                //         showTeams: true,
                //         showCareers: false
                //     }
                // )}

                isVisible = {visibleSection==="teams"}
                setIsVisible= {() => {visibleSection!=="teams"? setIsVisibleSection("teams"): setIsVisibleSection("")}}
           />
        </div>

        <div>
            <Section 
                title="Careers"
                description="On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains"
                // isVisible={sectionConfig.showCareers}
                // setIsVisible={() => setSectionConfig(
                //     {
                //         showAbout: false,
                //         showTeams: false,
                //         showCareers: true
                //     }
                // )}
                isVisible = {visibleSection==="careers"}
                setIsVisible= {() => {visibleSection!=="careers"? setIsVisibleSection("careers"): setIsVisibleSection("")}}
            />
        </div>
       </>
    );
}

export default Instamart;