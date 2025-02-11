import styles from './globals.module.scss'
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';

export default function Home() {
  return (
    <div className={styles.HomeContainer}>
      <img src="https://www.tofsy-il.com/Model_Products/70ff8abc2c3e82dcb62754291535ec12.jpg" alt="" />
      <Box sx={{ '& > :not(style)': { m: 1 } }}>
        <TextField
          id="input-with-icon-textfield"
          label="TextField"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
          }}
          variant="standard"
        />
        </Box>
    </div>
  );
}
