import { useParams } from 'react-router-dom';
import teacher from '../../images/teaching.jpeg';
import engineer from '../../images/engeneering.jpg';
import cashier from '../../images/cahier.webp';
import programmer from '../../images/programming.webp';
import nurse from '../../images/Nurse.jpg';
import './career.scss';

const Career = () => {
  const {name} = useParams();
  return (
    <div className="career">
      <h2 className="careerTitle">Career {name}</h2>
      <div className="careerImage" 
        style={{backgroundImage: `url("${name === "Teacher" ? teacher : name === "Engineer" ? engineer : name === "Cashier" ? cashier : name === 'Nurse' ? nurse : programmer}")`}}></div>
      <div className="careerDescription">
        {
          name === "Teacher" ?
          <p>A teaching career is profoundly rewarding as educators inspire, guide, and shape the future of students. Teachers create a nurturing learning environment, impart knowledge, and cultivate critical thinking, problem-solving, and communication skills among their students. They play a pivotal role in fostering a love for learning, nurturing individual talents, and preparing the next generation for success in various fields, making a lasting impact on society.</p>
          :
          name === "Engineer" ?
          <p>Engineering involves the application of scientific, mathematical, and practical knowledge to design, create, build, and maintain structures, devices, systems, and processes that improve society. Engineers analyze problems, find innovative solutions, and ensure the efficient implementation of technology in various fields such as civil, mechanical, electrical, computer, and aerospace engineering, among others. Through the use of creativity and technical expertise, engineers contribute significantly to advancements in technology and the overall betterment of the world.</p>
          :
          name === "Cashier" ?
          <p>A cashier career involves efficiently handling financial transactions, processing payments, and providing excellent customer service in retail establishments, restaurants, or other businesses. Cashiers are responsible for accurately calculating totals, handling cash, credit cards, and electronic payments, and ensuring that customers have a smooth and pleasant checkout experience. Attention to detail, good communication skills, and the ability to work under pressure are essential qualities for a successful career in this field.</p>
          :
          name === "Programmer" ?
          <p>A programming career offers individuals the opportunity to design, develop, and maintain software applications, websites, and computer systems that power the digital world. Programmers write code, debug programs, and collaborate with multidisciplinary teams to create innovative solutions for various industries, including technology, healthcare, finance, and entertainment. With the constant evolution of technology, programming professionals play a crucial role in shaping the future by continuously learning new languages, frameworks, and tools to stay at the forefront of the ever-changing digital landscape.</p>
          :
          name === "Nurse" ?
          <p>A nursing career is both rewarding and demanding, requiring a unique combination of compassion, critical thinking, and medical expertise. Nurses play a pivotal role in healthcare, providing direct patient care, administering treatments, and serving as advocates for their patients. The profession offers diverse specializations, including pediatric nursing, critical care, and community health, allowing nurses to pursue areas that align with their passions and interests within the dynamic field of healthcare.
          
          
          
          
          
          </p>
          :
          ''
        }
      </div>
    </div>
  )
}

export default Career