import { useState } from 'react';
import styles from './Input.module.scss';

function Input({
  valueFrom,
  valueTo,
  onChangeInputFromValue,
  onChangeInputToValue,
}) {
  console.log(valueFrom, '---', valueTo);

  return (
    <form className={styles.input}>
      <input
        className={styles.from}
        type="text"
        name="from"
        placeholder="From"
        value={valueFrom}
        onChange={(e) => {
          onChangeInputFromValue(e.target.value);
        }}
      />
      <span>—</span>
      <input
        className={styles.to}
        type="text"
        name="to"
        placeholder="To"
        value={valueTo}
        onChange={(e) => {
          onChangeInputToValue(e.target.value);
        }}
      />
    </form>
  );
}

export default Input;
