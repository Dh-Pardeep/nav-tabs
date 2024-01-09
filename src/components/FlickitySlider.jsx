import React, { useEffect, useRef } from 'react';
import Flickity from 'flickity';

const FlickitySlider = () => {
  const slideshowEl = useRef(null);
  let flickity = null;

  useEffect(() => {
    if (slideshowEl.current) {
      flickity = new Flickity(slideshowEl.current, {
        autoPlay: 2000,
        prevNextButtons: true,
        pageDots: false,
        draggable: true,
        wrapAround: true,
        selectedAttraction: 0.015,
        friction: 0.25
      });
    }

    return () => {
      if (flickity) {
        flickity.destroy();
      }
    };
  }, []);

  return (
    <div className='container'>
      <div ref={slideshowEl} className="slideshow">
        <div className="slide">One</div>
        <div className="slide">Two</div>
        <div className="slide">Three</div>
        <div className="slide">Four</div>
      </div>
    </div>
  );
};

export default FlickitySlider;
