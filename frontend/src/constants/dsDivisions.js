// dsDivisions.js

const Kandy = [
  "Akurana",
  "Delthota",
  "Doluwa",
  "Gangawata Korale",
  "Ganga Ihala Korale",
  "Harispattuwa",
  "Hatharaliyadda",
  "Kundasale",
  "Medadumbara",
  "Minipe",
  "Panvila",
  "Pasbage Korale",
  "Pathadumbara",
  "Pathahewaheta",
  "Poojapitiya",
  "Thumpane",
  "Udadumbara",
  "Udapalatha",
  "Udunuwara",
  "Yatinuwara",
].sort((a, b) => (a < b ? -1 : 1));

const Matale = [
  "Ambanganga Korale",
  "Dambulla",
  "Galewela",
  "Laggala-Pallegama",
  "Matale",
  "Naula",
  "Pallepola",
  "Rattota",
  "Ukuwela",
  "Wilgamuwa",
  "Yatawatta",
].sort((a, b) => (a < b ? -1 : 1));

const NuwaraEliya = [
  "Ambagamuwa",
  "Hanguranketha",
  "Kothmale",
  "Nuwara Eliya",
  "Walapane",
  "Norwood",
  "Kothmale West",
  "Nildandahinna",
  "Thalawakale",
  "Mathurata",
].sort((a, b) => (a < b ? -1 : 1));

const Batticaloa = [
  "Eravur Pattu",
  "Eravur Town",
  "Kattankudy",
  "Koralai Pattu",
  "Koralai Pattu Central",
  "Koralai Pattu North",
  "Koralai Pattu South",
  "Koralai Pattu West",
  "Manmunai North",
  "Manmunai Pattu",
  "Manmunai S. and Eruvil Pattu",
  "Manmunai South West",
  "Manmunai West",
  "Porativu Pattu",
].sort((a, b) => (a < b ? -1 : 1));

const Ampara = [
  "Addalachchenai",
  "Akkaraipattu",
  "Alayadiwembu",
  "Ampara",
  "Damana",
  "Dehiattakandiya",
  "Eragama",
  "Kalmunai Muslim",
  "Kalmunai Tamil",
  "Karaitivu",
  "Lahugala",
  "Mahaoya",
  "Navithanveli",
  "Ninthavur",
  "Padiyathalawa",
  "Pothuvil",
  "Sainthamarathu",
  "Samanthurai",
  "Thirukkovil",
  "Uhana",
].sort((a, b) => (a < b ? -1 : 1));

const Trincomalee = [
  "Gomarankadawala",
  "Kantalai",
  "Kinniya",
  "Kuchchaveli",
  "Morawewa",
  "Muttur",
  "Padavi Sri Pura",
  "Seruvila",
  "Thambalagamuwa",
  "Trincomalee",
  "Verugal",
].sort((a, b) => (a < b ? -1 : 1));

const Anuradhapura = [
  "Galnewa",
  "Galenbindunuwewa",
  "Horowpothana",
  "Ipalogama",
  "Kahatagasdigiliya",
  "Kebithigollewa",
  "Kekirawa",
  "Mahavilachchiya",
  "Medawachchiya",
  "Mihinthale",
  "Nachchadoowa",
  "Nochchiyagama",
  "Nuwaragam Palatha Central",
  "Nuwaragam Palatha East",
  "Padaviya",
  "Palagala",
  "Palugaswewa",
  "Rajanganaya",
  "Rambewa",
  "Thalawa",
  "Thambuttegama",
  "Thirappane",
].sort((a, b) => (a < b ? -1 : 1));

const Polonnaruwa = [
  "Dimbulagala",
  "Elahera",
  "Hingurakgoda",
  "Lankapura",
  "Medirigiriya",
  "Thamankaduwa",
  "Welikanda",
].sort((a, b) => (a < b ? -1 : 1));

const Jaffna = [
  "Delft",
  "Island North",
  "Island South",
  "Jaffna",
  "Karainagar",
  "Nallur",
  "Thenmaradchi",
  "Vadamaradchi East",
  "Vadamaradchi North",
  "Vadamaradchi South-West",
  "Valikamam East",
  "Valikamam North",
  "Valikamam South",
  "Valikamam South-West",
  "Valikamam West",
].sort((a, b) => (a < b ? -1 : 1));

