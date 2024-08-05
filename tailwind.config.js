/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        // You can use either of the below options based on your preference:
        //neon: "0 0 5px #D6BCFA, 0 0 20px #9F7AEA", // Using color codes for clarity
        neon: "0 0 30px theme('colors.purple.500'), 0 0 60px theme('colors.purple.900')",
        sunset:
          "0 0 30px theme('colors.orange.400'), 0 0 60px theme('colors.orange.600')",
        sky: "0 0 30px theme('colors.blue.400'), 0 0 60px theme('colors.blue.600')",
        nature:
          "0 0 30px theme('colors.green.400'), 0 0 60px theme('colors.green.600')",
        teal: "0 0 30px theme('colors.teal.400'), 0 0 60px theme('colors.teal.600')",
      },
      // screens: {
      //   phone: "0px", // Starts from 0px
      //   // => @media (min-width: 0px) {...}
      //   tablet: "640px",
      //   // => @media (min-width: 640px) {...}
      //   laptop: "1024px",
      //   // => @media (min-width: 1024px) {...}
      //   desktop: "1280px",
      //   // => @media (min-width: 1280px) {...}
      // },
    },
  },
  plugins: [],
};
