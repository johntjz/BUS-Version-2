// NLB/36.js

window.BusData = window.BusData || {};
window.BusData.NLB = window.BusData.NLB || [];

window.BusData.NLB.push(
  // ==========================================
  // ROUTE 36: Outbound (Tung Chung Tat Tung Road Bus Terminus -> Disneyland)
  // ==========================================
  {
    routeId: "36_O",
    routeNo: "36",
    nlbApiRouteId: "36", // Dynamic API ID reference
    company: "NLB",
    direction: "outbound",
    origin_e: "Tung Chung Tat Tung Road Bus Terminus",
    origin_c: "東涌達東路巴士總站",
    destination_e: "Disneyland",
    destination_c: "迪士尼樂園",
    fullFare: 10.7,
    holidayFare: 10.7,
    serviceHours: {
      weekdays: "07:45 - 19:30",
      sundaysAndHolidays: "07:45 - 19:30"
    },
    frequencyMins: "135 - 270", // Fixed timetable departures with long headways
    stops: [
      {
        stopSeq: 1,
        stopId: "NLB_36_O_01",
        nlbApiStopId: "nlb_api_stop_36_O_01", 
        stopName_e: "Tung Chung Tat Tung Road Bus Terminus",
        stopName_c: "東涌達東路巴士總站",
        latitude: 22.289430,
        longitude: 113.941120,
        isTerminal: true,
        minTurnaroundMins: 5,
        linkedInboundRoute: "36_I", // Predict departure by checking arriving 36_I buses
        segmentTimeSec: 0,
        segmentDistanceM: 0,
        sectionFare: 10.7
      },
      {
        stopSeq: 2,
        stopId: "NLB_36_O_02",
        nlbApiStopId: "nlb_api_stop_36_O_02",
        stopName_e: "Citygate",
        stopName_c: "東薈城",
        latitude: 22.289250,
        longitude: 113.940150,
        segmentTimeSec: 60, // Short distance exiting terminus
        segmentDistanceM: 200,
        sectionFare: 10.7
      },
      {
        stopSeq: 3,
        stopId: "NLB_36_O_03",
        nlbApiStopId: "nlb_api_stop_36_O_03",
        stopName_e: "Pak Mong",
        stopName_c: "白芒",
        latitude: 22.298250,
        longitude: 113.972300,
        segmentTimeSec: 360, // Long uninterrupted highway stretch on Cheung Tung Road
        segmentDistanceM: 4000,
        sectionFare: 10.7
      },
      {
        stopSeq: 4,
        stopId: "NLB_36_O_04",
        nlbApiStopId: "nlb_api_stop_36_O_04",
        stopName_e: "Government Maintenance Depot",
        stopName_c: "政府維修廠",
        latitude: 22.306020,
        longitude: 113.985850,
        segmentTimeSec: 180,
        segmentDistanceM: 2200,
        sectionFare: 10.7
      },
      {
        stopSeq: 5,
        stopId: "NLB_36_O_05",
        nlbApiStopId: "nlb_api_stop_36_O_05",
        stopName_e: "Siu Ho Wan",
        stopName_c: "小蠔灣",
        latitude: 22.316400,
        longitude: 114.008450,
        segmentTimeSec: 300,
        segmentDistanceM: 2800,
        sectionFare: 10.7
      },
      {
        stopSeq: 6,
        stopId: "NLB_36_O_06",
        nlbApiStopId: "nlb_api_stop_36_O_06",
        stopName_e: "Disneyland",
        stopName_c: "迪士尼樂園",
        latitude: 22.315350,
        longitude: 114.044670,
        isTerminal: true,
        segmentTimeSec: 420, // Final leg to Disneyland PTI
        segmentDistanceM: 4500,
        sectionFare: 10.7
      }
    ]
  },

  // ==========================================
  // ROUTE 36: Inbound (Disneyland -> Tung Chung Tat Tung Road Bus Terminus)
  // ==========================================
  {
    routeId: "36_I",
    routeNo: "36",
    nlbApiRouteId: "36",
    company: "NLB",
    direction: "inbound",
    origin_e: "Disneyland",
    origin_c: "迪士尼樂園",
    destination_e: "Tung Chung Tat Tung Road Bus Terminus",
    destination_c: "東涌達東路巴士總站",
    fullFare: 10.7,
    holidayFare: 10.7,
    serviceHours: {
      weekdays: "08:20 - 20:05",
      sundaysAndHolidays: "08:20 - 20:05"
    },
    frequencyMins: "135 - 270", // Fixed timetable departures with long headways
    stops: [
      {
        stopSeq: 1,
        stopId: "NLB_36_I_01",
        nlbApiStopId: "nlb_api_stop_36_I_01",
        stopName_e: "Disneyland",
        stopName_c: "迪士尼樂園",
        latitude: 22.315350,
        longitude: 114.044670,
        isTerminal: true,
        minTurnaroundMins: 10,
        linkedInboundRoute: "36_O",
        segmentTimeSec: 0,
        segmentDistanceM: 0,
        sectionFare: 10.7
      },
      {
        stopSeq: 2,
        stopId: "NLB_36_I_02",
        nlbApiStopId: "nlb_api_stop_36_I_02",
        stopName_e: "Siu Ho Wan",
        stopName_c: "小蠔灣",
        latitude: 22.316400,
        longitude: 114.008450,
        segmentTimeSec: 420,
        segmentDistanceM: 4500,
        sectionFare: 5.1,
        hasSectionFareDrop: true // Significant fare drop trigger ($10.7 -> $5.1)[cite: 3]
      },
      {
        stopSeq: 3,
        stopId: "NLB_36_I_03",
        nlbApiStopId: "nlb_api_stop_36_I_03",
        stopName_e: "Siu Ho Wan Water Treatment Works",
        stopName_c: "小蠔灣濾水廠",
        latitude: 22.308550,
        longitude: 114.004010,
        segmentTimeSec: 120,
        segmentDistanceM: 1000,
        sectionFare: 5.1
      },
      {
        stopSeq: 4,
        stopId: "NLB_36_I_04",
        nlbApiStopId: "nlb_api_stop_36_I_04",
        stopName_e: "Discovery Bay Tunnel",
        stopName_c: "愉景灣隧道",
        latitude: 22.301550,
        longitude: 113.992200,
        segmentTimeSec: 180,
        segmentDistanceM: 1500,
        sectionFare: 5.1
      },
      {
        stopSeq: 5,
        stopId: "NLB_36_I_05",
        nlbApiStopId: "nlb_api_stop_36_I_05",
        stopName_e: "Government Maintenance Depot",
        stopName_c: "政府維修廠",
        latitude: 22.306020,
        longitude: 113.985850,
        segmentTimeSec: 120,
        segmentDistanceM: 800,
        sectionFare: 5.1
      },
      {
        stopSeq: 6,
        stopId: "NLB_36_I_06",
        nlbApiStopId: "nlb_api_stop_36_I_06",
        stopName_e: "Pak Mong",
        stopName_c: "白芒",
        latitude: 22.298250,
        longitude: 113.972300,
        segmentTimeSec: 180,
        segmentDistanceM: 2200,
        sectionFare: 5.1
      },
      {
        stopSeq: 7,
        stopId: "NLB_36_I_07",
        nlbApiStopId: "nlb_api_stop_36_I_07",
        stopName_e: "Fu Tung Plaza",
        stopName_c: "富東廣場",
        latitude: 22.289250,
        longitude: 113.940150,
        segmentTimeSec: 360,
        segmentDistanceM: 4000,
        bottleneckRisk: true, // Returning into Tung Chung town center traffic
        sectionFare: 5.1
      },
      {
        stopSeq: 8,
        stopId: "NLB_36_I_08",
        nlbApiStopId: "nlb_api_stop_36_I_08",
        stopName_e: "Tung Chung Cable Car Terminal",
        stopName_c: "東涌纜車站",
        latitude: 22.289890,
        longitude: 113.939020,
        segmentTimeSec: 90,
        segmentDistanceM: 300,
        bottleneckRisk: true, // Congestion frequently occurs around the roundabout
        sectionFare: 5.1
      },
      {
        stopSeq: 9,
        stopId: "NLB_36_I_09",
        nlbApiStopId: "nlb_api_stop_36_I_09",
        stopName_e: "Tung Chung Tat Tung Road Bus Terminus",
        stopName_c: "東涌達東路巴士總站",
        latitude: 22.289430,
        longitude: 113.941120,
        isTerminal: true,
        segmentTimeSec: 120, // Loop into terminus
        segmentDistanceM: 350,
        sectionFare: 5.1
      }
    ]
  }
);
