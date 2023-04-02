// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const aboutClassName = isDarkTheme
        ? 'about-container about-dark'
        : 'about-container about-light'

      const headingClassName = isDarkTheme ? 'heading dark' : 'heading light'

      return (
        <div className="about-page">
          <Navbar />
          <div className={aboutClassName}>
            {isDarkTheme ? (
              <img
                className="about-img"
                src="https://assets.ccbp.in/frontend/react-js/about-dark-img.png"
                alt="about"
              />
            ) : (
              <img
                className="about-img"
                src="https://assets.ccbp.in/frontend/react-js/about-light-img.png"
                alt="about"
              />
            )}
            <h1 className={headingClassName}>About</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
