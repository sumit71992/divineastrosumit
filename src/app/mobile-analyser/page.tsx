"use client";

import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import StarField from "../components/starField";
import {
  checkRepetitiveNumbers,
  extractZeroPairs,
  getUniquePairs,
  mappings,
  sumDigits,
  validationRules,
  zeroMappings,
} from "@/services/HelperFunction";

type ResultItem = {
  key: string;
  type: string;
  bg: string;
  color: string;
  value: string[];
};

export default function MobileAnalyserPage() {
  const [value, setValue] = useState<string>("");
  const [touched, setTouched] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [data, setData] = useState<ResultItem[]>([]);
  const [zero, setZero] = useState<ResultItem[]>([]);
  const [repeat, setRepeat] = useState<ResultItem[]>([]);
  const [sum, setSum] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    if (value?.length < 1) {
      setData([]);
    }
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digitsOnly = e.target.value.replace(/\D/g, "");
    setValue(digitsOnly.slice(0, 10));
    setIsValid(true);
  };

  const handleSubmit = () => {
    if (value.length !== 10) {
      return setIsValid(false);
    }
    const pairs = getUniquePairs(value);
    const results: ResultItem[] = [];
    const zeros: ResultItem[] = [];
    const zeroPairs = extractZeroPairs(+value);
    const repetitivePairs = checkRepetitiveNumbers(value);

    pairs.forEach((pair) => {
      const mapping = mappings.find((m) => m.keys.includes(pair));
      if (mapping) {
        results.push({
          key: pair,
          value: mapping.value,
          type: mapping.type,
          bg: mapping.bg,
          color: mapping.color,
        });
      }
    });

    mappings.forEach((mapping) => {
      mapping.keys.forEach((key) => {
        if (zeroPairs.includes(key)) {
          zeros.push({
            key,
            value: mapping.value,
            type: mapping.type,
            bg: mapping.bg,
            color: mapping.color,
          });
        }
      });
    });
    zeroMappings.forEach((mapping) => {
      mapping.keys.forEach((key) => {
        if (zeroPairs.includes(key)) {
          zeros.push({
            key,
            value: mapping.value,
            type: mapping.type,
            bg: mapping.bg,
            color: mapping.color,
          });
        }
      });
    });

    const sumdigits = sumDigits(+value);
    setTotal(sumdigits.total);
    setSum(sumdigits.sum);

    setData(results);
    setZero(zeros);
    setRepeat(repetitivePairs);
  };
  //   console.log(555, data);

  return (
    <div className="min-h-screen relative">
      <StarField />
      <div className="relative z-10">
        <Header />

        <main className="px-4 py-10 mb-5">
          <div className="mx-auto w-full max-w-2xl">
            <div className="p-[1px] pb-2 rounded-2xl bg-gradient-to-br from-white/20 via-white/10 to-transparent">
              <div className="flex items-center justify-center gap-3 mb-6">
                <h1 className="mt-5 text-m sm:text-l md:text-xl lg:text-2xl xl:text-3xl">
                  Check Your Mobile Number Compatibility
                </h1>
              </div>

              <div className="flex items-center justify-center space-y-3 p-5">
                <div className="w-full">
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
                      className="w-full rounded-xl border border-white/15 bg-white/5 pl-4 pr-12 py-4 text-white placeholder-white/40 outline-none focus:border-white/50 focus:ring-2 focus:ring-white/20 transition"
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
              <div className="flex items-center justify-center">
                <button
                  type="button"
                  className="mt-7 w-[50%] rounded-xl bg-gradient-to-r from-white to-white/80 text-black font-semibold py-3.5 disabled:opacity-40 disabled:cursor-not-allowed hover:from-white hover:to-white transition shadow-[0_10px_30px_-10px_rgba(255,255,255,0.6)]"
                  onClick={handleSubmit}
                >
                  Analyse Number
                </button>
              </div>
            </div>
          </div>
          {data?.length > 0 && (
            <div>
              <h2 className="mt-10 text-xl font-semibold text-white/90">
                Summary
              </h2>
              <div className="mt-3 h-[1px] w-24 bg-gradient-to-r from-white/60 to-transparent" />

              <div className="mt-6 space-y-4">
                <div className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]">
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-semibold tracking-wide text-white/90">
                      Mobile Number:-
                    </div>
                    <div className="text-lg font-semibold tracking-wide text-white/90">
                      {value}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-lg font-semibold tracking-wide text-white/90">
                      Total Sum:-
                    </div>
                    <div className="text-lg font-semibold tracking-wide text-white/90">
                      {`${total} = ${sum}`}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {data?.length > 0 && (
            <div>
              <h2 className="mt-10 text-xl font-semibold text-white/90">
                Results
              </h2>
              <div className="mt-3 h-[1px] w-24 bg-gradient-to-r from-white/60 to-transparent" />

              <div className="mt-6 space-y-4">
                {data.map((item) => (
                  <div
                    key={item.key}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-lg font-semibold tracking-wide text-white/90">
                        {item.key}
                      </div>
                      <span
                        style={{ backgroundColor: item.bg, color: item.color }}
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
                      >
                        {item.type}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {item?.value?.map((vl: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-white/85"
                        >
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span>{vl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {zero?.length > 0 && (
            <div>
              <h2 className="mt-10 text-2xl font-semibold text-white/90 text-center">
                Effect Of Zero In Mobile Number
              </h2>
              <div className="mt-3 h-[1px] w-24 bg-gradient-to-r from-white/60 to-transparent" />

              <div className="mt-6 space-y-4">
                {zero.map((item) => (
                  <div
                    key={item.key}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-lg font-semibold tracking-wide text-white/90">
                        {item.key}
                      </div>
                      <span
                        style={{ backgroundColor: item.bg, color: item.color }}
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
                      >
                        {item.type}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {item?.value?.map((vl: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-white/85"
                        >
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span>{vl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {repeat?.length > 0 && (
            <div>
              <h2 className="mt-10 text-2xl font-semibold text-white/90 text-center">
                Effect Of Repetitive Numbers
              </h2>
              <div className="mt-3 h-[1px] w-24 bg-gradient-to-r from-white/60 to-transparent" />

              <div className="mt-6 space-y-4">
                {repeat.map((item) => (
                  <div
                    key={item.key}
                    className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm transition hover:border-white/20 shadow-[0_10px_30px_-10px_rgba(255,255,255,0.2)]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="text-lg font-semibold tracking-wide text-white/90">
                        {item.key}
                      </div>
                      <span
                        style={{ backgroundColor: item.bg, color: item.color }}
                        className="inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wide"
                      >
                        {item.type}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2">
                      {item?.value?.map((vl: string, i: number) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-white/85"
                        >
                          <span
                            className="mt-1 inline-block h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span>{vl}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
      <WhatsAppButton />
    </div>
  );
}
