// Add your code here
function submitData(name,email){

   fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      "name": "name",
      "email": "email",
    })
  }).then((response)=>{
    return response.json()
  }).then((json)=>{
    console.log(json);
  }).catch((e)=>{
    console.log(e);
  });

}

const r = submitData("daban","mail");
