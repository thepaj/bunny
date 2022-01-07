function StarterItem(props) {
    return (
        <div class="starter-card">
            <div class="starter-card-inner">
                <div class="starter-card-front">
                    <h3 className='starter-title'>{props.starterItem}</h3>
                </div>
                <div class="starter-card-back">
                    <p>{props.desc}</p>
                </div>
            </div>
        </div> 
    );
  }
  
export default StarterItem;