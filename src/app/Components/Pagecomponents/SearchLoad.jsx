"use client";
import React, { useRef, useState } from "react";
import { CiCalendar, CiSearch } from "react-icons/ci";

const SearchLoad = () => {
  const [form, setForm] = useState({
    origin: "",
    dhO: "",
    destination: "",
    dhD: "",
    equipment: "",
    loadType: "",
    length: "",
    startDate: "",
    endDate: ""
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    console.log("Search Data:", form);
  };

  const today = new Date().toISOString().split("T")[0];
  const startRef = useRef(null);
  const endRef = useRef(null);

  const openStartDate = () => {
    startRef.current?.showPicker?.(); // modern browsers
    startRef.current?.focus();
  };

  const openEndDate = () => {
    endRef.current?.showPicker?.();
    endRef.current?.focus();
  };

  return (
    <div className="relative max-w-[1200.2px] m-auto bg-primary [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
      <div className="border-2 border-primary py-12 bg-white [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
        <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-primary">
          Search loads
        </h2>
        <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,199,0)_51%,rgb(153_153_153/0%)_100%)]" />

        <div className="max-w-[90%] m-auto">
          <div className="pt-3 space-y-6">
            <div className="grid md:grid-cols-[1fr_180px] gap-4">
              <div>
                <label className="text-xl text-[#232323] ">Origin</label>
                <input
                  name="origin"
                  value={form.origin}
                  onChange={handleChange}
                  placeholder="Monterey, CA"
                  className="w-full mt-2 bg-gray-900 text-white px-5 py-4.5 text-xl rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xl text-[#232323] ">DH O</label>
                <input
                  type="number"
                  name="dhO"
                  value={form.dhO}
                  onChange={handleChange}
                  placeholder="30"
                  className="w-full mt-1 bg-gray-900 text-white px-4 py-4.5 text-xl rounded-xl outline-none text-center"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-[1fr_180px] gap-4">
              <div>
                <label className="text-xl text-[#232323] ">Destination</label>
                <input
                  name="destination"
                  value={form.destination}
                  onChange={handleChange}
                  placeholder="Albany, NY"
                  className="w-full mt-1 bg-gray-900 text-white px-5 py-4.5 text-xl rounded-xl outline-none"
                />
              </div>

              <div>
                <label className="text-xl text-[#232323] ">DH D</label>
                <input
                  type="number"
                  name="dhD"
                  value={form.dhD}
                  onChange={handleChange}
                  placeholder="40"
                  className="w-full mt-1 bg-gray-900 text-white px-4 py-4.5 text-xl rounded-xl outline-none text-center"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="text-xl text-[#232323] ">Equipment Type*</label>
                <select
                  name="equipment"
                  value={form.equipment}
                  onChange={handleChange}
                  className="w-full mt-2 bg-gray-900 text-white px-5 py-4.5 text-xl rounded-xl outline-none"
                >
                  <option>Vans (Standard)</option>
                  <option>Reefer</option>
                  <option>Flatbed</option>
                </select>
              </div>

              <div>
                <label className="text-xl text-[#232323] ">Load Type</label>
                <select
                  name="loadType"
                  value={form.loadType}
                  onChange={handleChange}
                  className="w-full mt-2 bg-gray-900 text-white px-5 py-4.5 text-xl rounded-xl outline-none"
                >
                  <option>Full</option>
                  <option>Partial</option>
                </select>
              </div>

              <div>
                <label className="text-xl text-[#232323] ">Length ft</label>
                <input
                  type="number"
                  name="length"
                  value={form.length}
                  onChange={handleChange}
                  placeholder="Length ft"
                  className="w-full mt-2 bg-gray-900 text-white px-5 py-4.5 text-xl rounded-xl outline-none"
                />
              </div>
            </div>

              <div className="grid md:grid-cols-2 gap-4">
      <div className="relative">
        <label className="text-xl text-[#232323]">Start Date*</label>

        <input
          ref={startRef}
          type="date"
          name="startDate"
          min={today}
          value={form.startDate}
          onChange={handleChange}
          className="w-full mt-2 bg-gray-900 text-white px-5 pr-14 py-4.5 text-xl rounded-xl outline-none"
        />

        <CiCalendar
          onClick={openStartDate}
          className="absolute right-4 top-[58px] text-white text-2xl cursor-pointer"
        />
      </div>
      <div className="relative">
        <label className="text-xl text-[#232323]">End Date*</label>

        <input
          ref={endRef}
          type="date"
          name="endDate"
          min={form.startDate || today}
          value={form.endDate}
          onChange={handleChange}
          className="w-full mt-2 bg-gray-900 text-white px-5 pr-14 py-4.5 text-xl rounded-xl outline-none"
        />

        <CiCalendar
          onClick={openEndDate}
          className="absolute right-4 top-[58px] text-white text-2xl cursor-pointer"
        />
      </div>
    </div>

            <button
              onClick={handleSearch}
              className="w-full flex justify-center items-center gap-2 bg-ternary  cursor-pointer text-white font-semibold tracking-widest py-4.5 text-xl rounded-xl mt-4"
            >
              <CiSearch fontSize={30} /> SEARCH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchLoad;
