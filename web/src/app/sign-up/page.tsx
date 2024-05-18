export default async function Home() {
  const res = await fetch("http://localhost:3000/users/all");
  const resJson = await res.json();
  return (
    <div>
      <div>sign up</div>
      <div>{JSON.stringify(resJson, null, 2)}</div>
    </div>
  );
}
