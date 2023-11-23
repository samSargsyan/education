import { useParams } from 'react-router-dom';
import harvard from '../../images/HarvardUniversity.jpg';
import princeton from '../../images/princeton.jpg';
import stanford from '../../images/stanford.jpg';
import ucla from '../../images/UCLA.jpg';
import bentley from '../../images/BentleyUniversity.webp';
import './college.scss';

const College = () => {
  const {name} = useParams();
  return (
    <div className="college">
      <h2 className="collegeTitle">College {name}</h2>
      <div className="collegeImage"P
        style={{backgroundImage: `url("${name === "Harvard" ? harvard : name === "Princeton" ? princeton : name === "Stanford" ? stanford : name === 'UCLA' ? ucla : name === "Bentley" ? bentley : ''}")`}}></div>
      <div className="collegeDescription">
        {
          name === "Harvard" ?
          <p>Harvard College, established in 1636, is the undergraduate division of Harvard University, one of the world's most prestigious institutions. Located in Cambridge, Massachusetts, Harvard College offers a diverse range of academic programs and boasts a rich history of producing influential alumni, including numerous U.S. Presidents, Nobel laureates, and leaders in various fields. Known for its rigorous curriculum, emphasis on critical thinking, and vibrant campus life, Harvard College continues to be a beacon of academic excellence and intellectual achievement.</p>
          :
          name === "UCLA" ?
          <p>UCLA, the University of California, Los Angeles, offers extensive career resources and guidance through its UCLA Career Center, supporting students in their career development and job search. The university's diverse academic programs span fields such as film and television, business, engineering, healthcare, and the arts, providing students with a wide array of career options. UCLA's strong connections with industries in the vibrant Los Angeles area, coupled with alumni networks, facilitate valuable opportunities for internships, mentorship, and employment across various sectors.</p>
          :
          name === "Stanford" ?
          <p>Stanford University's Career Development Center is dedicated to assisting students in exploring and pursuing meaningful careers. With a strong focus on innovation and entrepreneurship, Stanford offers programs and resources that prepare students for careers in technology, business, healthcare, and more. The university's Silicon Valley location provides unique opportunities for students to engage with leading industries, startups, and influential professionals, fostering a dynamic environment for career growth and success.</p>
          :
          name === "Princeton" ?
          <p>Princeton University provides robust career services through its dedicated Office of Career Services (OCS), assisting students in exploring diverse career paths, networking, and securing employment opportunities. The university's strong emphasis on liberal arts education ensures a broad foundation for students, preparing them for careers in fields such as finance, technology, academia, and public service. Princeton's global alumni network and the Bridge Year Program, which offers international service experiences, contribute to the university's commitment to shaping well-rounded individuals ready to excel in a variety of professional domains.</p>
          :
          name === "Bentley" ?
          <p>Bentley University, located in Waltham, Massachusetts, is renowned for its emphasis on business education and innovative programs that prepare students for successful careers. With a strong focus on integrating technology and business, Bentley University offers a dynamic learning environment where students can explore a range of disciplines, from finance and accounting to information technology and entrepreneurship. The university's commitment to experiential learning, cutting-edge research, and a supportive community contributes to the holistic development of its students.</p>
          :
          ''
        }
      </div>
    </div>
  )
}

export default College;