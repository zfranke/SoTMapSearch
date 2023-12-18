import React, { useState, useEffect } from 'react';
import { Container, Button, makeStyles } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    maxWidth: '100%',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2),
  },
}));

//Directory of all the image names
const imageNamesObject= {
    "1logo": "1logo.jpg",
    "Barnacle Cay": "Barnacle_Cay.jpg",
    "Black Sand Atoll": "Black_Sand_Atoll.jpg",
    "Black Water Enclave": "Black_Water_Enclave.jpg",
    "Blind_Mans_Lagoon": "Blind_Mans_Lagoon.jpg",
    "Booty Isle": "Booty_Isle.jpg",
    "Boulder Cay": "Boulder_Cay.jpg",
    "Cannon Cove": "Cannon_Cove.jpg",
    "Castaway Isle": "Castaway_Isle.jpg",
    "Chicken Isle": "Chicken_Isle.jpg",
    "Crooks Hollow": "Crooks_Hollow.jpg",
    "Cutlass Cay": "Cutlass_Cay.jpg",
    "Devils Ridge": "Devils_Ridge.jpg",
    "Discovery Ridge": "Discovery_Ridge.jpg",
    "Hidden Spring Keep": "Hidden_Spring_Keep.jpg",
    "Isle of Last Words": "Isle_of_Last_Words.jpg",
    "Keel Haul Fort": "Keel_Haul_Fort.jpg",
    "Kraken Watchtower": "Kraken_Watchtower.jpg",
    "Krakens Fall": "Krakens_Fall.jpg",
    "Lagoon of Whispers": "Lagoon_of_Whispers.jpg",
    "Liar's Backbone": "Liar_s_Backbone.jpg",
    "Lone Cove": "Lone_Cove.jpg",
    "Lookout Point": "Lookout_Point.jpg",
    "Lost Gold Fort": "Lost_Gold_Fort.jpg",
    "Marauders Arch": "Marauders_Arch.jpg",
    "Mermaids Hideaway": "Mermaids_Hideaway.jpg",
    "Mutineer Rock": "Mutineer_Rock.jpg",
    "Old Boot Fort": "Old_Boot_Fort.jpg",
    "Old Faithful Isle": "Old_Faithful_Isle.jpg",
    "Old Salts Atoll": "Old_Salts_Atoll.jpg",
    "Paradise Spring": "Paradise_Spring.jpg",
    "Plunder Valley": "Plunder_Valley.jpg",
    "Plunderers Plight": "Plunderers_Plight.jpg",
    "Rapier Cay": "Rapier_Cay.jpg",
    "Rum Runner Isle": "Rum_Runner_Isle.jpg",
    "Sailors Bounty": "Sailors_Bounty.jpg",
    "Sailors Knot Stronghold": "Sailors_Knot_Stronghold.jpg",
    "Salty Sands": "Salty_Sands.jpg",
    "Sandy Shallows": "Sandy_Shallows.jpg",
    "Sea Dogs Rest": "Sea_Dogs_Rest.jpg",
    "Shark Bait Cove": "Shark_Bait_Cove.jpg",
    "Shark Fin Camp": "Shark_Fin_Camp.jpg",
    "Shark Tooth Key": "Shark_Tooth_Key.jpg",
    "Shipwreck Bay": "Shipwreck_Bay.jpg",
    "Shiver Retreat": "Shiver_Retreat.jpg",
    "Skull Keep": "Skull_Keep.jpg",
    "Snake Island": "Snake_Island.jpg",
    "Scurvy Isley": "Scurvy_Isley.jpg",
    "Smugglers Bay": "Smugglers_Bay.jpg",
    "The Crooked Masts": "The_Crooked_Masts.jpg",
    "The Crows Nest Fortress": "The_Crows_Nest_Fortress.jpg",
    "The Sunen Grove": "The_Sunen_Grove.jpg",
    "Thieves Haven": "Thieves_Haven.jpg",
    "Tri Rock Isle": "Tri_Rock_Isle.jpg",
    "Twin Groves": "Twin_Groves.jpg",
    "Wanderers Refuge": "Wanderers_Refuge.jpg"
}

 function ImageSlider() {
  const classes = useStyles();
  const totalImages = Object.keys(imageNamesObject).length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = (direction) => {
    if (direction === 'next') {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    } else if (direction === 'prev') {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      navigate('next');
    } else if (e.key === 'ArrowLeft') {
      navigate('prev');
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const currentImageName = Object.keys(imageNamesObject)[currentIndex];
  const currentImageFileName = imageNamesObject[currentImageName];

  return (
    <Container className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src={`${process.env.PUBLIC_URL}/maps/${currentImageFileName}`}
          alt={currentImageName}
          className={classes.image}
        />
      </div>
      <div className={classes.buttonContainer}>
        <Button onClick={() => navigate('prev')}>&#8592; Previous</Button>
        <Button onClick={() => navigate('next')}>Next &#8594;</Button>
      </div>
    </Container>
  );
}

export default ImageSlider;