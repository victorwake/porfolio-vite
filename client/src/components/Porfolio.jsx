import game from '../img/game.png';
import todo from '../img/todo.gif';
import wines from '../img/wines.png';

export default function Portfolio() {
    return (
        <>
        <section className="porfolio" id="porfolio">
        <h2 className="heading">Latest <span>Works</span></h2>
        <div className="porfolio-container">
            <div className="porfolio-box">
                <img src={game} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Games</h4>
                    <p>Proyecto individual para el curso Soy Henry, página de videos juegos que consume una API externa y guarda juegos en una db.</p>
                <a href="https://pi-videogames-pza6s3qw0-victorwake.vercel.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="porfolio-box">
                <img src={todo} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Todo</h4>
                    <p>Permite agregar y eliminar tareas y el cambio de tema.</p>
                <a href="https://victorpinto-todo.netlify.app/" target="_blank"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            <div className="porfolio-box">
                <img src={wines} alt=""></img>
                <div className="porfolio-layer">
                    <h4>Web Wines</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate alias eligendi.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
                </div>
            </div>

            
        </div>
    </section>
    </>
    )
}