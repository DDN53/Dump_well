import React from "react";

function ChemicalData(props) {
  return (
    <div>
      <div className="flex w-[100%]">
        <div className="w-[25%] pr-20 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Date : </p>
            <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md w-28">
              {props.formData.SampleDate}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Depth : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.SampleDepth}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sample Time : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.SampleTime}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Color : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Color}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Turbidity : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Turbidity}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">PH : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.PH}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Elecon : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Elecon}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Chlorides : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Chlorides}
            </p>
          </div>
        </div>

        {/* 2nd row */}
        <div className="w-[25%] pr-20 pl-4 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totalk : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Totalk}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Free Amonia : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.FreeAmonia}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Albamonia : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Albamonia}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Nitrates : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Nitrates}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Nitrite : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Nitrite}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Fluorides : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Fluorides}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Phosphate : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Phosphate}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totdissol : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Totdissol}
            </p>
          </div>
        </div>

        {/* 3rd row */}
        <div className="w-[25%] pr-20 pl-4 border-r border-gray-400">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Tothard : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Tothard}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Calchard : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Calchard}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totiron : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Totiron}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Magnesium : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Magnesium}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Sulphate : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Sulphate}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Manganese : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Manganese}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Dissiron : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Dissiron}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totcoli : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Totcoli}
            </p>
          </div>
        </div>

        {/* 4th row */}
        <div className="w-[25%] pr-20 pl-5">
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Faecalcoli : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Faecalcoli}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Filtiron : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Filtiron}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Totresidue : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Totresidue}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Calcium : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Calcium}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Oxygen : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Oxygen}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Hysul : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Hysul}
            </p>
          </div>
          {/*  */}
          <div className="flex items-center mb-1">
            <p className="mr-2">Fixediron : </p>
            <p className="w-24 h-10 p-2 ml-auto border border-gray-500 rounded-md">
              {props.formData.Fixediron}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChemicalData;
