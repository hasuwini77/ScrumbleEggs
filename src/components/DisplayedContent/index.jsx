const DisplayedContent = ({ activeChapter }) => {
  const chapters = {
    1: {
      title: "Chapter 1",
      content: "Content for Chapter 1",
      paragrap1: "My paragraph One",
      paragrap2: "My paragraph Two",
      img: "my img",
    },
    2: {
      title: "Chapter 2",
      content: "Content for Chapter 2",
      paragrap1: "My paragraph One",
      paragrap2: "My paragraph Two",
      img: "my img",
    },
    3: {
      title: "Chapter 3",
      content: "Content for Chapter 3",
      paragrap1: "My paragraph One",
      paragrap2: "My paragraph Two",
      img: "my img",
    },
  };

  return (
    <div>
      <h2>{chapters[activeChapter].title}</h2>
      <p>{chapters[activeChapter].content}</p>
      <p>{chapters[activeChapter].paragrap1}</p>
      <p>{chapters[activeChapter].paragrap2}</p>
      <p>{chapters[activeChapter].img}</p>
    </div>
  );
};

export default DisplayedContent;
