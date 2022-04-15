import http from "./http";

async function getData() {
  const { data } = await http.get("/#left=cloud.61946ee43ce44830bd435bc3c624f571");
  return data;
}

export { getData };
