import styles from './globals.module.scss'
import LogInP from '@/components/logSignHomeLinks/LogInP';
import SignInP from '@/components/logSignHomeLinks/SignInP';

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <h1>ברוכים ל - DAVIS -</h1>
      <h2>השכרת רכבים לאנ"ש בכפר חב"ד והסביבה</h2>
    <SignInP/>
    <LogInP/>
    </div>
  );
}
