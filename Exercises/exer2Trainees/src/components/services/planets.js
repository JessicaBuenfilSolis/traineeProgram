export async function getPlanets() {
  const planets = await fetch("https://swapi.co/api/planets/");
  return planets.json();
}
