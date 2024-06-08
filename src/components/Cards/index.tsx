import { useDispatch, useSelector } from 'react-redux';
import { memo, useEffect, useRef } from 'react';
import {
  useGetArtByParamsQuery,
  useGetTotalAuthorsQuery,
  useGetTotalLocationsQuery,
} from '../../redux/query/artApi';
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

  const { searchValue, valueAuthor, valueLocation, valueAgeFrom, valueAgeTo } =
    useSelector((state: RootState) => state.filter);

  const { data: authors = [] } = useGetTotalAuthorsQuery('');
  const { data: locations = [] } = useGetTotalLocationsQuery('');

  const { data = [], isLoading } = useGetArtByParamsQuery({
    searchValue,
    currentPage,
    valueAuthor,
    valueLocation,
    valueAgeFrom,
    valueAgeTo,
  });

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
        <Card
          data={item}
          key={item.id}
          authors={authors[item.authorId - 1]}
          locations={locations[item.locationId - 1]}
        />
      ))}
    </div>
  );
}

export default memo(Cards);
