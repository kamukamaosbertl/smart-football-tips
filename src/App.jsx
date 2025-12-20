import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import OddsSection from "./components/OddsSection";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
        const fetchData = async (url) => {
          const res = await fetch(url);
          if (!res.ok) throw new Error("Failed to fetch");
          const csvText = await res.text();
          
          const rows = csvText.split(/\r?\n/).filter(row => row.trim().includes(","));

          return rows.slice(1).map(row => {
            const columns = row.split(",");
            const rawStatus = columns[2]?.trim().toLowerCase() || "pending";

            return { 
              match: columns[0]?.trim() || "TBA", 
              prediction: columns[1]?.trim() || "TBA",
              status: rawStatus === "" ? "pending" : rawStatus, 
              result: columns[3]?.trim() || "-" 
            };
          });
        };

        const [data15, data2] = await Promise.all([
          fetchData(SHEETS.ODD_15),
          fetchData(SHEETS.ODD_20)
        ]);

        setOdd15(data15);
        setOdd2(data2);
      } catch (err) {
        setError("Unable to load tips. Check connection.");
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchAllTips();
  }, []);

  // --- DYNAMIC WIN RATE CALCULATION ---
  const allTips = [...odd15, ...odd2];
  const historyTips = allTips.filter(t => t.status === "won" || t.status === "lost");
  const wins = historyTips.filter(t => t.status === "won").length;
  
  // Calculate percentage. If no games played yet, it defaults to "85"
  const calculatedRate = historyTips.length > 0 
    ? Math.round((wins / historyTips.length) * 100) 
    : 85;

  return (
    <>
      <Header />
      {isLoading ? (
        <div className="loader" style={{textAlign:'center', padding:'40px', color:'#22c55e'}}>Updating...</div>
      ) : error ? (
        <div className="error" style={{textAlign:'center', color:'red'}}>{error}</div>
      ) : (
        <main>
          <OddsSection id="odd15" title="ODD 1.5" tips={odd15} />
          <OddsSection id="odd2" title="ODD 2" tips={odd2} />
        </main>
      )}
      
      {/* Passing the live rate to the About component */}
      <About liveWinRate={calculatedRate} />
      
      <Contact />
      <Footer />
    </>
  );
}