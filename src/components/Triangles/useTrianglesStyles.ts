import { createStyles } from '@mantine/emotion';

export const useTrianglesStyles = createStyles(() => ({

    trianglesSvg: {
        position: 'absolute',
        height: '100vh',
        width: '1200px',
        minHeight: '100vh',
        left: '-320px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: -1,
    },
}));