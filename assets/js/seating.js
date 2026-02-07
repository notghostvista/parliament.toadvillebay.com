// Provincial Electoral System
const provinces = [
  { key:"pv", name:"Puerto Valle", seats:16, region:"Southern Coast" },
  { key:"tx", name:"Texica", seats:16, region:"Central East" },
  { key:"ts", name:"ToadVille Sur", seats:15, region:"Southern Interior" },
  { key:"mh", name:"Mihajl", seats:21, region:"Northeast" },
  { key:"sn", name:"Sonora", seats:21, region:"North" },
  { key:"ap", name:"Amilpan", seats:15, region:"Northwest" },
  { key:"tp", name:"Tepayán", seats:13, region:"West" },
  { key:"np", name:"National Preserve", seats:12, region:"Central" },
  { key:"sr", name:"Sierra", seats:15, region:"Northeast Interior" },
  { key:"mp", name:"Metepan", seats:16, region:"Central South" },
  { key:"df", name:"Distrito Federal", seats:19, region:"Capital" },
  { key:"tn", name:"Tasiq Nunaat", seats:12, region:"Arctic North" },
  { key:"da", name:"Desierto Altos", seats:12, region:"Desert Region" }
];
// Total: 203 seats

// Real MP names dataset (203 total)
const mpNames = [
  // PM + Cabinet (18 total from Bloc ToadVille)
  "Gabriel Medrano Gutiérrez", "Alice Smith", "Bob Johnson", "Carol Lee", "David Kim",
  "Eve Martinez", "Frank Thompson", "Grace Williams", "Henry Brown", "Iris Anderson",
  "Jack Taylor", "Kelly Garcia", "Leo Rodriguez", "Margaret Harris", "Nathan Miller",
  "Olivia Davis", "Peter Wilson", "Quinn Chen",
  
  // Rest of Bloc ToadVille (seats 19-108, 90 more members)
  "Rachel Martin", "Samuel Jackson", "Tara White", "Uma Patel", "Victor Lopez",
  "Wendy Moore", "Xavier Hall", "Yasmine Young", "Zachary King", "Amber Scott",
  "Brandon Green", "Courtney Adams", "Dominic Nelson", "Emma Nelson", "Ethan Carter",
  "Fiona Mitchell", "Gregory Perez", "Heidi Roberts", "Isaac Phillips", "Jade Campbell",
  "Kevin Parker", "Lily Evans", "Michael Edwards", "Natalie Collins", "Oscar Stewart",
  "Pamela Sanchez", "Quinn Morris", "Rebecca Rogers", "Steven Read", "Tina Cox",
  "Ulysses Howard", "Victoria Ward", "William Clark", "Xena Lewis", "Yuri Walker",
  "Zara Hall", "Aaron Young", "Bailey Hernandez", "Chad Valdez", "Dakota Pierce",
  "Ezra Warren", "Fallon Irwin", "Gale Sutton", "Hunter Newman", "Iris Burgess",
  "Jude Soto", "Kelsey Mcmahon", "Landen Moody", "Marley Mercer", "Neely Atkins",
  "Oakley Fuentes", "Parker Shields", "Quinn Pace", "River Medina", "Storm Bowman",
  "Tiger Medlin", "Uriah Lamb", "Vaughn Riggs", "Walker Roth", "Xylia Mcconnell",
  "York Schroeder", "Zeke Stanton", "Arrow Gilmore", "Blaze Gentry", "Copper Henson",
  "Delta Gilmore", "Echo Hull", "Fable Islas", "Granite Jarrett", "Harbor Justus",
  "Indigo Katz", "Juniper Kline", "Kestrel Kraft", "Laurel Kuhlman", "Maverick Lampkin",
  
  // Conservatives ToadVille (53)
  "Alexandra Landry", "Benjamin Lange", "Charlotte Larkin", "Daniel Lassiter", "Eleanor Lawson",
  "Finn Lawrence", "Gabrielle Lawson", "Harrison Leach", "Isabelle Ledford", "Jasper Ledesma",
  "Katherine Ledoux", "Liam Leftwich", "Margot Leftwich", "Nathan Lejeune", "Ophelia Leon",
  "Patrick Leong", "Quinn Lesage", "Riley Lessard", "Sebastian Lesslie", "Tatum Lester",
  "Ulysses Lew", "Valerie Lewis", "Walker Ley", "Xavier Lewicki", "Yasmine Lewin",
  "Zachary Lexus", "Aurora Leyden", "Berkley Leyes", "Ciara Lheureux", "Dallas Lian",
  "Emmett Libby", "Fallon Lice", "Gideon Lichtenstein", "Harlow Lickert", "Iris Lida",
  "Jasper Lieber", "Kennedy Lieberman", "Lennox Liebler", "Magnus Lienard", "Norah Lier",
  "Orin Lieurance", "Paisley Lies", "Quincy Lieu", "Rowan Lieut", "Sage Lieut",
  
  // Liberals (21)
  "Sienna Liu", "Troy Liubich", "Uriah Liudahl", "Vanessa Liudahl", "Wade Liudahl",
  "Ximena Liudahl", "Yorick Liudahl", "Zeke Liudahl", "Archer Liudahl", "Blakely Liudahl",
  "Cassidy Liudahl", "Dexter Liudahl", "Everly Liudahl", "Finley Liudahl", "Grayson Liudahl",
  "Haven Liudahl", "Indigo Liudahl", "Jude Liudahl", "Kinsley Liudahl", "Lennox Liudahl",
  "Morgan Liudahl",
  
  // Renaissance (12)
  "Norah Lombard", "Oakley Lombardi", "Paisley Lombardi", "Quincy Lombardi", "Rory Lombardi",
  "Sage Lombardi", "Tatum Lombardi", "Ulysses Lombardi", "Valerie Lombardi", "Wesley Lombardi",
  "Ximena Lombardi", "Yarrow Lombardi",
  
  // Socialist Society (8)
  "Zephyr Lombardi", "Aria Lombardi", "Brennan Lombardi", "Chloe Lombardi", "Dominic Lombardi",
  "Everett Lombardi", "Fiona Lombardi", "Griffin Lombardi",
  
  // Extremepatriot Party (1)
  "Haven Lombardi"
];

