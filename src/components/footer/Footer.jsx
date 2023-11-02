import { Link } from 'react-router-dom';
import './footer.scss';

const Footer = () => {

    const menu = [
        {
          title : 'Home',
          link: '/'
        },
        {
          title: 'Find a Job',
          link: '/job'
        },
        {
          title: 'Contact',
          link: '/contacts'
        },
        {
          title: 'About',
          link: '/about'
        }
      ]

    return(
        <div className='footer'>
            <div className="fooL">
                {menu.map((item)=>{
                    return(
                      <Link to={item.link}><span>{item.title}</span></Link>
                    )
                })
                }
            </div>
            <div className="fooC">
              <span>Write your notes here.</span>
              <textarea class="longInput" cols="20" rows="5"></textarea>
            </div>
            <div className="fooR">
              <span>Contact</span>
              <p>Click <Link to='/contacts'>here</Link> for more information</p>
            </div>

        </div>
    )
}

export default Footer;