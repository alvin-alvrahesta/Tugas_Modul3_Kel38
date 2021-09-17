import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import CardList from "./components/CardList";
import Keranjang from "./components/Keranjang";
import Quotes from "./components/Quotes";
import quimage from "./assets/images/logo1.png";
const quotes = "Semoga Bermanfaat";
const buah = [
  {
    nama: "Semangka",
    rasa: "Manis",
    harga: "18000",
    image:
      "https://cdn.pixabay.com/photo/2013/01/08/01/25/watermelon-74342_960_720.jpg",
  },
  {
    nama: "Pisang",
    rasa: "Manis",
    harga: "12000",
    image:
      "https://img.okezone.com/content/2020/05/15/298/2214844/ciri-ciri-pisang-matang-sempurna-bReK2YGBA0.jpg",
  },
  {
    nama: "Jeruk",
    rasa: "Asam",
    harga: "23000",
    image: "https://statik.tempo.co/data/2016/03/17/id_490391/490391_620.jpg",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App />
    <div>
      <div style={{ display: "flex", flex: 1, flexDirection: "row" }}>
        {buah.map((item, index) => (
          <CardList
            id={index}
            nama={item.nama}
            rasa={item.rasa}
            harga={item.harga}
            image={item.image}
          />
        ))}
      </div>
      <div></div>
    </div>
    <Quotes author="Kelompok 38" quotes={quotes} quimage={quimage} />
  </React.StrictMode>,
  document.getElementById("root")
);
