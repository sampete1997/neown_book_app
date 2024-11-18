import React, { useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const LoaderSpinner = () => {
  return (
    <Box
      style={{
        position: "fixed", // Fixed to the screen
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black background
        zIndex: 9999, // Ensure it's on top of everything else
      }}
    >
      <CircularProgress size={85}/>
    </Box>
  );
};

export default LoaderSpinner;
