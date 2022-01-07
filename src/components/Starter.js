import StarterItem from "./StarterItem";

function Starter() {
    return (
      <div className="starter-container">
        <div className='subtitle-container'>
            <h2 className='starter-main-title'>Starter pack</h2>
            <p className="secondary-subtitle">
                What you need before you bring your bunny home
            </p>
        </div>
        <div className="starter-item-container">
            <StarterItem starterItem="Litter Box" desc='Medium, large, or giant litter pans'/>
            <StarterItem starterItem="Litter" desc='The best kind of litter to use for rabbits is a paper based, unscented litter'/>
            <StarterItem starterItem="Hay" desc='Unlimited amount of Timothy, orchard or brome hay'/>
            <StarterItem starterItem="Dry food" desc='Rabbit pellets and some dried rabbit save treats'/>
            <StarterItem starterItem="Greens" desc='Variety of greens daily, ideally 5-6 different types, such as kale, spinach, brocolli, dill, mint or parsley. Avoid iceberg lettuce!'/>
            <StarterItem starterItem="Transport box" desc='Choose a transport box that gives your rabbit enough space, but is not too big. A transport box must have sufficient ventilation and preferably not be too open'/>
            <StarterItem starterItem="Hidey house" desc='You can buy a hidey house or make one yourself from an old cardboard box. Make sure there are at least two entrances.'/>
            <StarterItem starterItem="Critical care" desc='Always have Critical care and a syringe on you for emergencies.'/>
            <StarterItem starterItem="Toys" desc='Make sure your bunny has toys to keep themselves entertained. You can buy them or make your own.'/>
        </div>
      </div>
    );
  }
  
export default Starter;