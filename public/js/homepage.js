document.addEventListener("DOMContentLoaded", function () {
  // Fetch posts from the JSON file
  fetch("seeds/posts-seeds.json")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((posts) => {
      const postsContainer = document.getElementById("postsContainer");
      const slider = document.getElementById("slider");

      // Get the Handlebars template
      const templateSource = document.getElementById("post-card-template").innerHTML;
      const template = Handlebars.compile(templateSource);

      // Render each post
      posts.forEach((post) => {
        // Pass post data to the Handlebars template
        const postCardHtml = template(post);

        // Create an element and append the rendered HTML
        const postCard = document.createElement("div");
        postCard.innerHTML = postCardHtml;

        slider.appendChild(postCard);
      });

      // Initialize Keen Slider after all posts are added
      const keenSlider = new KeenSlider("#postCarousel", {
        // Your Keen Slider options
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});


// Initialize Bootstrap Carousel for postCarousel
const postCarouselElement = document.getElementById('postCarousel');

if (postCarouselElement) {
  const carousel = new bootstrap.Carousel(postCarouselElement, {
    interval: 2000,
    touch: false
  });
} else {
  console.error('Could not find the carousel element with id "postCarousel"');
}