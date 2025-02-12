import Link from "next/link"
import styles from './logSignHomeLinks.module.scss'

 const  SignInP = () =>{
    return (
        <h3>אין לכם עדיין חשבון? <Link href="/pages/signIn" replace className={styles.pLinks}>להרשמה</Link></h3>
    )
}

export default SignInP