const provinceMunicipalities = {
  pv: [ // Puerto Valle (16 seats)
    { name:"Maplewood", pop:80000, seats:2 },
    { name:"Riverside", pop:120000, seats:3 },
    { name:"Oakridge", pop:50000, seats:1 },
    { name:"Pinehaven", pop:60000, seats:1 },
    { name:"Lakemont", pop:90000, seats:2 },
    { name:"Silvergrove", pop:100000, seats:2 },
    { name:"Brightfield", pop:75000, seats:2 },
    { name:"Windham", pop:65000, seats:1 },
    { name:"Hillsborough", pop:70000, seats:1 }
  ],
  tx: [ // Texica (16 seats) - from 2nd image
    { name:"Maplewood", pop:80000, seats:2 },
    { name:"Riverside", pop:120000, seats:3 },
    { name:"Oakridge", pop:50000, seats:1 },
    { name:"Pinehaven", pop:60000, seats:1 },
    { name:"Lakemont", pop:90000, seats:2 },
    { name:"Silvergrove", pop:100000, seats:2 },
    { name:"Brightfield", pop:75000, seats:2 },
    { name:"Windham", pop:65000, seats:1 },
    { name:"Hillsborough", pop:70000, seats:1 }
  ],
  ts: [ // ToadVille Sur (15 seats)
    { name:"Glenridge", pop:55000, seats:1 },
    { name:"Silverlake", pop:85000, seats:2 },
    { name:"Eastvale", pop:60000, seats:1 },
    { name:"Westport", pop:65000, seats:1 },
    { name:"Northgate", pop:55000, seats:1 },
    { name:"Southbridge", pop:60000, seats:1 },
    { name:"Harborside", pop:120000, seats:3 },
    { name:"Meadowbrook", pop:75000, seats:2 },
    { name:"Clearwater", pop:50000, seats:2 },
    { name:"Lakeview", pop:55000, seats:1 }
  ],
  mh: [ // Mihajl (21 seats)
    { name:"Elmford", pop:106170, seats:2 },
    { name:"Fernbay", pop:99124, seats:2 },
    { name:"Froggance", pop:769061, seats:13 },
    { name:"Glenmarsh", pop:367380, seats:4 }
  ],
  sn: [ // Sonora (21 seats)
    { name:"Goldmarsh", pop:101091, seats:2 },
    { name:"Hillcrest", pop:105522, seats:2 },
    { name:"Highgate", pop:101691, seats:2 },
    { name:"Ivybridge", pop:102758, seats:2 },
    { name:"Juniper", pop:109845, seats:2 },
    { name:"Kestrel", pop:98249, seats:2 },
    { name:"Lakehaven", pop:108247, seats:2 },
    { name:"Larkspur", pop:102379, seats:2 },
    { name:"Meadowend", pop:106334, seats:2 },
    { name:"Mercier", pop:1236807, seats:2 }
  ],
  ap: [ // Amilpan (15 seats)
    { name:"Cedarbrook", pop:120000, seats:2 },
    { name:"Dawnridge", pop:105000, seats:2 },
    { name:"Eaglepoint", pop:95000, seats:2 },
    { name:"Fairhaven", pop:110000, seats:2 },
    { name:"Goldstrike", pop:100000, seats:2 },
    { name:"Harborview", pop:90000, seats:2 },
    { name:"Ironside", pop:85000, seats:1 }
  ],
  tp: [ // Tepayán (13 seats)
    { name:"Jadehill", pop:130000, seats:3 },
    { name:"Kinfolk", pop:100000, seats:2 },
    { name:"Landmark", pop:95000, seats:2 },
    { name:"Maplemont", pop:80000, seats:2 },
    { name:"Nightshade", pop:75000, seats:2 },
    { name:"Oakmont", pop:90000, seats:2 }
  ],
  np: [ // National Preserve (12 seats) - mostly rural/protected
    { name:"Centralwood", pop:80000, seats:2 },
    { name:"Deepforest", pop:70000, seats:2 },
    { name:"Echovalley", pop:65000, seats:2 },
    { name:"Firstbeach", pop:100000, seats:3 },
    { name:"Greenfield", pop:55000, seats:1 },
    { name:"Hartfield", pop:60000, seats:2 }
  ],
  sr: [ // Sierra (15 seats)
    { name:"Ironpeak", pop:105000, seats:2 },
    { name:"Jewelcrest", pop:95000, seats:2 },
    { name:"Kingmont", pop:110000, seats:2 },
    { name:"Lakeridge", pop:90000, seats:2 },
    { name:"Moonvalley", pop:85000, seats:2 },
    { name:"Northpeak", pop:100000, seats:2 },
    { name:"Oaksummit", pop:55000, seats:1 },
    { name:"Peakside", pop:65000, seats:2 }
  ],
  mp: [ // Metepan (16 seats)
    { name:"Quicksilver", pop:115000, seats:2 },
    { name:"Riverstone", pop:105000, seats:2 },
    { name:"Sunridge", pop:120000, seats:2 },
    { name:"Thorndale", pop:100000, seats:2 },
    { name:"Unionville", pop:95000, seats:2 },
    { name:"Valleybrook", pop:110000, seats:2 },
    { name:"Westmount", pop:85000, seats:2 },
    { name:"Eastbrook", pop:80000, seats:2 }
  ],
  df: [ // Distrito Federal (19 seats) - capital region
    { name:"Central District", pop:400000, seats:5 },
    { name:"North District", pop:350000, seats:4 },
    { name:"South District", pop:300000, seats:3 },
    { name:"East District", pop:280000, seats:4 },
    { name:"West District", pop:320000, seats:3 }
  ],
  tn: [ // Tasiq Nunaat (12 seats) - Arctic
    { name:"Arctichaven", pop:85000, seats:2 },
    { name:"Boreas", pop:75000, seats:2 },
    { name:"Coldpeak", pop:65000, seats:1 },
    { name:"Driftice", pop:90000, seats:2 },
    { name:"Frostholm", pop:95000, seats:2 },
    { name:"Glacierport", pop:100000, seats:2 },
    { name:"Icewind", pop:40000, seats:1 }
  ],
  da: [ // Desierto Altos (12 seats) - Desert
    { name:"Aridwell", pop:70000, seats:1 },
    { name:"Dusthaven", pop:85000, seats:2 },
    { name:"Eremite", pop:65000, seats:1 },
    { name:"Franticsand", pop:75000, seats:1 },
    { name:"Goldpan", pop:95000, seats:2 },
    { name:"Heatstroke", pop:85000, seats:2 },
    { name:"Ironstone", pop:90000, seats:2 },
    { name:"Juntostone", pop:50000, seats:1 }
  ]
};

