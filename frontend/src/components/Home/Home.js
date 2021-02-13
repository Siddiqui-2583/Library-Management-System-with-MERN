// import React, { useState, useEffect,  createContext } from "react";
// import Search from "../Search/Search";
// import "bootstrap/dist/css/bootstrap.css";
// import Table from "../Table/Table.js";
// import MenuAppBar from "../Header/Header";
// import axios from "axios";
// // const books = data.map((data) => data);
// let searchedBooks;

// export const BookContext = createContext();
// const Home = () => {
//   const [data, setData] = useState([])
//   const [displayBooks, setDisplayedBooks] = useState([]);
  
//   useEffect(() => {
//       axios
//         .get("/books")
//         .then((response) => {
//           console.log(response.data)
//           setData(response.data);
//         })
//       .catch((err) => console.log(err));
    
//       if (!searchedBooks) {
//         setDisplayedBooks(data);
//     }
//   }, []);
  
    
  
//   return (
//     <BookContext.Provider value={[data, setDisplayedBooks]}>
//       <MenuAppBar />
//       <Search
//         data={data}
//         displayBooks={displayBooks}
//         setDisplayedBooks={setDisplayedBooks}
//       />
//       <div className="container-fluid">
//         <container className="row">
//           <Table data={displayBooks} />
//         </container>
//       </div>
//     </BookContext.Provider>
//   );
// };

// export default Home;
