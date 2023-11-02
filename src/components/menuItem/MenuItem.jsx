import { useEffect, useState } from 'react';
import './menuItem.scss'
import { Link } from 'react-router-dom';

const MenuItem = ({toggle,item}) =>  {
    const [isOpen, setIsOpen] = useState(false);
    
    return(
        <div className="menuItem">
                {toggle ? 
                    <>
                        <Link to={item.link}><li className='menuTitle' onClick={()=>setIsOpen(prev=>!prev)}>{item.title}</li></Link>
                        {isOpen && item.subMenu ? 
                        <ul className='dropdownMenu'>
                            {item.subMenu.map((sub)=>{
                                return (
                                    <li onClick={() => {}}>{sub}</li>
                                )
                            })}
                        </ul>
                        :
                        ''}
                    </>
                :
                ''
                }
        </div>
        
    )
}

export default MenuItem;

// state, props, parentic child props poxancum