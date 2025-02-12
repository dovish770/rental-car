import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Bar.module.scss'
import Link from 'next/link';

export default function Bar() {
  return (
    <div  className={styles.barContainer}>
      <AppBar >
        <Toolbar className={styles.toolBar}>
          <Button color="inherit"><Link href="/pages/logIn" replace>התחבר</Link></Button>
          <IconButton className={styles.iconButton}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar> 
    </div>
  );
}
