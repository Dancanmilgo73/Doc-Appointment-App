import React from "react";
import { useParams } from "react-router-dom";
export default function Reserve(doctorData) {
  let { id } = useParams();
  const myDoc = doctorData.find((doc) => doc.id === id);

  const [availableSlots, setAvailable] = [myDoc.availability];
  console.log(availableSlots);
  return (
    <div className="reserve">
      <form>
        <label>
          <p>Firstname</p>
          <input type="text" />
        </label>
        <label>
          <p>Othernames</p>
          <input type="text" />
        </label>
        <label>
          <p>Phone number</p>
          <input type="number" />
        </label>
        <label>
          <p>email</p>
          <input type="email" />
        </label>
        <butto className="btn btn-success">Submit</butto>
      </form>
    </div>
  );
}
