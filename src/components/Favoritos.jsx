import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useContext } from "react";
import Contexto from "../Context";
import Image from 'react-bootstrap/Image'
import Header from "./Header";
import "../assets/css/galeria.css";

const Favoritos = () => {
    const { galeria, setGaleria } = useContext(Contexto)            
    return (
        <div>
            <Header titulo='Galería de favoritos'></Header>
            <Container>
                <Row>
                    {
                        galeria.filter((e) =>e.favorito)
                        .map((e,i)=>(
                            <Col className="pb-2" key={i}> <Image src={e.src} alt={e.desc}
                            ></Image> </Col>))
                    }
                </Row>
            </Container>
        </div>
    );
}
export default Favoritos;
