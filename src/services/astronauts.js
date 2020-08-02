export async function getAstronauts() {
  let res = await fetch("http://api.open-notify.org/astros.json");
  let data = await res.json();
  return data;
}
