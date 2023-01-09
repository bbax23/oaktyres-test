import React from "react";

function BeerCard(props) {

    const imageStyle = {
        width: '100%',
        height: '200px',
        objectFit: 'contain',
        borderRadius: '5px 5px 0 0',
    };
      
    const cardStyle = {
        borderRadius: '15px',
        borderColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        width: '25%',
        maxWidth: '150px'
    };
    
    return (
        <div className="card" style={cardStyle}>
            <h3 className="card-title">{props.name}</h3>
            <p className="card-tagline">{props.tagline}</p>
            <img src={props.imageUrl} alt={props.name} style={imageStyle} />
        </div>
    );
}
  
  export default BeerCard;