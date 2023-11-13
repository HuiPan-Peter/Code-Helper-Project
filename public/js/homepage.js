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
      const slider = document.getElementById("postsContainer");

      // Check if the template element exists
      const templateElement = document.getElementById("post-card-template");
      if (!templateElement) {
        console.error("Handlebars template element not found");
        return;
      }

      // Get the Handlebars template
      const templateSource = templateElement.innerHTML;
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
        slidesPerView: 1,
        loop: true,
        duration: 500,
        spacing: 20,
      });

      // Button event listeners
      document.getElementById("prevBtn").addEventListener("click", function () {
        keenSlider.prev();
      });

      document.getElementById("nextBtn").addEventListener("click", function () {
        keenSlider.next();
      });
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });
});