// Party totals (203 seats) with Bloc majority
const parties = [
  { key:"bloc",   name:"Bloc ToadVille",          seats:108, side:"government", colorVar:"--bloc" },
  { key:"cons",   name:"Conservatives ToadVille", seats:53,  side:"opposition", colorVar:"--cons" },
  { key:"libs",   name:"Liberals",               seats:21,  side:"opposition", colorVar:"--libs" },
  { key:"renn",   name:"Renninsance",            seats:12,  side:"opposition", colorVar:"--renn" },
  { key:"soc",    name:"Socialist Society",      seats:8,   side:"opposition", colorVar:"--soc"  },
  { key:"extpat", name:"Extremepatriot Party",   seats:1,   side:"opposition", colorVar:"--extpat"}
];

// Helper to generate profile URL from name
function generateProfileUrl(name) {
  const cleanName = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  return `MemberProfile/${cleanName}.html`;
}

// Placeholder members (swap with real names whenever)
function buildMembers(){
  const members = [];
  let seatNo = 1;
  let partyIdx = 0;
  let nameIdx = 0;

  // Distribute seats by province
  for (const province of provinces){
    const municipalities = provinceMunicipalities[province.key] || [];
    const provinceName = province.name;
    
    for (let i = 0; i < province.seats; i++){
      // Determine municipality for this seat
      let municipality = "Unknown";
      if (municipalities.length > 0){
        const muniIdx = i % municipalities.length;
        municipality = municipalities[muniIdx].name;
      }
      
      const name = nameIdx < mpNames.length ? mpNames[nameIdx] : `${provinceName} MP ${i+1}`;
      const district = `${municipality}, ${provinceName}`;
      const profileUrl = generateProfileUrl(name);
      const imageUrl = `https://picsum.photos/300/400?random=${seatNo}`;
      
      // Determine party assignment (Bloc gets majority)
      let partyKey = "bloc";
      let assigned = false;
      
      // First assign to Bloc until majority is reached
      if (seatNo <= 108){
        partyKey = "bloc";
        assigned = true;
      } else {
        // Then distribute opposition parties
        const oppSeats = 203 - 108; // 95 opposition seats
        const remaining = seatNo - 108; // Which opposition seat is this
        
        if (remaining <= 53) partyKey = "cons";
        else if (remaining <= 53 + 21) partyKey = "libs";
        else if (remaining <= 53 + 21 + 12) partyKey = "renn";
        else if (remaining <= 53 + 21 + 12 + 8) partyKey = "soc";
        else partyKey = "extpat";
      }
      
      const party = parties.find(p => p.key === partyKey);
      
      members.push({
        seatId: seatNo,
        name,
        district,
        province: provinceName,
        municipality,
        partyKey,
        partyName: party.name,
        side: party.side,
        profileUrl,
        imageUrl,
        isCabinet: false,
        marker: null
      });
      
      seatNo++;
      nameIdx++;
    }
  }

  return members;
}

