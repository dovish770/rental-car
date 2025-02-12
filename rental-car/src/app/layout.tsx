import Bar from '@/components/bar/Bar';
import styles from './globals.module.scss'
import Logo from '@/components/logo/Logo';
import Footer from '@/components/footer/Footer';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir='rtl'>
      <body className={styles.Body}>
        <Bar />
        <div className={styles.logoContainer}>
          <Logo />
        </div>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
