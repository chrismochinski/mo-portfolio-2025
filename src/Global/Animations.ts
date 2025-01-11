import { keyframes } from '@mantine/emotion';

export const slowSpin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const slowSpinReverse = keyframes`
    from {
        transform: rotate(360deg);
    }
    to {
        transform: rotate(0deg);
    }
    `;

export const carSway = keyframes`
  0% {
    transform: rotate(0deg);
    animation-timing-function: linear;
  }
  15% {
    transform: rotate(-8deg); /* Sway to the right */
    animation-timing-function: linear;
  }
  20% {
    transform: rotate(-9deg); /* Brief pause */
    animation-timing-function: ease-out;
    }
  25% {
    transform: rotate(-8deg); /* Brief pause */
    animation-timing-function: ease-in;
  }
  75% {
    transform: rotate(8deg); /* Sway to the left */
    animation-timing-function: linear;
  }
    80% {
        transform: rotate(9deg); /* Brief pause */
        animation-timing-function: ease-out;
    }
  85% {
    transform: rotate(8deg); /* Brief pause */
    animation-timing-function: ease-in;
  }
  100% {
    transform: rotate(0deg); /* Start returning to neutral */
    animation-timing-function: linear;
  }

`;


export const carSwayDamped = keyframes`
  0% {
    transform: rotate(0deg); /* Start at neutral */
    animation-timing-function: ease-out; /* snap accelerate out */
  }
8% {
    transform: rotate(-7deg); /* Sway left */
    animation-timing-function: ease-in-out; /* Gradually slow at the extreme */
  }
  28% {
    transform: rotate(6deg); /* Sway right */
    animation-timing-function: ease-in-out;
  }
  43% {
    transform: rotate(-5deg); /* Reduced sway left */
    animation-timing-function: ease-in-out;
  }
  58% {
    transform: rotate(4deg); /* Reduced sway right */
    animation-timing-function: ease-in-out;
  }
  73% {
    transform: rotate(-3deg); /* Minimal sway left */
    animation-timing-function: ease-in-out;
  }
  88% {
    transform: rotate(2deg); /* Minimal sway right */
    animation-timing-function: ease-in-out;
  }
  100% {
    transform: rotate(0deg); /* Stop at neutral */
    animation-timing-function: linear; /* Smoothly return to neutral */
  }
`;



export const carSubtleSwayDamped = keyframes`
  0% {
    transform: rotate(0deg); /* Start at neutral */
    animation-timing-function: ease-out; /* Accelerate out of neutral */
  }
  20% {
    transform: rotate(-6deg); /* Sway left */
    animation-timing-function: ease-in-out; /* Gradually slow at the extreme */
  }
  50% {
    transform: rotate(5deg); /* Sway right */
    animation-timing-function: ease-in-out; /* Smooth transition back */
  }
  80% {
    transform: rotate(-3deg); /* Reduced sway left */
    animation-timing-function: ease-in-out; /* Gradually slow again */
  }
  100% {
    transform: rotate(0deg); /* Return to neutral */
    animation-timing-function: linear; /* Smoothly return to neutral */
  }
`;








const generateSwayKeyframes = () => {
  let keyframes = '0% { transform: translate(0, 0); } '; // Start at (0, 0)

  for (let i = 5; i < 100; i += 5) {
    // Exclude 100% to ensure it returns to (0, 0)
    const x = Math.floor(Math.random() * 100 - 50); // Random between -50 and 50
    const y = Math.floor(Math.random() * 100 - 50); // Random between -50 and 50
    keyframes += `${i}% { transform: translate(${x}px, ${y}px); } `;
  }

  keyframes += '100% { transform: translate(0, 0); }'; // End at (0, 0)

  return keyframes;
};

export const moveAround = keyframes`${generateSwayKeyframes()}`;

// export const moveAround = keyframes`
//     0% {
//         transform: translate(0, 0);
//     }
//     5% {
//         transform: translate(20px, -18px);
//     }
//     10% {
//         transform: translate(-15px, 25px);
//     }
//     15% {
//         transform: translate(28px, 12px);
//     }
//     20% {
//         transform: translate(-30px, -20px);
//     }
//     25% {
//         transform: translate(18px, 30px);
//     }
//     30% {
//         transform: translate(-12px, -15px);
//     }
//     35% {
//         transform: translate(25px, -5px);
//     }
//     40% {
//         transform: translate(-28px, 18px);
//     }
//     45% {
//         transform: translate(10px, -22px);
//     }
//     50% {
//         transform: translate(-25px, 15px);
//     }
//     55% {
//         transform: translate(30px, -30px);
//     }
//     60% {
//         transform: translate(-20px, 28px);
//     }
//     65% {
//         transform: translate(15px, -25px);
//     }
//     70% {
//         transform: translate(-30px, 22px);
//     }
//     75% {
//         transform: translate(25px, -12px);
//     }
//     80% {
//         transform: translate(-18px, 30px);
//     }
//     85% {
//         transform: translate(12px, -20px);
//     }
//     90% {
//         transform: translate(-22px, 18px);
//     }
//     95% {
//         transform: translate(28px, -25px);
//     }
//     100% {
//         transform: translate(0, 0);
//     }
// `;
