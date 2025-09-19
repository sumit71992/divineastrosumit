type Mapping = {
  keys: string[];
  type: string;
  bg: string;
  color: string;
  value: string[];
};
export type ValidationRules = {
  [digit: string]: {
    [repeat: number]: Mapping;
  };
};

export const mappings: Mapping[] = [
  {
    keys: ["14", "41"],
    type: "MOST TROUBLESOME",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Bank issues, Loan liability",
      "Legal notice, Health issues",
      "Accident/Surgeries",
      "Bone related issues, Hard work",
    ],
  },
  {
    keys: ["15", "51"],
    type: "VERY GOOD",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Father/Family ki popularity native ki wajah se hoti hai",
      "Works good, Communication, Brokerage, Commission",
      "Marriage, Dealers, Traders, Stock Market, Agents",
      "Budh Aditya Yog",
    ],
  },
  {
    keys: ["16", "61"],
    type: "TROUBLESOME",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Spouse health issues",
      "Married life issues or delay in marriage",
      "Job loss/Instability in career",
      "Less Income/Money issues",
    ],
  },
  {
    keys: ["17", "71"],
    type: "GOOD",
    bg: "#6495ED	",
    color: "#FFFFFF",
    value: [
      "Money related work is never stopped",
      "Native self or someone in close family doing Govt. job",
      "Native might be working in MNC and getting good facilities",
      "Native may work from home",
      "Good contacts/connections, Govt job",
      "Networking/MLM",
    ],
  },
  {
    keys: ["18", "81"],
    type: "TROUBLESOME",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Spouse health issues",
      "Govt. related issues",
      "Need to change job frequently",
      "Father – Son misunderstanding/ego issues (Male)",
      "Early Loss of father in some cases",
      "Father bad health issues may happen",
    ],
  },
  {
    keys: ["19", "91"],
    type: "VERY GOOD",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "You own what you want",
      "Always on a high place",
      "Professional person – attention, self respect, high headed",
      "Leader Type, Society me Naam",
      "Good One Combination",
    ],
  },
  {
    keys: ["23", "32"],
    type: "NEUTRAL",
    bg: "#F8DE7E",
    color: "#FFFFFF",
    value: [
      "Love towards outside from home",
      "Have many Enemies but Native Win over Enemies",
      "Child happiness nahi mil paati or Delay in parenting",
    ],
  },
  {
    keys: ["24", "42"],
    type: "NEGATIVE/NEUTRAL",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Keep Patience to get achieve anything as native makes different plans",
      "Depression/Depressive tendencies",
      "Moody nature, Negative thoughts",
      "Self destruction – suicide",
      "Brain is working almost 24 hours",
    ],
  },
  {
    keys: ["25", "52"],
    type: "VERY GOOD",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Interested in Occult science - Astrology/Numerology/Tarot/Healing",
      "Can Work in Medical field",
      "Blessed with Magical Powers/Haath mai saffa/Give Bails to others",
      "Healing in hand",
      "Success through Air travelling",
    ],
  },
  {
    keys: ["26", "62"],
    type: "NEVER GIVE TO STUDENT",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Obstruction/hurdles/gap in education – Love Affairs",
      "Super Convincing Power",
      "Female Native problems with mother in law and may have diabetes",
      "Native running behind money and opposite sex",
      "Male Native chances of less Sperm Count/Diabetes",
      "Joint/muscle/knees/back pains",
      "Native faces Problems in profession",
      "Urine Infection-disease/UTI in Female",
      "Reproductive organ related disease",
      "Job loss/Instability in career",
      "Less Income/Money issues",
    ],
  },
  {
    keys: ["27", "72"],
    type: "NEGATIVE",
    bg: "#F00000",
    color: "#FFFFFF",
    value: ["Anxiety, Depression, Overthinking"],
  },
  {
    keys: ["28", "82"],
    type: "NEGATIVE (Vish Yoga)",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Partnership not suitable",
      "Depression/mental problems",
      "Inferior feeling/jealous/competitive feeling",
      "Needs to spend money on medicine/hospital",
      "Seelan/leakage",
      "2 marriages in a family",
      "Try to avoid bad company as it can harm Native",
      "Person cannot able to enjoy life even having money",
    ],
  },
  {
    keys: ["29", "92"],
    type: "VERY GOOD (Laxmi Dhan Yoga)",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Very good financial status, having decent amount of money",
      "Self earned money and live happily on its money",
      "Native Can be egoistic",
      "Involvement with money (bank/accounts/salary handling/insurance/finance)",
    ],
  },
  {
    keys: ["34", "43"],
    type: "PROBLEMATIC",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Breathing issues – asthma, bronchitis, lungs, sinus",
      "Child will not stay with parents",
      "Heart related disease/paralysis/legs shivering",
      "Paralysis to someone in the family",
      "Less confidence, Stubborn",
    ],
  },
  {
    keys: ["35", "53"],
    type: "GOOD/NEUTRAL",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Intelligent, wise",
      "Stay away from first house/native land to be successful",
      "Good Economic Condition but Liquid money issues may arise",
      "Need money management (good for service person, not for business)",
    ],
  },
  {
    keys: ["36", "63"],
    type: "SITUATIONAL GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Multi Talented, Religious",
      "Follows strict rules and regulations, principal oriented person",
      "Good deep knowledge but struggle in presentation",
      "Self respect is very important",
      "Barrier in Studies, So not good for Student but good for adult",
    ],
  },
  {
    keys: ["37", "73"],
    type: "VERY GOOD",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Brings you on the top in your field",
      "Financial support",
      "Good for education",
      "Strong intentions for work",
      "Good for occult science",
      "Research field",
    ],
  },
  {
    keys: ["38", "83"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Property and sales field would be beneficial",
      "Real estate",
      "Counselors/astrologers",
      "Mediator/Peace Maker",
      "Strict nature, High moral values",
    ],
  },
  {
    keys: ["39", "93"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Intelligent, Active, energetic",
      "Hard worker, Duality in Nature",
      "Social service, Loves to show off",
      "NGO, Maan – samman",
      "Engineer/technical field",
    ],
  },
  {
    keys: ["45", "54"],
    type: "NEGATIVE",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Sister/daughter - health issues/life me problems face karni padti hai",
      "Needs to visit court/hospital/medicines frequently",
      "Native has to live with restrictions",
      "Intelligent and Wise",
    ],
  },
  {
    keys: ["46", "64"],
    type: "NEGATIVE - AVOID STRICTLY FOR KIDS",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Skin disease, Patches on the skin chances",
      "Extra marital/many affairs-relationships may have",
      "UTI infection in female native",
      "Inter cast marriage chances",
    ],
  },
  {
    keys: ["47", "74"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Clever (smart) personality",
      "Service providers",
      "Strong determination",
      "Will power strong",
      "Honest, Brilliant, jugaado",
    ],
  },

  {
    keys: ["48", "84"],
    type: "DANGEROUS COMBINATION",
    bg: "#880808",
    color: "#FFFFFF",
    value: [
      "Incurable problem/chronic disease",
      "Deficiency of sexual pleasures in married life",
      "Depression/addiction",
      "Stress, Blood related disease",
      "Legal issues",
    ],
  },
  {
    keys: ["49", "94"],
    type: "NEUTRAL",
    bg: "#F8DE7E",
    color: "#FFFFFF",
    value: [
      "Criminal minded",
      "Do risky work",
      "Success after hardwork",
      "Bold Dabang Nature",
    ],
  },
  {
    keys: ["56", "65"],
    type: "NEUTRAL",
    bg: "#F8DE7E",
    color: "#FFFFFF",
    value: [
      "Hesitate to ask own money/shy feel krte hai for asking their money",
      "Business minded",
      "Ghar ke aas paas – big landmark – mandir/superstore",
      "Intelligent",
    ],
  },
  {
    keys: ["57", "75"],
    type: "VERY GOOD",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Speaker/writer ache hote hai",
      "Public relations",
      "Good expressive person",
      "Lot of people comes to them for advice",
      "Good for businessman",
    ],
  },
  {
    keys: ["58", "85"],
    type: "NEGATIVE/NEUTRAL",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Money stuck/block/financial losses",
      "Calculative mind",
      "Person does work related to money/finance",
      "Talks about lakhs and crores – bada sochte hai aise log",
      "Money stuck",
    ],
  },
  {
    keys: ["59", "95"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Straight forward person",
      "Less relations but good ones",
      "Person from Science/Commerce Stream",
      "Successful businessman",
      "Native have Immense technical knowledge",
    ],
  },
  {
    keys: ["67", "76"],
    type: "GOOD (SITUATIONAL)",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Chance of love marriage",
      "Issues in spouse health",
      "Married life – not satisfactory",
      "Music lovers, luxury lover",
      "Artist, Perfection",
      "Good for person who is single in life",
    ],
  },
  {
    keys: ["68", "86"],
    type: "NEGATIVE",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Eye/chest/breast related problem",
      "Issues in any one organ of body",
      "Surgical Health problems",
      "Suitable – surgeons/doctors/medical staff",
      "This is known as operational number",
    ],
  },
  {
    keys: ["69", "96"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Creative Mind can say Chacha Choudhary",
      "Talented, Dance/Choreographers",
      "Good Management Skills",
      "Good Planner",
      "Opp. Sex Involvement – Good Sense",
      "Event planners, party organizers, wedding planners, designers",
      "Spiritual/Healer, Social worker",
    ],
  },
  {
    keys: ["78", "87"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Idealistic - Follows Values, Honest, Truthful",
      "Loves Respect, Serves Traditions",
      "Loneliness",
      "Solve any problem by their own will power",
    ],
  },
  {
    keys: ["79", "97"],
    type: "NEUTRAL",
    bg: "#F8DE7E",
    color: "#FFFFFF",
    value: ["Success after seperation from father"],
  },
  {
    keys: ["89", "98"],
    type: "GOOD",
    bg: "#6495ED",
    color: "#FFFFFF",
    value: [
      "Argumentative but in logical way",
      "Works with principle",
      "Chronic diseases – but in later age – last 6 digits more dangerous",
      "Astrologers/consultants/service providers/advocates/brokers",
    ],
  },
];
export const zeroMappings: Mapping[] = [
  {
    keys: ["11"],
    type: "BEST",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: ["Leadership, authority, confidence", "Best communication"],
  },
  {
    keys: ["22"],
    type: "NO",
    bg: "#F00000",
    color: "#FFFFFF",
    value: ["No Intuitions, emotional", "Mood swings, artist, poets"],
  },
  {
    keys: ["33"],
    type: "BEST",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: [
      "Best Knowledge, education",
      "Family life, social life, growth, respect",
    ],
  },
  {
    keys: ["44"],
    type: "NEVER",
    bg: "#880808",
    color: "#FFFFFF",
    value: ["Hardworking, confusion, delay", "Lot of problems"],
  },
  {
    keys: ["55"],
    type: "BEST",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: ["Good communication, money flow", "Business"],
  },
  {
    keys: ["66"],
    type: "BEST",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: ["Luxury, comforts, richness", "Travel, love life, romance"],
  },
  {
    keys: ["77"],
    type: "NO",
    bg: "#F00000",
    color: "#FFFFFF",
    value: [
      "Research, overthinking, confused",
      "Scientist, CID, Artificial intelligence",
      "Software engg, coding",
    ],
  },
  {
    keys: ["88"],
    type: "NEVER",
    bg: "#880808",
    color: "#FFFFFF",
    value: ["Hurdles, problems", "Real estate/industries"],
  },
  {
    keys: ["99"],
    type: "BEST",
    bg: "#00FF00",
    color: "#FFFFFF",
    value: ["Energetic, active"],
  },
];
export const validationRules: ValidationRules = {
  0: {
    2: {
      keys: ["00"],
      type: "MOST TROUBLESOME",
      bg: "#F00000",
      color: "#FFFFFF",
      value: [
        "Bank issues, Loan liability",
        "Legal notice, Health issues",
        "Accident/Surgeries",
        "Bone related issues, Hard work",
      ],
    },
    3: {
      keys: ["000"],
      type: "WARNING",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Triple zero means loss"],
    },
    4: {
      keys: ["0000"],
      type: "DANGER",
      bg: "#F00000",
      color: "#000000",
      value: ["Four zeros = bad sign"],
    },
    5: {
      keys: ["00000"],
      type: "EXTREME",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five zeros = extreme bad"],
    },
    6: {
      keys: ["000000"],
      type: "EXTREME",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six zeros = terrible"],
    },
    7: {
      keys: ["0000000"],
      type: "CRITICAL",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven zeros = very unlucky"],
    },
    8: {
      keys: ["00000000"],
      type: "CRITICAL",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight zeros = cursed"],
    },
    9: {
      keys: ["000000000"],
      type: "CRITICAL",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine zeros = disaster"],
    },
  },

  1: {
    2: {
      keys: ["11"],
      type: "BEST",
      bg: "#00FF00",
      color: "#FFFFFF",
      value: ["Leadership, authority, confidence", "Best communication"],
    },
    3: {
      keys: ["111"],
      type: "STRONG",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple ones = strong focus"],
    },
    4: {
      keys: ["1111"],
      type: "POWER",
      bg: "#F00000",
      color: "#000000",
      value: ["Four ones = determination"],
    },
    5: {
      keys: ["11111"],
      type: "LEADERSHIP",
      bg: "#F00000",
      color: "#000000",
      value: ["Five ones = leadership"],
    },
    6: {
      keys: ["111111"],
      type: "OBSESSION",
      bg: "#F00000",
      color: "#000000",
      value: ["Six ones = obsessive"],
    },
    7: {
      keys: ["1111111"],
      type: "SELFISH",
      bg: "#F00000",
      color: "#000000",
      value: ["Seven ones = selfishness"],
    },
    8: {
      keys: ["11111111"],
      type: "POWER HUNGRY",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight ones = power hungry"],
    },
    9: {
      keys: ["111111111"],
      type: "EGO",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Nine ones = extreme ego"],
    },
  },

  2: {
    2: {
      keys: ["22"],
      type: "NO",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["No Intuitions, emotional", "Mood swings, artist, poets"],
    },
    3: {
      keys: ["222"],
      type: "WARNING",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple twos = warning"],
    },
    4: {
      keys: ["2222"],
      type: "CAUTION",
      bg: "#F00000",
      color: "#000000",
      value: ["Quad twos = strong caution"],
    },
    5: {
      keys: ["22222"],
      type: "IMBALANCE",
      bg: "#F00000",
      color: "#000000",
      value: ["Five twos = imbalance"],
    },
    6: {
      keys: ["222222"],
      type: "CHAOS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six twos = chaos"],
    },
    7: {
      keys: ["2222222"],
      type: "UNLUCKY",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven twos = unlucky"],
    },
    8: {
      keys: ["22222222"],
      type: "RISKY",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight twos = risky"],
    },
    9: {
      keys: ["222222222"],
      type: "VERY BAD",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Nine twos = very bad"],
    },
  },

  3: {
    2: {
      keys: ["33"],
      type: "BEST",
      bg: "#00FF00",
      color: "#FFFFFF",
      value: [
        "Best Knowledge, education",
        "Family life, social life, growth, respect",
      ],
    },
    3: {
      keys: ["333"],
      type: "UNSTABLE",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple threes = unstable"],
    },
    4: {
      keys: ["3333"],
      type: "PROBLEM MAKER",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Four threes = problem maker"],
    },
    5: {
      keys: ["33333"],
      type: "CONFLICT",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five threes = conflict"],
    },
    6: {
      keys: ["333333"],
      type: "UNLUCKY",
      bg: "#F00000",
      color: "#000000",
      value: ["Six threes = unlucky"],
    },
    7: {
      keys: ["3333333"],
      type: "DANGEROUS",
      bg: "#F00000",
      color: "#000000",
      value: ["Seven threes = dangerous"],
    },
    8: {
      keys: ["33333333"],
      type: "UNBALANCED",
      bg: "#F00000",
      color: "#000000",
      value: ["Eight threes = unbalanced"],
    },
    9: {
      keys: ["333333333"],
      type: "DISASTER",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine threes = disaster"],
    },
  },

  4: {
    2: {
      keys: ["44"],
      type: "NEVER",
      bg: "#880808",
      color: "#FFFFFF",
      value: ["Hardworking, confusion, delay", "Lot of problems"],
    },
    3: {
      keys: ["444"],
      type: "HARD LIFE",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple fours = hard life"],
    },
    4: {
      keys: ["4444"],
      type: "UNLUCKY",
      bg: "#F00000",
      color: "#000000",
      value: ["Four fours = unlucky"],
    },
    5: {
      keys: ["44444"],
      type: "TOUGH PATH",
      bg: "#F00000",
      color: "#000000",
      value: ["Five fours = tough path"],
    },
    6: {
      keys: ["444444"],
      type: "OBSTACLES",
      bg: "#F00000",
      color: "#000000",
      value: ["Six fours = obstacles"],
    },
    7: {
      keys: ["4444444"],
      type: "PROBLEMS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven fours = problems"],
    },
    8: {
      keys: ["44444444"],
      type: "STRUGGLE",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight fours = struggle"],
    },
    9: {
      keys: ["444444444"],
      type: "EXTREME STRUGGLE",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Nine fours = extreme struggle"],
    },
  },

  5: {
    2: {
      keys: ["55"],
      type: "BEST",
      bg: "#00FF00",
      color: "#FFFFFF",
      value: ["Good communication, money flow", "Business"],
    },
    3: {
      keys: ["555"],
      type: "RISKY",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple fives = risky"],
    },
    4: {
      keys: ["5555"],
      type: "UNSTABLE",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Four fives = unstable"],
    },
    5: {
      keys: ["55555"],
      type: "RECKLESS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five fives = reckless"],
    },
    6: {
      keys: ["555555"],
      type: "CHAOS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six fives = chaos"],
    },
    7: {
      keys: ["5555555"],
      type: "DANGEROUS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven fives = dangerous"],
    },
    8: {
      keys: ["55555555"],
      type: "COLLAPSE",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight fives = collapse"],
    },
    9: {
      keys: ["555555555"],
      type: "DISASTER",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine fives = disaster"],
    },
  },

  6: {
    2: {
      keys: ["66"],
      type: "BEST",
      bg: "#00FF00",
      color: "#FFFFFF",
      value: ["Luxury, comforts, richness", "Travel, love life, romance"],
    },
    3: {
      keys: ["666"],
      type: "DEVIL",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Triple sixes = devil's number"],
    },
    4: {
      keys: ["6666"],
      type: "BAD OMEN",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Four sixes = bad omen"],
    },
    5: {
      keys: ["66666"],
      type: "EXTREME BAD",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five sixes = extreme bad"],
    },
    6: {
      keys: ["666666"],
      type: "CURSED",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six sixes = cursed"],
    },
    7: {
      keys: ["6666666"],
      type: "VERY UNLUCKY",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven sixes = very unlucky"],
    },
    8: {
      keys: ["66666666"],
      type: "DOOM",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight sixes = doom"],
    },
    9: {
      keys: ["666666666"],
      type: "EXTREME DOOM",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine sixes = extreme doom"],
    },
    10: {
      keys: ["6666666666"],
      type: "MAX",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Ten sixes = beyond doom"],
    },
  },

  7: {
    2: {
      keys: ["77"],
      type: "NO",
      bg: "#F00000",
      color: "#FFFFFF",
      value: [
        "Research, overthinking, confused",
        "Scientist, CID, Artificial intelligence",
        "Software engg, coding",
      ],
    },
    3: {
      keys: ["777"],
      type: "JACKPOT",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Triple sevens = jackpot"],
    },
    4: {
      keys: ["7777"],
      type: "TOO MUCH LUCK",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Four sevens = too much luck"],
    },
    5: {
      keys: ["77777"],
      type: "UNSTABLE LUCK",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five sevens = unstable luck"],
    },
    6: {
      keys: ["777777"],
      type: "UNLUCKY",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six sevens = unlucky"],
    },
    7: {
      keys: ["7777777"],
      type: "EXTREME BAD",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven sevens = extreme bad"],
    },
    8: {
      keys: ["77777777"],
      type: "CURSED LUCK",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight sevens = cursed luck"],
    },
    9: {
      keys: ["777777777"],
      type: "DISASTER",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine sevens = disaster"],
    },
    10: {
      keys: ["7777777777"],
      type: "MAX",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Ten sevens = extreme doom"],
    },
  },

  8: {
    2: {
      keys: ["88"],
      type: "NEVER",
      bg: "#880808",
      color: "#FFFFFF",
      value: ["Hurdles, problems", "Real estate/industries"],
    },
    3: {
      keys: ["888"],
      type: "PROSPERITY",
      bg: "#F00000",
      color: "#000000",
      value: ["Triple eights = prosperity"],
    },
    4: {
      keys: ["8888"],
      type: "POWERFUL",
      bg: "#F00000",
      color: "#000000",
      value: ["Four eights = powerful"],
    },
    5: {
      keys: ["88888"],
      type: "GREED",
      bg: "#F00000",
      color: "#000000",
      value: ["Five eights = greed"],
    },
    6: {
      keys: ["888888"],
      type: "UNSTABLE",
      bg: "#F00000",
      color: "#000000",
      value: ["Six eights = unstable"],
    },
    7: {
      keys: ["8888888"],
      type: "RISKY",
      bg: "#F00000",
      color: "#000000",
      value: ["Seven eights = risky"],
    },
    8: {
      keys: ["88888888"],
      type: "DOWNFALL",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight eights = downfall"],
    },
    9: {
      keys: ["888888888"],
      type: "EXTREME FALL",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Nine eights = extreme fall"],
    },
    10: {
      keys: ["8888888888"],
      type: "MAX",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Ten eights = ultimate wealth danger"],
    },
  },

  9: {
    2: {
      keys: ["99"],
      type: "BEST",
      bg: "#00FF00",
      color: "#FFFFFF",
      value: ["Energetic, active"],
    },
    3: {
      keys: ["999"],
      type: "NOT GOOD",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Triple nines = not good"],
    },
    4: {
      keys: ["9999"],
      type: "DISASTER",
      bg: "#F00000",
      color: "#000000",
      value: ["Four nines = disaster"],
    },
    5: {
      keys: ["99999"],
      type: "DESTRUCTION",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Five nines = destruction"],
    },
    6: {
      keys: ["999999"],
      type: "EXTREME LOSS",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Six nines = extreme loss"],
    },
    7: {
      keys: ["9999999"],
      type: "CURSED",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Seven nines = cursed"],
    },
    8: {
      keys: ["99999999"],
      type: "DOOM",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Eight nines = doom"],
    },
    9: {
      keys: ["999999999"],
      type: "APOCALYPSE",
      bg: "#F00000",
      color: "#000000",
      value: ["Nine nines = apocalypse"],
    },
    10: {
      keys: ["9999999999"],
      type: "MAX",
      bg: "#F00000",
      color: "#FFFFFF",
      value: ["Ten nines = extreme doom"],
    },
  },
};

