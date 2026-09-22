export const activities = [
  { id: "P-001", name: "Pipe Laying - Line 24\"", discipline: "Mechanical", plannedStart: "05 Jul 2025", plannedEnd: "12 Jul 2025", actualStart: "06 Jul 2025", status: "Completed", progress: 100 },
  { id: "P-002", name: "Spool Erection - ST-102", discipline: "Mechanical", plannedStart: "08 Jul 2025", plannedEnd: "15 Jul 2025", actualStart: "10 Jul 2025", status: "In Progress", progress: 72 },
  { id: "P-003", name: "Hydro Testing", discipline: "Mechanical", plannedStart: "18 Jul 2025", plannedEnd: "20 Jul 2025", actualStart: "-", status: "Not Started", progress: 0 },
  { id: "P-004", name: "Insulation", discipline: "Mechanical", plannedStart: "22 Jul 2025", plannedEnd: "28 Jul 2025", actualStart: "-", status: "Not Started", progress: 0 },
  { id: "P-005", name: "Painting", discipline: "Civil", plannedStart: "01 Aug 2025", plannedEnd: "06 Aug 2025", actualStart: "-", status: "Not Started", progress: 0 },
  { id: "C-001", name: "Foundation Work", discipline: "Civil", plannedStart: "02 Jul 2025", plannedEnd: "11 Jul 2025", actualStart: "03 Jul 2025", status: "In Progress", progress: 64 },
  { id: "E-012", name: "Cable Tray Installation", discipline: "Electrical", plannedStart: "12 Jul 2025", plannedEnd: "20 Jul 2025", actualStart: "13 Jul 2025", status: "In Progress", progress: 55 },
  { id: "M-018", name: "Valve Installation", discipline: "Mechanical", plannedStart: "16 Jul 2025", plannedEnd: "24 Jul 2025", actualStart: "17 Jul 2025", status: "Delayed", progress: 35 },
];

export const progressData = [
  { week: "17 Aug", planned: 20, actual: 17 },
  { week: "24 Aug", planned: 32, actual: 28 },
  { week: "31 Aug", planned: 45, actual: 39 },
  { week: "07 Sep", planned: 57, actual: 51 },
  { week: "14 Sep", planned: 70, actual: 64 },
  { week: "16 Sep", planned: 75, actual: 68 },
];

export const alerts = [
  { title: "Delay in Welding", text: "Activity W-006 is 3 days behind. Material delay reported.", severity: "Critical", time: "2 hours ago" },
  { title: "Low Progress", text: "Pipe Laying (P-001) is below the planned progress threshold.", severity: "Warning", time: "4 hours ago" },
  { title: "Unmatched Activity Found", text: "Description 'Pipe alignment' needs matching review.", severity: "Review", time: "6 hours ago" },
  { title: "Weather Impact", text: "Heavy rain may affect excavation work.", severity: "Info", time: "1 day ago" },
];

export const matches = [
  { extracted: "Spool erection at 24 inch line", matched: "Spool Erection", id: "P-002", score: 92, status: "Matched" },
  { extracted: "Cable tray installation", matched: "Cable Tray Installation", id: "E-012", score: 76, status: "Matched" },
  { extracted: "Equipment foundation ready", matched: "Foundation Work", id: "C-001", score: 63, status: "Needs Review" },
  { extracted: "Valve installation", matched: "Valve Installation", id: "M-018", score: 90, status: "Matched" },
];

export const reportFiles = [
  { name: "Daily_Report_16Sep.pdf", type: "Daily Report", uploaded: "Yatri", date: "16 Sep 2025", status: "Processed" },
  { name: "Civil_Status.xlsx", type: "Spreadsheet", uploaded: "Yatri", date: "16 Sep 2025", status: "Processed" },
  { name: "Piping_Report.pdf", type: "Daily Report", uploaded: "Yatri", date: "15 Sep 2025", status: "Processed" },
];

export const knowledge = [
  { title: "Activity Matching Guide", type: "PDF", size: "2.4 MB", date: "28 May 2025" },
  { title: "Discipline Terminology Mapping", type: "PDF", size: "1.9 MB", date: "14 Jul 2025" },
  { title: "Sample Daily Report Format", type: "Excel", size: "132 KB", date: "12 Sep 2025" },
  { title: "L5/L6 Schedule Extract", type: "Excel", size: "1.3 MB", date: "10 Sep 2025" },
  { title: "FAQs - Time Agent", type: "PDF", size: "668 KB", date: "08 Sep 2025" },
];