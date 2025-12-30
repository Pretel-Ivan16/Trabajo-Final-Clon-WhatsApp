import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import ChatScreen from "./screens/ChatScreen/ChatScreen";
import LoadingScreen from "./screens/LoadingScreen/LoadingScreen";
import ChatDownload from "./components/ChatDownload/ChatDownload";
import React, { useEffect, useState } from "react";

export default function App() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigate("/chat", { replace: true });
  }, []);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <Layout>
      <Routes>
        <Route path="/chat" element={<ChatDownload />} />
        <Route path="/chat/:id" element={<ChatScreen />} />
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Routes>
    </Layout>
  );
}
