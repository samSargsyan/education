import { useEffect, useState } from "react";
import "./menuItem.scss";
import { Link } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";

const MenuItem = ({ toggle, item, setToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menuItem">
      {toggle ? (
        <>
          <Link to={item.link}>
            <li
              className="menuTitle"
              onClick={() => {
                setIsOpen((prev) => !prev);
                if(item?.subMenu === undefined){
                  window.innerWidth<=700 && setToggle(false);
                }
              }}
            >
              {item.title}
            </li>
          </Link>
          {isOpen && item.subMenu ? (
            <OutsideClickHandler
              onOutsideClick={() => {
                setIsOpen(false);
              }}
            >
              <ul className="dropdownMenu">
                {item.subMenu.map((sub, i) => {
                  return (
                    <Link
                      to={`/${item.title}/${sub}`}
                      key={i + Math.random() * i}
                    >
                      <li
                        onClick={() => {
                          setIsOpen(false);
                          window.innerWidth<=700 && setToggle(false);
                        }}
                      >
                        {sub}
                      </li>
                    </Link>
                  );
                })}
              </ul>
            </OutsideClickHandler>
          ) : (
            ""
          )}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MenuItem;

// state, props, parentic child props poxancum
