const parties = [
  { key:"bloc",   name:"Bloc ToadVille",          seats:108, colorVar:"--bloc" },
  { key:"cons",   name:"Conservatives ToadVille", seats:53,  colorVar:"--cons" },
  { key:"libs",   name:"Liberals",               seats:21,  colorVar:"--libs" },
  { key:"renn",   name:"Renninsance",            seats:12,  colorVar:"--renn" },
  { key:"soc",    name:"Socialist Society",      seats:8,   colorVar:"--soc"  },
  { key:"extpat", name:"Extremepatriot Party",   seats:1,   colorVar:"--extpat"}
];

// Real MP names dataset
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

function partyName(key){ return parties.find(p=>p.key===key)?.name ?? "Unknown"; }
function partyDot(key){
  const p = parties.find(x=>x.key===key);
  const color = p ? getComputedStyle(document.documentElement).getPropertyValue(p.colorVar).trim() : "#999";
  return `<span class="pill"><span class="dot" style="background:${color}"></span>${partyName(key)}</span>`;
}

function generateProfileUrl(name) {
  const cleanName = name.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
  return `MemberProfile/${cleanName}.html`;
}

function buildMembers(){
  const members = [];
  let seatNo = 1;
  let nameIdx = 0;
  
  for (const p of parties){
    for (let i=1; i<=p.seats; i++){
      const name = nameIdx < mpNames.length ? mpNames[nameIdx] : `${p.name} MP ${i}`;
      const isCabinet = seatNo <= 18 && p.key === "bloc"; // First 18 from Bloc are cabinet
      
      members.push({
        id: seatNo,
        name: name,
        partyKey: p.key,
        district: `District ${seatNo}`,
        isCabinet: isCabinet,
        marker: seatNo === 1 ? "PM" : (isCabinet ? "*" : null)
      });
      nameIdx++;
      seatNo++;
    }
  }
  return members;
}

const members = buildMembers();
const tbody = document.getElementById("membersTbody");

tbody.innerHTML = members.map(m => `
  <tr>
    <td><strong>${m.name}</strong>${m.marker === "PM" ? " <span style='color:var(--bloc);font-weight:bold;'>(PM)</span>" : (m.marker === "*" ? " <span style='color:var(--bloc);font-weight:bold;'>*</span>" : "")}</td>
    <td>${partyDot(m.partyKey)}</td>
    <td>${m.district}</td>
    <td><a href="member.html?id=${m.id}">Open</a></td>
  </tr>
`).join("");
