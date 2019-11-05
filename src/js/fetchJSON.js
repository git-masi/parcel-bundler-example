export default async function getTodos() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/');
  const data = res.json();
  return data;
}