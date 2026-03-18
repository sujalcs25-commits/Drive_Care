import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Car } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/login");
    }, 2500);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileLayout showBottomNav={false}>
      <div className="h-full flex flex-col items-center justify-center bg-primary p-8">
        <div className="bg-white rounded-3xl p-10 mb-8 shadow-2xl">
          <Car className="w-24 h-24 text-primary" strokeWidth={2} />
        </div>
        <h1 className="text-white text-5xl mb-4 tracking-tight">DriveCare</h1>
        <p className="text-white/80 text-lg text-center max-w-xs">
          Smart Care for Your Vehicle
        </p>
        <div className="mt-16 flex gap-2">
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "0ms" }}></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "200ms" }}></div>
          <div className="w-2 h-2 bg-white/50 rounded-full animate-pulse" style={{ animationDelay: "400ms" }}></div>
        </div>
      </div>
    </MobileLayout>
  );
}