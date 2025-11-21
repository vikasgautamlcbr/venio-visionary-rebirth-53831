import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ROICalculator from "@/components/ROICalculator";

interface CalculatorDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalculatorDialog = ({ open, onOpenChange }: CalculatorDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[1000px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">Venio Savings Calculator</DialogTitle>
          <DialogDescription>
            Calculate your potential cost savings with Venio's eDiscovery platform
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <ROICalculator />
        </div>
      </DialogContent>
    </Dialog>
  );
};