const members = buildMembers();

/* =========================
   REAL MEMBERS (OVERRIDES)
   ========================= */

function overrideMember(seatId, data){
  const m = members.find(x => x.seatId === seatId);
  if (!m) return;
  Object.assign(m, data);
}

// Cabinet members assignments (PM + 17 cabinet = 18 total)
overrideMember(1, {
  name: mpNames[0],  // Gabriel Medrano Gutiérrez
  district: "Vistaux",
  role: "Prime Minister",
  marker: "PM",
  isCabinet: true,
  profileUrl: "MemberProfile/gabrielmedranogutierrez.html",
  imageUrl: "assets/Images/gabemedgutierrez.jpg"
});

// Add remaining 17 cabinet members (seats 2-18)
for (let i = 1; i < 18; i++) {
  overrideMember(i + 1, {
    name: mpNames[i],
    district: `Central ToadVille Region ${i}`,
    profileUrl: generateProfileUrl(mpNames[i]),
    isCabinet: true
  });
}

// Cabinet members list (18 members total, seats 1-18)
const cabinetMembers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];


const total = parties.reduce((a,p)=>a+p.seats,0);
const majority = Math.floor(total/2) + 1;

const COLS = 12;
const ROWS = 9;

const govMembers = members.filter(m => m.side === "government");
const oppMembers = members.filter(m => m.side === "opposition");

