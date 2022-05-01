import {
  AppBar,
  Container,
  Fab,
  IconButton,
  Toolbar,
} from '@mui/material/'
import Home from '@mui/icons-material/Home'
import KeyboardArrowUp from '@mui/icons-material/KeyboardArrowUp'
import { styled } from "@mui/system";
import { 
  MuiNextLink,
  Navbar,
  SideDrawer,
  HideOnScroll,
  BackToTop
 } from '@components/index'

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export const navLinks = [
  { title: 'home', path: '/' },
  { title: 'projects', path: '/projects' },
  { title: 'about', path: '/about' },
  { title: 'contact', path: '/contact' },

]

const Header = () => {
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed">
          <Toolbar>
            <Container maxWidth="lg" sx={{ display: `flex`, justifyContent: `space-between` }}>
              <IconButton edge="start" aria-label="home">
                <MuiNextLink activeClassName="active" href="/">
                  <Home fontSize="large" />
                </MuiNextLink>
              </IconButton>
              <Navbar navLinks={navLinks} />
              <SideDrawer navLinks={navLinks} />
            </Container>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Offset id="back-to-top-anchor" />
      <BackToTop>
        <Fab color="secondary" size="large" aria-label="back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>
    </>
  );
};

export default Header;
