import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export default function NewAppointment({ doctorData }) {
  let { id } = useParams();
  const myDoc = doctorData.find((doc) => doc.id === id);

  const [availableSlots, setAvailable] = [myDoc.availability];
  console.log(availableSlots);
  return (
    <div className="Appointment">
      <h3>Doctor</h3>
      <div className="doc_prof">
        <h5>{myDoc.name}</h5>
        <div>Specialty: {myDoc.specialty}</div>
      </div>
      <div className="availability">
        <h3>Availability</h3>
        <ul>
          {availableSlots.map((avail) => (
            <li key={avail}>
              {avail}
              <Link
                to={`new-appointment/${id}/reservation`}
                className="btn btn-primary"
              >
                Reserve a spot
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
