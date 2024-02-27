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
import { getUserDataFromToken } from "../utils/userValidation";

function ViewWell() {
  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);
  //for change tabs
  const [ChangeTab, setChangeTab] = useState("ChemicalData");
  const wellId = useSelector((state) => state.wellId);
  // for use nav
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.viewwell(wellId);
      setFormData(data?.data);
    };
    fetchData();
  }, [wellId]);

  console.log(formData);

  if (!wellId) {
    return <Navigate to="/404" />;
  }

  const allowedRoles = ["Super", "Editor", "Admin", "Viewer"];
  if (!allowedRoles.includes(user.userRole)) {
    return <Navigate to="/404" />;
  }

  const handleDownloadPDF = () => {
    const pdfPage = window.open("/pdf", "_blank");
    pdfPage?.addEventListener("load", () => {
      pdfPage?.postMessage({ type: "downloadPDF" }, "*");
    });
    setTimeout(() => {
      pdfPage?.close();
    }, 2000);
  };
  const handleCreatePDF = () => {
    navigate("/pdf");
  };

  return (
    <div className="min-h-full" style={{ minHeight: "calc(100vh - 347px)" }}>
      <div>
        <form>
          <div className=" border border-gray-400 w-[95%] h-[500%] shadow-xl mx-auto p-6 flex flex-col">
            <button
              className="w-12 h-12 p-2 ml-auto text-3xl text-black rounded-full hover:bg-gray-300 hover:text-white focus:outline-none"
              onClick={() => navigate("/wellinfo")}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="flex border-b border-gray-400 ">
              <div className="w-[50%]  p-3 flex items-center">
                <p className="mr-2">New Well No : </p>
                <input
                  disabled
                  placeholder="New Well No"
                  name="newWellNo"
                  value={formData.newWellNo}
                  type="text"
                  className="p-2 border border-gray-500 rounded-md"
                />
              </div>
              <div className="w-[50%]  p-3 flex items-center">
                <p className="mr-2">Old Well No : </p>
                <input
                  disabled
                  placeholder="Old Well No"
                  name="OldWellNo"
                  value={formData.OldWellNo}
                  type="text"
                  className="p-2 border border-gray-500 rounded-md"
                />
              </div>
            </div>
            <div className="flex">
              {/* 1st row */}
              <div className="w-[33%] border-r border-gray-400 p-3 ml-auto">
                {/* project office */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Project Office : </p>
                  <input
                    disabled
                    placeholder="Project Office"
                    name="ProjectOffice"
                    value={formData.ProjectOffice}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Location */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Location : </p>
                  <input
                    disabled
                    placeholder="Location"
                    name="Location"
                    value={formData.Location}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Electorate */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Electorate : </p>
                  <input
                    disabled
                    placeholder="Electorate"
                    name="Electorate"
                    value={formData.Electorate}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Village */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Village : </p>
                  <input
                    disabled
                    placeholder="Village"
                    name="Village"
                    value={formData.Village}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* User Type */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">User Type : </p>
                  <input
                    disabled
                    placeholder="User Type"
                    name="UserType"
                    value={formData.UserType}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </div>
              {/* 2nd row */}
              <div className="p-3 w-[34%] border-r border-gray-400">
                {/* Province */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Province : </p>
                  <input
                    disabled
                    type="text"
                    value={formData.selectedProvince}
                    className="p-2 ml-auto border border-gray-500 rounded-md w-[200px]"
                  ></input>
                </div>
                {/* District */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">District : </p>
                  <input
                    disabled
                    type="text"
                    value={formData.selectedDistrict}
                    className="p-2 ml-auto border border-gray-500 rounded-md  w-[200px]"
                  ></input>
                </div>
                {/* DS Division */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">DS Division : </p>
                  <input
                    disabled
                    type="text"
                    value={formData.selectedDSDivision}
                    className="p-2 ml-auto border border-gray-500 rounded-md  w-[200px]"
                  ></input>
                </div>
                {/* GS Division */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">GS Division : </p>
                  <input
                    disabled
                    placeholder="GS Division"
                    name="GSDivision"
                    value={formData.GSDivision}
                    type="text"
                    ml-auto
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>

                {/* Scheme Name */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scheme Name : </p>
                  <input
                    disabled
                    placeholder="Scheme Name"
                    name="SchemeName"
                    value={formData.SchemeName}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </div>
              {/* 3rd row */}
              <div className="p-3">
                {/* Topo sheet */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Topo Sheet : </p>
                  <input
                    disabled
                    placeholder="Topo Sheet"
                    name="TopoSheet"
                    value={formData.TopoSheet}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Scale Topo Sheet */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scale Topo Sheet : </p>
                  <input
                    disabled
                    placeholder="Scale Topo Sheet"
                    name="ScaleTopoSheet"
                    value={formData.ScaleTopoSheet}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Geology Map */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Geology Map : </p>
                  <input
                    disabled
                    placeholder="Geology Map"
                    name="GeologyMap"
                    value={formData.GeologyMap}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Scale Geology Map */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scale Geology Map : </p>
                  <input
                    disabled
                    placeholder="Scale Geology Map"
                    name="ScaleGeologyMap"
                    value={formData.ScaleGeologyMap}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Depth to Bottom of Soil Layer */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Depth to The Bottom of Soil Layer : </p>
                  <input
                    disabled
                    placeholder="Depth to The Bottom of Soil Layer"
                    name="DepthtoTheBottomofSoilLayer"
                    value={formData.DepthtoTheBottomofSoilLayer}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Highly Weathered Rock */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Highly Weathered Rock : </p>
                  <input
                    disabled
                    placeholder="Highly Weathered Rock"
                    name="HighlyWeatheredRock"
                    value={formData.HighlyWeatheredRock}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Weathered Rock */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Weathered Rock : </p>
                  <input
                    disabled
                    placeholder="Weathered Rock"
                    name="WeatheredRock"
                    value={formData.WeatheredRock}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Geologist */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Geologist : </p>
                  <input
                    disabled
                    placeholder="Geologist"
                    name="Geologist"
                    value={formData.Geologist}
                    type="text"
                    className="items-end p-2 ml-auto border border-gray-500 rounded-md"
                  />
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
                      <input
                        disabled
                        placeholder="X"
                        name="X"
                        value={formData.X}
                        type="text"
                        className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                      />
                    </div>
                    <div className="flex items-center ml-3">
                      <p>Y : </p>
                      <input
                        disabled
                        placeholder="Y"
                        name="Y"
                        value={formData.Y}
                        type="text"
                        className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p>Elevation</p>
                  <input
                    disabled
                    placeholder="Elevation"
                    name="Elevation"
                    value={formData.Elevation}
                    type="text"
                    className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                  />
                </div>
              </div>
              {/* 2nd row */}
              <div className="w-[50%] ">
                <div className="flex items-center">
                  <p>Local Metric</p>
                  <input
                    disabled
                    placeholder="LocalMetric1"
                    name="LocalMetric1"
                    value={formData.LocalMetric1}
                    type="text"
                    className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                  />
                  <input
                    disabled
                    placeholder="LocalMetric2"
                    name="LocalMetric2"
                    value={formData.LocalMetric2}
                    type="text"
                    className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex mt-2">
                  <p>Method of survey</p>
                  <input
                    disabled
                    placeholder="Method of survey"
                    name="Methodofsurvey"
                    value={formData.Methodofsurvey}
                    type="text"
                    className="p-2 ml-2 border border-gray-500 rounded-md w-36"
                  />
                </div>
              </div>
            </div>

            {/* Selection section */}
            <div className="py-3 border-t border-gray-500">
              <div className="w-[100%] justify-center flex">
                <div className="flex">
                  <div
                    className={`p-2 text-white  border border-white rounded-l-2xl  ${
                      ChangeTab === "ChemicalData"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("ChemicalData");
                    }}
                  >
                    ChemicalData
                  </div>
                  <div
                    className={`p-2 text-white  border border-white   ${
                      ChangeTab === "GeologyOverburden"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("GeologyOverburden");
                    }}
                  >
                    GeologyOverburden
                  </div>
                  <div
                    className={`p-2 text-white  border border-white   ${
                      ChangeTab === "GeologyRock"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("GeologyRock");
                    }}
                  >
                    GeologyRock
                  </div>
                  <div
                    className={`p-2 text-white  border border-white   ${
                      ChangeTab === "PumpInstalation"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("PumpInstalation");
                    }}
                  >
                    PumpInstalation
                  </div>
                  <div
                    className={`p-2 text-white  border border-white   ${
                      ChangeTab === "RequestGeneral"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("RequestGeneral");
                    }}
                  >
                    RequestGeneral
                  </div>
                  <div
                    className={`p-2 text-white  border border-white  rounded-r-2xl  ${
                      ChangeTab === "Test"
                        ? "bg-gray-500"
                        : "bg-gray-700 hover:bg-gray-500"
                    }`}
                    onClick={() => {
                      setChangeTab("Test");
                    }}
                  >
                    Test
                  </div>
                </div>
              </div>
              <div className="w-[100%] mt-4">
                {ChangeTab === "ChemicalData" && (
                  <ChemicalData formData={formData} />
                )}
                {ChangeTab === "GeologyOverburden" && (
                  <GeologyOverburden formData={formData} />
                )}
                {ChangeTab === "GeologyRock" && (
                  <GeologyRock formData={formData} />
                )}
                {ChangeTab === "PumpInstalation" && (
                  <PumpInstalation formData={formData} />
                )}
                {ChangeTab === "RequestGeneral" && (
                  <RequestGeneral formData={formData} />
                )}
                {ChangeTab === "Test" && <Test formData={formData} />}
              </div>
            </div>
          </div>
          <div className="flex  w-[100%] my-5 px-10">
            <div
              onClick={() => navigate("/wellinfo")}
              className="flex justify-center w-32 p-2 ml-auto mr-3 text-white bg-blue-500 rounded-lg hover:bg-blue-700"
            >
              Cancel
            </div>
            <div
              onClick={handleCreatePDF}
              className="flex justify-center w-32 p-2 mr-3 text-white bg-green-500 rounded-lg hover:bg-green-700"
            >
              Create PDF
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ViewWell;
//done
