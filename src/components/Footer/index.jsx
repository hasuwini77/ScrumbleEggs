import { useState } from 'react';
import styles from './Footer.module.css'
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${year}`;
}

const Footer = () => {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <footer>
      <div className={styles.date}>
        <p>Copyright &copy; {currentDate} ScrumbleEggs</p>
      </div>
    </footer>
  
  );
}

export default Footer