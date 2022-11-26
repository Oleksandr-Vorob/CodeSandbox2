export default function List(props) {
  return (
    <ul>
      {props.city.map((item, i) => (
        <li key={i}>{item.name}</li>
      ))}
    </ul>
  );
}
