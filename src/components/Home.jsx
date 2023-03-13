import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import Contexto from "../Context";
import Image from 'react-bootstrap/Image'
import Header from "./Header";
import "../assets/css/galeria.css"

const Home = () => {   
    const { galeria, setGaleria } = useContext(Contexto)  
   
    const setFav = (id) => {
        const imgIndex = galeria.findIndex((e) => e.id === id );
        galeria[imgIndex].favorito = !galeria[imgIndex].favorito;                        
        let fav = galeria[imgIndex].favorito;  
        let imag = document.getElementById(id);
        if(fav)
            imag.style="border:4px solid red"
        else
        imag.style="none"
    }    
    return (
        <div>
            
            <Header titulo='Galería de imágenes'></Header>
            <Container>
                <Row>
                    {
                        galeria.map((foto, i) => (                            
                            <Col className="pb-2" key={i}> 
                                <Image rounded id={foto.id} src={foto.src} alt={foto.desc}
                                    onClick={(event) => { setFav(foto.id) }}
                                    style= {foto.favorito?{border:4 + "px " + "solid " +  "red"}:
                                    {border:"none"}} >
                                </Image> 
                            </Col>))                                
                    }
                </Row>
            </Container>            
        </div>
    );
}

export default Home;
