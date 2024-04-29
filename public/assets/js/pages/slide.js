const Evolut1onSlide = {
    view: () => m('img', {
        src: `/assets/contents/slides/${m.route.param('slideId')}.png`,
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

export default Evolut1onSlide;