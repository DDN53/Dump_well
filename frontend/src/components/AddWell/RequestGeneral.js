import React from "react";

function RequestGeneral(props) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[50%] pr-20 border-r border-gray-400">
        {/* Request Mode */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Request Mode : </p>
          <input
            placeholder="Request Mode"
            name="RequestMode"
            value={props.formData.RequestMode}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Funding criteria */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Funding criteria : </p>
          <input
            placeholder="Funding criteria"
            name="Fundingcriteria"
            value={props.formData.Fundingcriteria}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Well Category */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Well Category : </p>
          <input
            placeholder="Well Category"
            name="WellCategory"
            value={props.formData.WellCategory}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Agent Name */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Agent Name : </p>
          <input
            placeholder="Agent Name"
            name="AgentName"
            value={props.formData.AgentName}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Project Name */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Project Name : </p>
          <input
            placeholder="Project Name"
            name="ProjectName"
            value={props.formData.ProjectName}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Contact Order No */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Contact Order No : </p>
          <input
            placeholder="Contact Order No"
            name="ContactOrderNo"
            value={props.formData.ContactOrderNo}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
      </div>

      {/* 2nd row */}
      <div className="w-[50%] pr-20 pl-5">
        {/* Distance to Nearest Public Perinial Well */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Distance to Nearest Public Perinial Well : </p>
          <input
            placeholder="Distance to Nearest Public Perinial Well"
            name="DistancetoNearestPublicPerinialWell"
            value={props.formData.DistancetoNearestPublicPerinialWell}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* No. Of Houses Within 500M */}
        <div className="flex items-center mb-1">
          <p className="mr-2">No. Of Houses Within 500M : </p>
          <input
            placeholder="No. Of Houses Within 500M"
            name="NoOfHousesWithin500M"
            value={props.formData.NoOfHousesWithin500M}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Concent Of P.S. For Maintenance */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Concent Of P.S. For Maintenance : </p>
          <input
            placeholder="Concent Of P.S. For Maintenance"
            name="ConcentOfPSForMaintenance"
            value={props.formData.ConcentOfPSForMaintenance}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Consumer Society Formed */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Consumer Society Formed : </p>
          <input
            placeholder="Consumer Society Formed"
            name="ConsumerSocietyFormed"
            value={props.formData.ConsumerSocietyFormed}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Name of Care Taker */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Name of Care Taker : </p>
          <input
            placeholder="Name of Care Taker"
            name="NameofCareTaker"
            value={props.formData.NameofCareTaker}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* Address of Care Taker */}
        <div className="flex mb-1">
          <div className="mt-2 mr-2">Address of Care Taker : </div>
          <div className="flex flex-col ml-auto">
            <input
              placeholder="Address of Care Taker line1"
              name="AddressofCareTakerline1"
              value={props.formData.AddressofCareTakerline1}
              onChange={props.handleChange}
              type="text"
              className="p-2 mb-1 ml-auto border border-gray-500 rounded-md"
            />
            <input
              placeholder="Address of Care Taker line2"
              name="AddressofCareTakerline2"
              value={props.formData.AddressofCareTakerline2}
              onChange={props.handleChange}
              type="text"
              className="p-2 mb-1 ml-auto border border-gray-500 rounded-md"
            />
            <input
              placeholder="Address of Care Taker line3"
              name="AddressofCareTakerline3"
              value={props.formData.AddressofCareTakerline3}
              onChange={props.handleChange}
              type="text"
              className="p-2 ml-auto border border-gray-500 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestGeneral;
