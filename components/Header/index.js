import Link from "next/link";
import styled from "styled-components";
import { useState } from "react";

const StyledHeader = styled.header`
  background: #fff;
  height: 70px;
  color: #4d4d4d;
  border-bottom: solid 1px #dfdfdf;
  text-transform: uppercase;

  .header-content {
    height: 70px;
    max-width: 1680px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    position: relative;
  }

  .header-content .logo {
    font-size: 20px;
    font-weight: 700;
    padding: 0 10px;
  }

  .header-content .nav nav ul {
    display: flex;
    list-style: none;
    font-size: 16px;
    font-weight: 300;
  }

  .header-content .nav nav ul li a {
    height: 70px;
    line-height: 70px;
    padding: 25px 25px 25px 20px;
    text-decoration: none;
    &:hover {
      background: #f7f7f7;
    }
  }

  .mobile-menu {
    position: absolute;
    z-index: 999;
    width: 100%;
    top: 70px;
    left: 0;
    nav {
      padding-bottom: 80px;
      ul {
        li {
          list-style: none;
          a {
            background: #fff;
            display: block;
            padding: 10px 15px;
            border-bottom: 1px solid #eee;
            color: #222;
            font-size: 18px;
            position: relative;
            text-decoration: none;
            &:hover {
              background: #f7f7f7;
            }
          }
        }
      }
    }
  }

  .small-menu-icon {
    cursor: pointer;
  }

  @media (max-width: 900px) {
    .mobile-menu {
      display: block;
    }
    .nav {
      display: none;
    }
    .small-menu-icon {
      display: block;
    }
  }

  @media (min-width: 901px) {
    .mobile-menu {
      display: none;
    }
    .nav {
      display: block;
    }
    .small-menu-icon {
      display: none;
    }
  }
`;

const Header = ({}) => {
  const menuItems = [
    "Home",
    "About",
    "Design",
    "Art",
    "Music",
    "Development",
    "Portfolio",
    "Contact",
  ];
  const [mobileMenuIsActive, setMobileMenuIsActive] = useState(false);

  const toggleSmallMenu = () => {
    const newState = !mobileMenuIsActive;
    setMobileMenuIsActive(newState);
  };

  return (
    <StyledHeader className="header">
      <div className="header-content">
        <div className="logo">
          <Link href="/">MattJ</Link>
        </div>
        <div className="small-menu-icon" onClick={toggleSmallMenu}>
          <div className="toggle-menu">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24px"
              height="24px"
              viewBox="0 0 512 512"
            >
              <path
                id="toggle-menu-svg"
                d="M462,163.5H50v-65h412V163.5z M462,223.5H50v65h412V223.5z M462,348.5H50v65h412V348.5z"
              ></path>
            </svg>
          </div>
        </div>
        {mobileMenuIsActive ? (
          <div className="mobile-menu">
            <nav>
              <ul>
                {menuItems.map((x) => {
                  const lowerCaseMenuItem = x.toLowerCase();
                  return (
                    <li key={x}>
                      <Link href={`/${lowerCaseMenuItem}`}>{x}</Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        ) : null}
        <div className="nav">
          <nav>
            <ul>
              {menuItems.map((x) => {
                const menuItemLink = x.toLowerCase();
                if (x === "Home") {
                  return (
                    <li key={x}>
                      <Link href={`/`}>{x}</Link>
                    </li>
                  );
                } else {
                  return (
                    <li key={x}>
                      <Link href={`/${menuItemLink}`}>{x}</Link>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>
        </div>
      </div>
    </StyledHeader>
  );
};

export default Header;
