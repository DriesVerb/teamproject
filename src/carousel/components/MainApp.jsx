import React from "react";
import ImageSlider from "./ImageSlider";

import image1 from "../imgs/inthismoment.jpeg";
import image2 from "../imgs/christina.jpeg";
import image3 from "../imgs/greenday.jpeg";
import image4 from "../imgs/heroes.jpeg";
import image5 from "../imgs/beyonce.jpeg";
import image6 from "../imgs/katyperry.jpeg";
import image7 from "../imgs/madonna.jpeg";
import image8 from "../imgs/metallica.jpeg";
import image9 from "../imgs/dianaross.jpeg";
import image10 from "../imgs/nirvana.jpeg";
import image11 from "../imgs/thedoors.jpeg";
import image12 from "../imgs/boris.jpeg";
import image13 from "../imgs/kylie.jpeg";

const MainApp = () => {
  return (
    <div>
      <ImageSlider
        images={[
          image1,
          image2,
          image3,
          image4,
          image5,
          image6,
          image7,
          image8,
          image9,
          image10,
          image11,
          image12,
          image13,
        ]}
      >
        <h1>Creating a carousel</h1>
        <p>
          Yeux avec le et couleurs accroupi. Le comme sous nasses le, restais
          nasses les je océans glauques sapin les de.
        </p>
      </ImageSlider>
    </div>
  );
};

export default MainApp;
