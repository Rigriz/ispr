'use client'
import Link from "next/link";
import { useState } from 'react';
import Styles from "@/app/Styles/Navbar.module.css";
import Shtyles from "@/app/Styles/Navbar.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [about, setAbout] = useState(false);
  const [dept, setDept] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleAbout = () => {
    setAbout(!about);
    if (dept) { setDept(!dept); }
  }
  const toggleDept = () => {
    setDept(!dept);
    if (about) { setAbout(!about); }
  }
  const toggleAll = () => {
    if (about) { setAbout(!about); }
    if (dept) { setDept(!dept); }
    if (isOpen) { setIsOpen(!isOpen); }
  }
  return (
    <>
      <div className={Styles.header}>
        <div className={Styles.imagecontainer}>
          <img className={Styles.image} src="./needed/logo.png" alt="College logo" />
        </div>
        <div className={Styles.headerTitle}>
          <span className={Styles.headerBrand}>
            Indira Shiva Rao Polytechnic
          </span>
          <p className={Styles.headerDescription}>
            (A Unit of Sri Krishna Shikshana Prathisthana Trust Sri Krishnapura
            Mutt Udupi)
          </p>
        </div>
      </div>
      {isOpen ? ' ' : <button className={Styles.menuButton} onClick={toggleMenu}>
        <div className={Styles.bar}></div> <div className={Styles.bar}></div> <div className={Styles.bar}></div>
      </button>}
     {<nav className={`${Styles.nav} ${isOpen ? Styles.navOpen : ''}`}>
        {isOpen ? <button className={Styles.menuButton} onClick={toggleAll}>
          <div className={Styles.bar}></div> <div className={Styles.bar}></div> <div className={Styles.bar}></div>
        </button> : ''}
        <ul className={Styles.navul}>
          <li className={Styles.navLi}>
            <Link className={Styles.Link} href="/">
              <span className={Styles.a} onClick={toggleAll}>Home</span>
            </Link>
          </li>
          <li className={`${Styles.navLi}  ${Styles.dropdownBtn} ${about ? Styles.drop : ''}`}>
            <span className={Styles.a} onClick={toggleAbout}>About-Us &nbsp; &nbsp; &nbsp;{isOpen ? `${about ? '>' : 'V'}` : ''}</span>
            <ul className={`${Styles.dropContent} ${about ? Styles.dropOpen : Styles.dropClose}`}>
              <li >
                <Link className={Styles.Link} href="/about" >
                  <span className={`${Styles.dropa} ${Styles.a}`} onClick={toggleAll}>
                    Principel Desk
                  </span>
                </Link>
              </li>
              <li onClick={() => { toggleAbout, toggleMenu }}>
                <Link className={Styles.Link} href="/about/SriKrishnaTrust">
                  <span className={`${Styles.dropa} ${Styles.a}`} onClick={toggleAll}>
                    Sri-Krishna-Shikshana-Prathisthana-Trust
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${Styles.navLi}  ${Styles.dropdownBtn} ${dept ? Styles.drop : ''}`}>
            <span className={Styles.a} onClick={toggleDept}>Department&nbsp; &nbsp; &nbsp;{isOpen ? `${dept ? '>' : 'V'}` : ''}</span>
            <ul className={`${Styles.dropContent} ${dept ? Styles.dropOpen : Styles.dropClose}`}>
              <li onClick={() => { toggleDept, toggleMenu }}>
                <Link className={Styles.Link} href="/departments/Cse">
                  <span className={`${Styles.dropa} ${Styles.a}`} onClick={toggleAll}>
                    Computer Science Engineering
                  </span>
                </Link>
              </li>
              <li onClick={() => { toggleDept, toggleMenu }}>
                <Link className={Styles.Link} href="/departments/ec">
                  <span className={`${Styles.dropa} ${Styles.a}`} onClick={toggleAll}>
                    Electronics & Communication Engineering
                  </span>
                </Link>
              </li>
              <li onClick={() => { toggleDept, toggleMenu }}>
                <Link className={Styles.Link} href="/departments/mec">
                  <span className={`${Styles.dropa} ${Styles.a}`} onClick={toggleAll}>
                    Mechanical Engineering</span>
                </Link>
              </li>
              <li onClick={() => { toggleDept, toggleMenu }}>
                <Link className={Styles.Link} href="/departments/adft">
                  <span className={`${Styles.dropa} ${Styles.a}`}onClick={toggleAll}>
                    Apparel Design & Fabrication Technology
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={Styles.navLi}>
            <Link className={Styles.Link} href="/facilities">
              <span className={Styles.a} onClick={toggleAll}>Facilities</span>
            </Link>
          </li>
          <li className={Styles.navLi}>
            <Link className={Styles.Link} href="/Admission">
              <span className={Styles.a} onClick={toggleAll}>Admission</span>
            </Link>
          </li>
          <li className={Styles.navLi}>
            <Link className={Styles.Link} href="/Photo-Gallery">
              <span className={Styles.a} onClick={toggleAll}>Photo Gallery</span>
            </Link>
          </li>
          <li className={Styles.navLi}>
            <Link className={Styles.Link} href="/Contact-Us">
              <span className={Styles.a} onClick={toggleAll}>Contact-Us</span>
            </Link>
          </li>
        </ul>
      </nav > }
      {
        <nav className={Shtyles.navpc}>
        <ul className={Shtyles.navul}>
          <li className={Shtyles.navLi}>
            <Link href="/">
              <span className={Shtyles.a}>Home</span>
            </Link>
          </li>
          <li className={`${Shtyles.navLi}  ${Shtyles.dropdownBtn}`}>
            <Link href="/about">
              <span className={Shtyles.a}>About-Us</span>
            </Link>
            <ul className={Shtyles.dropContent}>
              <li>
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Principel Desk
                  </span>
              </li>
              <li>
                <Link href="/about/SriKrishnaTrust">
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Sri-Krishna-Shikshana-Prathisthana-Trust
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${Shtyles.navLi}  ${Shtyles.dropdownBtn}`}>
              <span className={Shtyles.a}>Department</span>
            <ul className={Shtyles.dropContent}>
              <li>
                <Link href="/departments/Cse">
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Computer Science Engineering
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/departments/ec">
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Electronics & Communication Engineering
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/departments/mec">
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Mechanical Engineering</span>
                </Link>
              </li>
              <li>
                <Link href="/departments/adft">
                  <span className={`${Shtyles.dropa} ${Shtyles.a}`}>
                    Apparel Design & Fabrication Technology
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="/facilities">
              <span className={Shtyles.a}>Facilities</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Admission">
              <span className={Shtyles.a}>Admission</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Photo-Gallery">
              <span className={Shtyles.a}>Photo Gallery</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Contact-Us">
              <span className={Shtyles.a}>Contact-Us</span>
            </Link>
          </li>
        </ul>
      </nav >
      }
    </>
  );
};
export default Navbar;
