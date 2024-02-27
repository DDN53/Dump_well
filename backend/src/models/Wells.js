const { DataTypes } = require("sequelize");
const sequelize = require("../../configuration/db.config");

const Wells = sequelize.define("Wells", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    unique: true,
    primaryKey: true,
  },
  newWellNo: {
    type: DataTypes.STRING,
    allowNull: false,
    // unique: true,
  },
  OldWellNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ProjectOffice: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Location: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Electorate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Village: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  UserType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  selectedProvince: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  selectedDistrict: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  selectedDSDivision: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GSDivision: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SchemeName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TopoSheet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ScaleTopoSheet: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GeologyMap: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ScaleGeologyMap: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DepthtoTheBottomofSoilLayer: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  HighlyWeatheredRock: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  WeatheredRock: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Geologist: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  X: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Y: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Elevation: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LocalMetric1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  LocalMetric2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Methodofsurvey: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SampleDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SampleDepth: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SampleTime: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Color: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Turbidity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PH: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Elecon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Chlorides: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Totalk: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  FreeAmonia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Albamonia: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Nitrates: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Nitrite: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Fluorides: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Phosphate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Totdissol: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Tothard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Calchard: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Totiron: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Magnesium: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Sulphate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Manganese: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Dissiron: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Totcoli: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Faecalcoli: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Filtiron: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Totresidue: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Calcium: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Oxygen: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Hysul: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Fixediron: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  SWL: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  InstalledDatePedestal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  InstalledDatePump: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpHeadNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CylinderType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  CylinderDepth: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RiserPipeType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RiserPipeLength: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ConnecRodType: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ConnecRodLength: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Remarks: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RequestMode: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Fundingcriteria: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  WellCategory: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AgentName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ProjectName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ContactOrderNo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DistancetoNearestPublicPerinialWell: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NoOfHousesWithin500M: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ConcentOfPSForMaintenance: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ConsumerSocietyFormed: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  NameofCareTaker: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AddressofCareTakerline1: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AddressofCareTakerline2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AddressofCareTakerline3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TestDate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step1one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step1two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step2one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step2two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step3one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step3two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step4one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step4two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step5one: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Step5two: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TestDate2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  EndDate2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpInstallationDepth: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpInstallationDepth2: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  AvarageDischargeRate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  waterlevelatendoftherecovery: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumingDuration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StatisticWaterLevel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  StaticWaterLevel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpingWaterLevelattheEndofthetest: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Storativity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RecoveryPeriod: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Transmassvity: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  B: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  C: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  TestDate3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpInstallationDepth3: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  DischargeRate: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpingWaterLevel: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  PumpingDuration: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  RecomendationBasedon: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GeologyRock: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  GeologyOverburden: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

module.exports = Wells;
