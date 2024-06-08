import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';
import closeIconDark from '../../assets/Filter/closeIconDark.svg';
import AccordionUsage from '../Accordion';

import styles from './Filter.module.scss';
import { RootState } from '../../redux/store';
import {
  setIsOpen,
  setValueAgeFrom,
  setValueAgeTo,
  setValueAuthor,
  setValueLocation,
} from '../../redux/slices/filterSlice';
import { setCurrentPage } from '../../redux/slices/pageSlice';

const accordionTitles = ['Artist', 'Location', 'Years'];

function Filter() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.filter.isOpen);

  const [dataAuthor, setDataAuthor] = useState('');
  const [dataLocation, setDataLocation] = useState('');
  const [valueFrom, setValueFrom] = useState('');
  const [valueTo, setValueTo] = useState('');

  const handleFilter = () => {
    dispatch(setValueAuthor(dataAuthor));
    dispatch(setValueLocation(dataLocation));
    dispatch(setValueAgeFrom(valueFrom));
    dispatch(setValueAgeTo(valueTo));
  };

  const handleClearFilter = () => {
    dispatch(setValueAuthor(''));
    dispatch(setValueLocation(''));
    dispatch(setValueAgeFrom(''));
    dispatch(setValueAgeTo(''));
    dispatch(setCurrentPage(1));
    setValueFrom('');
    setValueTo('');
    setDataAuthor('');
    setDataLocation('');
  };

  return (
    <div
      className={`${isOpen ? `${styles.wrapper} ${styles.wrapperOpen}` : `${styles.wrapper}`} `}
    >
      <button
        type="button"
        className={styles.closeBtn}
        onClick={() => dispatch(setIsOpen(false))}
      >
        <img src={closeIconDark} alt="closeIcon" />
      </button>
      {isOpen && (
        <div className={styles.wrapperAccordion}>
          {accordionTitles.map((item) => (
            <AccordionUsage
              key={item}
              title={item}
              value={item === 'Artist' ? dataAuthor : dataLocation}
              onChangeValue={
                item === 'Artist' ? setDataAuthor : setDataLocation
              }
              valueFrom={valueFrom}
              valueTo={valueTo}
              onChangeInputFromValue={setValueFrom}
              onChangeInputToValue={setValueTo}
            />
          ))}
        </div>
      )}
      <div className={styles.bottomBlock}>
        <button type="button" className={styles.showBtn} onClick={handleFilter}>
          Show the results
        </button>
        <button
          type="button"
          className={styles.clearBtn}
          onClick={handleClearFilter}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Filter;
