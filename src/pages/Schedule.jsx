import React from "react";
import "./schedule.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Schedule = () => {
  const [actvities, setActvities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAllActivities() {
    try {
      const res = await axios.get("https://lnf-backend.vercel.app/activities");
      console.log(res.data);
      setActvities(res.data);
      setLoading(false);
    } catch (error) {
      console.log("error fetching activities.");
    }
  }

  useEffect(() => {
    fetchAllActivities();
  }, []);

  return (
    <main>
      <div className="iniContainer">
        <div className="activityContainer">
         {loading && <p>Activities are Landing...📅</p>}
        {error && <p style={{ color: "red" }}>{error}</p>}
          {actvities.map((activity) => (
            <div key={activity._id} className="activityBox">
              <h2 className="weekDay">{activity.weekDay}📅</h2>
              <h3 className="weekActName">{activity.activityName}📝</h3>
              <p className="activityDes">
                <i>{activity.activityDescription}</i>
              </p>
            </div>
          ))}
        </div>
        <div className="activityDetailBtn">
          <a
            href="https://drive.google.com/file/d/1P3QoaV49qpMRUgTPtArJhVCecDHRps4Q/view?usp=sharing"
            className="midBtn DetBtn"
          >
            View Acitivities in Detail
          </a>
        </div>
      </div>
    </main>
  );
};

export default Schedule;
