import "./Home.css";
import Header from "../../components/Header/Header";
import {
  SiPython,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiExpress,
  SiReact,
  SiAngular,
  SiFlask,
  SiFigma,
  SiMysql,
  SiGithub,
} from "react-icons/si";

const Home = () => {
  return (
    <>
      <Header />
      <div className='image-wrapper'>
        <div className='welcome-card'>
          <img
            src='https://images.unsplash.com/photo-1505238680356-667803448bb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
            alt='coding-laptop'></img>
          <img
            src='https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGNvZGluZ3xlbnwwfHwwfHx8MA%3D%3D'
            alt='coding-python'></img>
          <img
            src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29kaW5nfGVufDB8fDB8fHww'
            alt='coding-mac'></img>
        </div>
      </div>
      <div className='wrapper-header'>
        <h1>Technologies</h1>
      </div>
      <div className='wrapper'>
        <p>
          <SiPython /> Python
        </p>
        <p>
          <SiJavascript /> ES6/ES2020
        </p>
        <p>
          <SiTypescript /> TypeScript
        </p>
        <p>
          <SiNodedotjs /> Node.js
        </p>
        <p>
          <SiMongodb /> MongoDB
        </p>
        <p>
          <SiExpress /> Express.js
        </p>
        <p>
          <SiReact /> React
        </p>
        <p>
          <SiAngular /> Angular
        </p>
        <p>
          <SiFlask /> Flask
        </p>
        <p>
          <SiFigma /> Figma
        </p>
        <p>
          <SiMysql /> MySql
        </p>
        <p>
          <SiGithub /> Github
        </p>
      </div>
    </>
  );
};

export default Home;
