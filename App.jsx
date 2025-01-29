import { useState } from "react";
import "./App.css";
import Button from "../components/Button";

function App() {
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState("");
  const [ismodelOpen, setIsmodelOpen] = useState(false);
  const [name, setName] = useState("");
  const handleSumbitb = (e) => {
    e.preventDefault();
    if (name === "") {
      setIsmodelOpen(true);
    } else {
      setIsmodelOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) {
      setError("Please select an option.");
    } else {
      setError("");
      alert(`You selected: ${selectedOption}`);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="space-y-1 h-max w-1/2 ">
        <div class="h-8 w-full bg-blue-100 flex-1 flex ">
          <div className=" font-bold italic  ">Particulars</div>
        </div>
        <div class="h-8 w-full bg-gray-100 flex-1 flex justify-center gap-5">
          <p className="flex justify-center">Unit Type </p>
          <input type="radio" className="ml-5" name="boolean" />
          <span>Simple</span>
          <input type="radio" name="boolean" />
          <span>Compound</span>
        </div>
        {/* <div className="bg-gray-100 ">
          <div className="h-8 w-full  flex-1 flex justify-center gap-5 px-10">
            Unit Name
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={20} // Restricts input to 20 characters
              placeholder="Enter text (max 20 chars)"
              className="outline-0 border w-1/3 p-1 h-6  m-1 text-left"
            />
          </div>
          <p className="text-red-600 text-center ">
            {text.length}/20 characters used
          </p>
        </div> */}
        <div className="h-8 w-full  flex-1 flex justify-center gap-5 px-10">
          <form
            className="flex flex-col gap-4 w-1/3 mx-auto"
            onSubmit={handleSumbitb}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value )}
              type="text"
              placeholder="enter name"
              className="outline-0 border w-1/3 p-1 h-6  m-1 text-left"
            />
            {ismodelOpen && <p className="text-red-500"> Name Error</p>}
            <button type= "sumbit">sumbit</button>
          </form>
          {/* <p className=" h-8 text-right pr-5 w-1/3 ">Applicable To </p>
          <div className="w-1/2 flex justify-left"> */}
          {/* <select className="bg-white flex justify-left h-5 m-1 ">
               <option value="" selected disabled>
                select unit
              </option>  */}
          <p className=" h-8 w-1/3 ">Applicable To </p>
          <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
            className="bg-white flex justify-center h-5 m-1"
          >
            <option value="" selected disabled>
              select an option
            </option>
            <option value="Article">Article</option>
            <option value="Weight">Weight</option>
            <option value="KM">KM</option>
            <option value="Rate">Fixed(Rate)</option>
            <option value="KM">Fixed(KM)</option>
          </select>
          {/* {error && <p className="text-red-500 mt-1">{error}</p>} */}
          {/* <button
            type="submit"
            className="mt-2 p-2 bg-blue-500 text-white rounded"
          >
            Submit
          </button> */}
          {/* </div> */}
        </div>
        {/* 
        <form onSubmit={handleSubmit} className="p-4">
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="border p-2 rounded w-full"
      >
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
      </select>
      {error && <p className="text-red-500 mt-1">{error}</p>}

      <button type="submit" className="mt-2 p-2 bg-blue-500 text-white rounded">
        Submit
      </button>
    </form> */}
        <div className="flex flex-col justify-center items-center w-full">
          <div class="h-20 w-full bg-gray-100 flex justify-center items-center gap-5">
            Details
            <textarea
              placeholder="Enter text"
              rows={3}
              className="border p-2 rounded w-1/2 h-17"
            />
          </div>
        </div>
        <div class="h-8 w-full bg-blue-100 flex-1 flex ">
          <div className=" font-bold italic  ">Mandatory Field</div>
        </div>
        <div class="h-8 w-full flex-4 flex flex-row gap-5 justify-center space-x-1 ">
          <Button type="submitb">Save</Button>
          <Button>Reset</Button>
          <Button>Console</Button>
          <Button>Print</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
