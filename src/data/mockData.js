export const projects = [
  { id:"P-1042", name:"Ahmedabad Ring Road Package 3", client:"Gujarat Infrastructure Authority", location:"Ahmedabad, Gujarat", start:"2026-01-15", end:"2027-06-30", progress:62, health:86, status:"On Track", delay:0, budget:"₹184 Cr", manager:"Rohan Mehta" },
  { id:"P-1038", name:"Narmada Canal Modernization", client:"Water Resources Department", location:"Vadodara, Gujarat", start:"2025-08-01", end:"2027-02-15", progress:48, health:71, status:"At Risk", delay:12, budget:"₹96 Cr", manager:"Priya Shah" },
  { id:"P-1027", name:"Surat Metro Depot Civil Works", client:"Metro Rail Corporation", location:"Surat, Gujarat", start:"2026-03-10", end:"2028-01-20", progress:31, health:92, status:"On Track", delay:0, budget:"₹241 Cr", manager:"Amit Patel" },
  { id:"P-1019", name:"Coastal Highway Bridge B-17", client:"Roads & Buildings Department", location:"Bhavnagar, Gujarat", start:"2025-04-20", end:"2026-12-18", progress:77, health:54, status:"Delayed", delay:27, budget:"₹73 Cr", manager:"Neha Joshi" }
];

export const activities = [
  { id:"A-101", project:"P-1042", name:"Earthwork & embankment", discipline:"Civil", plannedStart:"2026-08-01", plannedEnd:"2026-09-18", actualStart:"2026-08-04", actualEnd:"", status:"In Progress", progress:82, variance:3 },
  { id:"A-102", project:"P-1042", name:"Drainage culvert C-14", discipline:"Structures", plannedStart:"2026-08-20", plannedEnd:"2026-09-12", actualStart:"2026-08-22", actualEnd:"", status:"Delayed", progress:63, variance:8 },
  { id:"A-103", project:"P-1042", name:"Sub-base layer chainage 4+200", discipline:"Roadworks", plannedStart:"2026-09-10", plannedEnd:"2026-09-28", actualStart:"2026-09-10", actualEnd:"", status:"In Progress", progress:38, variance:0 },
  { id:"A-104", project:"P-1042", name:"Street lighting foundations", discipline:"Electrical", plannedStart:"2026-09-15", plannedEnd:"2026-10-05", actualStart:"", actualEnd:"", status:"Not Started", progress:0, variance:0 },
  { id:"A-105", project:"P-1042", name:"Asphalt binder course", discipline:"Roadworks", plannedStart:"2026-10-01", plannedEnd:"2026-10-22", actualStart:"", actualEnd:"", status:"Not Started", progress:0, variance:0 },
  { id:"A-201", project:"P-1038", name:"Canal lining reach 7", discipline:"Civil", plannedStart:"2026-08-05", plannedEnd:"2026-09-25", actualStart:"2026-08-08", actualEnd:"", status:"In Progress", progress:56, variance:7 },
  { id:"A-202", project:"P-1038", name:"Cross regulator CR-03", discipline:"Structures", plannedStart:"2026-07-10", plannedEnd:"2026-09-15", actualStart:"2026-07-19", actualEnd:"", status:"Delayed", progress:69, variance:12 },
  { id:"A-301", project:"P-1027", name:"Depot foundation grid A-D", discipline:"Structures", plannedStart:"2026-07-01", plannedEnd:"2026-10-10", actualStart:"2026-07-02", actualEnd:"", status:"In Progress", progress:47, variance:1 },
  { id:"A-401", project:"P-1019", name:"Pier P17 reinforcement", discipline:"Structures", plannedStart:"2026-08-10", plannedEnd:"2026-09-08", actualStart:"2026-08-15", actualEnd:"", status:"Delayed", progress:72, variance:18 }
];

