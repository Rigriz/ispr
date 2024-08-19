'use client'
import Link from "next/link";
import Shtyles from "../Styles/Navbar.module.css";
function Navbar () {
  return (
    <>
      <div className={Shtyles.header}>
        <div className={Shtyles.imagecontainer}>
          <img className={Shtyles.image} src="./needed/logo.png" alt="College logo" />
        </div>
        <div className={Shtyles.headerTitle}>
          <span className={Shtyles.headerBrand}>
            Indira Shiva Rao Polytechnic
          </span>
          <p className={Shtyles.headerDescription}>
            (A Unit of Sri Krishna Shikshana Prathisthana Trust Sri Krishnapura
            Mutt Udupi)
          </p>
        </div>
      </div>
      <nav className={Shtyles.nav}>
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
                <Link href="/about">
                  <span className={Shtyles.a}>
                    Principel Desk
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/SriKrishnaTrust">
                  <span className={Shtyles.a}>
                    Sri-Krishna-Shikshana-Prathisthana-Trust
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={`${Shtyles.navLi}  ${Shtyles.dropdownBtn}`}>
            <Link href="./Pages/About-us">
              <span className={Shtyles.a}>Department</span>
            </Link>
            <ul className={Shtyles.dropContent}>
              <li>
                <Link href="./Pages/Computer-Science-Engineering">
                  <span className={Shtyles.a}>
                    Computer Science Engineering
                  </span>
                </Link>
              </li>
              <li>
                <Link href="./Pages/Electronics-Communication-Engineering">
                  <span className={Shtyles.a}>
                    Electronics & Communication Engineering
                  </span>
                </Link>
              </li>
              <li>
                <Link href="./Pages/Mechanical-Engineering">
                  <span className={Shtyles.a}>Mechanical Engineering</span>
                </Link>
              </li>
              <li>
                <Link href="./Pages/Apparel-Design-Fabrication-Technology">
                  <span className={Shtyles.a}>
                    Apparel Design & Fabrication Technology
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Pages/Facilities">
              <span className={Shtyles.a}>Facilities</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Pages/Admission">
              <span className={Shtyles.a}>Admission</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Pages/Photo-Gallery">
              <span className={Shtyles.a}>Photo Gallery</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href="./Pages/Contact-Us">
              <span className={Shtyles.a}>Contact-Us</span>
            </Link>
          </li>
        </ul>
      </nav >
    </>
  );
};
export default Navbar;
