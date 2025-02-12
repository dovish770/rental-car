import LogInP from "@/components/logSignHomeLinks/LogInP";
import SignInForm from "@/components/signInForm/SignInForm";
import styles from '@/app/globals.module.scss'
import HomeP from "@/components/logSignHomeLinks/HomeP";

const SignIn = () => {
  return (
    <div>
      <SignInForm />
      <div className={styles.linkContainer}>
        <LogInP />
        <HomeP/>
      </div>
    </div>
  );
}
export default SignIn