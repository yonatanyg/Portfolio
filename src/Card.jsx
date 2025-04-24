import pic from "./assets/us.png";

function Card() {
  return (
    <div className="card">
      <img src={pic} alt="Profile Picture"></img>
      <h2 className="card-title">Yonatan</h2>
      <p>Im learning React, and play the guitar</p>
    </div>
  );
}

export default Card;
