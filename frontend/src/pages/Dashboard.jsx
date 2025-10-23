import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import RequestList from "../components/RequestList";
import SupervisorResponseForm from "../components/SupervisorResponseForm";

const Dashboard = () => {
  const [requests, setRequests] = useState([]);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const fetchPendingRequests = async () => {
    try {
      const res = await axiosClient.get("/supervisor/pending");
      setRequests(res.data);
    } catch (err) {
      console.error("Error fetching requests:", err);
    }
  };

  useEffect(() => {
    fetchPendingRequests();
  }, []);

  const handleRequestSelect = (request) => {
    setSelectedRequest(request);
  };

  const handleResponseSubmit = async (id, answer) => {
    await axiosClient.post(`/supervisor/respond/${id}?answer=${answer}`);
    alert("Answer submitted successfully!");
    fetchPendingRequests();
    setSelectedRequest(null);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Pending Help Requests
              </h2>
              <p className="text-gray-600 text-sm">
                Review and respond to user inquiries
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-linear-to-r from-orange-500 to-red-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            <div className="bg-linear-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                All Requests
              </h3>
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "600px" }}>
              <RequestList requests={requests} onSelect={handleRequestSelect} />
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
            {selectedRequest ? (
              <>
                <div className="bg-linear-to-r from-blue-500 to-purple-600 px-6 py-4 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    Response Form
                  </h3>
                </div>
                <div className="overflow-y-auto" style={{ maxHeight: "600px" }}>
                  <SupervisorResponseForm
                    request={selectedRequest}
                    onSubmit={handleResponseSubmit}
                    onCancel={() => setSelectedRequest(null)}
                  />
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center space-y-4 p-8">
                  <div className="w-20 h-20 mx-auto bg-linear-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-600 font-medium mb-1">
                      No Request Selected
                    </p>
                    <p className="text-gray-400 text-sm">
                      Select a request from the list to respond
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
