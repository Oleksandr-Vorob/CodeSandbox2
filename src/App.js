import "./styles.css";
import List from "./components/CityList";

let Cities = [
  { name: "Київ" },
  { name: "Львів" },
  { name: "Дніпро" },
  { name: "Харків" },
  { name: "Тернопіль" },
  { name: "Івано-Франківськ" },
  { name: "Вінниця" },
  { name: "Запоріжжя" },
  { name: "Хмельницький" },
  { name: "Одеса" },
  { name: "Луцьк" },
  { name: "Черкаси" },
  { name: "Полтава" },
  { name: "Рівне" },
  { name: "Кропивницький" },
  { name: "Чернігів" },
  { name: "Житомир" },
  { name: "Миколаїв" },
  { name: "Чернівці" },
  { name: "Суми" },
  { name: "Ужгород" },
  { name: "Херсон" },
  { name: "Донецьк" },
  { name: "Луганськ" },
  { name: "Сімферополь" }
];

export default function App() {
  return (
    <div className="App">
      <h1>Cities of Ukraine</h1>
      <List city={Cities} />
    </div>
  );
}
