import './header.scss';
import Logo from "../../images/logo.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import OutsideClickHandler from 'react-outside-click-handler';
import MenuItem from '../menuItem/MenuItem';

const Header = () => {

  const [toggle, setToggle] = useState(window.innerWidth>700);
  const dispatch = useDispatch();

  const menuToggle = () => {
    setToggle(prev=>!prev);
  }

  // useEffect(()=>{
  //     // dispatch(getFilms({type:value, page: 1}));
  // },[value])

  const menu1 = [
    {
      title : 'Home'
    },
    {
      title: 'Careers',
      subMenu: ['Engineer','Programmer','Teacher']
    },
    {
      title: 'Colleges',
      subMenu: ['jhvjh','jbkj','gh']

    }
  ]
  const menu2 = [
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
      <OutsideClickHandler onOutsideClick={() =>{window.innerWidth<=700 && setToggle(false)}}>
      <section className="top-nav header">
        <input id="menu-toggle" type="checkbox" checked={toggle} onClick={menuToggle} />
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
        <div className="menu-box">
          <ul className="menu">
            {toggle && menu1.map((item,i)=>{
              return(
                <MenuItem key={i + Math.random() * i} toggle={true} item={item} />
              )
            })}
            <Link to='/'><img src={Logo} alt="Logo" id='logo-big' /></Link>
            {toggle && menu2.map((item,i)=>{
              return(
                <MenuItem key={i + Math.random() * i} toggle={toggle} item={item}/>
              )
            })}
          </ul>
          <Link to='/'><img src={Logo} alt="Logo" id='logo-small' /></Link>
        </div>
      </section>
      </OutsideClickHandler>
  )

}


export default Header;