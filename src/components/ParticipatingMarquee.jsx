// src/components/ParticipatingCompaniesMarquee.jsx

const companyLogos = [
  {
    src: "src/assets/Siddhi.jpg",
    alt: "Siddhi",
  },
  {
    src: "src/assets/3I-infotech-logo.png",
    alt: "Infotech",
  },{
    src: "src/assets/AxisBank.jpg",
    alt: "AxisBank",
  },
  {
    src: "src/assets/bajaj.jpg",
    alt: "Bajaj",
  },
  {
    src: "src/assets/Dixon.jpg",
    alt: "Dixon",
  },
  {
    src: "src/assets/Quess_Corp_Color_Logo.webp",
    alt: "quessCorp",
  },
  {
    src: "src/assets/randstad-logo.webp",
    alt: "randstad",
  },
  {
    src: "src/assets/teamLeaseLogo.webp",
    alt: "TeamLease",
  },
  {
    src: "src/assets/axis-bank-logo-png_seeklogo-14775.webp",
    alt: "AxisBank",
  },
  {
    src: "src/assets/Pukhraj.jpg",
    alt: "Pukhraj",
  },
  {
    src: "src/assets/tecxed_logo.jpg",
    alt: "tecxed",
  },
  {
    src: "src/assets/ERD.jpg",
    alt: "ERD",
  },
  {
    src: "src/assets/MetaConnect.jpg",
    alt: "MetaConnect",
  },
  {
    src: "src/assets/Paytm.jpg",
    alt: "Paytm",
  },
  {
    src: "src/assets/Infosoft.jpg",
    alt: "Infosoft",
  },
];

export default function ParticipatingCompaniesMarquee() {
  return (
    <div className="w-full bg-transparent flex flex-col items-center pt-15  md:pt-10">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="overflow-hidden">
          <div className="marquee flex items-center gap-8 py-3">
            {companyLogos.concat(companyLogos).map(({ src, alt }, idx) => (
              <img
                key={alt + idx}
                src={src}
                alt={alt}
                className="h-12 w-auto bg-white rounded-md px-1"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
            ))}
          </div>
        </div>
        <style>{`
          .marquee {
            animation: scroll-x 25s linear infinite;
            white-space: nowrap;
          }
          @keyframes scroll-x {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </div>
  );
}
