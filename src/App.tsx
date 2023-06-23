import { Box, useMediaQuery } from "@mui/material";

function App() {
  const matches = useMediaQuery("(min-height:600px)");

  return (
    <Box sx={{ background: matches ? "pink" : "blue" }}>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p>Click on the Vite and React logos to learn more</p>
    </Box>
  );
}

export default App;
