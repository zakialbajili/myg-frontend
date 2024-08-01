import React from 'react';

interface IconProps {
    size?: number;
    fill?: string;
    width?: number;
    height?: number;
}

export const SearchIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
    >
        <path
            d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
        <path
            d="M22 22L20 20"
            stroke={fill}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
        />
    </svg>
);

export const BellIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height={height || size}
        role="presentation"
        viewBox="0 0 24 24"
        width={width || size}
        {...props}
    >
        <path
            d="M12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22ZM18 16V11C18 7.93 16.37 5.36 13.5 4.68V4C13.5 3.17 12.83 2.5 12 2.5C11.17 2.5 10.5 3.17 10.5 4V4.68C7.64 5.36 6 7.92 6 11V16L4 18V19H20V18L18 16ZM16 17H8V11C8 8.52 9.51 6.5 12 6.5C14.49 6.5 16 8.52 16 11V17Z"
            fill={fill}
        />
    </svg>
);

export const YoutubeIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg width= {width || size} 
    height={height || size}
    viewBox="0 0 41 29" 
    focusable="false"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
<path d="M16.5 20.9482L26.88 14.9482L16.5 8.94824V20.9482ZM39.62 5.28824C39.88 6.22824 40.06 7.48824 40.18 9.08824C40.32 10.6882 40.38 12.0682 40.38 13.2682L40.5 14.9482C40.5 19.3282 40.18 22.5482 39.62 24.6082C39.12 26.4082 37.96 27.5682 36.16 28.0682C35.22 28.3282 33.5 28.5082 30.86 28.6282C28.26 28.7682 25.88 28.8282 23.68 28.8282L20.5 28.9482C12.12 28.9482 6.9 28.6282 4.84 28.0682C3.04 27.5682 1.88 26.4082 1.38 24.6082C1.12 23.6682 0.94 22.4082 0.82 20.8082C0.68 19.2082 0.62 17.8282 0.62 16.6282L0.5 14.9482C0.5 10.5682 0.82 7.34824 1.38 5.28824C1.88 3.48824 3.04 2.32824 4.84 1.82824C5.78 1.56824 7.5 1.38824 10.14 1.26824C12.74 1.12824 15.12 1.06824 17.32 1.06824L20.5 0.948242C28.88 0.948242 34.1 1.26824 36.16 1.82824C37.96 2.32824 39.12 3.48824 39.62 5.28824Z" fill="#F24E1E"/>
</svg>
);

export const InstagramIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg width= {width || size} 
    height={height || size}
    viewBox="-9 -3 41 29" 
    focusable="false"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
    <path fillRule="evenodd" clipRule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#0F0F0F"/>
    <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#0F0F0F"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#0F0F0F"/>
    </svg>
);

export const AddCommentIcon: React.FC<IconProps> = ({ size = 24, fill = "currentColor", width, height, ...props }) => (
    <svg width= {width || size} 
    height={height || size}
    viewBox="-5 0 41 29" 
    focusable="false"
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    >
<path d="M16.8335 7.44816H26.1668M21.5002 2.78149V12.1148M7.61566 23.1982C6.09977 23.0488 4.9615 22.593 4.20083 21.8308C2.8335 20.4647 2.8335 18.2643 2.8335 13.8648V13.2815C2.8335 8.88199 2.8335 6.68166 4.20083 5.31549C5.56816 3.94933 7.76733 3.94816 12.1668 3.94816H13.9168M8.0835 21.4482C7.84433 22.6172 6.7745 25.1418 7.86883 25.9573C8.4405 26.3738 9.35166 25.9293 11.1752 25.0403C12.4538 24.4162 13.7488 23.701 15.1477 23.379C15.6587 23.2623 16.1802 23.2122 16.8335 23.1982C21.233 23.1982 23.4333 23.1982 24.7995 21.8308C26.105 20.5265 26.1645 18.4615 26.1668 14.4482M9.8335 16.7815H16.8335M9.8335 10.9482H13.3335" stroke="#333333" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
    
    );