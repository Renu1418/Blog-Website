document.addEventListener('DOMContentLoaded', () => {
   // Welcome screen functionality
   document.getElementById('continue-btn').addEventListener('click', function () {
       document.getElementById('welcome-screen').style.display = 'none';
       document.getElementById('main-container').style.display = 'block';
   });

   // Functionality for the left-part
   const menuItems = document.querySelectorAll('.left-part ul li');
   const mainContent = document.querySelector('.main');
   const searchInput = document.getElementById('search-input');
   const searchContainer = document.getElementById('search-container');
   const searchCloseBtn = document.getElementById('search-close');

   // Adding event listeners for menu items
   menuItems.forEach((item, index) => {
       item.addEventListener('click', function () {
           switch (index) {
               case 0: // Home
                   showAllPosts();
                   break;

               case 1: // Search
                   toggleSearchBar();
                   break;

               case 2: // About
                   showAbout();
                   break;

               case 3: // Contact
                   showContact();
                   break;
           }
       });
   });

   // Function to show all posts (Home)
   function showAllPosts() {
       const posts = document.querySelectorAll('.post, .post-second, .post-third');

       if (posts.length === 0) {
           console.error('No posts found');
           return;
       }

       mainContent.innerHTML = ''; // Clear the main content before appending posts
       posts.forEach(post => {
           // Append the post to the main content
           mainContent.appendChild(post.cloneNode(true));
       });

       mainContent.scrollTo({ top: 0, behavior: 'smooth' });
   }

   // Function to toggle search bar visibility
   function toggleSearchBar() {
       if (searchContainer.style.display === 'block') {
           searchContainer.style.display = 'none';
           mainContent.style.filter = 'none'; // Reset filter if search is closed
       } else {
           searchContainer.style.display = 'block';
           searchInput.focus();
           mainContent.style.filter = 'blur(5px)'; // Optional: blur main content when search is open
       }
   }

   // Close search bar when clicking the close button
   searchCloseBtn.addEventListener('click', function () {
       searchContainer.style.display = 'none';
       mainContent.style.filter = 'none'; // Reset filter when search is closed
   });

   // Function to perform search and display results
   function performSearch(query) {
       const posts = document.querySelectorAll('.post, .post-second, .post-third');
       mainContent.innerHTML = ''; // Clear previous content

       let found = false; // Flag to check if any result is found

       // Perform the search
       posts.forEach(post => {
           const postTitle = post.querySelector('h2').textContent.trim(); // Assuming post title is in an <h2> tag

           if (postTitle.toLowerCase() === query.toLowerCase()) {
               mainContent.appendChild(post.cloneNode(true)); // Show matching post
               found = true;
           }
       });

       // Show message if no results found
       if (!found) {
           mainContent.innerHTML = '<p>No results found.</p>';
       }
   }

   // Handle search input and enter key press
   searchInput.addEventListener('keypress', function (event) {
       if (event.key === 'Enter') {
           event.preventDefault(); // Prevent default form submission behavior
           const query = searchInput.value.trim();
           performSearch(query);
       }
   });

   function showAbout() {
       // Your code to show about section
       
       mainContent.innerHTML = `
       <div style="text-align: center; margin-top: 50px;">
           <h2>About Us</h2>
           <p>Welcome to NutriTech! We are dedicated to sharing valuable insights on technology, health, and food. Our blog aims to provide you with up-to-date information and expert opinions to help you stay informed and make better decisions.</p>
       </div>
   `;
   }

   function showContact() {
       // Your code to show contact section
       mainContent.innerHTML = `
       <div style="text-align: center; margin-top: 50px;">
           <h2>Contact Us</h2>
           <p>We'd love to hear from you! You can reach us at:</p>
           <p>Email: <a href="mailto:nutritech@gmail.com">nutritech@gmail.com</a> or <a href="mailto:nutritech@example.com">nutritech@example.com</a></p>
       </div>
   `;
   }
});





//js code for login and signup

