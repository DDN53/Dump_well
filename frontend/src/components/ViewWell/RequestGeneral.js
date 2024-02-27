import React from "react";

function RequestGeneral(props) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[50%] pr-20 border-r border-gray-400">
        {/* Request Mode */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Request Mode : </p>
          <p className="p-2 ml-auto border w-[197px] h-10 border-gray-500 rounded-md">
            {props.formData.RequestMode}
          </p>
        </div>
        {/* Funding criteria */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Funding criteria : </p>
          <p className="p-2 ml-auto w-[197px] h-10 border border-gray-500 rounded-md">
            {props.formData.Fundingcriteria}
          </p>
        </div>
        {/* Well Category */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Well Category : </p>
          <p className="p-2 ml-auto border w-[197px] h-10 border-gray-500 rounded-md">
            {props.formData.WellCategory}
          </p>
        </div>
        {/* Agent Name */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Agent Name : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.AgentName}
          </p>
        </div>
        {/* Project Name */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Project Name : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.ProjectName}
          </p>
        </div>
        {/* Contact Order No */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Contact Order No : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.ContactOrderNo}
          </p>
        </div>
      </div>

      {/* 2nd row */}
      <div className="w-[50%] pr-20 pl-5">
        {/* Distance to Nearest Public Perinial Well */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Distance to Nearest Public Perinial Well : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.DistancetoNearestPublicPerinialWell}
          </p>
        </div>
        {/* No. Of Houses Within 500M */}
        <div className="flex items-center mb-1">
          <p className="mr-2">No. Of Houses Within 500M : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.NoOfHousesWithin500M}
          </p>
        </div>
        {/* Concent Of P.S. For Maintenance */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Concent Of P.S. For Maintenance : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.ConcentOfPSForMaintenance}
          </p>
        </div>
        {/* Consumer Society Formed */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Consumer Society Formed : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.ConsumerSocietyFormed}
          </p>
        </div>
        {/* Name of Care Taker */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Name of Care Taker : </p>
          <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
            {props.formData.NameofCareTaker}
          </p>
        </div>
        {/* Address of Care Taker */}
        <div className="flex mb-1">
          <div className="mt-2 mr-2">Address of Care Taker : </div>
          <div className="flex flex-col ml-auto">
            <p className="p-2 mb-1 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
              {props.formData.AddressofCareTakerline1}
            </p>
            <p className="p-2 mb-1 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
              {props.formData.AddressofCareTakerline2}
            </p>
            <p className="p-2 w-[197px] h-10 ml-auto border border-gray-500 rounded-md">
              {props.formData.AddressofCareTakerline3}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequestGeneral;
