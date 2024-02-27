import React from "react";

function PumpInstalation(props) {
  return (
    <div className="flex-col w-[40%] mx-auto">
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">SWL (m) : </p>
        <input
          placeholder="SWL"
          name="SWL"
          value={props.formData.SWL}
          onChange={props.handleChange}
          type="text"
          className="p-2 ml-auto border border-gray-500 rounded-md w-52"
        />
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Installed Date : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Pedestal</p>
          <input
            placeholder="Installed Date Pedestal"
            name="InstalledDatePedestal"
            value={props.formData.InstalledDatePedestal}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-xs">Pump</p>
          <input
            placeholder="InstalledDate Pump"
            name="InstalledDatePump"
            value={props.formData.InstalledDatePump}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 ml-4 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Pump : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <input
            placeholder="Pump Type"
            name="PumpType"
            value={props.formData.PumpType}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-xs">Head No</p>
          <input
            placeholder="Pump Head No"
            name="PumpHeadNo"
            value={props.formData.PumpHeadNo}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 ml-4 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Cylinder : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <input
            placeholder="Cylinder Type"
            name="CylinderType"
            value={props.formData.CylinderType}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-xs">Depth</p>
          <input
            placeholder="Cylinder Depth"
            name="CylinderDepth"
            value={props.formData.CylinderDepth}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 ml-4 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Riser Pipe : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <input
            placeholder="Riser Pipe Type"
            name="RiserPipeType"
            value={props.formData.RiserPipeType}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-xs">Length</p>
          <input
            placeholder="Riser Pipe Length"
            name="RiserPipeLength"
            value={props.formData.RiserPipeLength}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 ml-4 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mb-2">
        <p className="mr-2">Connec Rod : </p>
        <div className="ml-auto text-center">
          <p className="text-xs">Type</p>
          <input
            placeholder="Connec Rod Type"
            name="ConnecRodType"
            value={props.formData.ConnecRodType}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 border border-gray-500 rounded-md"
          />
        </div>
        <div className="text-center">
          <p className="text-xs">Length</p>
          <input
            placeholder="Connec Rod Length"
            name="ConnecRodLength"
            value={props.formData.ConnecRodLength}
            onChange={props.handleChange}
            type="text"
            className="w-24 p-2 ml-4 border border-gray-500 rounded-md"
          />
        </div>
      </div>
      {/*  */}
      <div className="flex items-center mt-6">
        <p className="mr-2">Remarks : </p>
        <input
          placeholder="Remarks"
          name="Remarks"
          value={props.formData.Remarks}
          onChange={props.handleChange}
          type="text"
          className="p-2 ml-auto border border-gray-500 rounded-md w-52"
        />
      </div>
    </div>
  );
}

export default PumpInstalation;