export const sumDigits = (num: number) => {
  num = Math.abs(num); // handle negatives

  // Step 1: sum all digits once
  const total = num
    .toString()
    .split("")
    .reduce((sum, digit) => sum + Number(digit), 0);

  // Step 2: keep reducing until single digit
  let reduced = total;
  while (reduced > 9) {
    reduced = reduced
      .toString()
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  }

  return { total, sum: reduced };
};
export const extractZeroPairs = (input: number) => {
  const s = input.toString();
  const results = [];

  for (let i = 0; i < s.length; ) {
    if (s[i] === "0") {
      const start = i;
      // advance over the entire zero-block
      while (i < s.length && s[i] === "0") i++;
      const left = start - 1 >= 0 ? s[start - 1] : "3";
      const right = i < s.length ? s[i] : "3";

      // push in the requested order
      results.push(left + right, left + left, right + right);
    } else {
      i++;
    }
  }

  // remove duplicates but keep first-seen order
  const unique = [];
  const seen = new Set();
  for (const p of results) {
    if (!seen.has(p)) {
      seen.add(p);
      unique.push(p);
    }
  }
  return unique;
};
export const checkRepetitiveNumbers = (numberStr: string) => {
  const result: {
    key: string;
    type: string;
    value: string[];
    bg: string;
    color: string;
  }[] = [];
  const seen = new Set<string>();
  let currentChar = numberStr[0];
  let count = 1;

  for (let i = 1; i <= numberStr.length; i++) {
    if (numberStr[i] === currentChar) {
      count++;
    } else {
      if (count >= 2) {
        // Get the rule from validationRules if exists
        const digitRules = validationRules[currentChar];
        if (digitRules && digitRules[count]) {
          const rule = digitRules[count];
          const key = rule.keys[0];
          if (!seen.has(key)) {
            result.push({
              key,
              type: rule.type,
              value: rule.value,
              bg: rule.bg,
              color: rule.color,
            });
            seen.add(key);
          }
        }
      }
      // Reset counters
      currentChar = numberStr[i];
      count = 1;
    }
  }

  return result;
};
export const getUniquePairs = (numStr: string) => {
  const pairs = [];
  for (let i = 0; i < numStr.length - 1; i++) {
    const pair = numStr[i] + numStr[i + 1];
    pairs.push(pair);
  }
  const uniquePairs = [...new Set(pairs)];

  return uniquePairs;
};