document.addEventListener("DOMContentLoaded", function () {
   // Show and hide login and signup forms
   const signupBtn = document.querySelector(".signupbtn");
   const loginBtn = document.querySelector(".loginbtn");
   let isLoginVisible = false;
   let isSignupVisible = false;

   signupBtn.addEventListener("click", function () {
       if (!isSignupVisible) {
           showSignupForm();
       } else {
           hideSignupForm();
       }
   });

   loginBtn.addEventListener("click", function () {
       if (!isLoginVisible) {
           showLoginForm();
       } else {
           hideLoginForm();
       }
   });

   function showSignupForm() {
       hideLoginForm();
       const signupForm = document.createElement("div");
       signupForm.innerHTML = `
           <form id="signup-form">
               <h3>Sign Up</h3>
               <input type="text" id="signup-username" placeholder="Username" required><br>
               <input type="email" id="signup-email" placeholder="Email" required><br>
               <input type="password" id="signup-password" placeholder="Password" required><br>
               <button type="submit">Sign Up</button>
               <button type="button" id="signup-cancel">Cancel</button>
           </form>
       `;
       signupForm.style.position = "fixed";
       signupForm.style.top = "30%";
       signupForm.style.left = "50%";
       signupForm.style.transform = "translate(-50%, -50%)";
       signupForm.style.backgroundColor = "#f1f1f1";
       signupForm.style.padding = "20px";
       signupForm.style.border = "1px solid #ccc";
       signupForm.style.zIndex = "1002";

       document.body.appendChild(signupForm);
       isSignupVisible = true;

       document.getElementById("signup-form").addEventListener("submit", handleSignup);
       document.getElementById("signup-cancel").addEventListener("click", hideSignupForm);
   }

   function hideSignupForm() {
       const signupForm = document.getElementById("signup-form");
       if (signupForm) {
           signupForm.parentElement.remove();
       }
       isSignupVisible = false;
   }

   function showLoginForm() {
       hideSignupForm();
       const loginForm = document.createElement("div");
       loginForm.innerHTML = `
           <form id="login-form">
               <h3>Login</h3>
               <input type="text" id="login-username" placeholder="Username" required><br>
               <input type="password" id="login-password" placeholder="Password" required><br>
               <button type="submit">Log In</button>
               <button type="button" id="login-cancel">Cancel</button>
           </form>
       `;
       loginForm.style.position = "fixed";
       loginForm.style.top = "30%";
       loginForm.style.left = "50%";
       loginForm.style.transform = "translate(-50%, -50%)";
       loginForm.style.backgroundColor = "#f1f1f1";
       loginForm.style.padding = "20px";
       loginForm.style.border = "1px solid #ccc";
       loginForm.style.zIndex = "1002";

       document.body.appendChild(loginForm);
       isLoginVisible = true;

       document.getElementById("login-form").addEventListener("submit", handleLogin);
       document.getElementById("login-cancel").addEventListener("click", hideLoginForm);
   }

   function hideLoginForm() {
       const loginForm = document.getElementById("login-form");
       if (loginForm) {
           loginForm.parentElement.remove();
       }
       isLoginVisible = false;
   }

   // Handle signup
   function handleSignup(event) {
       event.preventDefault();
       const username = document.getElementById("signup-username").value;
       const email = document.getElementById("signup-email").value;
       const password = document.getElementById("signup-password").value;

       localStorage.setItem("username", username);
       localStorage.setItem("email", email);
       localStorage.setItem("password", password);

       alert("Signup successful! You can now log in.");
       hideSignupForm();
   }

   // Handle login
   function handleLogin(event) {
       event.preventDefault();
       const username = document.getElementById("login-username").value;
       const password = document.getElementById("login-password").value;

       const storedUsername = localStorage.getItem("username");
       const storedPassword = localStorage.getItem("password");

       if (username === storedUsername && password === storedPassword) {
           alert("Login successful!");
           hideLoginForm();
           // Add further logic after successful login
       } else {
           alert("Invalid username or password.");
       }
   }

   // Continue button event
   document.getElementById("continue-btn").addEventListener("click", function () {
       document.getElementById("welcome-screen").style.display = "none";
       document.getElementById("main-container").hidden = false;
   });
});



// creating the post 

document.addEventListener('DOMContentLoaded', () => {
    const createPostBtn = document.getElementById('create-post-btn');
    const createPostForm = document.getElementById('create-post-form');
    const postSubmitBtn = document.getElementById('post-submit');

    // Show or hide the create post form
    createPostBtn.addEventListener('click', () => {
        createPostForm.hidden = !createPostForm.hidden;
    });

    // Handle the form submission
    postSubmitBtn.addEventListener('click', () => {
        const title = document.getElementById('post-title').value;
        const content = document.getElementById('post-content').value;
        const image = document.getElementById('post-image').value;
        const date = new Date().toLocaleDateString();

        if (title && content) {
            // Create a new post
            const newPost = document.createElement('div');
            newPost.classList.add('post');
            newPost.innerHTML = `
                <h2 class="title">${title}</h2>
                <img src="${image}" alt="">
                <p class="post-content">${content}</p>
                <p class="post-date">${date}</p>
                <div class="comment-section">
                    <h5>Comment</h5>
                    <form class="comment-form">
                        <textarea placeholder="Your comment" rows="5" required hidden></textarea>
                        <button type="submit" hidden>Submit</button>
                    </form>
                </div>
            `;

            // Add the new post to the top of the existing posts
            const mainContent = document.querySelector('.main');
            mainContent.insertBefore(newPost, mainContent.firstChild);

            // Hide the form and clear inputs
            createPostForm.hidden = true;
            document.getElementById('post-title').value = '';
            document.getElementById('post-content').value = '';
            document.getElementById('post-image').value = '';
        } else {
            alert('Please fill in all required fields.');
        }
    });
});













