// Add your code here
function submitData(name, email) {
  const userData = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(userData),
  })
    .then((response) => response.json())
    .then((object) => {
      // Append the new user's ID to the DOM
      const idElement = document.createElement("p");
      idElement.textContent = `User ID: ${object.id}`;
      document.body.appendChild(idElement);
    })
    .catch((error) => {
      // Append error message to the DOM
      const errorElement = document.createElement("p");
      errorElement.textContent = `Error: ${error.message}`;
      document.body.appendChild(errorElement);
    });
}
