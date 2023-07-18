import html from '../img/skills/html5.png'
import css from '../img/skills/css.png'
import js from '../img/skills/js.png'
import react from '../img/skills/react.png'
import redux from '../img/skills/redux.png'
import sequelize from '../img/skills/sequelize.png'
import node from '../img/skills/node.png'
import java from '../img/skills/java.png'
import springboot from '../img/skills/springboot.png'
import postgres from '../img/skills/postgres.png'
import mysql from '../img/skills/mysql.png'
import bootstrap from '../img/skills/bootstrap.png'

export default function Skill() {
  return (
    <>
      <section className="skills" id="skills">
        <h2 className="heading"><span>Skills</span></h2>
        <div className="skills-container" >
        <div className="porfolio-container">
            <div className="img-skill">
                <img src={html} alt="Logo HTML5"></img>
                <h3>HTML5</h3>
            </div>
            <div className="img-skill">
                <img src={css}></img>
                <h3>CSS3</h3>
            </div>
            <div className="img-skill">
                <img src={js} alt="Logo JavaScript"></img>
                <h3>JavaScript</h3>
            </div>
            <div className="img-skill">
                <img src={react} alt="Logo jQuery"></img>
                <h3>React js</h3>
            </div>
            <div className="img-skill">
                <img src={redux} alt="Logo Redux"></img>
                <h3>Redux</h3>
            </div>
            <div className="img-skill">
                <img src={sequelize} alt="Logo Sequelize"></img>
                <h3>Sequelize</h3>
            </div>
            
        </div> 
        <div className="porfolio-container"> 
            <div className="img-skill" >
                <img src={node} alt="Logo Node"></img>
                <h3>Node</h3>
            </div>
            <div className="img-skill">
                <img src={java} alt="Logo Java"></img>
                <h3>Java</h3>
            </div>
            <div className="img-skill">
                <img src={springboot} alt="Logo Springboot"></img>
                <h3>Springboot</h3>
            </div>
            <div className="img-skill">
                <img src={postgres} alt="Logo Postgres"></img>
                <h3>Postgres</h3>
            </div>
            <div className="img-skill">
                <img src={mysql} alt="Logo MySQL"></img>
                <h3>MySQL</h3>
            </div>
            <div className="img-skill">
                <img src={bootstrap} alt="Logo Bootstrap"></img>
                <h3>Bootstrap</h3>
            </div>
        </div> 
    </div>
    </section>
    </>
  );
}
