const tailwindConfig = {
    theme: {
      extend: {
        colors: {
          primary: "#f97316",
          secondary: "#0ea5e9",
        },
        borderRadius: {
          none: "0px",
          sm: "4px",
          DEFAULT: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          "2xl": "24px",
          "3xl": "32px",
          full: "9999px",
          button: "8px",
        },
      },
    },
  };
  
  // Kích hoạt cấu hình
  if (window.tailwind) {
    tailwind.config = tailwindConfig;
  }
  
  export default tailwindConfig;
  