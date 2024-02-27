import React from "react";

function PumpInstalation(props) {
  return (
    <div className="flex-col w-[40%] mx-auto">
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">SWL (m) : </p>
        <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md w-52">
          {props.formData.SWL}
        </p>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Installed Date : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Pedestal</p>
          <p className="w-24 h-10 p-2 border border-gray-500 rounded-md">
            {props.formData.InstalledDatePedestal}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs">Pump</p>
          <p className="w-24 h-10 p-2 ml-4 border border-gray-500 rounded-md">
            {props.formData.InstalledDatePump}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Pump : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <p className="w-24 h-10 p-2 border border-gray-500 rounded-md">
            {props.formData.PumpType}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs">Head No</p>
          <p className="w-24 h-10 p-2 ml-4 border border-gray-500 rounded-md">
            {props.formData.PumpHeadNo}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Cylinder : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <p className="w-24 h-10 p-2 border border-gray-500 rounded-md">
            {props.formData.CylinderType}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs">Depth</p>
          <p className="w-24 h-10 p-2 ml-4 border border-gray-500 rounded-md">
            {props.formData.CylinderDepth}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Riser Pipe : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <p className="w-24 h-10 p-2 border border-gray-500 rounded-md">
            {props.formData.RiserPipeType}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs">Length</p>
          <p className="w-24 h-10 p-2 ml-4 border border-gray-500 rounded-md">
            {props.formData.RiserPipeLength}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Connec Rod : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <p className="w-24 h-10 p-2 border border-gray-500 rounded-md">
            {props.formData.ConnecRodType}
          </p>
        </div>
        <div className="text-center">
          <p className="text-xs">Length</p>
          <p className="w-24 h-10 p-2 ml-4 border border-gray-500 rounded-md">
            {props.formData.ConnecRodLength}
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mt-6">
        <p className="mr-2">Remarks : </p>
        <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md w-52">
          {props.formData.Remarks}
        </p>
      </div>
    </div>
  );
}

export default PumpInstalation;
