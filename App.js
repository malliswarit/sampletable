import "./styles.css";

const data = [
  { name: "Sai", value: 100, reason: "God" },
  { name: "Baba", value: 10, reason: "Dwarakamai" },
  { name: "Siva", value: 50, reason: "Iswara" },
  { name: "Lord", value: 60, reason: "Angel" },
  { name: "Anjaneya", value: 90, reason: "Sri" }
];

export default function App() {
  const sortFields = () => {
    data.sort(function (a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      return 0;
    });
  };
  return (
    <div className="App">
      <table className="customers">
        <tr>
          <th onClick={sortFields()}> Name </th>
          <th> Value </th>
          <th> Reason </th>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name} </td>
            <td>{item.value} </td>
            <td>{item.reason} </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
