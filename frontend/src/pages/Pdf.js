import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import ChemicalData from "../components/ViewWell/ChemicalData";
import GeologyOverburden from "../components/ViewWell/GeologyOverburden";
import GeologyRock from "../components/ViewWell/GeologyRock";
import PumpInstalation from "../components/ViewWell/PumpInstalation";
import RequestGeneral from "../components/ViewWell/RequestGeneral";
import Test from "../components/ViewWell/Test";
import api from "../api/index";
import { usePDF } from "react-to-pdf";
import { getUserDataFromToken } from "../utils/userValidation";

function ViewWell() {
  const wellId = useSelector((state) => state.wellId);
  // for use nav
  const navigate = useNavigate();

  const currentDate = new Date();
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
  const formattedDate = formatter.format(currentDate);
  const sanitizedDate = formattedDate.replace(/[/:]/g, "_");
  const { toPDF, targetRef } = usePDF({
    filename: `Well_Information_${wellId} ,${sanitizedDate}.pdf`,
  });
  const monthFormatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const monthFormattedDate = monthFormatter.format(currentDate);
  const sanitizedMonthDate = monthFormattedDate.replace(/[/:]/g, "/");

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.viewwell(wellId);
      setFormData(data?.data);
    };
    fetchData();
  }, [wellId]);

  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);

  const allowedRoles = ["Super", "Editor", "Admin", "Viewer"];
  if (!allowedRoles.includes(user.userRole)) {
    return <Navigate to="/404" />;
  }

  //   useEffect(() => {
  //     toPDF();
  //   }, []);

  if (!wellId) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="">
      <div
        className="min-h-full min-w-[1080px]"
        style={{ minHeight: "calc(100vh - 347px)" }}
      >
        <div className="flex  w-[100%] my-5 px-10">
          <div
            onClick={() => navigate("/wellinfo")}
            className="flex justify-center w-32 p-2 ml-auto mr-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Cancel
          </div>
          <button
            className="flex justify-center w-32 p-2 mr-3 text-white bg-red-500 rounded-lg hover:bg-red-700"
            onClick={(e) => {
              e.preventDefault();
              toPDF();
            }}
          >
            Download PDF
          </button>
        </div>
        <div ref={targetRef}>
          <form>
            <div className="flex mb-3 mx-auto w-[95%]">
              {sanitizedMonthDate}
            </div>
            <div className=" border border-gray-400 w-[95%] h-[500%] shadow-xl mx-auto p-6 flex flex-col">
              <div
                className={`p-2 text-white my-3 flex border border-white  bg-gray-700 `}
              >
                Well Information | WEll Number - (
                <div className="">{wellId}</div>)
              </div>
              <div className="flex border-b border-gray-400 ">
                <div className="w-[50%]  p-3 flex items-center">
                  <p className="mr-2">New Well No : </p>
                  <div className="h-10 p-2 border border-gray-500 rounded-md w-52">
                    {formData.newWellNo}
                  </div>
                </div>
                <div className="w-[50%]  p-3 flex items-center">
                  <p className="mr-2">Old Well No : </p>
                  <div className="h-10 p-2 border border-gray-500 rounded-md w-52">
                    {formData.OldWellNo}
                  </div>
                </div>
              </div>
              <div className="flex">
                {/* 1st row */}
                <div className="w-[33%] border-r border-gray-400 p-3 ml-auto">
                  {/* project office */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Project Office : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.ProjectOffice}
                    </div>
                  </div>
                  {/* Location */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Location : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.Location}
                    </div>
                  </div>
                  {/* Electorate */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Electorate : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.Electorate}
                    </div>
                  </div>
                  {/* Village */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Village : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.Village}
                    </div>
                  </div>
                  {/* User Type */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">User Type : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.UserType}
                    </div>
                  </div>
                </div>
                {/* 2nd row */}
                <div className="p-3 w-[34%] border-r border-gray-400">
                  {/* Province */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Province : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.selectedProvince}
                    </div>
                  </div>
                  {/* District */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">District : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.selectedDistrict}
                    </div>
                  </div>
                  {/* DS Division */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">DS Division : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.selectedDSDivision}
                    </div>
                  </div>
                  {/* GS Division */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">GS Division : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.GSDivision}
                    </div>
                  </div>

                  {/* Scheme Name */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Scheme Name : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.SchemeName}
                    </div>
                  </div>
                </div>
                {/* 3rd row */}
                <div className="p-3">
                  {/* Topo sheet */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Topo Sheet : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.TopoSheet}
                    </div>
                  </div>
                  {/* Scale Topo Sheet */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Scale Topo Sheet : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.ScaleTopoSheet}
                    </div>
                  </div>
                  {/* Geology Map */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Geology Map : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.GeologyMap}
                    </div>
                  </div>
                  {/* Scale Geology Map */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Scale Geology Map : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.ScaleGeologyMap}
                    </div>
                  </div>
                  {/* Depth to Bottom of Soil Layer */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Depth to The Bottom of Soil Layer : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.DepthtoTheBottomofSoilLayer}
                    </div>
                  </div>
                  {/* Highly Weathered Rock */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Highly Weathered Rock : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.HighlyWeatheredRock}
                    </div>
                  </div>
                  {/* Weathered Rock */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Weathered Rock : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.WeatheredRock}
                    </div>
                  </div>
                  {/* Geologist */}
                  <div className="flex items-center mb-1">
                    <p className="mr-2">Geologist : </p>
                    <div className="w-[198px] h-10 p-2 ml-auto border border-gray-500 rounded-md">
                      {formData.Geologist}
                    </div>
                  </div>
                </div>
              </div>
              {/* geo location info */}
              <div className="flex py-3 border-t border-gray-500">
                {/* 1st row */}
                <div className="w-[50%] ">
                  <div className="flex">
                    <p>Co-ordinates Geographic</p>
                    <div className="flex ml-8">
                      <div className="flex items-center">
                        <p>X : </p>
                        <p className="w-24 h-10 p-2 ml-2 border border-gray-500 rounded-md">
                          {formData.X}
                        </p>
                      </div>
                      <div className="flex items-center ml-3">
                        <p>Y : </p>
                        <p className="w-24 h-10 p-2 ml-2 border border-gray-500 rounded-md">
                          {formData.Y}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center mt-2">
                    <p>Elevation</p>
                    <p className="w-24 h-10 p-2 ml-2 border border-gray-500 rounded-md">
                      {formData.Elevation}
                    </p>
                  </div>
                </div>
                {/* 2nd row */}
                <div className="w-[50%] ">
                  <div className="flex items-center">
                    <p>Local Metric</p>
                    <p className="w-24 h-10 p-2 ml-2 border border-gray-500 rounded-md">
                      {formData.LocalMetric1}
                    </p>
                    <p className="w-24 h-10 p-2 ml-2 border border-gray-500 rounded-md">
                      {formData.LocalMetric2}
                    </p>
                  </div>

                  <div className="flex mt-2">
                    <p>Method of survey</p>
                    <p className="h-10 p-2 ml-2 border border-gray-500 rounded-md w-36">
                      {formData.Methodofsurvey}
                    </p>
                  </div>
                </div>
              </div>

              {/* Selection section */}
              <div className="">
                <div
                  className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                >
                  ChemicalData
                </div>
                <div>
                  <div className="w-[100%] mt-4">
                    {<ChemicalData formData={formData} />}
                  </div>
                  <div
                    className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                  >
                    GeologyOverburden
                  </div>

                  <div className="w-[100%] mt-4">
                    {<GeologyOverburden formData={formData} />}
                  </div>
                  <div
                    className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                  >
                    GeologyRock
                  </div>
                  <div className="w-[100%] mt-4">
                    {<GeologyRock formData={formData} />}
                  </div>
                  <div
                    className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                  >
                    PumpInstalation
                  </div>
                  <div className="w-[100%] mt-4">
                    {<PumpInstalation formData={formData} />}
                  </div>
                  <div
                    className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                  >
                    RequestGeneral
                  </div>
                  <div className="w-[100%] mt-4">
                    {<RequestGeneral formData={formData} />}
                  </div>
                  <div
                    className={`p-2 text-white my-3  border border-white  bg-gray-700 `}
                  >
                    Test
                  </div>
                  <div className="w-[100%] mt-4">
                    {<Test formData={formData} />}
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewWell;
//done
