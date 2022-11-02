// import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <body>
      <header>
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
      <img id="hero" src="./techbrainAI.png" alt="ai-brain"/>
        <main class="content">
          <section id="about-me" class="content2">
            <img src="./android-selfie.jpg" alt="selfie looking up" class="float-left" />
            <h2>About Me</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur totam unde sit? Aspernatur eligendi
              facilis in cumque obcaecati necessitatibus. Natus saepe placeat sint sapiente facere labore laborum iste
              accusamus voluptatem!
            </p>
          </section>
          <section id="my-work" class="content2">

            <h2>My Work</h2>
            <p>
              <a href="https://github.com/sidmuratee?tab=repositories"><img src="./gitrip.png" alt="git-hub-cat"
                class="float-right" width="150" height="132" /></a>

              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi recusandae temporibus unde
              praesentium esse sunt totam. Distinctio quas, illo dolore, minima placeat aperiam, minus tempore
              quis odio assumenda reiciendis ea.
            </p>
          </section>
          <section id="my-resume" class="content2">
            <img src="./android-resumepic.jpg" alt="android-reboot" class="float-left" />
            <h2>My Resume</h2>

            <ul>
              <li>Project 1: https://fe011001.github.io/Doomed-Drinks/</li>
              <li>Project 2: https://stark-ridge-23340.herokuapp.com/</li>
            </ul>


          </section>
        </main>
        <aside id="contact-me" class="benefits">
          <section class="benefit">
            <h3>Contact Me</h3>
            <img src="./android-robot-work-image.jpg" alt="android-robot" />
            <p>
              E-Mail: loremipsum@dolor.com
            </p>
          </section>
        </aside>
        <footer>
          <h2>Made by 👽 Sid Muratee</h2>
          <p>
            &copy; 2022 SidSpaceSolutions.
          </p>
        </footer>
    </body>
  );
}

export default App;
