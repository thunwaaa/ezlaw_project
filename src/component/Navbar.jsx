import { AuthButton } from './AuthButton';
import styles from './Navbar.module.css'


const Navbar = () => {
    
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
            <AuthButton />
        </ul>
    </nav>
  )
}

export default Navbar