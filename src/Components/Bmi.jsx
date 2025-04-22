import React,{useRef,useState} from 'react'

const Bmi = () => {

  const heightref = useRef();
  const weightref = useRef();
  const [bmi, setBmi] = useState(null)
  const [category, setCategory] = useState('')

  const calculate = ()=>{
    const height = parseFloat(heightref.current.value)
    const weight = parseFloat(weightref.current.value)

  if(!height || !weight || height<=0 || weight<=0)
  {
    alert("Please Enter a valid height and weight")
    return 0;
  }

  const bmivalue = (weight/(height*height))*703;
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

  const reload = ()=>{
    setCategory('')
    setBmi(null);
    heightref.current.value = ''
    weightref.current.value = ''
  }

  return (
    <>
        <div className='flex justify-center items-center min-h-screen'>
            <div className='bg-gradient-to-br from-slate-200 via-gray-300 to-slate-400 w-9/41 h-105 border border-gray-300 rounded-xl shadow-2xl text-black'>
                <h1 className='font-semibold font-serif text-xl text-center mt-9' >BMI Calculator</h1>
                <h3 className='text-slate-900 ml-10 mt-5'>Weight(lbs)</h3>
                <input ref={weightref} className='w-62 max-w-full ml-10 mt-1 text-900 border-2 border-slate-800' type='number' placeholder='Enter Weight in lbs' min="1" ></input>
                <h3 className='text-slate-900 ml-10 mt-3'>Height(inches)</h3>
                <input ref={heightref} className='w-62 max-w-full ml-10 mt-1 text-900 border-2 border-slate-800' type='number' placeholder='Enter Height in inches' min="1" ></input>
                <button onClick={calculate} className='hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-62 max-w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg h-9 mt-7 ml-10'>Submit</button>
                <button onClick={reload} className='hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 ease-in-out transform hover:scale-105 cursor-pointer w-62 max-w-full bg-gradient-to-r from-gray-600 to-gray-800 text-white font-semibold rounded-lg h-9 mt-3 ml-10'>Reload</button>

                {bmi && (
              <div className='font-semibold ml-20 mt-4 text-gray-700'>
                <p>Your BMI is : {bmi} </p> 
                <p >You are {category} </p>  
              </div>
                )}

            </div>
        </div>
    </>
  )
}

export default Bmi
