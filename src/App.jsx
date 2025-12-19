import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import OddsSection from "./components/OddsSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// Move URLs to a config object to keep the useEffect clean
const SHEETS = {
  ODD_15: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDR_DWadtmKeUwacp1Ld2XtL0ixGu0UPDB2VO-UGfqkGbwbVifW_Ahr7WfDQHfJSfuIyscgjkiTnX-/pub?gid=0&single=true&output=csv",
  ODD_20: "https://docs.google.com/spreadsheets/d/e/2PACX-1vSDR_DWadtmKeUwacp1Ld2XtL0ixGu0UPDB2VO-UGfqkGbwbVifW_Ahr7WfDQHfJSfuIyscgjkiTnX-/pub?gid=1862011525&single=true&output=csv"
};

export default function App() {
  const [odd15, setOdd15] = useState([]);
  const [odd2, setOdd2] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllTips = async () => {
      try {
        setIsLoading(true);
        
        // Helper function to fetch and parse
        const fetchData = async (url) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Failed to fetch data");
          const csvText = await res.text();
          
          return csvText
            .split("\n")
            .slice(1) // Skip header
            .filter(row => row.trim() !== "") // Remove empty rows
            .map(row => {
              const [match, prediction] = row.split(",");
              return { match: match?.trim(), prediction: prediction?.trim() };
            });
        };

        // Run both fetches in parallel for better performance
        const [data15, data2] = await Promise.all([
          fetchData(SHEETS.ODD_15),
          fetchData(SHEETS.ODD_20)
        ]);

        setOdd15(data15);
        setOdd2(data2);
      } catch (err) {
        setError("Unable to load tips. Please try again later.");
        console.error("Fetch Error:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAllTips();
  }, []);

  return (
    <>
      <Header />
      
      {isLoading ? (
        <div className="loader">Loading tips...</div>
      ) : error ? (
        <div className="error-message">{error}</div>
      ) : (
        <main>
          <OddsSection id="odd15" title="ODD 1.5" tips={odd15} />
          <OddsSection id="odd2" title="ODD 2" tips={odd2} />
        </main>
      )}

      <About />
      <Contact />
      <Footer />
    </>
  );
}