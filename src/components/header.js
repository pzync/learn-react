import React from 'react'
import Link from 'gatsby-link'
import './Header.css'

class Header extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      hasScrolled : false
    }
  }

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 50){
      this.setState ({ hasScrolled:true })
    } else {
      this.setState ({ hasScrolled:false })
    }     // the else is required otherwise the flag once set on scroll down will not reset. i.e. the state will not go back on scrolling up to initial position.
  }

  render(){
    return(
      <div className = { this.state.hasScrolled ? 'Header HeaderScrolled' : 'Header' }>
        <div className = "HeaderGroup">
          {/* <Link to="/"><img src="https://i.imgur.com/cPLGUTf.png" width="30" /></Link> */}
          <Link to="/"><img src={require('../images/site-logo.png')} width = "30" /></Link>
          <Link to="/courses">Courses</Link>
          <Link to="/downloads">Downloads</Link>
          <Link to="/workshops">Workshops</Link>
          <Link to="/buy"><button>Buy</button></Link>
        </div>
      </div>
    )
  }
}


export default Header
