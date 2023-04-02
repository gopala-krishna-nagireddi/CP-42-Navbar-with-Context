// Write your code here
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const tabClassName = isDarkTheme ? 'tab tab-dark' : 'tab tab-light'
      const navClassName = isDarkTheme
        ? 'nav-container nav-dark'
        : 'nav-container nav-light'

      const onClickToggleTheme = () => {
        toggleTheme()
      }

      return (
        <nav className={navClassName}>
          {isDarkTheme ? (
            <img
              className="website-logo dark"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
              alt="website logo"
            />
          ) : (
            <img
              className="website-logo light"
              src="https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png"
              alt="website logo"
            />
          )}
          <ul className="tabs-list">
            <Link className={tabClassName} to="/">
              <li className={tabClassName}>Home</li>
            </Link>
            <Link className={tabClassName} to="/about">
              <li>About</li>
            </Link>
          </ul>
          <button
            data-testid="theme"
            className="toggle-theme-btn"
            type="button"
            onClick={onClickToggleTheme}
          >
            {isDarkTheme ? (
              <img
                className="theme-img dark"
                src="https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
                alt="theme"
              />
            ) : (
              <img
                className="theme-img light"
                src="https://assets.ccbp.in/frontend/react-js/dark-theme-img.png"
                alt="theme"
              />
            )}
          </button>
        </nav>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