document.getElementById("totalSeats").textContent = total;
document.getElementById("majorityLine").textContent = `${majority} seats`;
document.getElementById("govCount").textContent = `${govMembers.length} seats`;
document.getElementById("oppCount").textContent = `${oppMembers.length} seats`;

// Legend
const legend = document.getElementById("legend");
for (const p of parties){
  const key = document.createElement("div");
  key.className = "key";
  const dot = document.createElement("span");
  dot.className = "dot";
  dot.style.background = getComputedStyle(document.documentElement).getPropertyValue(p.colorVar).trim();
  const text = document.createElement("span");
  text.textContent = `${p.name} — ${p.seats}`;
  key.append(dot, text);
  legend.appendChild(key);
}

function renderSide(container, list){
  container.innerHTML = "";

  for (let r=0; r<ROWS; r++){
    const row = document.createElement("div");
    row.className = "row";

    for (let c=0; c<COLS; c++){
      const idx = r*COLS + c;
      const seat = document.createElement("div");

      if (idx < list.length){
        const m = list[idx];
        seat.className = `seat ${m.partyKey}`;
        seat.dataset.label = `${m.name} — ${m.partyName}`;
        seat.setAttribute("role","button");
        seat.setAttribute("tabindex","0");
        
        // Add marker for PM or cabinet members
        if (m.marker === "PM") {
          seat.classList.add("pm-marker");
          seat.dataset.label += " (PM)";
        } else if (m.isCabinet) {
          seat.classList.add("cabinet-marker");
          seat.dataset.label += " (Cabinet)";
        }
        
        // Create marker text if needed
        if (m.marker === "PM" || m.isCabinet) {
          const markerText = document.createElement("span");
          markerText.className = "seatMarker";
          markerText.textContent = m.marker || "*";
          seat.appendChild(markerText);
        }

        seat.addEventListener("click", () => openModal(m));
        seat.addEventListener("keydown", (e) => {
          if (e.key === "Enter" || e.key === " ") openModal(m);
        });
      } else {
        seat.className = "seat empty";
        seat.setAttribute("aria-hidden","true");
      }

      row.appendChild(seat);
    }

    container.appendChild(row);
  }
}

renderSide(document.getElementById("govBenches"), govMembers);
renderSide(document.getElementById("oppBenches"), oppMembers);

// Modal
const overlay = document.getElementById("modalOverlay");
const closeBtn = document.getElementById("closeBtn");
const okBtn = document.getElementById("okBtn");

function partyColorVar(partyKey){
  const p = parties.find(x => x.key === partyKey);
  return p ? p.colorVar : "--line";
}

function openModal(member){
  document.getElementById("modalName").textContent = member.name;
  document.getElementById("modalParty").textContent = member.partyName;
  document.getElementById("modalDistrict").textContent = member.district;
  document.getElementById("modalSeatId").textContent = member.seatId;
  
  // Handle member image
  const imgElement = document.getElementById("modalImage");
  if (member.imageUrl) {
    imgElement.src = member.imageUrl;
    imgElement.style.display = "block";
  } else {
    imgElement.style.display = "none";
  }

  const dot = document.getElementById("modalPartyDot");
  dot.style.background = getComputedStyle(document.documentElement)
    .getPropertyValue(partyColorVar(member.partyKey)).trim();

  const profileBtn = document.getElementById("profileBtn");
  profileBtn.href = member.profileUrl;

  overlay.classList.add("open");
}

function closeModal(){ overlay.classList.remove("open"); }
closeBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && overlay.classList.contains("open")) closeModal();
});
