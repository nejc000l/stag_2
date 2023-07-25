export const getData = async () => {
  const url = "http://localhost:3000/api/data_api";
  const response = await fetch(url, { cache: 'no-cache' });
  const data = await response.json();
  return data;
};
export default async function serverRender() {
  const data = await getData();
  return (
    <>
      {data.map((item: any) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <h3>{item.text}</h3>
          <h3>{item.href}</h3>
        </div>
      ))}
    </>
  );
}