import React, { useState } from "react";

const vocabulary = [
  { french: "Bonjour", english: "Hello" },
  { french: "Merci", english: "Thank you" },
  { french: "Pomme", english: "Apple" },
];

export default function App() {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => (prev < vocabulary.length ? prev + 1 : prev));
  };

  const progress = Math.round((step / vocabulary.length) * 100);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-white p-6 rounded-2xl shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Vocabulary Practice</h1>
        {step < vocabulary.length ? (
          <div>
            <p className="text-xl mb-2">{vocabulary[step].french}</p>
            <button
              onClick={handleNext}
              className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600"
            >
              Show English & Next
            </button>
          </div>
        ) : (
          <p className="text-lg font-semibold text-green-600">You’ve finished!</p>
        )}
        <div className="w-full bg-gray-200 h-4 mt-6 rounded-xl overflow-hidden">
          <div
            className="bg-blue-500 h-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="mt-2 text-sm text-gray-600">{progress}% completed</p>
      </div>
    </div>
  );
}
