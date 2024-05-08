import standupPhoto1 from "../../assets/standupphoto1.jpg";
import implentingScrum from "../../assets/images/implementing-scrum.jpeg";

const DisplayedContent = ({ activeChapter }) => {
  const chapters = {
    1: {
      title: "Chapter 1",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      paragraph1b: "Content for Chapter 1",
      paragraph1c: "Content for Chapter 1",
      paragraph1d: "",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      paragraph2b: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      paragraph3b: "Content for Chapter 3",
      paragraph3c: "Content for Chapter 3",
      subtitle4: "",
      paragraph4: "",
      paragraph4b: "",
      img: "my img",
      video: "",
    },
    2: {
      title: "Chapter 2",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      paragraph1b: "Content for Chapter 1",
      paragraph1c: "Content for Chapter 1",
      paragraph1d: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      paragraph2b: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      paragraph3b: "Content for Chapter 3",
      paragraph3c: "",
      subtitle4: "",
      paragraph4: "",
      paragraph4b: "",
      img: "my img",
      video: "",
    },
    3: {
      title: "Scrum Ceremonies",
      subtitle1: "Daily Stand-Ups",
      paragraph1:
        "Stand-up meetings are a crucial aspect of agile development, yet they're frequently misconstrued. Let's face it: stand-ups alone don't make a team agile. They're not meant to boost egos or validate job roles. They're not for planning; that's what Sprint planning is for. Nor are they the sole occasion to address blockers. If you're facing obstacles, don't hesitate to seek assistance!",
      paragraph1b:
        "What is a stand up meeting in scrum? The daily stand-up is a brief meeting where team members discuss progress and identify any obstacles. It's called a 'stand-up' because participants typically stand, keeping the meeting short and focused. For software teams, the stand-up is like a quick team chat before a sports play. It's strategic, keeping the team informed, connected, and aligned throughout the project.Here's a basic stand-up template:",
      paragraph1c:
        "- What did I work on yesterday?  What am I working on today? What issues are blocking me? By answering these questions, team members highlight progress and flag any blockers. It also fosters team unity by sharing individual contributions.Preparation is key. The company Atlassian recommends using Jira boards with filters like 'only my issues' and 'recently updated' to stay organized. ",
      paragraph1d:
        "Stand-ups should be tailored to each team's needs: Choose a convenient time for everyone.Keep it efficient, around 15 minutes or less. Engage the team with activities like passing a ball. Evaluate and adjust the stand-up's effectiveness regularly. For distributed teams, video stand-ups ensure everyone stays connected. Integrating tools like Slack and Jira Software can facilitate communication. Ultimately, stand-ups are part of a larger agile process. Like other scrum ceremonies, they require refinement and adaptation over time. And remember, it's okay to have some fun along the way!",

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
      subtitle4: "Retrospective ",
      paragraph4:
        "A sprint review meeting is a vital part of Agile development, especially in Scrum. It signals the conclusion of a sprint, usually lasting two to four weeks, where the development team presents a potentially ready-to-ship product increment. The sprint review serves multiple purposes within Agile development, focusing on gathering feedback, ensuring transparency, and celebrating achievements.",
      paragraph4b:
        "A sprint review meeting is a vital part of Agile development, especially in Scrum. It signals the conclusion of a sprint, usually lasting two to four weeks, where the development team presents a potentially ready-to-ship product increment. The sprint review serves multiple purposes within Agile development, focusing on gathering feedback, ensuring transparency, and celebrating achievements.",
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
      title: "Implementing Scrum",
      subtitle1: "Getting Started",
      paragraph1:
        "Scrum is a lightweight project management approach designed to help teams deliver value to customers quickly and frequently. The three primary artifacts are the Product Backlog, Scrum Board, and Increment.",
      paragraph1b:
        "The Product Backlog lists all potential work, while the Sprint Backlog lists items to be completed during the next Sprint. A Scrum Board tracks work progress.",
      paragraph1c:
        "Scrum teams consist of Developers, a Product Owner, and a Scrum Master. The team is cross-functional, self-managed, and organizes its work in Sprints.",
      paragraph1d:
        "Key events in Scrum include Sprint Planning, Daily Scrum, Sprint Review, and Sprint Retrospective.",
      subtitle2: "Common Challenges and Solutions",
      paragraph2:
        "Maintaining time-boxing can be difficult if teams lack focus. Solution: Keep meeting agendas clear and emphasize strict time-boxing.",
      paragraph2b:
        "Lack of buy-in from senior management can impede adoption. Solution: Address management challenges using Scrum methodologies.",
      paragraph2c:
        "Skipping meetings leads to transparency issues. Solution: Ensure all meetings are on track and adhere to their allotted time.",
      subtitle3: "Case Studies and Examples",
      paragraph3:
        "Mayden's Transformation from Waterfall to Scrum: A UK company improved project delivery and customer satisfaction by adopting Scrum through Agile training and strong management support.",
      paragraph3b:
        "Capstone Team's Adoption of Scrum: A team overcame project management challenges by embracing the Scrum framework, incorporating asynchronous daily meetings, and tracking their velocity.",
      paragraph3c:
        "Radware's Scrum Implementation: The global leader in cybersecurity increased visibility and alignment by conducting workshops, engaging globally, and adopting Agile Release Trains.",
      subtitle4: "Tools and Resources",
      paragraph4:
        "Digital tools like Jira, Trello, and Notion help teams manage sprints, track progress, and improve collaboration.",
      paragraph4b:
        'Books such as "Scrum: The Art of Doing Twice the Work in Half the Time" and "Agile Project Management with Scrum" offer foundational knowledge.',
      paragraph4c:
        "Courses and certifications like Certified ScrumMaster (CSM) and Professional Scrum Master (PSM) provide structured learning and validate expertise in Scrum practices.",
      img: implentingScrum,
      video: `<div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%;">
  <iframe
    style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%;"
    src="https://www.youtube.com/embed/iv3FGFEzprs?si=Ag6DrwdgkgcnDNpS"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    allowfullscreen
  ></iframe>
</div>`,
    },
    5: {
      title: "Tools and resources",
      subtitle1: "Digital Tools for Scrum Overview",
      paragraph1: "In the dynamic world of Agile project management, digital tools play a pivotal role in facilitating the Scrum framework, helping teams to organize, plan, and execute projects effciently. These tools are designed to cater to the specific needs of Scrum teams, providing functionality that supports all aspects of the Agile methodology—from sprint planning to retrospective analysis.",
      paragraph1b: "",
      paragraph1c: "",
      paragraph1d: "",
      subtitle2: "Key Tools",
      paragraph2: "",
      paragraph2b: "",
      ul2: "Jira:\nDeveloped by Atlassian, Jira is one of the most widely used tools for tracking software development projects. It offers powerful features to manage Scrum and Kanban projects, making it possible for teams to customize workflows, track issues, and manage sprints. Jira’s capabilities include creating user stories, planning sprints, tracking issues through customizable boards, and generating detailed reports that help analyze team performance and project progress. Jira integrates seamlessly with other tools, providing a robust environment for developers to manage complex projects.",
      ul2b: "Trello: Trello utilizes a more visual approach with its card-based system that is intuitive and easy to use, making it popular among teams that prefer a straightforward and visually oriented task management tool. Each card represents a task, and these can be moved across different columns (or lists) that represent various stages of the project lifecycle. Trello is highly adaptable and can be used for everything from simple task management to comprehensive Scrum projects, with the ability to add deadlines, attachments, custom labels, and even automation through Butler to streamline project workflows.",
      ul2c: "Notion: As a versatile tool that combines note-taking, task management, databases, and calendars into a single integrated workspace, Notion stands out for its flexibility. It allows teams to create customized workspaces that can evolve from simple lists to complex databases, adapting to the project's needs. Notion is ideal for teams that need a flexible and expansive tool to document their development process, manage sprints, and retain project artifacts in a structured yet adaptable format.",
      subtitle3: "Advantages of Using Digital Tools",
      paragraph3: "Digital tools help in fostering collaboration and transparency within Scrum teams. They allow team members, regardless of their physical location, to stay updated with real-time progress and changes. This is crucial for maintaining the pace of development and ensuring that all team members are aligned with the project goals and timelines. Furthermore, these tools provide analytical insights that are essential for continuous improvement—a core principle of Agile methodologies.",
      paragraph3b: "",
      paragraph3c: "",
      subtitle4: "Choosing the Right Tool",
      paragraph4: "Selecting the right tool depends on the team's specific needs, the complexity of the project, and the working environment. For instance, Jira might be the preferred choice for software development teams that require detailed tracking and reporting capabilities, while Trello could be more suited for smaller teams or projects that need a quick setup with less complexity. Notion is best for teams that prioritize flexibility and the integration of various types of content and data tracking in their project management practices.",
      paragraph4b: "",
      img: "",
      video: "",
    },
    6: {
      title: "Chapter 6",
      subtitle1: "subttle1",
      paragraph1: "Content for Chapter 1",
      paragraph1b: "Content for Chapter 1",
      paragraph1c: "Content for Chapter 1",
      paragraph1d: "Content for Chapter 1",
      subtitle2: "subttle2",
      paragraph2: "Content for Chapter 2",
      paragraph2b: "Content for Chapter 2",
      subtitle3: "subttle3",
      paragraph3: "Content for Chapter 3",
      paragraph3b: "Content for Chapter 3",
      paragraph3c: "Content for Chapter 3",
      subtitle4: "",
      paragraph4: "",
      paragraph4b: "",
      img: "my img",
      video: "",
    },
  };

  return (
    <div>
      <h2 className="text-2xl p-3">{chapters[activeChapter].title}</h2>
      {chapters[activeChapter].video !== "" ? (
        <div
          className="video"
          dangerouslySetInnerHTML={{ __html: chapters[activeChapter].video }}
        />
      ) : null}
      <h3 id="subtitle1" className="text-xl p-3">
        {chapters[activeChapter].subtitle1}
      </h3>
      {chapters[activeChapter].paragraph1 !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph1}
        </p>
      )}
      {chapters[activeChapter].paragraph1b !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph1b}
        </p>
      )}
      {chapters[activeChapter].paragraph1c !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph1c}
        </p>
      )}
      {chapters[activeChapter].paragraph1d !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph1d}
        </p>
      )}
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 pt-3 mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      <h3 id="subtitle2" className="text-xl p-3">
        {chapters[activeChapter].subtitle2}
      </h3>
      {chapters[activeChapter].paragraph2 !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph2}
        </p>
      )}
      {chapters[activeChapter].paragraph2b !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph2b}
        </p>
      )}
      {chapters[activeChapter].paragraph2c !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph2c}
        </p>
      )}
      {chapters[activeChapter].paragraph2 !== "" && <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph2}</p>}
      {chapters[activeChapter].paragraph2b !== "" && <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">{chapters[activeChapter].paragraph2b}</p>}
      {chapters[activeChapter].ul2 !== "" && <ul className="ml-10 p-3 max-w-[300px]leading-relaxed md:max-w-[900px] "><li className="md:p-3 list-disc">{chapters[activeChapter].ul2}</li></ul>}
      {chapters[activeChapter].ul2b !== "" && <ul className="ml-10 p-3 max-w-[300px]leading-relaxed md:max-w-[900px] "><li className="md:p-3 list-disc">{chapters[activeChapter].ul2b}</li></ul>}
      {chapters[activeChapter].ul2c !== "" && <ul className="ml-10 p-3 max-w-[300px]leading-relaxed md:max-w-[900px] "><li className="md:p-3 list-disc">{chapters[activeChapter].ul2c}</li></ul>}
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 pt-3 mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      <h3 id="subtitle3" className="text-xl p-3">
        {chapters[activeChapter].subtitle3}
      </h3>
      {chapters[activeChapter].paragraph3 !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph3}
        </p>
      )}
      {chapters[activeChapter].paragraph3b !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph3b}
        </p>
      )}
      {chapters[activeChapter].paragraph3c !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph3c}
        </p>
      )}
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 pt-3  mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      <h3 id="subtitle4" className="text-xl p-3">
        {chapters[activeChapter].subtitle4}
      </h3>
      {chapters[activeChapter].paragraph4 !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph4}
        </p>
      )}
      {chapters[activeChapter].paragraph4b !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph4b}
        </p>
      )}
      {chapters[activeChapter].paragraph4c !== "" && (
        <p className="p-3 max-w-[300px]leading-relaxed md:max-w-[900px]">
          {chapters[activeChapter].paragraph4c}
        </p>
      )}
      <div className="flex flex-col justify-center items-center">
        <hr className="p-5 pt-3 mt-4 mb-2 min-w-[200px] md:min-w-[500px] max-w-[620px]" />
      </div>
      {chapters[activeChapter].img !== "" ? (
        <img
          src={chapters[activeChapter].img}
          alt={chapters[activeChapter].title}
          className="p-3 max-w-[320px] mx-auto md:max-w-[60%]"
        />
      ) : null}
    </div>
  );
};

export default DisplayedContent;
