import standupPhoto1 from "../../assets/standupphoto1.jpg";

const DisplayedContent = ({ activeChapter }) => {
  const chapters = {
    1: {
      title: "Chapter 1",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      img: "my img",
      video: "",
    },
    2: {
      title: "Chapter 1",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      img: "my img",
      video: "",
    },
    3: {
      title: "Scrum Ceremonies",
      subtitle1: "Daily Stand-Ups",
      paragraph1:
        "Stand-up meetings are a crucial aspect of agile development, yet they're frequently misconstrued. Let's face it: stand-ups alone don't make a team agile. They're not meant to boost egos or validate job roles. They're not for planning; that's what Sprint planning is for. Nor are they the sole occasion to address blockers. If you're facing obstacles, don't hesitate to seek assistance!",
      subtitle2: "Sprint Planning",
      paragraph2:
        "Sprint planning, a key event in scrum, marks the start of a sprint. Its aim is to determine what tasks can be completed during the sprint and how they will be accomplished. This collaborative process involves the entire scrum team.In scrum, sprint planning sets the stage for the sprint by determining its duration, goal, and starting point. It's crucial for team motivation and success, but poorly executed plans can lead to unrealistic expectations. During sprint planning, the product owner outlines the sprint's objective and relevant backlog items, while the development team strategizes how to achieve the goal.",
      paragraph2b:
        " This collaboration ensures alignment between desired outcomes and available resources. Preparation is key, with an up-to-date backlog and clear goals enhancing transparency and efficiency. The meeting's focus should be on defining sprint objectives rather than getting bogged down in details, emphasizing outcomes over exhaustive planning. Effective estimation techniques, such as story points, facilitate decision-making without pretending to predict the unpredictable nature of complex work. Ultimately, sprint planning is about building a flexible plan that guides the team towards valuable outcomes while embracing uncertainty and iterative learning.",
      subtitle3: "Sprint Review ",
      paragraph3:
        "A sprint review meeting is a vital part of Agile development, especially in Scrum. It signals the conclusion of a sprint, usually lasting two to four weeks, where the development team presents a potentially ready-to-ship product increment. The sprint review serves multiple purposes within Agile development, focusing on gathering feedback, ensuring transparency, and celebrating achievements.",
      paragraph3b:
        "It involves demonstrating completed work to stakeholders, collecting feedback to adjust future priorities, and ensuring alignment with the product vision. Additionally, it provides an opportunity to identify areas for improvement and celebrate the team's efforts.Distinct from a retrospective, a sprint review showcases the team's collaborative work, allowing members to present their contributions and receive feedback.",
      paragraph3c:
        "It's a casual setting where questions are encouraged, new features are tried, and successes are acknowledged. Defining what constitutes 'done' for each task is crucial for success, emphasizing quality and completion over mere task completion. For distributed teams, sprint reviews pose unique challenges, but tools like video recordings facilitate asynchronous collaboration. These reviews foster a deeper understanding of the product and strengthen team bonds across geographies.",
      img: standupPhoto1,
      video: `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%;"
    src="https://www.youtube.com/embed/er9gntPjTJU?si=F524GAikOrpBXT6X"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>`,
    },
    4: {
      title: "Chapter 1",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      img: "my img",
      video: "",
    },
    5: {
      title: "Chapter 1",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      img: "my img",
      video: "",
    },
  };

  return (
    <div>
      <h2 className="text-2xl p-3">{chapters[activeChapter].title}</h2>
      {chapters[activeChapter].video ? <div className="video" dangerouslySetInnerHTML={{ __html: chapters[activeChapter].video }} /> : null}
      <h3 className="text-xl p-3">{chapters[activeChapter].subtitle1}</h3>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph1}</p>
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      <h3 className="text-xl p-3">{chapters[activeChapter].subtitle2}</h3>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph2}</p>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph2b}</p>
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      <h3 className="text-xl p-3">{chapters[activeChapter].subtitle3}</h3>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph3}</p>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph3b}</p>
      <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph3c}</p>
      {chapters[activeChapter].img ? <img src={chapters[activeChapter].img} alt={chapters[activeChapter].title} className="p-3 max-w-[320px] mx-auto md:max-w-[60%]" /> : null}
    </div>
  );
};

export default DisplayedContent;
