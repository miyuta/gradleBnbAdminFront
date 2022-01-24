import { BedType } from "../types/room"

// 1월부터 12월까지
export const monthList = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

// 1부터 31까지
export const dayList = Array.from(Array(31), (_, i) => `${String(i + 1)}`)

// 현재 년부터 100년전
export const yearList = Array.from(Array(100), (_, i) => `${String(new Date().getFullYear() - i)}`)

// 숙소 큰 범위의 건물 유형
export const largeBuildingTypeList = [
  'Apartment',
  'House',
  'Secondary Unit',
  'Unique Space',
  'B&B',
  'Boutique Hotel',
]

// 아파트 건물 유형
export const apartmentBuildingTypeList = [
  'Apartment',
  'Flat',
  'Annex',
  'Casa Particular(Cuba)',
  'Loft',
  'Residence',
]

// 주택 건물 유형
export const houseBuildingTypeList = [
  'House',
  'Bungalow',
  'Log Cabin',
  'Casa',
  'Particular(Cuba)',
  'Chalet',
  'Suburban House',
  'Cyclades(Greece)',
  'Dammuso',
  'Dome House',
  'House Boat',
  'Hut',
  'Light House',
  'Pension(Korea)',
  'Town House',
  'Masion',
]

// 별채 건물 유형
export const secondaryUnitBuildingTypeList = [
  'Annex For Guest',
  'Guest Suite',
  'WWOOF',
]

// 독특한 숙소 건물 유형
export const uniqueSpaceBuildingTypeList = [
  'Shed',
  'Boat',
  'Bus',
  'Caravan',
  'Palace',
  'Cave',
  'Dome House',
  'WWOOF',
  'House Boat',
  'Hut',
  'Igloo',
  'Island',
  'Light House',
  'Pension(Korea)',
  'Plane',
  'Tent',
  'Teepee',
  'Train',
  'Tree House',
  'Windmill House',
  'Yurt',
]

// B&B 건물유형
export const bnbBuildingTypeList = [
  'B&B',
  'Casa Particular',
  'WWOOF',
  'Ryokan(Japan)',
]

// 부티크 호텔 건물 유형
export const boutiqueHotelBuildingTypeList = [
  'Boutique Hotel',
  'Apart Hotel',
  'Heritage Hotel(India)',
  'Hostel',
  'Hotel',
  'Mountain Lodge',
  'Resort',
  'Residence',
]

// 침실 개수
export const bedroomCountList = Array.from(Array(16), (_, i) => `${i} Bedroom(s)`)

// 침대 유형
export const bedTypes: BedType[] = [
  'Sofa',
  'Air Mettress',
  'Blanket',
  'Single',
  'Double',
  'Queen-size',
  'Bunk',
  'Crib',
  'Hammock',
  'Waterbed'
]

