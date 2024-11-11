import styles from './Navbar.module.css'
import { useState } from "react";

const Navbar = () => {
    const [selected, setSelected] = useState(null);
  
    const handleClick = (type) => {
      setSelected(selected === type ? null : type);
    }
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>EZLAW</div>
        <ul className={styles.menu}>
            <li className='hover:text-gray-500 mr-0'>Home</li>
            <li className='hover:text-gray-500 ml-0'>
                กฏหมาย
                <ul className={styles.dropdown}>
                    <li>กฏหมายอาญา</li>
                    <li>กฏหมายแพ่งและพาณิชย์</li>
                </ul>
            </li>
            
            <button className={styles.premium}>ปรึกษาทนาย <img className = {styles.iconpremium}src="/Image/crownIcon.png" alt="" /></button>
            <div className={styles.container}>
              <button
                onClick={() => handleClick("signin")}
                className={`${styles.button} ${
                selected === "signin" 
                ? styles.buttonActive : styles.buttonInactive
                }`}
              >
                Sign in
              </button>
              <div className={styles.divider}>|</div>
              <button
                onClick={() => handleClick("signup")}
                className={`${styles.button} ${
                selected === "signup" ? styles.buttonActive : styles.buttonInactive
                }`}
              >
                Sign up
              </button>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar