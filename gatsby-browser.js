/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// Load polyfill for gatsby-image-background
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    console.log(`# IntersectionObserver is polyfilled!`);
    return import(`intersection-observer`);
  }
}
