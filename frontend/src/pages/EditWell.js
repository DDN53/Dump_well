import React, { useState, useEffect } from "react";
import { provinces, getDistrictsByProvince } from "../constants/Area";
import { districts, getDSDivisionByDistrict } from "../constants/dsDivisions";
import ChemicalData from "../components/AddWell/ChemicalData";
import GeologyOverburden from "../components/AddWell/GeologyOverburden";
import GeologyRock from "../components/AddWell/GeologyRock";
import PumpInstalation from "../components/AddWell/PumpInstalation";
import RequestGeneral from "../components/AddWell/RequestGeneral";
import Test from "../components/AddWell/Test";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import api from "../api/index";
import { getUserDataFromToken } from "../utils/userValidation";

function EditWell(props) {
  const userData = getUserDataFromToken().result;
  const [user, setUser] = useState(userData);
  // for page relaod
  useEffect(() => {
    const handleBeforeUnload = (event) => {
      const message =
        "Are you sure you want to leave? You may lose unsaved data.";
      event.returnValue = message;
      return message;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  //for change tabs
  const [ChangeTab, setChangeTab] = useState("ChemicalData");

  // for select province district gs
  const [selectedProvince, setSelectedProvince] = useState();
  const [selectedDistrict, setSelectedDistrict] = useState();
  const [selectedDSDivision, setSelectedDSDivision] = useState();

  const handleProvinceChange = (province) => {
    setSelectedProvince(province);
    setSelectedDistrict("");
    setSelectedDSDivision("");
  };

  const handleDistrictChange = (district) => {
    setSelectedDistrict(district);
    setSelectedDSDivision("");
  };

  useEffect(() => {
    if (selectedProvince) {
      setSelectedDistrict("");
    }
  }, [selectedProvince]);

  useEffect(() => {
    if (selectedDistrict) {
      setSelectedDSDivision("");
    }
  }, [selectedDistrict]);

  const navigate = useNavigate();
  const wellId = useSelector((state) => state.wellId);

  const [formData, setFormData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.viewwell(wellId);
        await setFormData(data?.data);
        setTimeout(() => {
          setSelectedProvince(data?.data.selectedProvince);
        }, 100);

        setTimeout(() => {
          setSelectedDistrict(data?.data.selectedDistrict);
        }, 200);

        setTimeout(() => {
          setSelectedDSDivision(data?.data.selectedDSDivision);
        }, 300);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [wellId]);

  const [wellIdExists, setWellIdExists] = useState(false);
  useEffect(() => {
    const checkWellId = async () => {
      try {
        if (wellId === formData.newWellNo) {
          setWellIdExists(false);
        } else {
          const data = await api.viewallwells();
          const wellExists = data?.data.some(
            (well) => well.newWellNo === formData.newWellNo
          );
          setWellIdExists(wellExists);
        }
      } catch (error) {
        console.log(error);
      }
    };
    checkWellId();
  }, [wellId, formData.newWellNo]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (!wellId) {
    return <Navigate to="/404" />;
  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    const a = {
      ...formData,
      selectedProvince,
      selectedDistrict,
      selectedDSDivision,
      wellId,
    };

    try {
      // await api.editwell(a);
      if (wellId === formData.newWellNo) {
        await api.editwell(a);
      } else {
        console.group(a);
        const cleanData = (({ id, updatedAt, wellId, ...rest }) => rest)(
          formData
        );
        await api.addwell(cleanData);
        await api.removewell({ newWellNo: wellId });
      }

      navigate("/wellinfo");
    } catch (error) {
      console.log(error);
    }
  };

  const allowedRoles = ["Super", "Editor", "Admin"];
  if (!allowedRoles.includes(user.userRole)) {
    return <Navigate to="/404" />;
  }

  return (
    <div className="min-h-full" style={{ minHeight: "calc(100vh - 347px)" }}>
      <div>
        <form onSubmit={handleSubmit}>
          <div className=" border border-gray-400 w-[95%] h-[500%] shadow-xl mx-auto p-6 flex flex-col">
            <button
              className="w-12 h-12 p-2 ml-auto text-3xl text-black rounded-full hover:bg-gray-300 hover:text-white focus:outline-none"
              onClick={() => navigate("/wellinfo")}
            >
              <ion-icon name="close-outline"></ion-icon>
            </button>
            <div className="border-b border-gray-400 ">
              <div className="flex">
                <div className="w-[50%]  p-3 flex items-center">
                  <p className="mr-2">New Well No : </p>
                  <input
                    required
                    placeholder="New Well No"
                    name="newWellNo"
                    value={formData.newWellNo}
                    onChange={handleChange}
                    type="text"
                    className="p-2 border border-gray-500 rounded-md"
                  />
                </div>
                <div className="w-[50%]  p-3 flex items-center">
                  <p className="mr-2">Old Well No : </p>
                  <input
                    placeholder="Old Well No"
                    name="OldWellNo"
                    value={formData.OldWellNo}
                    onChange={handleChange}
                    type="text"
                    className="p-2 border border-gray-500 rounded-md"
                  />
                </div>
              </div>
              {wellIdExists && (
                <span className="ml-2 text-red-500">
                  Well ID already exists!
                </span>
              )}
            </div>

            <div className="flex">
              {/* 1st row */}
              <div className="w-[33%] border-r border-gray-400 p-3 ml-auto">
                {/* project office */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Project Office : </p>
                  <input
                    placeholder="Project Office"
                    name="ProjectOffice"
                    value={formData.ProjectOffice}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Location */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Location : </p>
                  <input
                    placeholder="Location"
                    name="Location"
                    value={formData.Location}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Electorate */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Electorate : </p>
                  <input
                    placeholder="Electorate"
                    name="Electorate"
                    value={formData.Electorate}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Village */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Village : </p>
                  <input
                    placeholder="Village"
                    name="Village"
                    value={formData.Village}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* User Type */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">User Type : </p>
                  <input
                    placeholder="User Type"
                    name="UserType"
                    value={formData.UserType}
                    onChange={handleChange}
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
                  <select
                    value={selectedProvince}
                    onChange={(e) => handleProvinceChange(e.target.value)}
                    className="p-2 ml-auto border border-gray-500 rounded-md w-[200px]"
                  >
                    <option value="">Select Province</option>
                    {provinces.map((province) => (
                      <option key={province} value={province}>
                        {province}
                      </option>
                    ))}
                  </select>
                </div>
                {/* District */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">District : </p>
                  <select
                    value={selectedDistrict}
                    onChange={(e) => handleDistrictChange(e.target.value)}
                    disabled={!selectedProvince}
                    className="p-2 ml-auto border border-gray-500 rounded-md  w-[200px]"
                  >
                    <option value="">Select District</option>
                    {getDistrictsByProvince(selectedProvince).map(
                      (district) => (
                        <option key={district} value={district}>
                          {district}
                        </option>
                      )
                    )}
                  </select>
                </div>
                {/* DS Division */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">DS Division : </p>
                  <select
                    value={selectedDSDivision}
                    onChange={(e) => setSelectedDSDivision(e.target.value)}
                    disabled={!selectedDistrict}
                    className="p-2 ml-auto border border-gray-500 rounded-md  w-[200px]"
                  >
                    <option value="">Select DS Division</option>
                    {getDSDivisionByDistrict(selectedDistrict).map(
                      (dsDivision) => (
                        <option key={dsDivision} value={dsDivision}>
                          {dsDivision}
                        </option>
                      )
                    )}
                  </select>
                </div>
                {/* GS Division */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">GS Division : </p>
                  <input
                    placeholder="GS Division"
                    name="GSDivision"
                    value={formData.GSDivision}
                    onChange={handleChange}
                    type="text"
                    ml-auto
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>

                {/* Scheme Name */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scheme Name : </p>
                  <input
                    placeholder="Scheme Name"
                    name="SchemeName"
                    value={formData.SchemeName}
                    onChange={handleChange}
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
                    placeholder="Topo Sheet"
                    name="TopoSheet"
                    value={formData.TopoSheet}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Scale Topo Sheet */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scale Topo Sheet : </p>
                  <input
                    placeholder="Scale Topo Sheet"
                    name="ScaleTopoSheet"
                    value={formData.ScaleTopoSheet}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Geology Map */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Geology Map : </p>
                  <input
                    placeholder="Geology Map"
                    name="GeologyMap"
                    value={formData.GeologyMap}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Scale Geology Map */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Scale Geology Map : </p>
                  <input
                    placeholder="Scale Geology Map"
                    name="ScaleGeologyMap"
                    value={formData.ScaleGeologyMap}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Depth to Bottom of Soil Layer */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Depth to The Bottom of Soil Layer : </p>
                  <input
                    placeholder="Depth to The Bottom of Soil Layer"
                    name="DepthtoTheBottomofSoilLayer"
                    value={formData.DepthtoTheBottomofSoilLayer}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Highly Weathered Rock */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Highly Weathered Rock : </p>
                  <input
                    placeholder="Highly Weathered Rock"
                    name="HighlyWeatheredRock"
                    value={formData.HighlyWeatheredRock}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Weathered Rock */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Weathered Rock : </p>
                  <input
                    placeholder="Weathered Rock"
                    name="WeatheredRock"
                    value={formData.WeatheredRock}
                    onChange={handleChange}
                    type="text"
                    className="p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
                {/* Geologist */}
                <div className="flex items-center mb-1">
                  <p className="mr-2">Geologist : </p>
                  <input
                    placeholder="Geologist"
                    name="Geologist"
                    value={formData.Geologist}
                    onChange={handleChange}
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
                        placeholder="X"
                        name="X"
                        value={formData.X}
                        onChange={handleChange}
                        type="text"
                        className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                      />
                    </div>
                    <div className="flex items-center ml-3">
                      <p>Y : </p>
                      <input
                        placeholder="Y"
                        name="Y"
                        value={formData.Y}
                        onChange={handleChange}
                        type="text"
                        className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex items-center mt-2">
                  <p>Elevation</p>
                  <input
                    placeholder="Elevation"
                    name="Elevation"
                    value={formData.Elevation}
                    onChange={handleChange}
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
                    placeholder="LocalMetric1"
                    name="LocalMetric1"
                    value={formData.LocalMetric1}
                    onChange={handleChange}
                    type="text"
                    className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                  />
                  <input
                    placeholder="LocalMetric2"
                    name="LocalMetric2"
                    value={formData.LocalMetric2}
                    onChange={handleChange}
                    type="text"
                    className="w-24 p-2 ml-2 border border-gray-500 rounded-md"
                  />
                </div>

                <div className="flex mt-2">
                  <p>Method of survey</p>
                  <input
                    placeholder="Method of survey"
                    name="Methodofsurvey"
                    value={formData.Methodofsurvey}
                    onChange={handleChange}
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
                  <ChemicalData
                    handleChange={handleChange}
                    formData={formData}
                  />
                )}
                {ChangeTab === "GeologyOverburden" && (
                  <GeologyOverburden
                    handleChange={handleChange}
                    formData={formData}
                  />
                )}
                {ChangeTab === "GeologyRock" && (
                  <GeologyRock
                    handleChange={handleChange}
                    formData={formData}
                  />
                )}
                {ChangeTab === "PumpInstalation" && (
                  <PumpInstalation
                    handleChange={handleChange}
                    formData={formData}
                  />
                )}
                {ChangeTab === "RequestGeneral" && (
                  <RequestGeneral
                    handleChange={handleChange}
                    formData={formData}
                  />
                )}
                {ChangeTab === "Test" && (
                  <Test handleChange={handleChange} formData={formData} />
                )}
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
            <button
              disabled={wellIdExists}
              type="submit"
              className={`flex justify-center p-2 text-white rounded-lg w-44  ${
                wellIdExists
                  ? "bg-gray-500 cursor-not-allowed "
                  : "bg-green-500 hover:bg-green-700"
              }`}
            >
              Edit Well
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditWell;
