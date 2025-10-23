import React from "react";

const RequestList = ({ requests, onSelect }) => {
  if (!requests.length) {
    return <p>No pending requests found.</p>;
  }

  return (
    <div className="space-y-3 p-6">
      {requests.map((req) => (
        <div
          key={req.id}
          onClick={() => onSelect(req)}
          className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 p-4 border border-gray-200 hover:border-blue-400 cursor-pointer group"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center shrink-0">
                <span className="text-white text-xs font-bold">#{req.id}</span>
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-gray-900 text-sm font-medium truncate group-hover:text-blue-600 transition-colors">
                  {req.question}
                </p>
                <p className="text-gray-500 text-xs mt-0.5">
                  Request ID: {req.id}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  req.status === "pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : req.status === "completed"
                    ? "bg-green-100 text-green-700"
                    : req.status === "in-progress"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                {req.status}
              </span>

              <svg
                className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RequestList;
