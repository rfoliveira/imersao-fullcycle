import { AppBar, Toolbar, Typography, Button } from '@mui/material'
import StoreIcon from '@mui/icons-material'
import Link from 'next/link'

const Navbar: React.FunctionComponent = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Link href={"/"} as={`/`} passHref>
            <Button color="inherit" startIcon={<StoreIcon />} component="a">
              <Typography variant="h6">Code Store</Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    );
  };

  export default Navbar;