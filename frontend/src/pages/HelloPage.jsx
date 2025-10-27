import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HelloHeader from "../components/HelloHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ApiService } from "../api/api";

const HelloPage = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleTestEndpoint = async () => {
    setError("");
    const token = localStorage.getItem("jwt");
    if (!token) {
      setError("No JWT token found. Please login first.");
      return;
    }

    try {
      const res = await ApiService.getHello(token);
      setResponse(res.data);
    } catch (err) {
      setError(err.response?.data?.message || err.message);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    navigate("/");
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      <Header />

      <div className="grow">
        <HelloHeader />

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-fuchsia-600 mb-4">
            Server Response
          </h2>

          {response ? (
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
              <p className="text-gray-800 font-medium mb-2">
                <span className="text-green-500">Message:</span> {response.Message}
              </p>
            </div>
          ) : (
            <p className="text-gray-700 font-mono">
              {error || "Click the button below to test the protected endpoint"}
            </p>
          )}
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6">
          <button
            onClick={handleTestEndpoint}
            className="bg-fuchsia-500 text-white px-4 py-2 rounded-md hover:bg-fuchsia-600 transition cursor-pointer"
          >
            Test Protected Endpoint
          </button>
          
          <button
            onClick={handleLogout}
            className="bg-neutral-800 text-white px-4 py-2 rounded-md hover:bg-neutral-700 transition cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>

      <Footer position="left-1/2 -translate-x-1/2" />
    </div>
  );
};

export default HelloPage;