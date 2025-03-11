import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeChars, setIncludeChars] = useState(false);
  const [includeAlphabets, setIncludeAlphabets] = useState(true);
  const [password, setPassword] = useState("");

  const generatePassword = () => { 
    let charset = "";
    if (includeAlphabets) charset += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (includeNumbers) charset += "0123456789";
    if (includeChars) charset += "@#$%^&*!";
    
    if (charset.length === 0) {
      setPassword("Select at least one option!");
      return;
    }

    let newPassword = "";
    for (let i = 0; i < length; i++) {
      newPassword += charset[Math.floor(Math.random() * charset.length)];
    }
    setPassword(newPassword);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Password Generator</h2>
      <input type="text" value={password} readOnly style={{ width: "250px" }} />

      <button onClick={() => navigator.clipboard.writeText(password)}>Copy</button>

      <div>
        <label>
          <input type="checkbox" checked={includeAlphabets} onChange={() => setIncludeAlphabets(!includeAlphabets)} />
          Alphabets
        </label>
        <label>
          <input type="checkbox" checked={includeNumbers} onChange={() => setIncludeNumbers(!includeNumbers)} />
          Numbers
        </label>
        <label>
          <input type="checkbox" checked={includeChars} onChange={() => setIncludeChars(!includeChars)} />
          Special Characters
        </label>
      </div>

      <div>
        <label>Password Length: {length}</label>
        <input type="range" min="8" max="12" value={length} onChange={(e) => setLength(e.target.value)} />
      </div>

      <button  onClick={generatePassword}>Generate Password</button>
    </div>
  );
}
