// data/routes/nlb/nlb_north.js

window.BusData = window.BusData || {};
window.BusData.NLB = window.BusData.NLB || [];

window.BusData.NLB.push(
  // ==========================================
  // ROUTE 34: Outbound (Shek Mun Kap -> Tung Chung Tat Tung Road)
  // ==========================================
  {
    routeId: "34_O",
    routeNo: "34",
    nlbApiRouteId: "34", // Replace with exact API route ID
    company: "NLB",
    direction: "outbound",
    origin_e: "Shek Mun Kap",
    origin_c: "石門甲",
    destination_e: "Tung Chung Tat Tung Road Bus Terminus",
    destination_c: "東涌達東路巴士總站",
    fullFare: 5.1,
    holidayFare: 5.1,
    serviceHours: {
      weekdays: "07:00 - 22:15",
      sundaysAndHolidays: "07:55 - 22:15"
    },
    frequencyMins: "25 - 75",
    stops: [
      {
        stopSeq: 1,
        stopId: "NLB_34_O_01",
        nlbApiStopId: "nlb_api_stop_001", 
        stopName_e: "Shek Mun Kap",
        stopName_c: "石門甲",
        latitude: 22.270912,
        longitude: 113.935102,
        isTerminal: true,
        minTurnaroundMins: 5,
        linkedInboundRoute: "34_I", // Predict departure by checking arriving 34_I buses
        segmentTimeSec: 0,
        segmentDistanceM: 0,
        sectionFare: 5.1
      },
      {
        stopSeq: 2,
        stopId: "NLB_34_O_02",
        nlbApiStopId: "nlb_api_stop_002",
        stopName_e: "Shek Mun Kap Village",
        stopName_c: "石門甲村",
        latitude: 22.272311,
        longitude: 113.936054,
        segmentTimeSec: 60,
        segmentDistanceM: 200,
        sectionFare: 5.1
      },
      {
        stopSeq: 3,
        stopId: "NLB_34_O_03",
        nlbApiStopId: "nlb_api_stop_003",
        stopName_e: "Shek Mun Kap Road",
        stopName_c: "石門甲道",
        latitude: 22.273645,
        longitude: 113.937210,
        segmentTimeSec: 60,
        segmentDistanceM: 210,
        sectionFare: 5.1
      },
      {
        stopSeq: 4,
        stopId: "NLB_34_O_04",
        nlbApiStopId: "nlb_api_stop_004",
        stopName_e: "Lung Tseng Tau",
        stopName_c: "龍井頭",
        latitude: 22.275580,
        longitude: 113.938815,
        segmentTimeSec: 90,
        segmentDistanceM: 350,
        sectionFare: 5.1
      },
      {
        stopSeq: 5,
        stopId: "NLB_34_O_05",
        nlbApiStopId: "nlb_api_stop_005",
        stopName_e: "Wong Ka Wai",
        stopName_c: "黃家圍",
        latitude: 22.276840,
        longitude: 113.939220,
        segmentTimeSec: 60,
        segmentDistanceM: 150,
        sectionFare: 5.1
      },
      {
        stopSeq: 6,
        stopId: "NLB_34_O_06",
        nlbApiStopId: "nlb_api_stop_006",
        stopName_e: "Ha Ling Pei",
        stopName_c: "下嶺皮",
        latitude: 22.277980,
        longitude: 113.939500,
        segmentTimeSec: 60,
        segmentDistanceM: 140,
        sectionFare: 5.1
      },
      {
        stopSeq: 7,
        stopId: "NLB_34_O_07",
        nlbApiStopId: "nlb_api_stop_007",
        stopName_e: "Sheung Ling Pei",
        stopName_c: "上嶺皮",
        latitude: 22.279150,
        longitude: 113.939810,
        segmentTimeSec: 60,
        segmentDistanceM: 150,
        sectionFare: 5.1
      },
      {
        stopSeq: 8,
        stopId: "NLB_34_O_08",
        nlbApiStopId: "nlb_api_stop_008",
        stopName_e: "Tung Chung Rural Committee Office",
        stopName_c: "東涌鄉事委員會",
        latitude: 22.280420,
        longitude: 113.939980,
        segmentTimeSec: 60,
        segmentDistanceM: 180,
        sectionFare: 5.1
      },
      {
        stopSeq: 9,
        stopId: "NLB_34_O_09",
        nlbApiStopId: "nlb_api_stop_009",
        stopName_e: "Chek Lap Kok New Village",
        stopName_c: "赤鱲角新村",
        latitude: 22.281890,
        longitude: 113.942350,
        segmentTimeSec: 120,
        segmentDistanceM: 400,
        sectionFare: 5.1,
        // UI filters this out for certain trips to prevent Ghost ETAs
        omittedHours: ["07:00", "08:15", "12:15"] 
      },
      {
        stopSeq: 10,
        stopId: "NLB_34_O_10",
        nlbApiStopId: "nlb_api_stop_010",
        stopName_e: "Ma Wan Sun Tsuen",
        stopName_c: "馬灣新村",
        latitude: 22.281130,
        longitude: 113.939210,
        segmentTimeSec: 90,
        segmentDistanceM: 300,
        sectionFare: 5.1
      },
      {
        stopSeq: 11,
        stopId: "NLB_34_O_11",
        nlbApiStopId: "nlb_api_stop_011",
        stopName_e: "Mei Yat House, Yat Tung Estate / North Lantau Hospital",
        stopName_c: "北大嶼山醫院(北行), 逸東邨美逸樓",
        latitude: 22.281890,
        longitude: 113.937080,
        segmentTimeSec: 90,
        segmentDistanceM: 250,
        sectionFare: 5.1
      },
      {
        stopSeq: 12,
        stopId: "NLB_34_O_12",
        nlbApiStopId: "nlb_api_stop_012",
        stopName_e: "Yat Tung Estate Bus Terminus",
        stopName_c: "逸東邨巴士總站",
        latitude: 22.282560,
        longitude: 113.935120,
        segmentTimeSec: 120,
        segmentDistanceM: 300,
        isIntermediateTerminal: true, // Often pauses here
        bottleneckRisk: true, // High likelihood of delay in estate
        sectionFare: 3.7,
        hasSectionFareDrop: true // Triggers "Fare Drop" UI badge
      },
      {
        stopSeq: 13,
        stopId: "NLB_34_O_13",
        nlbApiStopId: "nlb_api_stop_013",
        stopName_e: "North Lantau Hospital (Southbound)",
        stopName_c: "北大嶼山醫院(南行)",
        latitude: 22.281350,
        longitude: 113.936990,
        segmentTimeSec: 150, // Looping out of terminus takes time
        segmentDistanceM: 400,
        sectionFare: 3.7
      },
      {
        stopSeq: 14,
        stopId: "NLB_34_O_14",
        nlbApiStopId: "nlb_api_stop_014",
        stopName_e: "Tung Chung Fire Station",
        stopName_c: "東涌消防局",
        latitude: 22.288540,
        longitude: 113.940520,
        segmentTimeSec: 240, // Longer stretch on main road
        segmentDistanceM: 950,
        sectionFare: 3.7
      },
      {
        stopSeq: 15,
        stopId: "NLB_34_O_15",
        nlbApiStopId: "nlb_api_stop_015",
        stopName_e: "Tung Chung Cable Car Terminal",
        stopName_c: "東涌纜車站",
        latitude: 22.289890,
        longitude: 113.939020,
        segmentTimeSec: 90,
        segmentDistanceM: 300,
        bottleneckRisk: true, // Roundabout traffic
        sectionFare: 3.7
      },
      {
        stopSeq: 16,
        stopId: "NLB_34_O_16",
        nlbApiStopId: "nlb_api_stop_016",
        stopName_e: "Tung Chung Tat Tung Road Bus Terminus",
        stopName_c: "東涌達東路巴士總站",
        latitude: 22.289430,
        longitude: 113.941120,
        segmentTimeSec: 120,
        segmentDistanceM: 350,
        isTerminal: true,
        sectionFare: 3.7
      }
    ]
  },

  // ==========================================
  // ROUTE 34: Inbound (Tung Chung Tat Tung Road -> Shek Mun Kap)
  // ==========================================
  {
    routeId: "34_I",
    routeNo: "34",
    nlbApiRouteId: "34",
    company: "NLB",
    direction: "inbound",
    origin_e: "Tung Chung Tat Tung Road Bus Terminus",
    origin_c: "東涌達東路巴士總站",
    destination_e: "Shek Mun Kap",
    destination_c: "石門甲",
    fullFare: 5.1,
    holidayFare: 5.1,
    serviceHours: {
      weekdays: "07:30 - 21:45",
      sundaysAndHolidays: "07:30 -