export const reports = [
  { id:"DR-2098", project:"P-1042", date:"2026-09-17", weather:"Clear, 31°C", workforce:148, equipment:26, work:"Embankment compaction at CH 3+600–4+100; culvert C-14 shuttering.", delays:"C-14 concrete pour moved by one shift due to transit mixer availability.", safety:"No lost-time incidents. Toolbox talk completed.", submittedBy:"Sanjay Parmar", status:"Submitted" },
  { id:"DR-2097", project:"P-1042", date:"2026-09-16", weather:"Partly cloudy, 30°C", workforce:153, equipment:28, work:"GSB spreading and density testing; drainage excavation.", delays:"None reported.", safety:"Barricading reinforced near live traffic.", submittedBy:"Sanjay Parmar", status:"Approved" },
  { id:"DR-1182", project:"P-1038", date:"2026-09-17", weather:"Light rain, 28°C", workforce:92, equipment:17, work:"Canal lining panel preparation at Reach 7.", delays:"Rain stopped work for 2.5 hours.", safety:"Slippery access route isolated.", submittedBy:"Kavita Desai", status:"Needs Review" },
  { id:"DR-0874", project:"P-1019", date:"2026-09-16", weather:"Clear, 32°C", workforce:64, equipment:13, work:"Pier P17 reinforcement and formwork inspection.", delays:"Rebar delivery arrived late.", safety:"Crane exclusion zone monitored.", submittedBy:"Mahesh Rana", status:"Submitted" }
];

