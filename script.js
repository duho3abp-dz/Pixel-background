'use strict';

const pixelBackgroundLights = ({ pixelsIdentify}) => {
    const pixels = document.querySelectorAll(pixelsIdentify);

    const animation = (pixel) => {
        const color = Math.floor(Math.random() * 9000 + 1000);
        pixel.style.background = `#${color}`;

        setTimeout(() => window.requestAnimationFrame( () => animation(pixel) ), 4000) ;
    }

    
    pixels.forEach(pixel => window.requestAnimationFrame( () => animation(pixel) ));
};

pixelBackgroundLights({
    pixelsIdentify: '.background div'
});