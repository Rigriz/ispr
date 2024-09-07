import { fetchdata } from "@/app/api/admin/route";
//import axios from 'axios';

const Callapi = async () => {
  try {

    //const data = await response.json();
 //   console.log(data, "sdfkj");
    return (response);
  }
  catch (error) {
    console.error(error);
  }
}
async function iterat() {
  const data = await fetchdata();
  //console.log(data);
  var j = 0;
 // console.log(data[0]);
  return (
    <textarea>{data[0]}</textarea>
  );
}

export default async function admin() {
  const res = await fetchdata();
  const data = res[0];
  console.log(data);
  return (
    <>
      <iterat />{ 
      /*
      data ? ( 
        data.map((items, index) => (
          console.log(data[0].items),
          <p>{data[0].items}</p>
         )
        )
      )
        : <p>Data no available</p>
      */}
      <p>hiii</p>
    </>
  );
}