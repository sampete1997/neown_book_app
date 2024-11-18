import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BooksTable from "./pages/BooksTable";
import Navbar from "./components/NavBar";
import Snackbar from "@mui/material/Snackbar";
import { useSelector, useDispatch } from "react-redux";
import { setToast } from "../src/redux/commonSlice";
import HomePage from "./pages/Home";
import ContactUs from "./pages/ContactUS";
import BooksRecommendation from "./pages/BookRecommendation";
import { CircularProgress } from "@mui/material";
import LoaderSpinner from "./components/LoaderSpinner";
function App() {
  const dispatch = useDispatch();
  const { isLoading, toast } = useSelector((state) => state.common);
  const handleClose = () => {
    dispatch(setToast({ isError: false, message: "" }));
  };
  return (
    <div>
      <Router>
        <div>
         { isLoading && <LoaderSpinner />}

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={toast?.isError || false}
            onClose={handleClose}
            autoHideDuration={4000}
            message={toast?.message || "Opps error?"}
          />
        </div>

        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/books" element={<BooksTable />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/Recommendations" element={<BooksRecommendation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
