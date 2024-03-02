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

const postData = (data) => {
  fetch(`${URL_API}/pendientes`, {
    method: "POST",
    headers: myHeader,
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};

const deleteData = (id) => {
  // console.log(id);
  fetch(`${URL_API}/pendientes/${id}`, {
    method: "DELETE",
    headers: myHeader,
  })
    .then((res) => {
      console.log(res.status);
      if (!res.ok) {
        throw new Error("Error al eliminar a" + id);
      }
      return res.json();
    })
    .then((res) => {
      // console.log(res)
      return res;
    })
    .catch((error) => console.log(error));
};

export { getData as getData, postData as postData, deleteData as deleteData };