// 국가 리스트
export const countryList = [
  "Republic of Ghana",
  "République Gabonaise",
  "Co-operative Republic of Guyana",
  "Gambia",
  "Bailiwick of Guernsey",
  "Guadeloupe",
  "República de Guatemala",
  "Guam",
  "Grenada",
  "Georgia",
  "Greece",
  "Greenland",
  "기네비쏘",
  "기니",
  "까뽀베르데",
  "나미비아",
  "나우루",
  "나이지리아",
  "남수단",
  "남아프리카",
  "네덜란드",
  "네덜란드령 카리브",
  "네팔",
  "노르웨이",
  "노퍽섬",
  "뉴 칼레도니아",
  "뉴질랜드",
  "니우에",
  "니제르",
  "니카라과",
  "대만",
  "덴마크",
  "도미니카",
  "도미니카 공화국",
  "독일",
  "동티모르",
  "라오스",
  "라이베리아",
  "라트비아",
  "러시아",
  "레바논",
  "레소토",
  "루마니아",
  "룩셈부르크",
  "르완다",
  "리비아",
  "리유니온",
  "리투아니아",
  "리히텐슈타인",
  "마다가스카르",
  "마샬 군도",
  "마요티",
  "마카오",
  "말라위",
  "말레이시아",
  "말리",
  "말티니크",
  "맨 섬",
  "멕시코",
  "모나코",
  "모로코",
  "모리셔스",
  "모리타니",
  "모잠비크",
  "몬테네그로",
  "몬트세라트",
  "몰도바",
  "몰디브",
  "몰타",
  "몽골",
  "미국",
  "미국령 버진 아일랜드",
  "미얀마",
  "미크로네시아",
  "바누아투",
  "바레인",
  "바베이도스",
  "바티칸",
  "바하마",
  "방글라데시",
  "버뮤다",
  "베냉",
  "베네수엘라",
  "베트남",
  "벨기에",
  "벨라루스",
  "벨리즈",
  "보스니아 헤르체고비나",
  "보츠와나",
  "볼리비아",
  "부룬디",
  "부르키나파소",
  "부탄",
  "북마리아나제도",
  "북마케도니아",
  "불가리아",
  "브라질",
  "브루나이",
  "사모아",
  "사우디아라비아",
  "사우스조지아 사우스샌드위치 제도",
  "사이프러스",
  "산마리노",
  "상투메 프린시페",
  "생 마르탱",
  "생 바르텔르미",
  "서사하라",
  "세네갈",
  "세르비아",
  "세인트루시아",
  "세인트빈센트그레나딘",
  "세인트크리스토퍼 네비스",
  "세인트피에르-미케롱",
  "세인트헬레나",
  "소말리아",
  "솔로몬 제도",
  "수단",
  "수리남",
  "쉐이쉘",
  "스리랑카",
  "스발바르제도-얀마웬섬",
  "스와질랜드",
  "스웨덴",
  "스위스",
  "스페인",
  "슬로바키아",
  "슬로베니아",
  "시에라리온",
  "신트마르턴",
  "싱가포르",
  "아랍에미리트 연합",
  "아루바",
  "아르메니아",
  "아르헨티나",
  "아메리칸 사모아",
  "아이슬란드",
  "아이티",
  "아일랜드",
  "아제르바이잔",
  "아프가니스탄",
  "안길라",
  "안도라",
  "알바니아",
  "알제리",
  "앙골라",
  "앤티가 바부다",
  "에리트리아",
  "에스토니아",
  "에콰도르",
  "엘살바도르",
  "영국",
  "영국령 버진 아일랜드",
  "영국령인도양식민지",
  "예멘",
  "오만",
  "오스트레일리아",
  "오스트리아",
  "온두라스",
  "올란드 제도",
  "왈리스-푸투나 제도",
  "요르단",
  "우간다",
  "우루과이",
  "우즈베키스탄",
  "우크라이나",
  "이디오피아",
  "이라크",
  "이스라엘",
  "이집트",
  "이탈리아",
  "인도",
  "인도네시아",
  "Japan",
  "자메이카",
  "잠비아",
  "저지",
  "적도 기니",
  "중국",
  "중앙 아프리카 공화국",
  "지부티",
  "지브롤터",
  "짐바브웨",
  "차드",
  "체코",
  "칠레",
  "카메룬",
  "카자흐스탄",
  "카타르",
  "캄보디아",
  "캐나다",
  "케냐",
  "케이맨제도",
  "코모로스",
  "코소보",
  "코스타리카",
  "코코스제도",
  "코트디부아르",
  "콜롬비아",
  "콩고",
  "콩고 민주 공화국",
  "쿠바",
  "쿠웨이트",
  "쿡제도",
  "퀴라소",
  "크로아티아",
  "크리스마스섬",
  "키르기스스탄",
  "키리바시",
  "타지키스탄",
  "탄자니아",
  "태국",
  "터크스케이커스제도",
  "터키",
  "토고",
  "토켈라우",
  "통가",
  "투르크메니스탄",
  "투발루",
  "튀니지",
  "트리니다드 토바고",
  "파나마",
  "파라과이",
  "파키스탄",
  "파푸아뉴기니",
  "팔라우",
  "팔레스타인 지구",
  "페로제도",
  "페루",
  "포르투갈",
  "포클랜드 제도(말비나스 군도)",
  "폴란드",
  "푸에르토리코",
  "프랑스",
  "프랑스령 기아나",
  "프랑스령 폴리네시아",
  "피지",
  "핀란드",
  "필리핀",
  "핏케언섬",
  "대한민국",
  "헝가리",
  "Hongkong",
]

// 편의 시설
export const amenityList = [
  'Wifi',
  'TV',
  'Heater',
  'Air Conditioner',
  'Iron',
  'Shampoo',
  'Hair dryer',
  'Breakfast, Coffee, Tea',
  'Business Space',
  'Fireplace',
  'Closet',
  'Guest Entrance'
]

// 편의 공간
export const convenienceList = [
  'Kitchen',
  'Laundry Room',
  'Parking Lot',
  'Gym',
  'Swimming Pool',
  'Jacuzzi'
]
