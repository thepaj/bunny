function Housing() {
    return (
      <div className="housing-container">
        <div className='subtitle-container'>
            <h2>Housing</h2>
        </div>
        <div className='housing-column-container'>
            <div className='housing-desc-container'>
                <p className='housing-desc'>
                    You have two options how to house you bunny; free roam or in a play pen. Free roam is always 
                    prefer, as it gives your rabbit not only more space to explore and excercise, but it also gives
                    them more chance to socialize with you and truly became a part of your family.
                </p>
            <div className='do-not-container'>
                <p className='do-not-text'>
                    Never put your rabbit in a cage!
                </p>
            </div>
            </div>
            <div className="housing-column">
                <div className='housing-column-heading'>
                    <h3>Free roam</h3>
                </div>
                <p className='housing-text'>
                    Free roaming is a best way to house you bunny. There are however a few things to consider and prepare 
                    before you let you bunny roam freely. Rabbits tend to chew a lot and get into spaces you may not consider possible,
                    and so you have to ensure the room or rooms are save for your rabbit. Make sure all cables and electrical
                    devices are not reachable to them and that there are no poisonous plants you bunny can eat. 
                    There are a lot of videos on the internet about how to bunny-proof your house and we recommend you watch them
                    to keep your bunny save and your house undamaged.
                </p>
            </div>
            <div className="housing-column">
                <div className='housing-column-heading'>
                    <h3>Play pen</h3>
                </div>
                <p className='housing-text'>
                    If you for some reason cannot let you bunny free roam, play pen is a solution for you. The size of
                    the pen should be at least 2x2 meters for one rabbit, but more is always better. The pen should have
                    at least one hidey house so your bunny can feel comfortable and save whenever he feels like it. 
                    It is important you let your bunny out at least once a day for some excercise, that has to happen in 
                    rabbit active hours, ideally early morning or late evening.
                </p>
            </div>
        </div>
      </div>
    );
  }
  
  export default Housing;