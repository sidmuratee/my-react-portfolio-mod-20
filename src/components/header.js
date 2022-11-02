
let styles = {
    header: {
        padding: 20,
        justifyContent: 'spaceBetween',
        fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
        backgroundColor: 'black',
        color: 'rgba(127, 221, 255, 0.945)',
        display: 'flex',
    }
}

function Header() {
    return (
      
        <header style= {styles.header}>
          <h1>Sid's Portfolio</h1>
          <nav class="navig">
            <ul>
              <li>
                <a href="#about-me">About Me</a>
              </li>
              <li>
                <a href="#my-work">My Work</a>
              </li>
              <li>
                <a href="#contact-me">Contact Me</a>
              </li>
              <li>
                <a href="#my-resume"> My Resume</a>
  
              </li>
            </ul>
          </nav>
        </header>
        // <img idName="hero" src="./techbrainAI.png" alt="ai-brain"/>
        )
    };

    export default Header;