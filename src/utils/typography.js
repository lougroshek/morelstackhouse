import Typography from "typography"
const typography = new Typography({
  baseFontSize: "10px",
  baseLineHeight: 1.666,
  headerFontFamily: [
    "Muli",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif",
  ],
  bodyFontFamily: ["Muli", "Arial", "serif"],
})
export default typography

/** This config goes into gatsby-config.js */
// {
//   resolve: `gatsby-plugin-typography`,
//   options: {
//     pathToConfigModule: `src/utils/typography`,
//   }
// },