const Kilinochchi = [
  "Kandavalai",
  "Karachchi",
  "Pachchilaipalli",
  "Poonakary",
].sort((a, b) => (a < b ? -1 : 1));

const Mannar = ["Madhu", "Mannar", "Manthai West", "Musalai", "Nanaddan"].sort(
  (a, b) => (a < b ? -1 : 1)
);

const Vavuniya = [
  "Vavuniya",
  "Vavuniya North",
  "Vavuniya South",
  "Vengalacheddikulam",
].sort((a, b) => (a < b ? -1 : 1));

const Mullaitivu = [
  "Manthai East",
  "Maritimepattu",
  "Oddusuddan",
  "Puthukudiyiruppu",
  "Thunukkai",
  "Welioya",
].sort((a, b) => (a < b ? -1 : 1));

const Kurunegala = [
  "Alawwa",
  "Ambanpola",
  "Bamunakotuwa",
  "Bingiriya",
  "Ehetuwewa",
  "Galgamuwa",
  "Ganewatta",
  "Giribawa",
  "Ibbagamuwa",
  "Katupotha",
  "Kobeigane",
  "Kotavehera",
  "Kuliyapitiya East",
  "Kuliyapitiya West",
  "Kurunegala",
  "Mahawa",
  "Mallawapitiya",
  "Maspotha",
  "Mawathagama",
  "Narammala",
  "Nikaweratiya",
  "Panduwasnuwara",
  "Pannala",
  "Polgahawela",
  "Polpithigama",
  "Rasnayakapura",
  "Rideegama",
  "Udubaddawa",
  "Wariyapola",
  "Weerambugedara",
].sort((a, b) => (a < b ? -1 : 1));

const Puttalam = [
  "Anamaduwa",
  "Arachchikattuwa",
  "Chilaw",
  "Dankotuwa",
  "Kalpitiya",
  "Karuwalagaswewa",
  "Madampe",
  "Mahakumbukkadawala",
  "Mahawewa",
  "Mundalama",
  "Nattandiya",
  "Nawagattegama",
  "Pallama",
  "Puttalam",
  "Vanathavilluwa",
  "Wennappuwa",
].sort((a, b) => (a < b ? -1 : 1));

const Ratnapura = [
  "Ayagama",
  "Balangoda",
  "Eheliyagoda",
  "Elapattha",
  "Embilipitiya",
  "Godakawela",
  "Imbulpe",
  "Kahawatta",
  "Kalawana",
  "Kiriella",
  "Kolonna",
  "Kuruvita",
  "Nivithigala",
  "Opanayaka",
  "Pelmadulla",
  "Ratnapura",
  "Weligepola",
].sort((a, b) => (a < b ? -1 : 1));

const Kegalle = [
  "Aranayaka",
  "Bulathkohupitiya",
  "Dehiovita",
  "Deraniyagala",
  "Galigamuwa",
  "Kegalle",
  "Mawanella",
  "Rambukkana",
  "Ruwanwella",
  "Warakapola",
  "Yatiyanthota",
].sort((a, b) => (a < b ? -1 : 1));

const Galle = [
  "Akmeemana",
  "Ambalangoda",
  "Baddegama",
  "Balapitiya",
  "Benthota",
  "Bope-Poddala",
  "Elpitiya",
  "Galle",
  "Gonapinuwala",
  "Habaraduwa",
  "Hikkaduwa",
  "Imaduwa",
  "Karandeniya",
  "Nagoda",
  "Neluwa",
  "Niyagama",
  "Thawalama",
  "Welivitiya-Divithura",
  "Yakkalamulla",
].sort((a, b) => (a < b ? -1 : 1));

const Matara = [
  "Akuressa",
  "Athuraliya",
  "Devinuwara",
  "Dickwella",
  "Hakmana",
  "Kamburupitiya",
  "Kirinda Puhulwella",
  "Kotapola",
  "Malimbada",
  "Matara",
  "Mulatiyana",
  "Pasgoda",
  "Pitabeddara",
  "Thihagoda",
  "Weligama",
  "Welipitiya",
].sort((a, b) => (a < b ? -1 : 1));

