import React, { useState } from 'react';
import Home from './components/Home';
import TryOn from './components/TryOn';

export default function App() {
  const [mode, setMode] = useState(null);

  return (
    <div>
      {!mode ? (
        <Home onSelect={setMode} />
      ) : (
        <TryOn mode={mode} goBack={() => setMode(null)} />
      )}
    </div>
  );
}
