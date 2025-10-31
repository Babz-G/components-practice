function PersonCard({ name, age, occupation }) {
  return (
    <div className="card">
      {/* <h3>{productCard}</h3> */}
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
      <p>Occupation: {occupation}</p>
    </div>
  );
}

export default PersonCard;
