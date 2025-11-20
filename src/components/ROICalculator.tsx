import { useState, useEffect } from "react";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ROICalculator = () => {
  const [cases, setCases] = useState(25);
  const [gb, setGb] = useState(600);
  const [totalSaved, setTotalSaved] = useState("$0");
  const [savingsPercentage, setSavingsPercentage] = useState(0);
  const [showContactSales, setShowContactSales] = useState(false);
  const [isPositiveSavings, setIsPositiveSavings] = useState(true);

  useEffect(() => {
    calculateROI();
  }, [cases, gb]);

  const calculateROI = () => {
    const clampedCases = Math.max(4, Math.min(100, cases));
    const clampedGB = Math.max(100, Math.min(2000, gb));
    
    const totalGB = clampedCases * clampedGB;
    const totalTB = totalGB / 1000;

    // Determine tier based on cases and totalTB
    let processingRate: number, hostingRate: number;
    
    if (clampedCases <= 16 && totalTB <= 10) {
      processingRate = 20;
      hostingRate = 1500;
    } else if (clampedCases <= 32 && totalTB <= 20) {
      processingRate = 15;
      hostingRate = 1200;
    } else if (clampedCases <= 50 && totalTB <= 200) {
      processingRate = 8;
      hostingRate = 600;
    } else {
      setShowContactSales(true);
      setTotalSaved("Contact Sales");
      setSavingsPercentage(0);
      return;
    }

    // Current Costs (Without Venio)
    const currentProcessing = totalGB * processingRate;
    const currentHosting = totalTB * hostingRate;
    const currentReview = totalGB * 2 * 75;
    const currentLicenses = clampedCases * 8000;
    const currentTotal = currentProcessing + currentHosting + currentReview + currentLicenses;

    // Venio Costs
    const venioReview = currentReview * 0.7;

    let venioLicense = 0;
    if (clampedCases <= 16 && totalTB <= 3) {
      venioLicense = 164000;
    } else if (clampedCases <= 24 && totalTB <= 10) {
      venioLicense = 240000;
    } else if (clampedCases <= 32 && totalTB <= 20) {
      venioLicense = 480000;
    } else if (clampedCases <= 50 && totalTB <= 200) {
      venioLicense = 640000;
    } else {
      setShowContactSales(true);
      setTotalSaved("Contact Sales");
      setSavingsPercentage(0);
      return;
    }

    const venioTotal = venioReview + venioLicense;
    const savings = currentTotal - venioTotal;
    const percentage = currentTotal > 0 ? (savings / currentTotal) * 100 : 0;

    setShowContactSales(false);
    setIsPositiveSavings(savings >= 0);
    setTotalSaved(savings >= 0 ? `$${Math.round(savings).toLocaleString()}` : `-$${Math.round(-savings).toLocaleString()}`);
    setSavingsPercentage(percentage);
  };

  const handleContactSales = () => {
    window.open('https://www.veniosystems.com/contact-us/', '_blank');
  };

  return (
    <div className="bg-background p-8 rounded-3xl shadow-xl max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* LEFT SIDE: INPUTS */}
        <div className="flex-1 min-w-[300px] flex flex-col gap-6 py-7">
          <div>
            <h2 className="text-foreground text-3xl font-extrabold leading-tight mb-3">
              Discover your potential savings with Venio
            </h2>
            <p className="text-foreground/80 text-base leading-relaxed">
              Transform your eDiscovery workflow with AI automation and predictable pricing.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="cases" className="text-foreground text-[0.95rem] font-semibold">
              Cases per year
            </Label>
            <div className="flex items-center gap-4">
              <Slider
                id="cases-slider"
                min={4}
                max={100}
                step={1}
                value={[cases]}
                onValueChange={(value) => setCases(value[0])}
                className="flex-1"
              />
              <Input
                id="cases"
                type="number"
                value={cases}
                onChange={(e) => setCases(Number(e.target.value))}
                min={4}
                max={100}
                className="w-16 text-center font-semibold bg-primary/10 border-primary/20"
              />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <Label htmlFor="gb" className="text-foreground text-[0.95rem] font-semibold">
              Average GB per case
            </Label>
            <div className="flex items-center gap-4">
              <Slider
                id="gb-slider"
                min={100}
                max={2000}
                step={10}
                value={[gb]}
                onValueChange={(value) => setGb(value[0])}
                className="flex-1"
              />
              <Input
                id="gb"
                type="number"
                value={gb}
                onChange={(e) => setGb(Number(e.target.value))}
                min={100}
                max={2000}
                className="w-16 text-center font-semibold bg-primary/10 border-primary/20"
              />
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: RESULTS */}
        <div className="flex-1 min-w-[300px] bg-primary/10 p-7 rounded-2xl flex flex-col items-center justify-center text-center">
          <span className="bg-foreground text-background text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            Potential Annual Savings
          </span>

          <div className="mt-5 text-center">
            <div className="text-sm text-foreground/80 mb-2">Total amount saved</div>
            <div
              className={`text-3xl font-extrabold text-white px-5 py-3 rounded-xl min-w-[170px] transition-all duration-300 ${
                showContactSales 
                  ? "bg-primary cursor-pointer hover:opacity-90" 
                  : isPositiveSavings 
                    ? "bg-green-600" 
                    : "bg-red-500"
              }`}
              onClick={showContactSales ? handleContactSales : undefined}
            >
              {totalSaved}
            </div>
          </div>

          {!showContactSales && (
            <div className="mt-6 text-center text-[1.1rem] text-foreground leading-relaxed">
              That's a savings of{" "}
              <span className={`font-extrabold ${isPositiveSavings ? "text-green-600" : "text-red-500"}`}>
                {savingsPercentage.toFixed(1)}%
              </span>{" "}
              on your annual eDiscovery costs.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;
