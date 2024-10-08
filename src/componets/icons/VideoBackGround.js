import React, { useRef, useEffect } from 'react';

export function VideoLoop(props) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        // Reproducir automáticamente
        video.play();

        // Bucle infinito
        video.addEventListener('ended', () => {
            video.currentTime = 0;
            video.play();
        });

        // Limpiar el evento al desmontar el componente
        return () => video.removeEventListener('ended', () => { });
    }, []);

    return (
        <div classname="absolute inset-0 object-cover h-screen w-10">
            <video
                ref={videoRef}
                part="video"
                crossorigin
                playsinline
                muted
                src="https://videos.pexels.com/video-files/854541/854541-hd_1280_720_60fps.mp4"
                preload="metadata"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    zIndex: -1,
                }}
                loop
                autoplay
            />
        </div>
    );
}