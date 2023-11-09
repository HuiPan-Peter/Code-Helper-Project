//fetching data from post-seeds 

document.addEventListener("DOMContentLoaded", function () {
    // Fetch posts from the JSON file
    fetch("seeds/post-seeds.json")
      .then((response) => response.json())
      .then((posts) => {
        // Get the container to render posts
        const postsContainer = document.getElementById("postsContainer");
  
        // Render each post
        posts.forEach((post) => {
          const postElement = document.createElement("div");
          postElement.classList.add("mb-4");
  
          // Customize the post display (modify as per your data structure)
          postElement.innerHTML = `
            <h3 class="text-lg font-semibold">${post.title}</h3>
            <p class="text-gray-600">${post.content}</p>
            <p class="text-gray-500">Posted by Author ${post.author_id}</p>
          `;
  
          postsContainer.appendChild(postElement);
        });
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  });
  
  