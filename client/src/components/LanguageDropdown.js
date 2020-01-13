// React
import React, { useContext } from 'react';
import { useIntl } from 'react-intl';

// Contexts
import i18nContext from '../contexts/i18n';

// Constants
const DROPDOWN_ID = 'languages-dropdown';
const locales = ['en', 'pt'];

const LanguageDropdown = () => {
  const { formatMessage } = useIntl();
  const { locale: currentLocale, setLocale } = useContext(i18nContext);

  return (
    <div className='dropdown is-hoverable'>
      <div className='dropdown-trigger'>
        <button className='button' aria-haspopup='true' aria-controls={DROPDOWN_ID}>
          <span>{formatMessage({ id: `locale.${currentLocale}` })}</span>
          <span className='icon is-small'>
            <i className='fas fa-angle-down' />
          </span>
        </button>
      </div>
      <div className='dropdown-menu' id={DROPDOWN_ID} role='menu'>
        <div className='dropdown-content'>
          {locales.map((locale) => (
            <a
              key={locale}
              href='#'
              className='dropdown-item'
              onClick={(e) => {
                e.preventDefault();
                setLocale(locale);
              }}
            >
              {formatMessage({ id: `locale.${locale}` })}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageDropdown;
