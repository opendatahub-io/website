import React from 'react'
import Particles from 'react-particles-js'; 

const ParticleScript = () => {
return(
    
<Particles
    width="100%"
    height="30%"
    style={{
        position: "absolute",
        top: 0,
        background: `#000000`,
        zIndex: '-1'
    }}
    params={{
	    particles: {
            color: {
              value: "#FFFFFF"
            },
            line_linked: {
              color: {
                value: "#FFFFFF"
              }
            },
            number: {
              value: 200
            },
            size: {
              value: 3
            }
          },
	    "interactivity": {
            "detect_on": "window",
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
    )


}

export default ParticleScript