const LearnedAnswers = ({ data }) => {
  const entries = Object.entries(data || {});

  if (!entries.length) {
    return <p>No learned answers yet.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
      {entries.map(([question, answer], index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-5 border border-gray-100"
        >
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-blue-600 text-xs font-bold">Q</span>
              </div>
              <p className="text-gray-800 text-sm font-medium leading-relaxed">
                {question}
              </p>
            </div>

            <div className="h-px bg-linear-to-r from-transparent via-gray-200 to-transparent"></div>

            <div className="flex items-start gap-2">
              <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-green-600 text-xs font-bold">A</span>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LearnedAnswers;
