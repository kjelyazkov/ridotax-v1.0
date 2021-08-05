import axios from "axios";

const instance = axios.create({
  baseURL: "http://ridotax-project.local",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  }
});

function attachToken() {
  const vuex = JSON.parse(localStorage.getItem("vuex"));
  if (vuex !== null || vuex.auth.token !== null) {
    const AUTH_TOKEN = `Bearer ${vuex.auth.token}`;
    instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
  }
}

export default {
  login(credentials) {
    return instance.post("/api/login", credentials);
  },
  register(credentials) {
    return instance.post("/api/register", credentials);
  },
  logout() {
    attachToken();
    instance.post('/api/logout');
  },
  profile() {
    attachToken();
    return instance.get("/api/profile");
  },

  getCars() {
    attachToken();
    return instance.get("/api/cars");
  },
  storeCar(car) {
    attachToken();
    return instance.post("/api/cars", car);
  },
  updateCar(car) {
    attachToken();
    return instance.put(`/api/cars/${car.car_id}`, {
      color: car.color,
      name: car.name,
      model: car.model,
      number: car.number,
    });
  }
}