export const photos = [
  { id:"PH-781", project:"P-1042", title:"Culvert C-14 shuttering", category:"Progress", date:"2026-09-17", size:"3.2 MB", src:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80" },
  { id:"PH-780", project:"P-1042", title:"GSB compaction", category:"Progress", date:"2026-09-17", size:"2.8 MB", src:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=900&q=80" },
  { id:"PH-779", project:"P-1042", title:"Site access and safety", category:"Safety", date:"2026-09-16", size:"2.1 MB", src:"https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=900&q=80" },
  { id:"PH-642", project:"P-1038", title:"Canal lining reach 7", category:"Progress", date:"2026-09-17", size:"4.1 MB", src:"https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&w=900&q=80" },
  { id:"PH-511", project:"P-1019", title:"Pier P17 reinforcement", category:"Structures", date:"2026-09-16", size:"3.7 MB", src:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=900&q=80" }
];

export const documents = [
  { id:"DOC-440", name:"Package-3_Rev12_MasterSchedule.xlsx", type:"XLSX", category:"Schedule", date:"2026-09-15", size:"1.8 MB" },
  { id:"DOC-439", name:"C14_ShopDrawing_Rev04.pdf", type:"PDF", category:"Drawings", date:"2026-09-14", size:"6.4 MB" },
  { id:"DOC-438", name:"MethodStatement_GSB.pdf", type:"PDF", category:"Method Statement", date:"2026-09-12", size:"2.2 MB" },
  { id:"DOC-437", name:"WeeklyProgress_Week37.docx", type:"DOCX", category:"Reports", date:"2026-09-11", size:"840 KB" },
  { id:"DOC-436", name:"BOQ_Package3.csv", type:"CSV", category:"Commercial", date:"2026-09-08", size:"420 KB" }
];

export const aiItems = [
  { id:"AI-901", project:"P-1042", report:"DR-2098", extracted:"Culvert C-14 shuttering is 63% complete and concrete pour shifted by one shift.", activity:"A-102 · Drainage culvert C-14", similarity:96, confidence:97, status:"Auto-approved", reason:"Strong semantic and date match." },
  { id:"AI-902", project:"P-1042", report:"DR-2097", extracted:"GSB spreading and density testing completed at chainage 4+200.", activity:"A-103 · Sub-base layer chainage 4+200", similarity:88, confidence:78, status:"Needs review", reason:"Quantity wording differs from schedule description." },
  { id:"AI-903", project:"P-1038", report:"DR-1182", extracted:"Canal lining panel preparation at Reach 7 after rain interruption.", activity:"A-201 · Canal lining reach 7", similarity:94, confidence:91, status:"Auto-approved", reason:"Project, reach and activity terms align." },
  { id:"AI-904", project:"P-1019", report:"DR-0874", extracted:"Reinforcement work progressed on Pier P17; rebar delivery arrived late.", activity:"A-401 · Pier P17 reinforcement", similarity:72, confidence:55, status:"Unmatched", reason:"Potential dependency impact not yet confirmed." },
  { id:"AI-905", project:"P-1042", report:"DR-2098", extracted:"No work reference found for temporary traffic diversion inspection.", activity:"No schedule match", similarity:31, confidence:42, status:"Unmatched", reason:"No sufficiently similar schedule activity." }
];

export const alerts = [
  { id:"AL-01", type:"Delay", severity:"Critical", title:"Culvert C-14 is 8 days behind baseline", detail:"Drainage culvert C-14 has 63% progress against the current planned curve. Review concrete-pour dependency.", time:"18 min ago", read:false },
  { id:"AL-02", type:"AI Match", severity:"High", title:"Low-confidence activity match requires review", detail:"Pier P17 reinforcement has a 55% confidence score and may affect the bridge deck sequence.", time:"42 min ago", read:false },
  { id:"AL-03", type:"Report", severity:"Medium", title:"Daily report awaiting approval", detail:"DR-1182 from Narmada Canal Modernization is ready for supervisor review.", time:"2 hr ago", read:false },
  { id:"AL-04", type:"Milestone", severity:"High", title:"CR-03 milestone risk detected", detail:"Cross regulator CR-03 is 12 days behind plan and approaches a downstream commissioning milestone.", time:"4 hr ago", read:true },
  { id:"AL-05", type:"Report", severity:"Low", title:"No report submitted yesterday", detail:"One subcontractor package did not submit the expected daily site report.", time:"1 day ago", read:true }
];

export const team = [
  { id:1, name:"Rohan Mehta", role:"Project Manager", email:"rohan@infrapulse.demo", status:"Active", permissions:"Full project access" },
  { id:2, name:"Priya Shah", role:"Planning Engineer", email:"priya@infrapulse.demo", status:"Active", permissions:"Schedule + analytics" },
  { id:3, name:"Sanjay Parmar", role:"Site Engineer", email:"sanjay@infrapulse.demo", status:"Active", permissions:"Reports + photos" },
  { id:4, name:"Kavita Desai", role:"QA/QC Engineer", email:"kavita@infrapulse.demo", status:"Active", permissions:"Reports + documents" },
  { id:5, name:"Mahesh Rana", role:"Subcontractor", email:"mahesh@infrapulse.demo", status:"Inactive", permissions:"Assigned activities only" }
];

export const progressData = [
  {week:"W31", planned:49, actual:47},{week:"W32", planned:52, actual:51},{week:"W33", planned:55, actual:53},
  {week:"W34", planned:57, actual:56},{week:"W35", planned:59, actual:58},{week:"W36", planned:61, actual:60},
  {week:"W37", planned:64, actual:62},{week:"W38", planned:67, actual:63},{week:"W39", planned:70, actual:65},
  {week:"W40", planned:73, actual:68}
];

export const sCurveData = [
  {month:"Jan", planned:8, actual:7},{month:"Feb", planned:14, actual:13},{month:"Mar", planned:23, actual:21},
  {month:"Apr", planned:33, actual:31},{month:"May", planned:44, actual:41},{month:"Jun", planned:55, actual:51},
  {month:"Jul", planned:64, actual:59},{month:"Aug", planned:73, actual:67},{month:"Sep", planned:82, actual:74},
  {month:"Oct", planned:90, actual:80}
];

export const delayData = [
  {name:"Civil", days:8},{name:"Structures", days:21},{name:"Roadworks", days:3},{name:"Electrical", days:0},{name:"MEP", days:5}
];

export const disciplineData = [
  {name:"Civil", completion:82},{name:"Structures", completion:68},{name:"Roadworks", completion:57},{name:"Electrical", completion:39},{name:"MEP", completion:26}
];

export const confidenceData = [
  {bucket:"<60%", count:7},{bucket:"60–90%", count:18},{bucket:">90%", count:42}
];

export const milestones = [
  {name:"Drainage package C-14", date:"2026-09-28", status:"At Risk"},
  {name:"GSB completion CH 4+200", date:"2026-10-02", status:"On Track"},
  {name:"Asphalt binder course", date:"2026-10-22", status:"Upcoming"},
  {name:"Package 3 handover", date:"2027-06-30", status:"Upcoming"}
];
