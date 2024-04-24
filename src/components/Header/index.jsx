import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Scrumguide</h1>
    </div>
  );
};

export default Header;
