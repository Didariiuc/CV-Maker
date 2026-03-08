import { createContext, useState, useEffect } from "react";
import { saveData, loadData } from "../utils/storage";

export const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState(loadData() || {
    name: "",
    email: "",
    phone: "",
    education: "",
    experience: "",
    skills: ""
  });

  useEffect(() => {
    saveData(cvData);
  }, [cvData]);

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
};