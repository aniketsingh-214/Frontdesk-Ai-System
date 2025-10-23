import { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import LearnedAnswers from "../components/LearnedAnswers";

const KnowledgeBase = () => {
  const [answers, setAnswers] = useState({});
  const [error, setError] = useState("");

  const fetchKnowledge = async () => {
    try {
      const res = await axiosClient.get("/ai/knowledge");
      setAnswers(res.data);
    } catch (err) {
      console.error("Error fetching knowledge base:", err);
      setError("Unable to fetch knowledge base data.");
    }
  };

  useEffect(() => {
    fetchKnowledge();
  }, []);

  return (
    <div className="min-h-screen bg-linear-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
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
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800">
                Knowledge Base
              </h2>
              <p className="text-gray-600 text-sm">
                Learned answers and frequently asked questions
              </p>
            </div>
          </div>
          <div className="h-1 w-24 bg-linear-to-r from-emerald-500 to-teal-600 rounded-full"></div>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
          {error ? (
            <div className="p-8">
              <div className="max-w-md mx-auto text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-red-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-red-600"
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
                  <p className="text-red-600 font-semibold text-lg mb-2">
                    Error Loading Knowledge Base
                  </p>
                  <p className="text-gray-600 text-sm">{error}</p>
                </div>
                <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium">
                  Try Again
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="bg-linear-to-r from-gray-50 to-gray-100 px-6 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    All Entries
                  </h3>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold">
                    {answers?.length || 0} items
                  </span>
                </div>
              </div>
              <div className="overflow-y-auto" style={{ maxHeight: "700px" }}>
                <LearnedAnswers data={answers} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
