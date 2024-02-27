import React from "react";

function Test(props) {
  return (
    <div className="flex w-[100%]">
      <div className="w-[33%] p-4 flex flex-col">
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Test Date : </p>
          <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md w-28 ">
            {props.formData.TestDate}
          </p>
        </div>

        {/* 1-1 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Pump Installation Depth (m) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.PumpInstallationDepth}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Static Water Level (m) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.StaticWaterLevel}
              </p>
            </div>
          </div>
        </div>

        <table className="w-full h-10 border border-collapse border-gray-500">
          <thead>
            <tr>
              <th className="h-10 p-2 border border-gray-500">
                Discharge Rates m(lpm){" "}
              </th>
              <th className="h-10 p-2 border border-gray-500">
                Pumping Water Level (m)
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 1 : </p>
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step1one}
                  </p>
                </div>
              </td>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step1two}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 2 : </p>
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step2one}
                  </p>
                </div>
              </td>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step2two}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 3 : </p>
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step3one}
                  </p>
                </div>
              </td>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step3two}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 4 : </p>
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step4one}
                  </p>
                </div>
              </td>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step4two}
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="mr-2">Step 5 : </p>
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step5one}
                  </p>
                </div>
              </td>
              <td className="w-56 h-10 p-2 border border-gray-500">
                <div className="flex items-center mb-1">
                  <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                    {props.formData.Step5two}
                  </p>
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
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.TestDate2}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">End Date : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.EndDate2}
              </p>
            </div>
          </div>
        </div>

        {/* 2-2 */}
        <div className="flex">
          <div className="w-[50%] mr-1 flex flex-col">
            {/* */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Pump Installation Depth (m) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.PumpInstallationDepth2}
              </p>
            </div>
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Avarage Discharge Rate (lpm) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.AvarageDischargeRate}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1 flex items-center">
            {/*  */}
            <div className="flex items-center justify-between w-full mb-1">
              <p className="mr-2">water level at end of the recovery (m) : </p>
              <p className="h-10 p-2 border border-gray-500 rounded-md min-w-20">
                {props.formData.waterlevelatendoftherecovery}
              </p>
            </div>
          </div>
        </div>

        {/* 2-3 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Puming Duration (mn) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.PumingDuration}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Statistic Water Level (m) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.StatisticWaterLevel}
              </p>
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
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.PumpingWaterLevelattheEndofthetest}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Storativity (s) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.Storativity}
              </p>
            </div>
          </div>
        </div>

        {/* 2-5 */}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Recovery Period (mn) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.RecoveryPeriod}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">Transmassvity (T) (m2/day) : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.Transmassvity}
              </p>
            </div>
          </div>
        </div>

        {/* 2-6*/}
        <div className="flex w-[100%]">
          <div className="w-[50%] mr-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">B : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.B}
              </p>
            </div>
          </div>
          <div className="w-[50%] ml-1">
            {/*  */}
            <div className="flex items-center mb-1">
              <p className="mr-2">C : </p>
              <p className="h-10 p-2 ml-auto border border-gray-500 rounded-md min-w-20">
                {props.formData.C}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3 */}
      <div className="w-[33%] p-4">
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Test Date : </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.TestDate3}
          </p>
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pump Installation Depth (m) : </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.PumpInstallationDepth3}
          </p>
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Discharge Rate (lpm): </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.DischargeRate}
          </p>
        </div>
        {/* */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pumping Water Level (m) : </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.PumpingWaterLevel}
          </p>
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Pumping Duration (hr) : </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.PumpingDuration}
          </p>
        </div>
        {/*  */}
        <div className="flex items-center mb-1">
          <p className="mr-2">Recomendation Based on : </p>
          <p className="p-2 ml-auto border border-gray-500 h-10 rounded-md w-[197px]">
            {props.formData.RecomendationBasedon}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Test;
