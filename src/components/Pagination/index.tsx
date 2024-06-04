import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../redux/slices/pageSlice';
import { useGetTotalArtQuery } from '../../redux/artApi';
import { RootState, store } from '../../redux/store';

import arrowPrev from '../../assets/Pagination/arrowPrev.svg';
import arrowNext from '../../assets/Pagination/arrowNext.svg';

import styles from './pagination.module.scss';

type EventType = {
  selected: number;
};

function Pagination() {
  const dispatch = useDispatch();

  const searchValue = useSelector(
    (state: RootState) => state.filter.searchValue
  );

  // const searchPages = useSelector(
  //   (state: RootState) => state.currentPage.searchPages
  // );
  const { searchPages } = store.getState().currentPage;
  console.log(searchPages);

  const { data = [] } = useGetTotalArtQuery(1);

  const handlePageClick = (e: EventType) =>
    dispatch(setCurrentPage(e.selected + 1));

  return (
    !searchValue &&
    !!searchPages.length && (
      <ReactPaginate
        pageCount={Math.ceil(data.length / 6)}
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={1}
        className={styles.container}
        pageClassName={styles.page}
        nextClassName={styles.next}
        previousClassName={styles.prev}
        activeClassName={styles.selected}
        breakClassName={styles.break}
        disabledClassName={styles.disabledArrow}
        previousLabel={<img src={arrowPrev} alt="arrowPrev" />}
        nextLabel={<img src={arrowNext} alt="arrowNext" />}
      />
    )
  );
}

export default Pagination;
