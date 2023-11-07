// userDashboard.js

// userDashboard.js

// Function to submit a new post
const submitPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector(".subject-input").value.trim();
    const content = document.querySelector(".content-input").value.trim();
    const author_id = document.querySelector(".logged-in-user-id").innerHTML;
  
    if (!author_id) {
      alert("You must be logged in to post. Please try again.");
    } else {
      if (title && content) {
        try {
          const response = await fetch("/api/user/post/", {
            method: "POST",
            body: JSON.stringify({ title, content, author_id }),
            headers: { "Content-Type": "application/json" },
          });
          if (response.ok) {
            document.location.replace("/userDashboard");
          } else {
            alert(`Failed to submit post. ${response.status}: ${response.statusText}`);
          }
        } catch (error) {
          console.error('Error submitting post:', error);
          alert("An error occurred while trying to submit the post.");
        }
      } else {
        alert("Please fill out all fields.");
      }
    }
  };
  
  // Function to handle post deletion
  const deletePostHandler = async (event) => {
    if (event.target.hasAttribute("data-id")) {
      const deletePostId = event.target.getAttribute("data-id");
  
      try {
        const response = await fetch(`/api/user/post/${deletePostId}`, {
          method: "DELETE",
        });
        if (response.ok) {
          document.location.reload();
        } else {
          alert(`Failed to delete post. ${response.status}: ${response.statusText}`);
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        alert("An error occurred while trying to delete the post.");
      }
    }
  };
  
  // Add event listeners for post submission and deletion
  document.querySelector(".submit-post").addEventListener("click", submitPostHandler);
  
  const deleteButtons = document.querySelectorAll(".delete-post");
  deleteButtons.forEach((button) => {
    button.addEventListener('click', deletePostHandler);
  });
  
  