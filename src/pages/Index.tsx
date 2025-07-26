import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold mb-4 text-foreground">MASWALIPESA</h1>
        <p className="text-xl text-muted-foreground">Multiplayer Gaming Application</p>
        <div className="mt-8">
          <Link to="/privacy-policy">
            <Button variant="outline" className="gap-2">
              View Privacy Policy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
