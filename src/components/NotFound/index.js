// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundClassName = isDarkTheme
        ? 'not-found-container not-found-dark'
        : 'not-found-container not-found-light'

      const headingClassName = isDarkTheme
        ? 'not-found-heading dark'
        : 'not-found-heading light'

      const noteClassName = isDarkTheme
        ? 'not-found-note dark'
        : 'not-found-note light'

      return (
        <div className="not-found-page">
          <Navbar />
          <div className={notFoundClassName}>
            <img
              className="not-found-img"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={headingClassName}>Lost Your Way?</h1>
            <p className={noteClassName}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
