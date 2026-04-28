import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import HomePage from "@/pages/HomePage";
import ServiceDetailPage from "@/pages/ServiceDetailPage";

function App() {
  return (
    <div className="App bg-[#05080f] text-white min-h-screen">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:slug" element={<ServiceDetailPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer />
        <WhatsAppFloat />
        <Toaster
          position="top-center"
          theme="dark"
          toastOptions={{
            style: {
              background: "#0f1b2e",
              border: "1px solid rgba(0,255,156,0.3)",
              color: "#fff",
              fontFamily: "Manrope, sans-serif",
            },
          }}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
