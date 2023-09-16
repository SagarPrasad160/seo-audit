/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const AuditContext = createContext();

export const AuditProvider = ({ children }) => {
  const [lightHouseResults, setLighthouseResults] = useState({
    audits: null,
    finalUrl: null,
    fetchTime: null,
    categories: null,
  });

  const [onPageResults, setOnPageResults] = useState({
    onpage_score: null,
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  return (
    <AuditContext.Provider
      value={{
        lightHouseResults,
        setLighthouseResults,
        onPageResults,
        setOnPageResults,
        loading,
        setLoading,
        error,
        setError,
      }}
    >
      {children}
    </AuditContext.Provider>
  );
};
