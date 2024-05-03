import styles from './Footer.module.css'

const date = new Date();
const currentYear = date.getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className={styles.date}>
        <p>Copyright &copy; {currentYear} ScrumbleEggs</p>
      </div>
    </footer>
  
  );
}

export default Footer