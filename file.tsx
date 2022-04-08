import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
  const [doctorsData, setDoctorsData] = useState([]);
  const uri =
    "https://raw.githubusercontent.com/mhasancy/doctorsData/main/doctorsData.json";
  const fetchData = async () => {
    try {
      const response: AxiosResponse = await axios.get(uri);
      setDoctorsData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Doctor />
    </div>
  );
};

export default Doctors;
