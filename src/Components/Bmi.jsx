import React, { useRef, useState } from 'react';

const Bmi = () => {
  const heightref = useRef();
  const weightref = useRef();
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');

  const calculate = () => {
    const height = parseFloat(heightref.current.value);
    const weight = parseFloat(weightref.current.value);

    if (!height || !weight || height <= 0 || weight <= 0) {
      alert('Please Enter a valid height and weight');
      return 0;
    }

    const bmivalue = (weight / (height * height)) * 703;
    setBmi(bmivalue.toFixed(2));

    let status = '';
    if (bmivalue < 18.5) {
      status = 'Underweight';
    } else if (bmivalue >= 18.5 && bmivalue < 25) {
      status = 'Normal weight';
    } else if (bmivalue >= 25 && bmivalue < 30) {
      status = 'Overweight';
    } else {
      status = 'Obese';
    }
    setCategory(status);
  };

  const reload = () => {
    setCategory('');
    setBmi(null);
    heightref.current.value = '';
    weightref.current.value = '';
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-blue-100">
        <div className="bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400 w-[90%] max-w-md p-6 sm:p-8 rounded-xl shadow-2xl border border-gray-300 text-black">
          <h1 className="font-semibold font-serif text-xl sm:text-2xl text-center mt-2">BMI Calculator</h1>

          <h3 className="text-slate-900 mt-6">Weight(lbs)</h3>
          <input
            ref={weightref}
            className="w-full mt-1 px-3 py-2 border-2 border-slate-800 text-black rounded"
            type="number"
            placeholder="Enter Weight in lbs"
            min="1"
          />

          <h3 className="text-slate-900 mt-4">Height(inches)</h3>
          <input
            ref={heightref}
            className="w-full mt-1 px-3 py-2 border-2 border-slate-800 text-black rounded"
            type="number"
            placeholder="Enter Height in inches"
            min="1"
          />

          <button
            onClick={calculate}
            className="hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg h-9 mt-6"
          >
            Submit
          </button>

          <button
            onClick={reload}
            className="hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg h-9 mt-3"
          >
            Reload
          </button>

          {bmi && (
            <div className="font-semibold text-center mt-5 text-gray-700">
              <p>Your BMI is: {bmi}</p>
              <p>You are {category}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Bmi;
