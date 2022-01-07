function FeedingItem(props) {
    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={props.icon} alt="feeding-item" className='feeding-icon'/>
                </div>
                <div class="flip-card-back">
                    <h3>{props.title}</h3>
                    <p>{props.desc}</p>
                </div>
            </div>
        </div> 
    );
  }
  
export default FeedingItem;