const URL_API = "http://localhost:3000";
const myHeader = new Headers({
  "Content-Type": "application/json",
});

const getData = async () => {
  try {
    const respuesta = await fetch(`${URL_API}/pendientes`);
    console.log(respuesta.status);
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      console.log(data);
    } else if (respuesta.status === 401) {
      console.log("la url no es correcta");
    } else if (respuesta.status === 404) {
      console.log("El producto que buscar no existe");
    } else {
      console.log("NO se que pasó");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getData as getData };
