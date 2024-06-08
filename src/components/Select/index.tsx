import React, { ChangeEvent } from 'react';

import styles from './Select.module.scss';

function SelectUI({ title, data, value, onChangeValue }) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChangeValue(e.target.value);
  };

  return (
    <select
      name="selectedFruit"
      value={value}
      onChange={handleChange}
      className={styles.select}
    >
      <option value="">Не выбрано</option>
      {data.map((dates) => (
        <option key={dates.id} value={title === 'Artist' ? dates.id : dates.id}>
          {title === 'Artist' ? dates.name : dates.location}
        </option>
      ))}
    </select>
  );
}

export default SelectUI;
