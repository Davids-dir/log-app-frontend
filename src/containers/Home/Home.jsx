// Importo las dependencias necesarias
import React from 'react';


// Importo la hoja de estilos
import './Home.scss';


// Logica del contenedor Home
const Home = ( ) => {



    return (
        <div className="homeContainer">
            <div className="coverImage"></div>
            <div className="sectionOne">
                <div className="sectionOne-upleft">
                    <div className="upleft-img"></div>
                </div>
                <div className="sectionOne-upright"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin risus quis ornare semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt aliquam eros id tempus. Nam in gravida nisl. Nam at mauris mattis, interdum felis id, eleifend quam. Ut eros neque, efficitur blandit risus in, mollis iaculis est. Proin rhoncus ligula ac facilisis ornare. Praesent nibh mi, consequat quis dignissim in, pharetra vel eros. <br></br> <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum lectus at lacus consequat, pellentesque ultrices eros varius. Proin interdum, felis quis laoreet mollis, ligula libero faucibus dolor, ut commodo nisl neque eu felis. Sed leo massa, tincidunt ac dapibus ac, pellentesque sit amet neque. Cras vitae tortor et lectus imperdiet vehicula. Aenean cursus tempus dui id dignissim. Curabitur eu nibh id leo fermentum maximus nec id tortor. Integer eleifend sodales quam, vel vehicula justo ullamcorper nec. Ut in nisi accumsan, bibendum sem eu, euismod tellus. </p></div>
                <div className="sectionOne-downleft"><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sollicitudin risus quis ornare semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Praesent tincidunt aliquam eros id tempus. Nam in gravida nisl. Nam at mauris mattis, interdum felis id, eleifend quam. Ut eros neque, efficitur blandit risus in, mollis iaculis est. Proin rhoncus ligula ac facilisis ornare. Praesent nibh mi, consequat quis dignissim in, pharetra vel eros. <br></br> <br></br> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas interdum lectus at lacus consequat, pellentesque ultrices eros varius. Proin interdum, felis quis laoreet mollis, ligula libero faucibus dolor, ut commodo nisl neque eu felis. Sed leo massa, tincidunt ac dapibus ac, pellentesque sit amet neque. Cras vitae tortor et lectus imperdiet vehicula. Aenean cursus tempus dui id dignissim. Curabitur eu nibh id leo fermentum maximus nec id tortor. Integer eleifend sodales quam, vel vehicula justo ullamcorper nec. Ut in nisi accumsan, bibendum sem eu, euismod tellus. </p></div>
                <div className="sectionOne-downright">
                    <div className="downright-img"></div>
                </div>
            </div>
            <div className="sectionTwo">
                <div className="sectionTwo-up"></div>
                <div className="sectionTwo-mid">
                    <div className="midleft-text"><h2>Gestiona la entrada y salida de tus trabajadores de una manera agil y sencilla</h2></div>
                    <div className="midright-image"></div>
                </div>
                <div className="sectionTwo-down"></div>
            </div>
        </div>
    )
};

// Exporto el contenedor
export default Home;