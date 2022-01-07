import { animateScroll as scroll } from "react-scroll";
import Arrow from '../images/icons/arrow-up.png'

function Care() {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

    return (
      <div className="care-container">
        <div className='subtitle-container'>
            <h2>Care</h2>
        </div>
        <div className='care-content-container'>
            <div className='care-section'>
              <h3>Socializing</h3>
              <p>
                Rabbits are social animals. The best thing you can do for them is to get his at least one more rabbit.
                If you are however unable to do so, make sure you yourself are spending a lot of time with them.
                If your bunny gets to lonely it can lead to depression and even death.
              </p>
            </div>
            <div className='care-section'>
              <h3>Grooming</h3>
              <p>
                Gently brush your bunny ideally once a week with a pet brush.
              </p>
              <p>
              Clip your bunnies nails ideally every few months. If you are unable to do so yourself, as you vet to do it for you.
              </p>
            </div>
            <div className='care-section'>
              <h3>Veterinarian Care</h3>
              <p>
                We recommend taking your rabbit for at least early check up at you vet. Rabbits have a tendency to hide illness,
                so it's better to make sure they are healthy. 
              </p>
              <p>
                Always keep a kit of Critical care and a syringe in case of emergency. 
              </p>
            </div>
        </div>
        <div className='scroll-btn-container'>
          <img src={Arrow} alt='arrow' className='scroll-btn' onClick={scrollToTop} />
        </div>
      </div>
    );
  }
  
export default Care; 

