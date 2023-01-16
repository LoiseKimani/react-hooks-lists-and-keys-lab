import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  let myLinks = links.map((link) => 
    <a key={link} href={"#"+link} >{link}</a>)
  return <nav>
    {myLinks}
   
  </nav>;
}

export default NavBar;


// import React from "react";

// function NavBar() {
//   const links = ["home", "about", "projects"];

//   return <nav>{/* display an <a> tag for each link here */}</nav>;
// }

// export default NavBar;
