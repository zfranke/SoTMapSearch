import React, { useState, useEffect } from 'react';
import { Container, Button } from '@mui/material';

//Directory of all the image names
import Logo from '../maps/1Logo.jpg';
import Barnacle_Cay from '../maps/Barnacle_Cay.jpg';
import Black_Sand_Atoll from '../maps/Black_Sand_Atoll.jpg';
import Black_Water_Enclave from '../maps/Black_Water_Enclave.jpg';
import Blind_Mans_Lagoon from '../maps/Blind_Mans_Lagoon.jpg';
import Booty_Isle from '../maps/Booty_Isle.jpg';
import Boulder_Cay from '../maps/Boulder_Cay.jpg';
import Cannon_Cove from '../maps/Cannon_Cove.jpg';
import Castaway_Isle from '../maps/Castaway_Isle.jpg';
import Chicken_Isle from '../maps/Chicken_Isle.jpg';
import Crooks_Hollow from '../maps/Crooks_Hollow.jpg';
import Cutlass_Cay from '../maps/Cutlass_Cay.jpg';
import Devils_Ridge from '../maps/Devils_Ridge.jpg';
import Discovery_Ridge from '../maps/Discovery_Ridge.jpg';
import Hidden_Spring_Keep from '../maps/Hidden_Spring_Keep.jpg';
import Isle_of_Last_Words from '../maps/Isle_of_Last_Words.jpg';
import Keel_Haul_Fort from '../maps/Keel_Haul_Fort.jpg';
import Kraken_Watchtower from '../maps/Kraken_Watchtower.jpg';
import Krakens_Fall from '../maps/Krakens_Fall.jpg';
import Lagoon_of_Whispers from '../maps/Lagoon_of_Whispers.jpg';
import Liar_s_Backbone from '../maps/Liar_s_Backbone.jpg';
import Lone_Cove from '../maps/Lone_Cove.jpg';
import Lookout_Point from '../maps/Lookout_Point.jpg';
import Lost_Gold_Fort from '../maps/Lost_Gold_Fort.jpg';
import Marauders_Arch from '../maps/Marauders_Arch.jpg';
import Mermaids_Hideaway from '../maps/Mermaids_Hideaway.jpg';
import Mutineer_Rock from '../maps/Mutineer_Rock.jpg';
import Old_Boot_Fort from '../maps/Old_Boot_Fort.jpg';
import Old_Faithful_Isle from '../maps/Old_Faithful_Isle.jpg';
import Old_Salts_Atoll from '../maps/Old_Salts_Atoll.jpg';
import Paradise_Spring from '../maps/Paradise_Spring.jpg';
import Plunder_Valley from '../maps/Plunder_Valley.jpg';
import Plunderers_Plight from '../maps/Plunderers_Plight.jpg';
import Rapier_Cay from '../maps/Rapier_Cay.jpg';
import Rum_Runner_Isle from '../maps/Rum_Runner_Isle.jpg';
import Sailors_Bounty from '../maps/Sailors_Bounty.jpg';
import Sailors_Knot_Stronghold from '../maps/Sailors_Knot_Stronghold.jpg';
import Salty_Sands from '../maps/Salty_Sands.jpg';
import Sandy_Shallows from '../maps/Sandy_Shallows.jpg';
import Sea_Dogs_Rest from '../maps/Sea_Dogs_Rest.jpg';
import Shark_Bait_Cove from '../maps/Shark_Bait_Cove.jpg';
import Shark_Fin_Camp from '../maps/Shark_Fin_Camp.jpg';
import Shark_Tooth_Key from '../maps/Shark_Tooth_Key.jpg';
import Shipwreck_Bay from '../maps/Shipwreck_Bay.jpg';
import Shiver_Retreat from '../maps/Shiver_Retreat.jpg';
import Skull_Keep from '../maps/Skull_Keep.jpg';
import Snake_Island from '../maps/Snake_Island.jpg';
import Scurvy_Isley from '../maps/Scurvy_Isley.jpg';
import Smugglers_Bay from '../maps/Smugglers_Bay.jpg';
import The_Crooked_Masts from '../maps/The_Crooked_Masts.jpg';
import The_Crows_Nest_Fortress from '../maps/The_Crows_Nest_Fortress.jpg';
import The_Sunen_Grove from '../maps/The_Sunen_Grove.jpg';
import Thieves_Haven from '../maps/Thieves_Haven.jpg';
import Tri_Rock_Isle from '../maps/Tri_Rock_Isle.jpg';
import Twin_Groves from '../maps/Twin_Groves.jpg';
import Wanderers_Refuge from '../maps/Wanderers_Refuge.jpg';

function ImageSlider() {
  const images = [
    Logo,
    Barnacle_Cay,
    Black_Sand_Atoll,
    Black_Water_Enclave,
    Blind_Mans_Lagoon,
    Booty_Isle,
    Boulder_Cay,
    Cannon_Cove,
    Castaway_Isle,
    Chicken_Isle,
    Crooks_Hollow,
    Cutlass_Cay,
    Devils_Ridge,
    Discovery_Ridge,
    Hidden_Spring_Keep,
    Isle_of_Last_Words,
    Keel_Haul_Fort,
    Kraken_Watchtower,
    Krakens_Fall,
    Lagoon_of_Whispers,
    Liar_s_Backbone,
    Lone_Cove,
    Lookout_Point,
    Lost_Gold_Fort,
    Marauders_Arch,
    Mermaids_Hideaway,
    Mutineer_Rock,
    Old_Boot_Fort,
    Old_Faithful_Isle,
    Old_Salts_Atoll,
    Paradise_Spring,
    Plunder_Valley,
    Plunderers_Plight,
    Rapier_Cay,
    Rum_Runner_Isle,
    Sailors_Bounty,
    Sailors_Knot_Stronghold,
    Salty_Sands,
    Sandy_Shallows,
    Sea_Dogs_Rest,
    Shark_Bait_Cove,
    Shark_Fin_Camp,
    Shark_Tooth_Key,
    Shipwreck_Bay,
    Shiver_Retreat,
    Skull_Keep,
    Snake_Island,
    Scurvy_Isley,
    Smugglers_Bay,
    The_Crooked_Masts,
    The_Crows_Nest_Fortress,
    The_Sunen_Grove,
    Thieves_Haven,
    Tri_Rock_Isle,
    Twin_Groves,
    Wanderers_Refuge,
  ];
  const totalImages = images.length;
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

  const currentImage = images[currentIndex];

  return (
    <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ maxWidth: '100%' }}>
        <img
          src={currentImage}
          alt={`Image ${currentIndex}`}
          //Set style for height and width of image to be 860px by 860px
            style={{ height: '860px', width: '860px' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '16px' }}>
        <Button onClick={() => navigate('prev')}>&#8592; Previous</Button>
        <Button onClick={() => navigate('next')}>Next &#8594;</Button>
      </div>
    </Container>
  );
}

export default ImageSlider;