const URL_API = "http://localhost:3000";
const myHeader = new Headers({
  "Content-Type": "application/json",
});

const getData = async (endpoint) => {
  try {
    const respuesta = await fetch(`${URL_API}/${endpoint}`);
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      return data;
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

const postData = (data, endpoint) => {
  fetch(`${URL_API}/${endpoint}`, {
    method: "POST",
    headers: myHeader,
    body: JSON.stringify(data),
  }).catch((error) => console.log(error));
};

const deleteData = (endpoint, id) => {
  fetch(`${URL_API}/${endpoint}/${id}`, {
    method: "DELETE",
    headers: myHeader,
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error al eliminar a" + id);
      }
      return res.json();
    })
    .then((result) => {
      // console.log(result)
      return result;
    })
    .catch((error) => console.log(error));
};

const getOneData = async (id) => {
  try {
    const response = await fetch(`${URL_API}/pendientes/${id}`);
    if (response.status == 200) {
      const data = await response.json();
      return data;
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

export {
  getData as getData,
  postData as postData,
  deleteData as deleteData,
  getOneData,
};
