module.exports = function(eleventyConfig) {
  // Copy images folder
  eleventyConfig.addPassthroughCopy("images");

  // Copy styles folder
  eleventyConfig.addPassthroughCopy("styles");

  return {
      dir: {
          input: ".",
          includes: "_includes",
          output: "_site"
      }
  };
};
