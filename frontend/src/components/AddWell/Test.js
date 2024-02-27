import React from "react";

function Test(props) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[33%] p-4 flex flex-col">
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Test Date : </p>
          <input
            placeholder="Test Date"
            name="TestDate"
            value={props.formData.TestDate}
            onChange={props.handleChange}
            type="date"
            className="p-2 ml-auto border border-gray-500 rounded-md "
          />
        </div>

        {/* 1-1 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Pump Installation Depth (m) : </p>
              <input
                placeholder="Pump Installation Depth"
                name="PumpInstallationDepth"
                value={props.formData.PumpInstallationDepth}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Static Water Level (m) : </p>
              <input
                placeholder="Static Water Level"
                name="StaticWaterLevel"
                value={props.formData.StaticWaterLevel}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        <table className="w-full border border-collapse border-gray-500">
          <thead>
            <tr>
              <th className="p-2 border border-gray-500">
                Discharge Rates m(lpm){" "}
              </th>
              <th className="p-2 border border-gray-500">
                Pumping Water Level (m)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 1 : </p>
                  <input
                    placeholder="Step 1"
                    name="Step1one"
                    value={props.formData.Step1one}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <input
                    placeholder="Step 1"
                    name="Step1two"
                    value={props.formData.Step1two}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 2 : </p>
                  <input
                    placeholder="Step 2"
                    name="Step2one"
                    value={props.formData.Step2one}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <input
                    placeholder="Step 2"
                    name="Step2two"
                    value={props.formData.Step2two}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 3 : </p>
                  <input
                    placeholder="Step 3"
                    name="Step3one"
                    value={props.formData.Step3one}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <input
                    placeholder="Step 3"
                    name="Step3two"
                    value={props.formData.Step3two}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 4 : </p>
                  <input
                    placeholder="Step 4"
                    name="Step4one"
                    value={props.formData.Step4one}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <input
                    placeholder="Step 4"
                    name="Step4two"
                    value={props.formData.Step4two}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 5 : </p>
                  <input
                    placeholder="Step 5"
                    name="Step5one"
                    value={props.formData.Step5one}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
              <td className="w-56 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <input
                    placeholder="Step 5"
                    name="Step5two"
                    value={props.formData.Step5two}
                    onChange={props.handleChange}
                    type="text"
                    className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
                  />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="w-[34%] border-x p-4 border-gray-400">
        {/* 2-1 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Test Date : </p>
              <input
                placeholder="Test Date"
                name="TestDate2"
                value={props.formData.TestDate2}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">End Date : </p>
              <input
                placeholder="End Date"
                name="EndDate2"
                value={props.formData.EndDate2}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* 2-2 */}
        <div className="flex">
          <div className="w-[50%] mr-1 flex flex-col">
            {/* */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Pump Installation Depth (m) : </p>
              <input
                placeholder="Pump Installation Depth"
                name="PumpInstallationDepth2"
                value={props.formData.PumpInstallationDepth2}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Avarage Discharge Rate (lpm) : </p>
              <input
                placeholder="Avarage Discharge Rate"
                name="AvarageDischargeRate"
                value={props.formData.AvarageDischargeRate}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1 flex items-center">
            {/*  */}
            <div className="flex items-center justify-between w-full mb-1">
              <p className="mr-2">water level at end of the recovery (m) : </p>
              <input
                placeholder="water level at end of the recovery"
                name="waterlevelatendoftherecovery"
                value={props.formData.waterlevelatendoftherecovery}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* 2-3 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Puming Duration (mn) : </p>
              <input
                placeholder="Puming Duration"
                name="PumingDuration"
                value={props.formData.PumingDuration}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Statistic Water Level (m) : </p>
              <input
                placeholder="Statistic Water Level"
                name="StatisticWaterLevel"
                value={props.formData.StatisticWaterLevel}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* 2-4 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">
                Pumping Water Level at the End of the test(m) :{" "}
              </p>
              <input
                placeholder="Pumping Water Level at the End of the test"
                name="PumpingWaterLevelattheEndofthetest"
                value={props.formData.PumpingWaterLevelattheEndofthetest}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Storativity (s) : </p>
              <input
                placeholder="Storativity"
                name="Storativity"
                value={props.formData.Storativity}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* 2-5 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Recovery Period (mn) : </p>
              <input
                placeholder="Recovery Period"
                name="RecoveryPeriod"
                value={props.formData.RecoveryPeriod}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Transmassvity (T) (m2/day) : </p>
              <input
                placeholder="Transmassvity"
                name="Transmassvity"
                value={props.formData.Transmassvity}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>

        {/* 2-6*/}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">B : </p>
              <input
                placeholder="B"
                name="B"
                value={props.formData.B}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">C : </p>
              <input
                placeholder="C"
                name="C"
                value={props.formData.C}
                onChange={props.handleChange}
                type="text"
                className="w-20 p-2 ml-auto border border-gray-500 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="w-[33%] p-4">
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Test Date : </p>
          <input
            placeholder="Test Date"
            name="TestDate3"
            value={props.formData.TestDate3}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pump Installation Depth (m) : </p>
          <input
            placeholder="Pump Installation Depth"
            name="PumpInstallationDepth3"
            value={props.formData.PumpInstallationDepth3}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Discharge Rate (lpm): </p>
          <input
            placeholder="Discharge Rate"
            name="DischargeRate"
            value={props.formData.DischargeRate}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/* */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pumping Water Level (m) : </p>
          <input
            placeholder="Pumping Water Level"
            name="PumpingWaterLevel"
            value={props.formData.PumpingWaterLevel}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pumping Duration (hr) : </p>
          <input
            placeholder="Pumping Duration"
            name="PumpingDuration"
            value={props.formData.PumpingDuration}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Recomendation Based on : </p>
          <input
            placeholder="Recomendation Based on"
            name="RecomendationBasedon"
            value={props.formData.RecomendationBasedon}
            onChange={props.handleChange}
            type="text"
            className="p-2 ml-auto border border-gray-500 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

export default Test;
