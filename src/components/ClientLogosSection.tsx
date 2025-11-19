import amentumLogo from "@/assets/clients/amentum.webp";
import arrayLogo from "@/assets/clients/array.webp";
import cdsLogo from "@/assets/clients/cds.webp";
import consilioLogo from "@/assets/clients/consilio.webp";
import eparioLogo from "@/assets/clients/epario.webp";
import haugLogo from "@/assets/clients/haug-partners.webp";
import nixonLogo from "@/assets/clients/nixon-peabody.webp";
import proteusLogo from "@/assets/clients/proteus.webp";

const ClientLogosSection = () => {
  const clientLogos = [
    { src: amentumLogo, alt: "Amentum" },
    { src: arrayLogo, alt: "Array" },
    { src: cdsLogo, alt: "CDS" },
    { src: consilioLogo, alt: "Consilio" },
    { src: eparioLogo, alt: "Epario" },
    { src: haugLogo, alt: "Haug Partners" },
    { src: nixonLogo, alt: "Nixon Peabody" },
    { src: proteusLogo, alt: "Proteus" }
  ];

  return (
    <section className="py-10 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
            Trusted by Industry Leaders
          </h2>
        </div>
        <div className="flex gap-16 animate-scroll">
          {/* First set of logos */}
          {clientLogos.map((logo, index) => (
            <div 
              key={`first-${index}`} 
              className="flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 md:h-10 w-auto object-contain brightness-0"
              />
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {clientLogos.map((logo, index) => (
            <div 
              key={`second-${index}`} 
              className="flex-shrink-0"
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="h-8 md:h-10 w-auto object-contain brightness-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;
