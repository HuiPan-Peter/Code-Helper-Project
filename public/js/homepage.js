document.addEventListener("DOMContentLoaded", function () {
  // Fetch posts from the JSON file
  fetch("/seeds/post-seeds.json")
    .then((response) => response.json())
    .then((posts) => {
      const carouselInner = document.getElementById("postsContainer");

      // Display three posts per carousel item
      for (let i = 0; i < posts.length; i += 3) {
        const carouselItem = document.createElement("div");
        carouselItem.classList.add("carousel-item");

        // Loop through three posts and create post elements
        for (let j = 0; j < 3 && i + j < posts.length; j++) {
          const post = posts[i + j];
          const postElement = document.createElement("div");
          postElement.classList.add("mb-4");

          postElement.innerHTML = `
            <h3 class="text-lg font-semibold">${post.title}</h3>
            <p class="text-gray-600">${post.content}</p>
            <p class="text-gray-500">Posted by Author ${post.author_id}</p>
          `;

          carouselItem.appendChild(postElement);
        }

        // Set the first item as active
        if (i === 0) {
          carouselItem.classList.add("active");
        }

        carouselInner.appendChild(carouselItem);
      }
    })
    .catch((error) => {
      console.error("Error fetching posts:", error);
    });

  // Initialize Bootstrap Carousel
  const myCarouselElement = document.querySelector('#myCarousel');
  const carousel = new bootstrap.Carousel(myCarouselElement, {
    interval: 2000,
    touch: false
  });
});
