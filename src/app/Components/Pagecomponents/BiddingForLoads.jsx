'use client'
import React, { useState } from "react";

const loadsData = [
    {
        id: 1,
        time: "43m",
        rate: 600,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "16,236 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 2,
        time: "1h",
        rate: null,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "19,166 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 3,
        time: "43m",
        rate: 600,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "16,236 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 4,
        time: "1h",
        rate: null,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "19,166 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 5,
        time: "43m",
        rate: 600,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "16,236 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 6,
        time: "1h",
        rate: null,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "19,166 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 7,
        time: "43m",
        rate: 600,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "16,236 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    },
    {
        id: 8,
        time: "1h",
        rate: null,
        miles: 120,
        origin: "Dayton, NJ",
        destination: "Aberdeen, MD",
        stops: 0,
        pickup: "2/5",
        equipment: "V",
        weight: "19,166 lbs",
        length: "53 ft - Full",
        company: "RXO/Coyote Logistics",
        phone: "(773) 799-2118 x74161",
        creditScore: "97 CS",
        daysToPay: "18 DTP"
    }
];
const loadDetailsData = [
    {
        id: 1,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 2,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 3,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 4,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 5,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 6,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 7,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    },
    {
        id: 8,
        trackingRequired: true,
        origin: "Levittown, PA",
        originCode: "(31)",
        pickupDate: "Feb 3",
        pickupTime: "12:30",
        destination: "Barrington, NJ",
        destinationCode: "(13)",
        tripMiles: "29 mi",
        equipment: "Full Van",
        length: "53 ft",
        weight: "39,847 lbs",
        commodity: "—",
        referenceId: "—",
        companyName: "Best Logistic Services",
        companyPhone: "(336) 515-2005",
        mcNumber: "MC#187921",
        companyLocation: "Kernersville, NC",
        rating: 4,
        reviews: 48,
        creditScore: 97,
        daysToPay: 18
    }
];
export const DollarIcon = () => {
    return (
        <svg
            width="11"
            height="20"
            viewBox="0 0 11 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M5.63188 8.90961C6.77588 9.26161 7.66321 9.57694 8.29388 9.85561C8.92454 10.1343 9.47454 10.5743 9.94388 11.1756C10.4132 11.7623 10.6479 12.5616 10.6479 13.5736C10.6479 14.3069 10.4645 14.9889 10.0979 15.6196C9.74588 16.2503 9.19588 16.7636 8.44788 17.1596C7.69988 17.5556 6.78321 17.7536 5.69788 17.7536H5.63188V19.5136H4.94988V17.7096C3.55654 17.5776 2.41988 17.1229 1.53988 16.3456C0.659875 15.5536 0.168542 14.5783 0.065875 13.4196H2.19988C2.25854 14.0356 2.52254 14.6149 2.99188 15.1576C3.47588 15.6856 4.12854 16.0156 4.94988 16.1476V10.5156C3.82054 10.1783 2.94054 9.87761 2.30988 9.61361C1.69388 9.33494 1.15121 8.90228 0.681875 8.31561C0.227208 7.72894 -0.000124946 6.94428 -0.000124946 5.96161C-0.000124946 5.15494 0.205208 4.44361 0.615875 3.82761C1.02654 3.21161 1.60588 2.73494 2.35388 2.39761C3.10188 2.06028 3.96721 1.89161 4.94988 1.89161V-0.000390887H5.63188V1.91361C6.99588 2.01628 8.08121 2.43428 8.88788 3.16761C9.69454 3.90094 10.1712 4.78828 10.3179 5.82961H8.16188C8.05921 5.27228 7.79521 4.77361 7.36988 4.33361C6.94454 3.89361 6.36521 3.61494 5.63188 3.49761V8.90961ZM2.15587 5.87361C2.15587 6.62161 2.39054 7.20094 2.85988 7.61161C3.34388 8.02228 4.04054 8.38161 4.94988 8.68961V3.45361C4.09921 3.45361 3.41721 3.66628 2.90388 4.09161C2.40521 4.50228 2.15587 5.09628 2.15587 5.87361ZM5.65388 16.1916C6.56321 16.1916 7.26721 15.9496 7.76588 15.4656C8.26454 14.9816 8.51388 14.3656 8.51388 13.6176C8.51388 12.8403 8.26454 12.2389 7.76588 11.8136C7.26721 11.3883 6.55588 11.0289 5.63188 10.7356V16.1916H5.65388Z"
                fill="#232323"
            />
        </svg>
    );
};
export const RouteIcon = () => {
    return (
        <svg
            width="8"
            height="30"
            viewBox="0 0 8 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="4.5" cy="3.5" r="3" stroke="#0048DC" />
            <circle cx="4.5" cy="26.5" r="3.5" fill="#0048DC" />
            <path
                d="M4 10.6667L3.84831 21.1738"
                stroke="black"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M6.18162 18.8405L3.84829 21.1738L1.51495 18.8405"
                stroke="black"
                strokeWidth="0.666667"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

const BiddingForLoads = ({ onclick }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [currenrtloadDetailsData, setcurrenrtloadDetailsData] = useState(null)
    const itemsPerPage = 6;

    const totalPages = Math.ceil(loadsData.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentData = loadsData.slice(startIndex, startIndex + itemsPerPage);
    const getLoadDetailById = (id) => {
        const foundData = loadDetailsData.find((item) => item.id === id);
        setcurrenrtloadDetailsData(foundData);
    };
    console.log('currenrtloadDetailsData', currenrtloadDetailsData);

    return (
        <div className="relative max-w-[1408.2px] m-auto bg-primary [clip-path:polygon(38px_0,calc(100%-38px)_0,100%_38px,100%_calc(100%-38px),calc(100%-38px)_100%,38px_100%,0_calc(100%-38px),0_38px)]">
            <div className="border-2 border-primary py-12 bg-white [clip-path:polygon(40px_0,calc(100%-40px)_0,100%_40px,100%_calc(100%-40px),calc(100%-40px)_100%,40px_100%,0_calc(100%-40px),0_40px)] backdrop-blur-xl">
                <h2 className="uppercase family-primary text-center text-[70px] leading-17.5 text-primary">
                    bidding for loads
                </h2>
                <p className="h-1 w-full bg-[linear-gradient(90deg,rgb(153_153_153/0%)_0%,rgba(255,199,0)_51%,rgb(153_153_153/0%)_100%)]" />

                <div>
                    <div className="flex gap-3 bg-ternary py-3 mt-5">
                        <span className="text-lg text-white min-w-[9.94%] max-w-[9.94] text-center border-r-2 border-[#FFFFFF80]">
                            Time
                        </span>
                        <span className="text-lg text-white min-w-[10.09%] max-w-[10.09%] border-r-2 border-[#FFFFFF80] ">
                            Rate
                        </span>
                        <div className="min-w-[23.79%] max-w-[23.79%] flex justify-between border-r-2 border-[#FFFFFF80] pe-4">
                            <span className="text-lg text-white">Trip</span>
                            <span className="text-lg text-white">DH-0</span>
                        </div>
                        <span className="text-lg text-white min-w-[6.39%] max-w-[6.39%] border-r-2 border-[#FFFFFF80]">
                            Pick Up
                        </span>
                        <span className="text-lg text-white min-w-[15.27%] max-w-[15.27%] border-r-2 border-[#FFFFFF80] ">
                            Equipment
                        </span>
                        <span className="text-lg text-white min-w-[28%] max-w-[28%] border-r-2 border-[#FFFFFF80] ">
                            Company
                        </span>
                    </div>

                    <div>
                        {currentData.map((load, index) => (
                            <div key={load.id} onClick={() => getLoadDetailById(load.id)} className={`flex items-center gap-3 py-2 ${(index + 1) % 2 === 0 ? 'bg-[#F6F7F9] font-semibold' : ''}`}>

                                <div className="min-w-[9.94%] max-w-[9.94%] border-r-2 border-[#00000080] text-lg text-center">
                                    {load.time}
                                </div>

                                <div className="min-w-[10.09%] max-w-[10.09%] border-r-2 border-[#00000080] text-lg text-center flex items-center justify-center gap-3">
                                    {load.rate ? `$${load.rate}` : "-"}
                                    {load.rate && <DollarIcon />}
                                </div>

                                <div className="min-w-[23.79%] max-w-[23.79%] flex justify-between pe-4 border-r-2 border-[#00000080]">
                                    <div className="flex items-center gap-2">
                                        <span className="text-lg text-ternary">{load.miles}</span>

                                        <div className="flex items-center gap-2">
                                            <RouteIcon />
                                            <div className="flex flex-col">
                                                <span className="text-lg text-[#232323]">{load.origin}</span>
                                                <span className="text-lg text-[#232323]">{load.destination}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <div className="flex flex-col">
                                            <span className="text-lg text-[#232323]">({load.stops})</span>
                                            <span className="text-lg text-[#232323]">(68)</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="min-w-[6.39%] max-w-[6.39%] text-center border-r-2 border-[#00000080]">
                                    <span className="text-lg">{load.pickup}</span>
                                </div>

                                <div className="min-w-[15.27%] max-w-[15.27%] border-r-2 border-[#00000080]">
                                    <div className="flex items-center justify-around">
                                        <span className="text-lg">{load.equipment}</span>
                                        <div className="flex flex-col">
                                            <span className="text-lg text-[#232323]">{load.weight}</span>
                                            <span className="text-lg text-[#232323]">{load.length}</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="min-w-[28%] max-w-[28%] flex justify-between items-center">
                                    <div className="flex flex-col">
                                        <span className="text-lg text-ternary">{load.company}</span>
                                        <span className="text-lg text-ternary">{load.phone}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-lg text-[#232323]">{load.creditScore}</span>
                                        <span className="text-lg text-[#232323]">{load.daysToPay}</span>
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>

                </div>
                <div className="flex justify-center items-center gap-3 mt-6">
                    <button
                        onClick={() => setCurrentPage(prev => prev - 1)}
                        disabled={currentPage === 1}
                        className="px-4 py-2 border border-primary text-primary disabled:opacity-40"
                    >
                        Prev
                    </button>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentPage(index + 1)}
                            className={`px-4 py-2 border ${currentPage === index + 1
                                ? "bg-primary text-white"
                                : "border-primary text-primary"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => setCurrentPage(prev => prev + 1)}
                        disabled={currentPage === totalPages}
                        className="px-4 py-2 border border-primary text-primary disabled:opacity-40"
                    >
                        Next
                    </button>
                </div>


                {currenrtloadDetailsData && (
                    <div className="absolute w-full h-full flex justify-center items-center top-0 left-0" >
                        <div className="fixed w-full h-full top-0 left-0 bg-black/70"></div>
                        <div className="bg-[#F5F6F7]  p-6 mt-2 relative z-10 rounded-2xl">

                            {/* TOP ROUTE TITLE */}
                            <div className="flex justify-between items-center mb-5">
                                <div className="flex items-center gap-4 text-xl font-semibold">
                                    <span>{currenrtloadDetailsData.origin}</span>
                                    <span>{currenrtloadDetailsData.destination}</span>
                                    <span className="text-gray-500 text-base">
                                        {currenrtloadDetailsData.tripMiles}
                                    </span>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-8">

                                {/* LEFT SECTION */}
                                <div>
                                    {currenrtloadDetailsData.trackingRequired && (
                                        <div className="bg-yellow-400 text-black px-3 py-2 text-sm font-medium w-fit mb-4">
                                            Tracking Required
                                        </div>
                                    )}

                                    <div className="mb-4">
                                        <p className="font-semibold">
                                            {currenrtloadDetailsData.origin} {currenrtloadDetailsData.originCode}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {currenrtloadDetailsData.pickupDate}
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            {currenrtloadDetailsData.pickupTime}
                                        </p>
                                    </div>

                                    <div className="mb-6">
                                        <p className="font-semibold">
                                            {currenrtloadDetailsData.destination} {currenrtloadDetailsData.destinationCode}
                                        </p>
                                    </div>

                                    <div className="text-sm text-gray-700 space-y-1">
                                        <p>
                                            <span className="font-medium">Equipment:</span>{" "}
                                            {currenrtloadDetailsData.equipment}
                                        </p>
                                        <p>
                                            <span className="font-medium">Length:</span>{" "}
                                            {currenrtloadDetailsData.length}
                                        </p>
                                        <p>
                                            <span className="font-medium">Weight:</span>{" "}
                                            {currenrtloadDetailsData.weight}
                                        </p>
                                        <p>
                                            <span className="font-medium">Commodity:</span>{" "}
                                            {currenrtloadDetailsData.commodity}
                                        </p>
                                        <p>
                                            <span className="font-medium">Reference ID:</span>{" "}
                                            {currenrtloadDetailsData.referenceId}
                                        </p>
                                    </div>
                                </div>

                                {/* CENTER SECTION */}
                                <div>
                                    <div className="mb-6">
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Total</span>
                                            <span>—</span>
                                        </div>
                                        <div className="flex justify-between text-sm mb-2">
                                            <span>Trip</span>
                                            <span>{currenrtloadDetailsData.tripMiles}</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Rate / mile</span>
                                            <span>—</span>
                                        </div>
                                    </div>

                                    <div className="border p-4 bg-white text-sm text-gray-500">
                                        <p className="mb-2 font-medium">
                                            MARKET RATES Powered by DAT iQ
                                        </p>
                                        <p>Rates are not available for this subscription</p>
                                        <button className="text-blue-600 mt-2 underline">
                                            GET RATES
                                        </button>
                                    </div>
                                </div>

                                {/* RIGHT SECTION */}
                                <div>
                                    <div className="mb-4">
                                        <p className="font-semibold text-lg">
                                            {currenrtloadDetailsData.companyName}
                                        </p>
                                        <p className="text-blue-600 text-sm">
                                            {currenrtloadDetailsData.companyPhone}
                                        </p>
                                    </div>

                                    <div className="text-sm text-gray-700 mb-3">
                                        <p>{currenrtloadDetailsData.mcNumber}</p>
                                        <p>{currenrtloadDetailsData.companyLocation}</p>
                                    </div>

                                    <div className="text-sm text-gray-700 mb-4">
                                        ⭐{"⭐".repeat(currenrtloadDetailsData.rating)}
                                        {"☆".repeat(5 - currenrtloadDetailsData.rating)}{" "}
                                        ({currenrtloadDetailsData.reviews})
                                    </div>

                                    <div className="text-sm text-gray-700">
                                        <p>Credit Score: {currenrtloadDetailsData.creditScore}</p>
                                        <p>Days to Pay: {currenrtloadDetailsData.daysToPay}</p>
                                    </div>

                                    <button className="mt-4 border px-4 py-2 rounded-full text-sm">
                                        MARK AS...
                                    </button>
                                </div>

                            </div>

                            {/* BOTTOM BUTTON */}
                            <div className="mt-8">
                                <button className="w-full bg-green-600 text-white py-3 rounded" onClick={onclick}>
                                    Accept Request
                                </button>
                            </div>

                        </div>
                    </div>

                )}
            </div>
        </div>
    );
};

export default BiddingForLoads;
