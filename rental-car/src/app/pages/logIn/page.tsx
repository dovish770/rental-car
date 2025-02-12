import LogInForm from "@/components/logInForm/LogInForm";
import SignInP from "@/components/logSignHomeLinks/SignInP";
import styles from '@/app/globals.module.scss'
import HomeP from "@/components/logSignHomeLinks/HomeP";

 const LogIn = () => {
  return (
    <div>
      <LogInForm/>
      <div className={styles.linkContainer}>
        <SignInP />
        <HomeP />
      </div>
      
    </div>
  );
}
export default LogIn