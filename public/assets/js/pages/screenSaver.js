const Evolut1onScreenSaver = {
    view: () => m('video', {
        autoplay: true,
        loop: true,
        muted: true,
        src: '/assets/contents/car_reveal.mp4',
        style: {
            position: 'fixed',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            top: 0,
            left: 0,
            zIndex: -1
        }
    })
};

export default Evolut1onScreenSaver;