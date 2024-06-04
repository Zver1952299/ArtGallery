import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import { useGetArtQuery } from '../../redux/artApi';
import { RootState } from '../../redux/store';
import { setTotalPage } from '../../redux/slices/pageSlice';
import Card from '../Card';

import styles from './Cards.module.scss';

function Cards() {
  const isNotFound = useRef(false);
  const dispatch = useDispatch();

  const currentPage = useSelector(
    (state: RootState) => state.currentPage.currentPage
  );

  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );

  const { data = [], isLoading } = useGetArtQuery({ searchValue, currentPage });
  console.log(data);

  useEffect(() => {
    dispatch(setTotalPage(data));
  }, [data, dispatch]);

  if (!isLoading) {
    isNotFound.current = true;
  }

  if (isNotFound.current && !data.length) {
    return <h1>Not Found</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.cards}>
      {data.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Cards;
