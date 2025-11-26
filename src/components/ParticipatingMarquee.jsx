// src/components/ParticipatingCompaniesMarquee.jsx

const companyLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
    alt: "Apple",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    alt: "Microsoft",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Accenture.svg",
    alt: "Accenture",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    alt: "Infosys",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wipro_Logo_2017.svg",
    alt: "Wipro",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tata_Consultancy_Services_Logo.svg",
    alt: "TCS",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
    alt: "IBM",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/20/HCL_Technologies_Logo.svg",
    alt: "HCL",
  }, {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Accenture.svg",
    alt: "Accenture",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
    alt: "Infosys",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Wipro_Logo_2017.svg",
    alt: "Wipro",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tata_Consultancy_Services_Logo.svg",
    alt: "TCS",
  },
];

export default function ParticipatingCompaniesMarquee() {
  return (
    <div className="w-full bg-transparent flex flex-col items-center pt-11">
      <div className="max-w-5xl w-full mx-auto px-4">
        <div className="overflow-hidden">
          <div className="marquee flex items-center gap-10 py-3">
            {companyLogos.concat(companyLogos).map(({ src, alt }, idx) => (
              <img
                key={alt + idx}
                src={src}
                alt={alt}
                className="h-12 w-auto bg-white rounded-md px-2 py-1"
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
