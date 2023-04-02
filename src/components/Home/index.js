// Write your code here

import ThemeContext from '../../context/ThemeContext'
import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const homeClassName = isDarkTheme
        ? 'home-container home-dark'
        : 'home-container home-light'

      const headingClassName = isDarkTheme ? 'heading dark' : 'heading light'

      return (
        <div className="home-page">
          <Navbar />
          <div className={homeClassName}>
            {isDarkTheme ? (
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
                alt="home"
              />
            ) : (
              <img
                className="home-img"
                src="https://assets.ccbp.in/frontend/react-js/home-light-img.png"
                alt="home"
              />
            )}
            <h1 className={headingClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
