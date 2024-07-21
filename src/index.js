// index.js
fetch("http://localhost:3000/ramens")
.then(res=>res.json())
.then(data=>displayRamens(data))
// Callbacks
const handleClick = (ramen) => {
  // Add code
  console.log(ramen.target)
  let mySrc=(ramen.target.getAttribute('src'))
  document.querySelector(".detail-image").setAttribute("src",mySrc)
  
};

const addSubmitListener = () => {
  // Add code
}

const displayRamens = (ramen) => {
  // Add code
  let myId
  for(let i=0;i<ramen.length;i++){
    let myImg=(document.createElement("img"))
    myImg.setAttribute('src',`${ramen[i].image}`)
    myImg.setAttribute('id',`${ramen[i].id}`)
    document.querySelector("#ramen-menu").append(myImg)
    myImg.addEventListener("click",handleClick)
  }
};

const main = () => {
  // Invoke displayRamens here
  // Invoke addSubmitListener here
}

main()

// Export functions for testing
export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
