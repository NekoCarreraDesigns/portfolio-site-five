import "./Projects.css";
import { Link } from "react-router-dom";
import OpenInNewWindowButton from "../../components/GameButton/Gamebutton";

const Projects = () => {
  return (
    <>
      <div className='header-container'>
        <div className='header-container'>
          <h1 className='projects-header'>Sites</h1>
          <div className='project-container'>
            <div className='project-div'>
              <h2 className='site-header'>eFormative</h2>
              <img src='eFormative.gif' alt='website'></img>
              <p className="projects-paragraph">
                Website made with the MERN stack. MongoDB database to store user
                information, and store objects that the user is selling. Express
                routes to make the site CRUD capable, React frontend for the UI,
                and Node to make it serverless. The site uses material UI for a
                nice clean presentation
              </p>
              <Link to='https://eformative.com'>Visit</Link>
              <br/>
              <Link to='https://www.github.com/NekoCarreraDesigns/eformative'>View Code</Link>
            </div>
            <div className='project-div'>
              <h2 className='site-header'>The Antique Geek</h2>
              <img src='The Antique Geek.gif' alt='website'></img>
              <p className="projects-paragraph">
                Static website made using React, and react-router-dom
                navigation. The site uses ES6 and some CSS for styling the page.
              </p>
              <Link to='https://antiques-geek.onrender.com/'>Visit</Link>
              <br/>
              <Link to='https://www.github.com/NekoCarreraDesigns/antiiques-geek'>View Code</Link>
            </div>
            <div className='project-div'>
              <h2 className='site-header'>Skate Sesh</h2>
              <img src='Skate Sesh.gif' alt='website'></img>
              <p className="projects-paragraph">
                Mern stack application that tracks skateboarding tricks,
                currently under construction.
              </p>
              <Link to='https://skatesesh.com'>Coming soon</Link>
              <br/>
              <Link to='https://www.github.com/NekoCarreraDesigns/skate-sesh'>View Code</Link>
            </div>
          </div>
        </div>
        <h1 className='projects-header'>Fun Games</h1>
        <div className='project-container'>
          <div className='project-div'>
            <h2 className='game-header'>Snake</h2>
            {/* <iframe
              title='snake-game'
              src='https://drive.google.com/file/d/1spgG5H_1atO80wIprotTQWSqWJf5YAYt/preview'
              width='640'
              height='480'></iframe> */}
            <img src='Snake_Game_1.gif' alt='snake-game'></img>

            <p className="projects-paragraph">
              Snake Game made using Python, the game uses object oriented
              programming to draw the board, as well as using functional
              programming for the controls
            </p>
              <OpenInNewWindowButton className='play-me-button' fileName="main.exe" label="Play Me!"/>
              
          </div>
          <div className='project-div'>
            <h2 className='game-header'>Connect Four</h2>
            {/* <iframe
              title='Connect-four'
              src='https://drive.google.com/file/d/1tCl2AWszlp2nD5c4dBYqfU91tL24Nz_1/preview'
              width='640'
              height='480'></iframe> */}
            <img src='Connect_Four_1.gif' alt='connect-four'></img>
            <p className="projects-paragraph">
              Game was made using Python, Pygame, and Numpy. Uses functional
              programming to draw, and provide the games functionality
            </p>
              <OpenInNewWindowButton className='play-me-button' fileName="connect_four.exe" label="Play Me!"/>
          </div>
          <div className='project-div'>
            <h2 className='game-header'>Tetris</h2>
            <img src='Tetris_1.gif' alt='tetris'></img>
            <p className="projects-paragraph">
              This game was made using Python and Pygame. It uses Object
              oriented programming to draw the board and game pieces and
              functional programming for the controls. press up to rotate pieces.
            </p>
            <OpenInNewWindowButton className="play-me-button" fileName="tetris.exe" label="Play Me!"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
