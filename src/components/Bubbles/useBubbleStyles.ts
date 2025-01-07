import { createStyles } from "@mantine/emotion";

export const useBubbleStyles = createStyles(() => ({

    bubbles: {
        width: 'max(40%, 400px)',
        height: '100vh',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 0, // revisit

    },
}));