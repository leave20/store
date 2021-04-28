import { makeStyles } from '@material-ui/core';
import NavBar from './components/Navbar';
import Header from './components/Header';
import Catalogo from './components/Catalogo';
import Fotos from './components/Fotos';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Grid from './components/Grid';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <>
      <NavBar dark={true} />
      <Header title='Header' id='header' dark={true} />
      <Grid title='grid' id='grid' dark={true} />
      <Catalogo title='Catalogo' id='catalogo' dark={true} />
      <Fotos title='Foto' id='foto' dark={true} />
      <Contact title='Contacto' id='contact' dark={true} />
      <Footer title='footer' id='footer' dark={true} />
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    //  ----
  },
}));

export default App;
