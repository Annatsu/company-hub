// React
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';

const SearchBar = ({ onChange }) => {
  const { formatMessage } = useIntl();

  const onInputChange = useCallback(
    (event) => {
      const inputValue = event.target.value;
      onChange(inputValue);
    },
    [onChange],
  );

  return (
    <div className='field'>
      <div className='control has-icons-right'>
        <input
          className='input is-rounded'
          type='text'
          placeholder={formatMessage({ id: 'searchbar.placeholder' })}
          onChange={onInputChange}
        />
        <span className='icon is-small is-right'>
          <i className='fas fa-search'></i>
        </span>
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default SearchBar;
