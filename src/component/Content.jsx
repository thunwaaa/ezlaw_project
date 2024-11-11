import styles from './Content.module.css'
import React, { useState } from 'react';
import { Search } from 'lucide-react';

const content = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };
  return (
    <>
    <section className={styles.block1}>
        <h1>ทำกฏหมาย <br /> ให้เป็นเรื่องง่าย!</h1>
        <img className={styles.booksIcon} src="/Image/booksnapple.png" alt="" />
        <div className= {styles.b_container}>
          <div className={styles.b1}></div>
          <div className={styles.b2}></div>
          <div className={styles.b3}></div>
          <div className={styles.b4}></div>
          <div className={styles.b5}></div>
        </div>
    </section>
    <div className={styles.cut_part}>
      <hr className={styles.line1} />
      <h1 className={styles.law_cate}>กฏหมาย</h1>
      <hr className={styles.line2} />
    </div>
    <article>

    </article>
    </>
  )
}

export default content