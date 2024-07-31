import Link from 'next/link'
import Shtyles from "../Styles/Navbar.module.css";

const Navbar = () => {
  return (<>
      <div className={Shtyles.header}>
        <div className={Shtyles.imagecontainer}>
          <img className={Shtyles.image} src="./logo.png" alt="College logo" />
        </div>
        <div className={Shtyles.headerTitle}>
            <span className={Shtyles.headerBrand}>Indira Shiva Rao Polytechnic</span>
          <p className={Shtyles.headerDescription}>(A Unit of Sri Krishna Shikshana Prathisthana Trust Sri Krishnapura Mutt Udupi)</p>
        </div>
      </div>
      <nav className={Shtyles.nav}>
        <ul className={Shtyles.navul}>
          <li className={Shtyles.navLi}>
          <Link href='./Home'>
              <span className={Shtyles.a}>Home</span>
            </Link>
          </li>
          <li className={`${Shtyles.navLi}  ${Shtyles.dropdownBtn}`} >
            <Link href='./Home'>
              <span className={Shtyles.a}>About-us</span>
            </Link>
            <ul className={Shtyles.dropContent}>
              <li>
                <Link href='/Home'>
                  <span className={Shtyles.a}>History</span>
                </Link>
              </li>
              <li>
                <Link href='/Home'>
                  <span className={Shtyles.a}>Mission</span>
                </Link>
              </li>
              <li>
                <Link href='/Home'>
                  <span className={Shtyles.a}>Team</span>
                </Link>
              </li>
              <li>
                <Link href='/Home'>
                  <span className={Shtyles.a}>Team</span>
                </Link>
              </li>
            </ul>
          </li>
          <li className={Shtyles.navLi}>
            <Link href='Home'>
              <span className={Shtyles.a}>Departments</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href='./Facilities.html'>
              <span className={Shtyles.a}>Facilities</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href='./Admission.html'>
              <span className={Shtyles.a}>Admission</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href='./Photo-Gallery.html'>
              <span className={Shtyles.a}>Photo Gallery</span>
            </Link>
          </li>
          <li className={Shtyles.navLi}>
            <Link href='./'>
              <span className={Shtyles.a}>Contact-us</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>)
     }
export default Navbar;