import { keyframes } from "@mantine/emotion";

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

const generateSwayKeyframes = () => {
  let keyframes = "0% { transform: translate(0, 0); } "; // Start at (0, 0)

  for (let i = 5; i < 100; i += 5) {
    // Exclude 100% to ensure it returns to (0, 0)
    const x = Math.floor(Math.random() * 100 - 50); // Random between -50 and 50
    const y = Math.floor(Math.random() * 100 - 50); // Random between -50 and 50
    keyframes += `${i}% { transform: translate(${x}px, ${y}px); } `;
  }

  keyframes += "100% { transform: translate(0, 0); }"; // End at (0, 0)

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
