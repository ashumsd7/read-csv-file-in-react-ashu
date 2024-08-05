import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';

function  CsvDataComponent() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch and parse the CSV data
    const fetchCsvData = async () => {
      try {
        console.log("response 2");
        const response = await axios.get('https://support.staffbase.com/hc/en-us/article_attachments/360009197091/email-password-recovery-code.csv', {
          responseType: 'blob', // Important for downloading files
        });
        console.log("response",response);
        const text = await response.data.text();
        console.log("text",text);
        
        // Parse CSV data using PapaParse
        Papa.parse(text, {
          header: true, // Assume the first row is the header
          complete: (result) => {
            setData(result.data);
          },
          error: (error) => {
            setError(error.message);
          },
        });
      } catch (err) {
        setError(err.message);
      }
    };

    fetchCsvData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Loaded CSV Data</h2>
      <table>
        <thead>
          <tr>
            {data.length > 0 &&
              Object.keys(data[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, cellIndex) => (
                <td key={cellIndex}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default CsvDataComponent;