const Hambantota = [
  "Ambalantota",
  "Angunakolapelessa",
  "Beliatta",
  "Hambantota",
  "Katuwana",
  "Lunugamvehera",
  "Okewela",
  "Sooriyawewa",
  "Tangalle",
  "Thissamaharama",
  "Walasmulla",
  "Weeraketiya",
].sort((a, b) => (a < b ? -1 : 1));

const Badulla = [
  "Badulla",
  "Bandarawela",
  "Ella",
  "Haldummulla",
  "Hali-Ela",
  "Haputale",
  "Kandaketiya",
  "Lunugala",
  "Mahiyanganaya",
  "Meegahakivula",
  "Passara",
  "Rideemaliyadda",
  "Soranathota",
  "Uva-Paranagama",
  "Welimada",
].sort((a, b) => (a < b ? -1 : 1));

const Monaragala = [
  "Badalkumbura",
  "Bibile",
  "Buttala",
  "Katharagama",
  "Madulla",
  "Medagama",
  "Moneragala",
  "Sevanagala",
  "Siyambalanduwa",
  "Thanamalvila",
  "Wellawaya",
].sort((a, b) => (a < b ? -1 : 1));

const Colombo = [
  "Colombo",
  "Dehiwala",
  "Homagama",
  "Kaduwela",
  "Kesbewa",
  "Kolonnawa",
  "Kotte",
  "Maharagama",
  "Moratuwa",
  "Padukka",
  "Ratmalana",
  "Seethawaka",
  "Thimbirigasyaya",
].sort((a, b) => (a < b ? -1 : 1));

const Gampaha = [
  "Attanagalla",
  "Biyagama",
  "Divulapitiya",
  "Dompe",
  "Gampaha",
  "Ja-Ela",
  "Katana",
  "Kelaniya",
  "Mahara",
  "Minuwangoda",
  "Mirigama",
  "Negombo",
  "Wattala",
].sort((a, b) => (a < b ? -1 : 1));

const Kalutara = [
  "Agalawatta",
  "Bandaragama",
  "Beruwala",
  "Bulathsinhala",
  "Dodangoda",
  "Horana",
  "Ingiriya",
  "Kalutara",
  "Madurawela",
  "Mathugama",
  "Millaniya",
  "Palindanuwara",
  "Panadura",
  "Walallavita",
].sort((a, b) => (a < b ? -1 : 1));

const districts = [
  "Kandy",
  "Matale",
  "NuwaraEliya",
  "Batticaloa",
  "Ampara",
  "Trincomalee",
  "Anuradhapura",
  "Polonnaruwa",
  "Jaffna",
  "Kilinochchi",
  "Mannar",
  "Vavuniya",
  "Mullaitivu",
  "Kurunegala",
  "Puttalam",
  "Ratnapura",
  "Kegalle",
  "Galle",
  "Matara",
  "Hambantota",
  "Badulla",
  "Monaragala",
  "Colombo",
  "Gampaha",
  "Kalutara",
];

const districtData = {
  Kandy,
  Matale,
  NuwaraEliya,
  Batticaloa,
  Ampara,
  Trincomalee,
  Anuradhapura,
  Polonnaruwa,
  Jaffna,
  Kilinochchi,
  Mannar,
  Vavuniya,
  Mullaitivu,
  Kurunegala,
  Puttalam,
  Ratnapura,
  Kegalle,
  Galle,
  Matara,
  Hambantota,
  Badulla,
  Monaragala,
  Colombo,
  Gampaha,
  Kalutara,
};

const allDSDivisions = Object.values(districtData)
  .flat()
  .sort((a, b) => (a < b ? -1 : 1));

const getDSDivisionByDistrict = (district) => {
  return districtData[district] || [];
};

export { districts, allDSDivisions, getDSDivisionByDistrict };

//console.log(getDSDivisionByDistrict("Kandy"));
