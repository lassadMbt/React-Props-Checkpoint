import React from "react";
import { Card } from "react-bootstrap";


const Player = (props) => {
    const { name, team, nationality, jerseyNumber, age, imageUrl } = props;

    
  const imageStyle = {
    // Define your image styles here
    width: '200px',  // Adjust the width as needed
    height: '200px', // This maintains the aspect ratio
    //paddingLeft: '100px',
    paddingTop: '50px',
    

    
  }; 
    return(
        <Card  style={{ width: '100rem' }}>
      <Card.Img variant="top" src={imageUrl} style={imageStyle}  />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text >
          <strong>Team:</strong> {team}
        </Card.Text>
        <Card.Text>
          <strong>Nationality:</strong> {nationality}
        </Card.Text>
        <Card.Text>
          <strong>Jersey Number:</strong> {jerseyNumber}
        </Card.Text>
        <Card.Text>
          <strong>Age:</strong> {age}
        </Card.Text>
      </Card.Body>
    </Card>


    );





}



export default Player;