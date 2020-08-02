export async function getIssLocation() {
  let res = await fetch("http://api.open-notify.org/iss-now.json");
  let data = await res.json();
  return data;
}