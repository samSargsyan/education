import './about.scss';
import sam from '../../images/sam.jpg';

const About = () => {
  return (
    <div className="about">
        <img src={sam} alt="sam" />
        <div>
            This website created by Samvel Sargsyan. Inside of the Home page are published my created games using <a className="scratch" target="_blank" href="https://scratch.mit.edu/">scratch</a> which you can play right now on the page!
            I have learned web programming frontend part using HTML, CSS, JavaScript and ReactJS. From the help of these programming languages, i was able to create a fun, enjoyable game page.
            I have learned to create many game programming on <a className="scratch" target="_blank" href="https://scratch.mit.edu/">scratch</a> and web programming on the classes I have took on the <a className="dasa2" target="_blank" href="https://www.dasa2.com/">DASA2</a> platform, with my teacher Armen Derikyan.
            We have added a category on our website, OTHER GAMES. This category takes you to other games made from different creators across the scratch community (full credits will be given).  

        </div>
    </div>
  )
}

export default About