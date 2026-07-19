import React from 'react';
import useKeyDrivenCounter from "./use-key-driven-counter";
import styles from './SlideDeck.module.css';
import {boundValue} from "./helpers";
import OffsetForm from "../OffsetForm/OffsetForm";
import Slide from "../Slide";


function SlideDeck({slides, defaultStateful}) {
  const currentSlideIndex = useKeyDrivenCounter(0,slides.length-1);

  const [slideOffset, setSlideOffset] = React.useState(null);

  const form = <OffsetForm setSlideOffset={setSlideOffset}/>;

  const displaySlide = boundValue({val:currentSlideIndex+slideOffset,min:0,max:slides.length-1})

  const slideDeck = (
    <div className={styles.slideDeckWrapper}>

      {slides.map((slide, index) => {
        return (
          <Slide visible={index === displaySlide} defaultStateful={defaultStateful} key={index}>
            {slide}
          </Slide>
        );
      })}
    </div>
  );

  return (
    slideOffset===null ? form : slideDeck
  );
}

export default SlideDeck;
