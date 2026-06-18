import React from 'react';

export const Exchange = ({ width = '77', height = '86', color = 'currentColor' }) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 77 86"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.01359 28.5325C11.6187 22.7731 15.8713 17.9143 21.2347 14.569C26.5982 11.2237 32.8323 9.54189 39.1505 9.73565C45.4687 9.92941 51.588 11.9901 56.7364 15.6577C61.8848 19.3254 65.8316 24.4356 68.079 30.3438"
                stroke={color}
                strokeWidth="5"
            />
            <path
                d="M67.9026 56.0953C65.3845 61.8933 61.2057 66.8157 55.8932 70.2414C50.5808 73.6671 44.3727 75.4426 38.0523 75.3441C31.7319 75.2455 25.5822 73.2773 20.3792 69.6876C15.1761 66.0979 11.1527 61.0477 8.81665 55.174"
                stroke={color}
                strokeWidth="5"
            />
            <path d="M57 28.0146H77L67 42.0146L57 28.0146Z" fill={color} />
            <path d="M20 58.0146H0L10 44.0146L20 58.0146Z" fill={color} />
            <path
                d="M46 33.5146C46 23.0146 31 23.0146 31 33.5146C31 41.0146 46 45.5146 46 53.0146C46 63.5146 31 63.5146 31 53.0146"
                stroke={color}
                strokeWidth="4"
            />
            <path d="M39 18.0146V68.0146" stroke={color} strokeWidth="4" />
        </svg>
    );
};
