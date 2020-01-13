// React
import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

// Components
import { Link } from 'react-router-dom';

const Pagination = ({ activePage, pagesCount }) => {
  const onPageClick = useCallback(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const pages = useMemo(() => {
    return Array.from(new Array(pagesCount || 1)).map((_, i) => (
      <li key={i}>
        <Link
          to={`?page=${i + 1}`}
          className={cx('pagination-link', activePage === i + 1 && 'is-current')}
          onClick={onPageClick}
        >
          {i + 1}
        </Link>
      </li>
    ));
  }, [activePage, pagesCount]);

  return (
    <nav className='pagination is-centered' role='navigation' aria-label='pagination'>
      <ul className='pagination-list'>{pages}</ul>
    </nav>
  );
};

Pagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  pagesCount: PropTypes.number.isRequired,
};

export default Pagination;
