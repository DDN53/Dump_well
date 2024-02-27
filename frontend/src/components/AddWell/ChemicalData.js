import React from "react";

function ChemicalData(props) {
  return (
    <div>
      <div className="flex w-[100%]">
        <div className="w-[25%] pr-20 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Date : </p>
            <input
              placeholder="Sample Date"
              name="SampleDate"
              value={props.formData.SampleDate}
              onChange={props.handleChange}
              type="Date"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Depth : </p>
            <input
              placeholder="Sample Depth"
              name="SampleDepth"
              value={props.formData.SampleDepth}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Time : </p>
            <input
              placeholder="Sample Time"
              name="SampleTime"
              value={props.formData.SampleTime}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Color : </p>
            <input
              placeholder="Color"
              name="Color"
              value={props.formData.Color}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Turbidity : </p>
            <input
              placeholder="Turbidity"
              name="Turbidity"
              value={props.formData.Turbidity}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">PH : </p>
            <input
              placeholder="PH"
              name="PH"
              value={props.formData.PH}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Elecon : </p>
            <input
              placeholder="Elecon"
              name="Elecon"
              value={props.formData.Elecon}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Chlorides : </p>
            <input
              placeholder="Chlorides"
              name="Chlorides"
              value={props.formData.Chlorides}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
        </div>

        {/* 2nd row */}
        <div className="w-[25%] pr-20 pl-4 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totalk : </p>
            <input
              placeholder="Totalk"
              name="Totalk"
              value={props.formData.Totalk}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Free Amonia : </p>
            <input
              placeholder="Free Amonia"
              name="FreeAmonia"
              value={props.formData.FreeAmonia}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Albamonia : </p>
            <input
              placeholder="Albamonia"
              name="Albamonia"
              value={props.formData.Albamonia}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Nitrates : </p>
            <input
              placeholder="Nitrates"
              name="Nitrates"
              value={props.formData.Nitrates}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Nitrite : </p>
            <input
              placeholder="Nitrite"
              name="Nitrite"
              value={props.formData.Nitrite}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Fluorides : </p>
            <input
              placeholder="Fluorides"
              name="Fluorides"
              value={props.formData.Fluorides}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Phosphate : </p>
            <input
              placeholder="Phosphate"
              name="Phosphate"
              value={props.formData.Phosphate}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totdissol : </p>
            <input
              placeholder="Totdissol"
              name="Totdissol"
              value={props.formData.Totdissol}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
        </div>

        {/* 3rd row */}
        <div className="w-[25%] pr-20 pl-4 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Tothard : </p>
            <input
              placeholder="Tothard"
              name="Tothard"
              value={props.formData.Tothard}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Calchard : </p>
            <input
              placeholder="Calchard"
              name="Calchard"
              value={props.formData.Calchard}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totiron : </p>
            <input
              placeholder="Totiron"
              name="Totiron"
              value={props.formData.Totiron}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Magnesium : </p>
            <input
              placeholder="Magnesium"
              name="Magnesium"
              value={props.formData.Magnesium}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sulphate : </p>
            <input
              placeholder="Sulphate"
              name="Sulphate"
              value={props.formData.Sulphate}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Manganese : </p>
            <input
              placeholder="Manganese"
              name="Manganese"
              value={props.formData.Manganese}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Dissiron : </p>
            <input
              placeholder="Dissiron"
              name="Dissiron"
              value={props.formData.Dissiron}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totcoli : </p>
            <input
              placeholder="Totcoli"
              name="Totcoli"
              value={props.formData.Totcoli}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
        </div>

        {/* 4th row */}
        <div className="w-[25%] pr-20 pl-5">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Faecalcoli : </p>
            <input
              placeholder="Faecalcoli"
              name="Faecalcoli"
              value={props.formData.Faecalcoli}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Filtiron : </p>
            <input
              placeholder="Filtiron"
              name="Filtiron"
              value={props.formData.Filtiron}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totresidue : </p>
            <input
              placeholder="Totresidue"
              name="Totresidue"
              value={props.formData.Totresidue}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Calcium : </p>
            <input
              placeholder="Calcium"
              name="Calcium"
              value={props.formData.Calcium}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Oxygen : </p>
            <input
              placeholder="Oxygen"
              name="Oxygen"
              value={props.formData.Oxygen}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Hysul : </p>
            <input
              placeholder="Hysul"
              name="Hysul"
              value={props.formData.Hysul}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Fixediron : </p>
            <input
              placeholder="Fixediron"
              name="Fixediron"
              value={props.formData.Fixediron}
              onChange={props.handleChange}
              type="text"
              className="w-24 p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChemicalData;
