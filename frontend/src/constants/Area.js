//Area.js

const CentralProvince = ["Kandy", "Matale", "NuwaraEliya"].sort((a, b) =>
  a < b ? -1 : 1
);

const EasternProvince = ["Batticaloa", "Ampara", "Trincomalee"].sort((a, b) =>
  a < b ? -1 : 1
);

const NorthCentralProvince = ["Anuradhapura", "Polonnaruwa"].sort((a, b) =>
  a < b ? -1 : 1
);

const NorthernProvince = [
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
].sort((a, b) => (a < b ? -1 : 1));

const NorthWesternProvince = ["Kurunegala", "Puttalam"].sort((a, b) =>
  a < b ? -1 : 1
);

const SabaragamuwaProvince = ["Ratnapura", "Kegalle"].sort((a, b) =>
  a < b ? -1 : 1
);

const SouthernProvince = ["Galle", "Matara", "Hambantota"].sort((a, b) =>
  a < b ? -1 : 1
);

const UvaProvince = ["Badulla", "Monaragala"].sort((a, b) => (a < b ? -1 : 1));

const WesternProvince = ["Colombo", "Gampaha", "Kalutara"].sort((a, b) =>
  a < b ? -1 : 1
);

const provincesData = {
  CentralProvince,
  EasternProvince,
  NorthCentralProvince,
  NorthernProvince,
  NorthWesternProvince,
  SabaragamuwaProvince,
  SouthernProvince,
  UvaProvince,
  WesternProvince,
};

const provinces = [
  "CentralProvince",
  "EasternProvince",
  "NorthCentralProvince",
  "NorthernProvince",
  "NorthWesternProvince",
  "SabaragamuwaProvince",
  "SouthernProvince",
  "UvaProvince",
  "WesternProvince",
];

const allDistricts = Object.values(provincesData)
  .flat()
  .sort((a, b) => (a < b ? -1 : 1));

const getDistrictsByProvince = (province) => {
  return provincesData[province] || [];
};

export { provinces, allDistricts, getDistrictsByProvince };

//console.log(getDistrictsByProvince("CentralProvince"));
