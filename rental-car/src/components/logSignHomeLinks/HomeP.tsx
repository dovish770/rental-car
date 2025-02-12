import Link from "next/link"
import styles from './logSignHomeLinks.module.scss'

 const  HomeP = () =>{
    return (
        <h3><Link href="/" replace className={styles.pLinks}>חזרה לדף הבית</Link></h3>
    )
}

export default HomeP