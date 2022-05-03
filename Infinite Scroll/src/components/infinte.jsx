/* eslint-disable react-hooks/exhaustive-deps */
// /* eslint-disable no-unused-vars */
// /* eslint-disable react-hooks/exhaustive-deps */
// import { useEffect, useState } from "react";
import "./infinite.css";

// export const Infinite = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(0);

//   const fetchData = () => {
//     getData();
//   };



//   const getData = async () => {
//     try {
//       let d = await fetch(`http://localhost:3001/data?_page=${page}&_limit=10`);
//       let a = await d.json();
//       let arr = [...data, ...a];
//       setData(arr);
//       console.log(arr);
//     } catch (err) {}
//   };

//   const seeData = () => {
//     getData();
//     // console.log(data);
//   };


//   const handleScroll = (e) => {
//     const scrollHeight = e.target.documentElement.scrollHeight;
//     const currentHeight = Math.ceil(
//       e.target.documentElement.scrollTop + window.innerHeight
//     );

//     if (currentHeight + 1 >= scrollHeight) {
//       fetchData();
//       console.log(scrollHeight, currentHeight);
//     }
//   };

//   useEffect(() => {
//     getData();


//     // window.addEventListener("scroll", () => {
//     //   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//     //   if (clientHeight + scrollTop >= scrollHeight - 5) {
//     //     getData();
//     //     console.log(data)
//     //   }
//     // });



//     window.addEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <div>
//         {data.map((el, i) => {
//           return <h1 key={i}>{el.masai}</h1>;
//         })}
//         <button onClick={seeData}>Data</button>
//       </div>
//     </>
//   );
// };



import React, { useEffect, useState } from "react";

function Scroll() {
  const [data, setData] = useState([]);

  let i = 0;
  var arr = [];

  const getData = async () => {
    let urlData = await fetch(
      "https://pixabay.com/api/?key=26002290-02b0588422051baad6331f9de&per_page=25"
    );
    let realData = await urlData.json();
    // console.log(realData.hits);

    for (let j = 0; j < realData.hits.length; j++) {
      arr.push(realData.hits[j]);
    }

    console.log(arr);
    setData([...data, ...arr]);
  };

  const handleScroll = (e) => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );

    if (currentHeight + 1 >= scrollHeight) {
      getData();
      console.log(arr);
      console.log(scrollHeight, currentHeight);
    }
  };

  useEffect(() => {
    getData();
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      

      <div
        style={{
         
          // height: "1000px",
        }}
      >
        {data.map((item) => {
          return <p key={i++}> Masai Student : {i}</p>;
        })}
      </div>
    </div>
  );
}

export default Scroll;