import { db } from "../config/db.js";

const dsData = [
  {
    "name": "colombo",
    "gn_division_count": 35
  },
  {
    "name": "kolonnawa",
    "gn_division_count": 46
  },
  {
    "name": "kaduwela",
    "gn_division_count": 57
  },
  {
    "name": "homagama",
    "gn_division_count": 81
  },
  {
    "name": "seethawaka-hanwella",
    "gn_division_count": 68
  },
  {
    "name": "padukka",
    "gn_division_count": 46
  },
  {
    "name": "maharagama",
    "gn_division_count": 41
  },
  {
    "name": "sri-jayawardanapura-kotte",
    "gn_division_count": 20
  },
  {
    "name": "thimbirigasyaya",
    "gn_division_count": 20
  },
  {
    "name": "dehiwala",
    "gn_division_count": 15
  },
  {
    "name": "ratmalana",
    "gn_division_count": 13
  },
  {
    "name": "moratuwa",
    "gn_division_count": 42
  },
  {
    "name": "kesbewa",
    "gn_division_count": 73
  },
  {
    "name": "negombo",
    "gn_division_count": 39
  },
  {
    "name": "katana",
    "gn_division_count": 79
  },
  {
    "name": "divulapitiya",
    "gn_division_count": 123
  },
  {
    "name": "mirigama",
    "gn_division_count": 149
  },
  {
    "name": "minuwangoda",
    "gn_division_count": 121
  },
  {
    "name": "wattala",
    "gn_division_count": 46
  },
  {
    "name": "ja-ela",
    "gn_division_count": 57
  },
  {
    "name": "gampaha",
    "gn_division_count": 101
  },
  {
    "name": "attanagalla",
    "gn_division_count": 151
  },
  {
    "name": "dompe",
    "gn_division_count": 133
  },
  {
    "name": "mahara",
    "gn_division_count": 92
  },
  {
    "name": "kelaniya",
    "gn_division_count": 37
  },
  {
    "name": "biyagama",
    "gn_division_count": 49
  },
  {
    "name": "panadura",
    "gn_division_count": 72
  },
  {
    "name": "bandaragama",
    "gn_division_count": 59
  },
  {
    "name": "horana",
    "gn_division_count": 61
  },
  {
    "name": "ingiriya",
    "gn_division_count": 31
  },
  {
    "name": "bulathsinhala",
    "gn_division_count": 54
  },
  {
    "name": "madurawala",
    "gn_division_count": 33
  },
  {
    "name": "millaniya",
    "gn_division_count": 44
  },
  {
    "name": "kalutara",
    "gn_division_count": 87
  },
  {
    "name": "beruwala",
    "gn_division_count": 82
  },
  {
    "name": "dodangoda",
    "gn_division_count": 45
  },
  {
    "name": "mathugama",
    "gn_division_count": 57
  },
  {
    "name": "agalawatta",
    "gn_division_count": 34
  },
  {
    "name": "palindanuwara",
    "gn_division_count": 43
  },
  {
    "name": "walallavita",
    "gn_division_count": 60
  },
  {
    "name": "thumpane",
    "gn_division_count": 67
  },
  {
    "name": "pujapitiya",
    "gn_division_count": 67
  },
  {
    "name": "akurana",
    "gn_division_count": 35
  },
  {
    "name": "pathadumbara",
    "gn_division_count": 52
  },
  {
    "name": "panvila",
    "gn_division_count": 14
  },
  {
    "name": "udadumbara",
    "gn_division_count": 63
  },
  {
    "name": "minipe",
    "gn_division_count": 48
  },
  {
    "name": "medadumbara",
    "gn_division_count": 93
  },
  {
    "name": "kundasale",
    "gn_division_count": 80
  },
  {
    "name": "kandy-four-gravets-gangawata-korale",
    "gn_division_count": 64
  },
  {
    "name": "harispattuwa",
    "gn_division_count": 84
  },
  {
    "name": "hatharaliyadda",
    "gn_division_count": 57
  },
  {
    "name": "yatinuwara",
    "gn_division_count": 95
  },
  {
    "name": "udunuwara",
    "gn_division_count": 124
  },
  {
    "name": "doluwa",
    "gn_division_count": 33
  },
  {
    "name": "pathahewaheta",
    "gn_division_count": 73
  },
  {
    "name": "deltota",
    "gn_division_count": 29
  },
  {
    "name": "udapalatha",
    "gn_division_count": 49
  },
  {
    "name": "ganga-ihala-korale",
    "gn_division_count": 31
  },
  {
    "name": "pasbage-korale",
    "gn_division_count": 29
  },
  {
    "name": "galewela",
    "gn_division_count": 59
  },
  {
    "name": "dambulla",
    "gn_division_count": 59
  },
  {
    "name": "naula",
    "gn_division_count": 47
  },
  {
    "name": "pallepola",
    "gn_division_count": 44
  },
  {
    "name": "yatawatta",
    "gn_division_count": 56
  },
  {
    "name": "matale",
    "gn_division_count": 52
  },
  {
    "name": "ambanganga-korale",
    "gn_division_count": 20
  },
  {
    "name": "laggala-pallegama",
    "gn_division_count": 29
  },
  {
    "name": "wilgamuwa",
    "gn_division_count": 39
  },
  {
    "name": "rattota",
    "gn_division_count": 54
  },
  {
    "name": "ukuwela",
    "gn_division_count": 73
  },
  {
    "name": "kothmale-east",
    "gn_division_count": 47
  },
  {
    "name": "kothmale-west",
    "gn_division_count": 49
  },
  {
    "name": "hanguranketha",
    "gn_division_count": 79
  },
  {
    "name": "walapane",
    "gn_division_count": 62
  },
  {
    "name": "nuwara-eliya",
    "gn_division_count": 38
  },
  {
    "name": "ambagamuwa-koralaya",
    "gn_division_count": 32
  },
  {
    "name": "norwood",
    "gn_division_count": 35
  },
  {
    "name": "nildandahinna",
    "gn_division_count": 63
  },
  {
    "name": "thalawakelle",
    "gn_division_count": 34
  },
  {
    "name": "mathurata",
    "gn_division_count": 52
  },
  {
    "name": "bentota",
    "gn_division_count": 51
  },
  {
    "name": "balapitiya",
    "gn_division_count": 51
  },
  {
    "name": "karandeniya",
    "gn_division_count": 40
  },
  {
    "name": "elpitiya",
    "gn_division_count": 51
  },
  {
    "name": "niyagama",
    "gn_division_count": 34
  },
  {
    "name": "thawalama",
    "gn_division_count": 36
  },
  {
    "name": "neluwa",
    "gn_division_count": 34
  },
  {
    "name": "nagoda",
    "gn_division_count": 53
  },
  {
    "name": "baddegama",
    "gn_division_count": 48
  },
  {
    "name": "waduramba",
    "gn_division_count": 22
  },
  {
    "name": "welivitiya-divithura",
    "gn_division_count": 20
  },
  {
    "name": "ambalangoda",
    "gn_division_count": 36
  },
  {
    "name": "gonapeenuwala",
    "gn_division_count": 19
  },
  {
    "name": "hikkaduwa",
    "gn_division_count": 27
  },
  {
    "name": "rathgama",
    "gn_division_count": 32
  },
  {
    "name": "madampagama",
    "gn_division_count": 38
  },
  {
    "name": "galle-four-gravets",
    "gn_division_count": 50
  },
  {
    "name": "bope-poddala",
    "gn_division_count": 44
  },
  {
    "name": "akmeemana",
    "gn_division_count": 63
  },
  {
    "name": "yakkalamulla",
    "gn_division_count": 44
  },
  {
    "name": "imaduwa",
    "gn_division_count": 43
  },
  {
    "name": "habaraduwa",
    "gn_division_count": 59
  },
  {
    "name": "pitabeddara",
    "gn_division_count": 40
  },
  {
    "name": "kotapola",
    "gn_division_count": 37
  },
  {
    "name": "pasgoda",
    "gn_division_count": 43
  },
  {
    "name": "mulatiyana",
    "gn_division_count": 48
  },
  {
    "name": "athuraliya",
    "gn_division_count": 28
  },
  {
    "name": "akuressa",
    "gn_division_count": 46
  },
  {
    "name": "welipitiya",
    "gn_division_count": 38
  },
  {
    "name": "malimbada",
    "gn_division_count": 29
  },
  {
    "name": "kamburupitiya",
    "gn_division_count": 39
  },
  {
    "name": "hakmana",
    "gn_division_count": 34
  },
  {
    "name": "kirinda-puhulwella",
    "gn_division_count": 25
  },
  {
    "name": "thihagoda",
    "gn_division_count": 40
  },
  {
    "name": "weligama",
    "gn_division_count": 48
  },
  {
    "name": "matara-four-gravets",
    "gn_division_count": 66
  },
  {
    "name": "devinuwara",
    "gn_division_count": 41
  },
  {
    "name": "dickwella",
    "gn_division_count": 48
  },
  {
    "name": "sooriyawewa",
    "gn_division_count": 21
  },
  {
    "name": "lunugamvehera",
    "gn_division_count": 36
  },
  {
    "name": "thissamaharama",
    "gn_division_count": 44
  },
  {
    "name": "hambantota",
    "gn_division_count": 30
  },
  {
    "name": "ambalantota",
    "gn_division_count": 55
  },
  {
    "name": "angunakolapelessa",
    "gn_division_count": 51
  },
  {
    "name": "weeraketiya",
    "gn_division_count": 60
  },
  {
    "name": "katuwana",
    "gn_division_count": 56
  },
  {
    "name": "walasmulla",
    "gn_division_count": 53
  },
  {
    "name": "okewela",
    "gn_division_count": 27
  },
  {
    "name": "beliatta",
    "gn_division_count": 71
  },
  {
    "name": "tangalle",
    "gn_division_count": 72
  },
  {
    "name": "island-north-kayts",
    "gn_division_count": 15
  },
  {
    "name": "karainagar",
    "gn_division_count": 9
  },
  {
    "name": "valikamam-west-chankanai",
    "gn_division_count": 25
  },
  {
    "name": "valikamam-south-west-sandilipay",
    "gn_division_count": 28
  },
  {
    "name": "valikamam-north-tellipallai",
    "gn_division_count": 45
  },
  {
    "name": "valikamam-south-uduvil",
    "gn_division_count": 30
  },
  {
    "name": "valikamam-east-kopay",
    "gn_division_count": 31
  },
  {
    "name": "vadamaradchi-south-west-karaveddy",
    "gn_division_count": 35
  },
  {
    "name": "vadamaradchi-east",
    "gn_division_count": 18
  },
  {
    "name": "vadamaradchi-north-point-pedro",
    "gn_division_count": 35
  },
  {
    "name": "thenmaradchi-chavakachcheri",
    "gn_division_count": 60
  },
  {
    "name": "nallur",
    "gn_division_count": 40
  },
  {
    "name": "jaffna",
    "gn_division_count": 28
  },
  {
    "name": "island-south-velanai",
    "gn_division_count": 30
  },
  {
    "name": "delft",
    "gn_division_count": 6
  },
  {
    "name": "mannar-town",
    "gn_division_count": 49
  },
  {
    "name": "manthai-west",
    "gn_division_count": 36
  },
  {
    "name": "madhu",
    "gn_division_count": 17
  },
  {
    "name": "nanattan",
    "gn_division_count": 31
  },
  {
    "name": "musali",
    "gn_division_count": 20
  },
  {
    "name": "vavuniya-north",
    "gn_division_count": 20
  },
  {
    "name": "vavuniya-south",
    "gn_division_count": 20
  },
  {
    "name": "vavuniya",
    "gn_division_count": 42
  },
  {
    "name": "vengalacheddikulam",
    "gn_division_count": 20
  },
  {
    "name": "thunukkai",
    "gn_division_count": 20
  },
  {
    "name": "manthai-east",
    "gn_division_count": 15
  },
  {
    "name": "puthukkudiyiruppu",
    "gn_division_count": 19
  },
  {
    "name": "oddusuddan",
    "gn_division_count": 27
  },
  {
    "name": "maritimepattu",
    "gn_division_count": 46
  },
  {
    "name": "welioya",
    "gn_division_count": 9
  },
  {
    "name": "pachchilaipalli",
    "gn_division_count": 18
  },
  {
    "name": "kandavalai",
    "gn_division_count": 16
  },
  {
    "name": "karachchi",
    "gn_division_count": 42
  },
  {
    "name": "poonakary",
    "gn_division_count": 19
  },
  {
    "name": "koralai-pattu-north-vaharai",
    "gn_division_count": 16
  },
  {
    "name": "koralai-pattu-central",
    "gn_division_count": 9
  },
  {
    "name": "koralai-pattu-west-oddamavadi",
    "gn_division_count": 8
  },
  {
    "name": "koralai-pattu-valachchenai",
    "gn_division_count": 12
  },
  {
    "name": "koralai-pattu-south-kiran",
    "gn_division_count": 18
  },
  {
    "name": "eravur-pattu",
    "gn_division_count": 39
  },
  {
    "name": "eravur-town",
    "gn_division_count": 15
  },
  {
    "name": "manmunai-north",
    "gn_division_count": 48
  },
  {
    "name": "manmunai-west",
    "gn_division_count": 24
  },
  {
    "name": "kattankudy",
    "gn_division_count": 18
  },
  {
    "name": "manmunai-pattu-araipattai",
    "gn_division_count": 27
  },
  {
    "name": "manmunai-south-west",
    "gn_division_count": 24
  },
  {
    "name": "porativu-pattu",
    "gn_division_count": 43
  },
  {
    "name": "manmunai-south-eruvil-pattu",
    "gn_division_count": 45
  },
  {
    "name": "dehiattakandiya",
    "gn_division_count": 13
  },
  {
    "name": "padiyathalawa",
    "gn_division_count": 20
  },
  {
    "name": "mahaoya",
    "gn_division_count": 17
  },
  {
    "name": "uhana",
    "gn_division_count": 55
  },
  {
    "name": "ampara",
    "gn_division_count": 22
  },
  {
    "name": "navithanveli",
    "gn_division_count": 20
  },
  {
    "name": "sammanthurai",
    "gn_division_count": 51
  },
  {
    "name": "kalmunai-north-sub",
    "gn_division_count": 29
  },
  {
    "name": "kalmunai",
    "gn_division_count": 29
  },
  {
    "name": "sainthamaruthu",
    "gn_division_count": 17
  },
  {
    "name": "karaitheevu",
    "gn_division_count": 17
  },
  {
    "name": "ninthavur",
    "gn_division_count": 25
  },
  {
    "name": "addalaichchenai",
    "gn_division_count": 32
  },
  {
    "name": "irakkamam",
    "gn_division_count": 12
  },
  {
    "name": "akkaraipattu",
    "gn_division_count": 28
  },
  {
    "name": "alayadiwembu",
    "gn_division_count": 22
  },
  {
    "name": "damana",
    "gn_division_count": 33
  },
  {
    "name": "thirukkovil",
    "gn_division_count": 22
  },
  {
    "name": "pothuvil",
    "gn_division_count": 27
  },
  {
    "name": "lahugala",
    "gn_division_count": 12
  },
  {
    "name": "padavi-sri-pura",
    "gn_division_count": 10
  },
  {
    "name": "kuchchaveli",
    "gn_division_count": 24
  },
  {
    "name": "gomarankadawala",
    "gn_division_count": 10
  },
  {
    "name": "morawewa",
    "gn_division_count": 10
  },
  {
    "name": "trincomalee-town-and-gravets",
    "gn_division_count": 42
  },
  {
    "name": "thambalagamuwa",
    "gn_division_count": 12
  },
  {
    "name": "kanthale",
    "gn_division_count": 23
  },
  {
    "name": "kinniya",
    "gn_division_count": 31
  },
  {
    "name": "muttur",
    "gn_division_count": 42
  },
  {
    "name": "seruvila",
    "gn_division_count": 16
  },
  {
    "name": "verugal-eachchilampattu",
    "gn_division_count": 10
  },
  {
    "name": "giribawa",
    "gn_division_count": 35
  },
  {
    "name": "galgamuwa",
    "gn_division_count": 62
  },
  {
    "name": "ehetuwewa",
    "gn_division_count": 35
  },
  {
    "name": "ambanpola",
    "gn_division_count": 28
  },
  {
    "name": "kotavehera",
    "gn_division_count": 31
  },
  {
    "name": "rasnayakapura",
    "gn_division_count": 28
  },
  {
    "name": "nikaweratiya",
    "gn_division_count": 42
  },
  {
    "name": "maho",
    "gn_division_count": 68
  },
  {
    "name": "polpithigama",
    "gn_division_count": 82
  },
  {
    "name": "ibbagamuwa",
    "gn_division_count": 74
  },
  {
    "name": "ganewatta",
    "gn_division_count": 42
  },
  {
    "name": "wariyapola",
    "gn_division_count": 56
  },
  {
    "name": "kobeigane",
    "gn_division_count": 35
  },
  {
    "name": "bingiriya",
    "gn_division_count": 52
  },
  {
    "name": "panduwasnuwara-west",
    "gn_division_count": 67
  },
  {
    "name": "panduwasnuwara-east",
    "gn_division_count": 36
  },
  {
    "name": "bamunakotuwa",
    "gn_division_count": 36
  },
  {
    "name": "maspotha",
    "gn_division_count": 33
  },
  {
    "name": "kurunegala",
    "gn_division_count": 54
  },
  {
    "name": "mallawapitiya",
    "gn_division_count": 45
  },
  {
    "name": "mawathagama",
    "gn_division_count": 71
  },
  {
    "name": "rideegama",
    "gn_division_count": 113
  },
  {
    "name": "weerambugedara",
    "gn_division_count": 38
  },
  {
    "name": "kuliyapitiya-east",
    "gn_division_count": 45
  },
  {
    "name": "kuliyapitiya-west",
    "gn_division_count": 68
  },
  {
    "name": "udubaddawa",
    "gn_division_count": 43
  },
  {
    "name": "pannala",
    "gn_division_count": 87
  },
  {
    "name": "narammala",
    "gn_division_count": 54
  },
  {
    "name": "alawwa",
    "gn_division_count": 66
  },
  {
    "name": "polgahawela",
    "gn_division_count": 84
  },
  {
    "name": "kalpitiya",
    "gn_division_count": 31
  },
  {
    "name": "vanathawilluwa",
    "gn_division_count": 17
  },
  {
    "name": "karuwalagaswewa",
    "gn_division_count": 26
  },
  {
    "name": "nawagattegama",
    "gn_division_count": 19
  },
  {
    "name": "puttalam",
    "gn_division_count": 22
  },
  {
    "name": "mundel",
    "gn_division_count": 31
  },
  {
    "name": "mahakumbukkadawala",
    "gn_division_count": 25
  },
  {
    "name": "anamaduwa",
    "gn_division_count": 35
  },
  {
    "name": "pallama",
    "gn_division_count": 18
  },
  {
    "name": "arachchikattuwa",
    "gn_division_count": 33
  },
  {
    "name": "chilaw",
    "gn_division_count": 49
  },
  {
    "name": "madampe",
    "gn_division_count": 49
  },
  {
    "name": "mahawewa",
    "gn_division_count": 47
  },
  {
    "name": "nattandiya",
    "gn_division_count": 47
  },
  {
    "name": "wennappuwa",
    "gn_division_count": 52
  },
  {
    "name": "dankotuwa",
    "gn_division_count": 47
  },
  {
    "name": "padaviya",
    "gn_division_count": 15
  },
  {
    "name": "kebithigollewa",
    "gn_division_count": 26
  },
  {
    "name": "medawachchiya",
    "gn_division_count": 37
  },
  {
    "name": "mahawilachchiya",
    "gn_division_count": 17
  },
  {
    "name": "nuwaragam-palatha-central",
    "gn_division_count": 40
  },
  {
    "name": "rambewa",
    "gn_division_count": 38
  },
  {
    "name": "kahatagasdigiliya",
    "gn_division_count": 40
  },
  {
    "name": "horowpothana",
    "gn_division_count": 38
  },
  {
    "name": "galenbindunuwewa",
    "gn_division_count": 41
  },
  {
    "name": "mihinthale",
    "gn_division_count": 25
  },
  {
    "name": "nuwaragam-palatha-east",
    "gn_division_count": 29
  },
  {
    "name": "nachchaduwa",
    "gn_division_count": 19
  },
  {
    "name": "nochchiyagama",
    "gn_division_count": 36
  },
  {
    "name": "rajanganaya",
    "gn_division_count": 21
  },
  {
    "name": "thambuttegama",
    "gn_division_count": 26
  },
  {
    "name": "thalawa",
    "gn_division_count": 39
  },
  {
    "name": "thirappane",
    "gn_division_count": 41
  },
  {
    "name": "kekirawa",
    "gn_division_count": 53
  },
  {
    "name": "palugaswewa",
    "gn_division_count": 16
  },
  {
    "name": "ipalogama",
    "gn_division_count": 32
  },
  {
    "name": "galnewa",
    "gn_division_count": 30
  },
  {
    "name": "palagala",
    "gn_division_count": 35
  },
  {
    "name": "hingurakgoda",
    "gn_division_count": 53
  },
  {
    "name": "medirigiriya",
    "gn_division_count": 45
  },
  {
    "name": "lankapura",
    "gn_division_count": 28
  },
  {
    "name": "welikanda",
    "gn_division_count": 30
  },
  {
    "name": "dimbulagala",
    "gn_division_count": 56
  },
  {
    "name": "thamankaduwa",
    "gn_division_count": 55
  },
  {
    "name": "elahera",
    "gn_division_count": 28
  },
  {
    "name": "mahiyanganaya",
    "gn_division_count": 35
  },
  {
    "name": "rideemaliyadda",
    "gn_division_count": 42
  },
  {
    "name": "meegahakivula",
    "gn_division_count": 20
  },
  {
    "name": "kandaketiya",
    "gn_division_count": 26
  },
  {
    "name": "soranathota",
    "gn_division_count": 25
  },
  {
    "name": "passara",
    "gn_division_count": 41
  },
  {
    "name": "lunugala",
    "gn_division_count": 28
  },
  {
    "name": "badulla",
    "gn_division_count": 29
  },
  {
    "name": "hali-ela",
    "gn_division_count": 57
  },
  {
    "name": "uva-paranagama",
    "gn_division_count": 68
  },
  {
    "name": "welimada",
    "gn_division_count": 64
  },
  {
    "name": "bandarawela",
    "gn_division_count": 35
  },
  {
    "name": "ella",
    "gn_division_count": 32
  },
  {
    "name": "haputale",
    "gn_division_count": 26
  },
  {
    "name": "haldummulla",
    "gn_division_count": 39
  },
  {
    "name": "bibile",
    "gn_division_count": 40
  },
  {
    "name": "madulla",
    "gn_division_count": 38
  },
  {
    "name": "medagama",
    "gn_division_count": 35
  },
  {
    "name": "siyambalanduwa",
    "gn_division_count": 48
  },
  {
    "name": "moneragala",
    "gn_division_count": 26
  },
  {
    "name": "badalkumbura",
    "gn_division_count": 41
  },
  {
    "name": "wellawaya",
    "gn_division_count": 29
  },
  {
    "name": "buttala",
    "gn_division_count": 29
  },
  {
    "name": "katharagama",
    "gn_division_count": 5
  },
  {
    "name": "thanamalvila",
    "gn_division_count": 14
  },
  {
    "name": "sevanagala",
    "gn_division_count": 14
  },
  {
    "name": "eheliyagoda",
    "gn_division_count": 44
  },
  {
    "name": "kuruvita",
    "gn_division_count": 39
  },
  {
    "name": "ratnapura",
    "gn_division_count": 53
  },
  {
    "name": "kiriella",
    "gn_division_count": 17
  },
  {
    "name": "imbulpe",
    "gn_division_count": 50
  },
  {
    "name": "balangoda",
    "gn_division_count": 41
  },
  {
    "name": "kaltota",
    "gn_division_count": 12
  },
  {
    "name": "opanayake",
    "gn_division_count": 20
  },
  {
    "name": "pelmadulla",
    "gn_division_count": 37
  },
  {
    "name": "elapatha",
    "gn_division_count": 20
  },
  {
    "name": "ayagama",
    "gn_division_count": 21
  },
  {
    "name": "kalawana",
    "gn_division_count": 33
  },
  {
    "name": "nivithigala",
    "gn_division_count": 24
  },
  {
    "name": "kahawatta",
    "gn_division_count": 21
  },
  {
    "name": "godakawela",
    "gn_division_count": 44
  },
  {
    "name": "weligepola",
    "gn_division_count": 30
  },
  {
    "name": "embilipitiya",
    "gn_division_count": 40
  },
  {
    "name": "kolonna",
    "gn_division_count": 29
  },
  {
    "name": "rambukkana",
    "gn_division_count": 89
  },
  {
    "name": "mawanella",
    "gn_division_count": 71
  },
  {
    "name": "aranayaka",
    "gn_division_count": 61
  },
  {
    "name": "kegalle",
    "gn_division_count": 61
  },
  {
    "name": "galigamuwa",
    "gn_division_count": 51
  },
  {
    "name": "warakapola",
    "gn_division_count": 78
  },
  {
    "name": "ruwanwella",
    "gn_division_count": 38
  },
  {
    "name": "bulathkohupitiya",
    "gn_division_count": 27
  },
  {
    "name": "yatiyanthota",
    "gn_division_count": 32
  },
  {
    "name": "dehiovita",
    "gn_division_count": 39
  },
  {
    "name": "deraniyagala",
    "gn_division_count": 26
  }
];

async function updateDsGnCounts() {
  console.log("\n========================================");
  console.log("  Updating DS GN Division Counts");
  console.log("========================================\n");

  let updated = 0;
  let notFound = 0;

  try {
    for (const ds of dsData) {
      const result = await db.query(
        `
        UPDATE divisional_secretariats
        SET gn_division_count = $1
        WHERE slug = $2
        RETURNING id, name, slug, gn_division_count
        `,
        [ds.gn_division_count, ds.name]
      );

      if (result.rowCount === 0) {
        console.log(`❌ NOT FOUND: ${ds.name}`);
        notFound++;
      } else {
        const row = result.rows[0];

        console.log(
          `✅ ${row.name} (${row.slug}) → ${row.gn_division_count} GN divisions`
        );

        updated++;
      }
    }

    console.log("\n========================================");
    console.log("              SUMMARY");
    console.log("========================================");
    console.log(`Total records : ${dsData.length}`);
    console.log(`Updated       : ${updated}`);
    console.log(`Not found     : ${notFound}`);
    console.log("========================================\n");

  } catch (error) {
    console.error("\n❌ Database update failed:");
    console.error(error.message);
  } finally {
    await db.end();
  }
}

updateDsGnCounts();