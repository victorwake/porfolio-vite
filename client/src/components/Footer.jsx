import { useTranslation } from 'react-i18next';

export default function Footer() {
  const [t, i18n] = useTranslation('global');//Traduccion
    return (
        <>
        <footer className="footer">
          <div className="footer-text">
            <p>
              &copy; 2023 <span>Victor Pinto</span> | {t('reserved')}</p>
            <p className="mail">victorpintowake@gmail.com</p>
          </div>
          <div className="footer-iconTop">
            <a href="#home">
              <i className="bx bxs-up-arrow-alt"></i>
            </a>
          </div>
        </footer>
      </>
    )
}
