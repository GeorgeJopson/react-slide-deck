import React from 'react';
import styles from './OffsetForm.module.css';

function OffsetForm({setSlideOffset}) {
  const [currentInputSlideOffset, setCurrentInputSlideOffset] = React.useState(0);

  return (
    <form
      className={styles.formWrapper}
      onSubmit={(event) => {
        event.preventDefault();
        setSlideOffset(currentInputSlideOffset);
      }}>
      <label htmlFor="offset-field">
        Slide Offset:
      </label>
      <input
        className={styles.offsetField}
        type="number"
        id="offset-field"
        value={currentInputSlideOffset}
        onChange={event => {
          setCurrentInputSlideOffset(Number(event.target.value));
        }}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default OffsetForm;