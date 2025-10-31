import PersonCard from "./components/PersonCard";
import Button from "./components/Button";
import StatusBadge from "./components/StatusBadge";
import "./App.css";

function handleClick() {
  console.log("Button One clicked!");
}

function handleClick2() {
  console.log("Button Two clicked!");
}

function handleClick3() {
  console.log("Button Three clicked!");
}

function App() {
  return (
    <>
      <h1>Components Practice Assignment</h1>
      <div className="card-container">
        <PersonCard
          name="Babz Mf'n G"
          age={45}
          occupation={"Aspiring UX/UI Designer"}
        />
        <PersonCard name="Bruiser Brody" age={3} occupation={"Blue Heeler"} />
        <PersonCard
          name="Blackie Lawless"
          age={16}
          occupation={"Old Crusty Cat"}
        />
      </div>

      <div className="button-container">
        <Button text="Button One" onClick={handleClick} />
        <Button text="Button Two" onClick={handleClick2} />
        <Button text="Button Three" onClick={handleClick3} />
      </div>

      <div className="card-container" style={{ marginTop: "3rem" }}>
        <StatusBadge statusText="Babz Mf'n G" isOnline={true} />
        <StatusBadge statusText="Bruiser Brody" isOnline={false} />
        <StatusBadge statusText="Blackie Lawless" isOnline={true} />
      </div>
    </>
  );
}

export default App;
