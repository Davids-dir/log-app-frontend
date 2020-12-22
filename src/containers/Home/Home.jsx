// Importo las dependencias necesarias
import React from 'react';
import CarouselGrid from '../../components/Carousel/Carousel';


// Importo la hoja de estilos
import './Home.scss';


// Logica del contenedor Home
const Home = ( ) => {



    return (
        <div className="homeContainer">
            <CarouselGrid />
            <div className="sectionOne">
                <div className="sectionOne-upleft">Arriba izquierda</div>
                <div className="sectionOne-upright">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin risus quis ornare semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt aliquam eros id tempus. Nam in gravida nisl. Nam at mauris mattis, interdum felis id, eleifend quam. Ut eros neque, efficitur blandit risus in, mollis iaculis est. Proin rhoncus ligula ac facilisis ornare. Praesent nibh mi, consequat quis dignissim in, pharetra vel eros.</div>
                <div className="sectionOne-downleft">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin risus quis ornare semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt aliquam eros id tempus. Nam in gravida nisl. Nam at mauris mattis, interdum felis id, eleifend quam. Ut eros neque, efficitur blandit risus in, mollis iaculis est. Proin rhoncus ligula ac facilisis ornare. Praesent nibh mi, consequat quis dignissim in, pharetra vel eros.</div>
                <div className="sectionOne-downright">Abajo derecha</div>
            </div>
            <div className="sectionTwo">
                <div className="sectionTwo-up"></div>
                <div className="sectionTwo-mid">
                    <div className="midleft-text">Lorem Ipsum</div>
                    <div className="midright-image">FOTO</div>
                </div>
                <div className="sectionTwo-down"></div>
            </div>
        </div>
    )
};

// Exporto el contenedor
export default Home;