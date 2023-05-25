import {Navbar, Navbar1, DrawerAppBar, Footer} from "../components";
// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = (props) => {
  return (
    <>
      <DrawerAppBar/>
        {/* <ToastContainer /> */}
        {props.children}
      <Footer/>
    </>
  );
};

export default Layout;
