import { } from "@/app/api/admin/route";

const Callapi = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/admin', { method: 'GET', });
    const data = await response.json();
    console.log(data, "sdfkj");
    return (data);
  }
  catch (error) {
    console.error(error);
  }
}
export default async function admin() {
  const data = await Callapi();
  const pages = () => {
    data.map((header, index) => {
      console.log(header, index)
    })
  }
  return (
    <>
      <section>
        <h1>jhdklsahdflhkjdf</h1>
      </section>
    </>
  );
}