function Logo() {
    return (
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="48" 
        height="48" 
        viewBox="0 0 24 24"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
          </linearGradient>
        </defs>
        <g transform="translate(0.5 0.5)">
          <path 
            fill="url(#logoGradient)" 
            stroke="#ffffff" 
            strokeWidth="0.5" 
            d="M12 2L2 22h20L12 2zm0 4l6.5 14h-13L12 6zm0 3.5l-3 6.5h6l-3-6.5z"
          />
          <path fill="#ffffff" d="M14.5 15.5h-5l2.5-5.5 2.5 5.5z"/>
          <path 
            fill="none" 
            stroke="#ffffff" 
            strokeLinecap="round" 
            strokeWidth="1.5" 
            d="M16 7l3 3"
          />
        </g>
      </svg>
    );
  }
  
  export default Logo;