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
