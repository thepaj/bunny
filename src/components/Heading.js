import { Link } from "react-scroll";

function Heading() {
    return (
      <div>
        <div className="heading-container">
            <div className='title-container'>
            <h1 class="title">
              <span class="title-word title-word-1">Bunnies</span>
              <span class="title-word title-word-2">for</span>
              <span class="title-word title-word-3">dummies</span>
            </h1>
              <p className='secondary-title'>
                A comprehensive guide to taking care of rabbits
              </p>
              <div className='button-container'>
                {/* <button as={Link} to className='head-button'>Get started</button> */}
                <Link
                  activeClass="active"
                  to='1'
                  spy={false}
                  smooth={true}
                  offset={30}
                  duration={100}
                  className='head-button'
                >Get Started</Link>
              </div>
            </div>
          </div>
          <section id='1' className='scroll-section'>
              scroll
          </section>
      </div>
    );
  }
  
  export default Heading;