// Add your code here
function submitData(name,email){

  fetch("http://localhost:3000/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": name,
      "email": email,
    })
  });

}