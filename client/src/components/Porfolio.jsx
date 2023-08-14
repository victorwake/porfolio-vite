import game from '../img/game.png';
import todo from '../img/todo.gif';
import wines from '../img/wines.png';
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
    const [t, i18n] = useTranslation('global');//Traduccion
    return (
        <>
        <section className="porfolio" id="porfolio">
        <h2 className="heading">Latest <span>Works</span></h2>
        <div className="porfolio-container">
            <div className="porfolio-box">
                <img src={game} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Games</h4>
                    <p>{t('videoGame')} </p>
                <a href="https://pi-videogames-pza6s3qw0-victorwake.vercel.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="porfolio-box">
                <img src={todo} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Todo</h4>
                    <p>{t('todo')} </p>
                <a href="https://victorpinto-todo.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="porfolio-box">
                <img src={wines} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Wines</h4>
                    <p>{t('webWines')}</p>
                <a href="https://pg-wine.vercel.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            
        </div>
    </section>
    </>
    )
}