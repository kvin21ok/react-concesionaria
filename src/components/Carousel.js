import React, {useState, useEffect} from "react";
import './Carousel.css';

const Carousel = ()=>{

    const images = [
        'https://arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/4GSUPRZXXREO7A3YKFIT3W2RMM.jpg',
        'https://autotest.com.ar/wp-content/uploads/2021/06/AUTOS-MAS-CAROS-DEL-MUNDO-BUGATTI-DIVO-PORTADA.jpg',
        'https://media.revistagq.com/photos/5ca5e602944b834654eb8fe6/master/pass/los_10_coches_mas_caros_del_mundo_131086603.jpg',
    ];

    const [currentIndex, setCurrentIndex] = useState (0);

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [images]);

    return(
        <div className="carousel">

            <div className="carousel.images">
                {images.map((image, index)=>(
                    <img
                    key={index}
                    src={image}
                    alt={`carousel image ${index + 1}`}
                    className={index === currentIndex ? 'active' : ''}
                    />
                ))}
            </div>

        </div>
    )
};

export default Carousel