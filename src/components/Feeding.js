import FeedingItem from "./FeedingItem";
import Hay from '../images/icons/hay.png';
import Greens from '../images/icons/greens.png';
import Food from '../images/icons/food.png';
import Banana from '../images/icons/banana.png';
import Water from '../images/icons/drop.png';

function Feeding() {
    return (
      <div className="feeding-container">
        <div className='subtitle-container'>
            <h2>Feeding</h2>
        </div>
        <div className='feeding-cards-container'>
            <FeedingItem icon={Hay} title='Hay' desc='Unlimited amount' />
            <FeedingItem icon={Greens} title='Greens' desc='Adult-sized handful of safe washed leafy green vegetables, herbs and weeds daily' />
            <FeedingItem icon={Food} title='Pellets' desc='One eighth of a cup for a small rabbit per day' />
            <FeedingItem icon={Banana} title='Treats' desc='About a tablespoon worth of unprocessed natural treats like f.e. banana, carrots or peas' />
            <FeedingItem icon={Water} title='Water' desc='Give you rabbit a bowl with fresh water' />
        </div>
      </div>
    );
  }
  
  export default Feeding;