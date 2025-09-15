"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StarField from "../components/starField";
type Mapping = {
  keys: string[];
  type: string;
  bg: string;
  color: string;
  value: string[];
};

type ResultItem = {
  key: string;
  type: string;
  bg: string;
  color: string;
  value: string[];
};
const mappings: Mapping[] = [
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
export default function MobileAnalyserPage() {
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [data, setData] = useState<ResultItem[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setValue(digitsOnly.slice(0, 10));
    setIsValid(true);
  };

  const handleSubmit = () => {
    if (value.length !== 10) {
      return setIsValid(false);
    }
    const results: ResultItem[] = [];

    mappings.forEach((mapping) => {
      mapping.keys.forEach((key) => {
        if (value.includes(key)) {
          results.push({
            key,
            value: mapping.value,
            type: mapping.type,
            bg: mapping.bg,
            color: mapping.color,
          });
        }
      });
    });

    setData(results);
  };
  //   console.log(555, data);

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />

        <main className="px-4 py-10 mb-[5rem]">
          <div className="mx-auto w-full max-w-2xl">
            <div className="p-[1px] rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="mt-[3rem] text-[2rem]">
                  Check Your Mobile Number Compatibility
                </h1>
              </div>

              <div className="flex items-center justify-center space-y-3 p-5">
                <div className="w-[25%]">
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-white/80"
                  >
                    Mobile Number
                  </label>
                  <div className="relative">
                    <input
                      id="mobile"
                      type="tel"
                      inputMode="numeric"
                      autoComplete="tel-national"
                      pattern="\\d{10}"
                      maxLength={10}
                      value={value}
                      onChange={handleChange}
                      onBlur={() => setTouched(true)}
                      placeholder="Enter 10-digit number"
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-14 pr-12 py-4 text-white placeholder-white/40 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition"
                    />
                    <span className="absolute inset-y-0 right-0 pr-4 flex items-center text-xs text-white/60">
                      {value.length}/10
                    </span>
                  </div>
                  {!isValid && touched && (
                    <p className="text-sm text-red-400">
                      Please enter exactly 10 digits.
                    </p>
                  )}
                </div>
              </div>
              <button
                type="button"
                className="mt-7 w-full rounded-xl bg-gradient-to-r from-white to-white/80 text-black font-semibold py-3.5 disabled:opacity-40 disabled:cursor-not-allowed hover:from-white hover:to-white transition shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)]"
                onClick={handleSubmit}
              >
                Analyse Number
              </button>
            </div>
          </div>
          <div>
            <h1>Results</h1>
            <div>
              {data.map((item) => (
                <div key={item.key} className="mt-[1rem]">
                  <h1>
                    {item.key}{" "}
                    <span className={`bg-[${item.bg}] text-[${item?.color}]`}>
                      {item.type}
                    </span>
                  </h1>
                  {item?.value?.map((vl: string, i: number) => (
                    <p key={i}>{vl}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
