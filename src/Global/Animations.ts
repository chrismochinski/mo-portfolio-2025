import { keyframes } from '@mantine/core';

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
    transform: rotate(-9deg); /* Sway left */
    animation-timing-function: ease-in-out; /* Gradually slow at the extreme */
  }
  28% {
    transform: rotate(7deg); /* Sway right */
    animation-timing-function: ease-in-out;
  }
  43% {
    transform: rotate(-4deg); /* Reduced sway left */
    animation-timing-function: ease-in-out;
  }
  58% {
    transform: rotate(3deg); /* Reduced sway right */
    animation-timing-function: ease-in-out;
  }
  73% {
    transform: rotate(-2deg); /* Minimal sway left */
    animation-timing-function: ease-in-out;
  }
  88% {
    transform: rotate(1deg); /* Minimal sway right */
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
  15% {
    transform: rotate(-5deg); /* Sway left */
    animation-timing-function: ease-in-out; /* Gradually slow at the extreme */
  }
  50% {
    transform: rotate(3deg); /* Sway right */
    animation-timing-function: ease-in-out; /* Smooth transition back */
  }
  80% {
    transform: rotate(-1deg); /* Reduced sway left */
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

// ------------------------ //
// ------------------------ //

export const enterLetterN = keyframes`
  0% {
    transform: translate(0px, 0px);
    transition-timing-function: ease-in;
  }
  25% {
    transform: translate(-6px, -18px) rotate(90deg);
    transition-timing-function: linear;
  }
  50% {
    transform: translate(-18px, -27px) rotate(180deg);
    transition-timing-function: linear;
  }
  75% {
    transform: translate(-30px, -18px) rotate(270deg);
    transition-timing-function: linear;
  }
  100% {
    transform: translate(-36px, 0) rotate(360deg);
    transition-timing-function: ease-out;
  }
`;

// reverse of above
export const exitLetterN = keyframes`
  0% {
    transform: translate(-36px, 0) rotate(360deg);
    transition-timing-function: ease-in;
  }
  25% {
    transform: translate(-30px, -18px) rotate(270deg);
    transition-timing-function: linear;
  }
  50% {
    transform: translate(-18px, -27px) rotate(180deg);
    transition-timing-function: linear;
  }
  75% {
    transform: translate(-6px, -18px) rotate(90deg);
    transition-timing-function: linear;
  }
  100% {
    transform: translate(0px, 0px);
    transition-timing-function: ease-out;
  }
`;


