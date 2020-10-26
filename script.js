'use strict';

const pixelBackgroundLights = ({pixelsIdentify, colors}) => {
    const pixels = document.querySelectorAll(pixelsIdentify);

    const animation = pixel => {
        const i = Math.floor(Math.random() * colors.length + 0);
        pixel.style.background = colors[i];

        setTimeout(() => window.requestAnimationFrame( () => animation(pixel) ), 4000) ;
    }

    pixels.forEach(pixel => {
        pixel.style.opacity = `1`;
        window.requestAnimationFrame(() => animation(pixel));
    });
};

pixelBackgroundLights({
    pixelsIdentify: '.background div',
    colors: [
        '#ee01fc',
        '#fc03b9',
        '#b20fe1',
        '#a701fc',
        '#a602fb'
    ]
});