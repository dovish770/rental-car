import Link from "next/link"
import styles from './logSignHomeLinks.module.scss'

 const  LogInP = () =>{
    return (
        <h3>כבר רשומים? <Link href="/pages//logIn" replace className={styles.pLinks}>הכנסו</Link></h3>
    )
}

export default LogInP