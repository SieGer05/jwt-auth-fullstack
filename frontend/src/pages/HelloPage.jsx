import HelloHeader from "../components/HelloHeader";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HelloPage = () => {
  const fakeResponse = {
    Message: "Hello World, The ENDPOINT is protected!!",
    Status: "200 OK",
    Server: "Spring Boot JWT API",
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col">
      <Header />

      <div className="grow">
        <HelloHeader />

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 text-center border border-gray-200">
          <h2 className="text-xl font-semibold text-fuchsia-600 mb-2">
            Server Response
          </h2>
          <p className="text-gray-700 font-mono">
            {JSON.stringify(fakeResponse, null, 2)}
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-fuchsia-500 text-white px-4 py-2 rounded-md hover:bg-fuchsia-600 transition cursor-pointer">
            Test Protected Endpoint
          </button>
        </div>
      </div>

      <Footer position="left-1/2 -translate-x-1/2" />
    </div>
  );
};

export default HelloPage;
