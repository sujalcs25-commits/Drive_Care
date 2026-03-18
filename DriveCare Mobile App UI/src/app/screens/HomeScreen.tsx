import { useNavigate } from "react-router";
import { Calendar, History, AlertCircle, Wrench, Droplet, DollarSign } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function HomeScreen() {
  const navigate = useNavigate();

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h2 className="text-muted-foreground">Welcome back,</h2>
          <h1 className="text-3xl">John Doe</h1>
        </div>

        {/* Vehicle Summary Card */}
        <Card className="p-6 bg-primary text-white shadow-lg border-0">
          <div className="flex items-start justify-between mb-4">
            <div>
              <p className="text-white/70 text-sm mb-1">Your Vehicle</p>
              <h3 className="text-2xl">Honda Civic</h3>
              <p className="text-white/80 mt-1">DL 01 AB 1234</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
              <span className="text-sm">Petrol</span>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-white/20">
            <div>
              <p className="text-white/60 text-xs mb-1">Mileage</p>
              <p className="text-lg">45,230 km</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Avg Fuel</p>
              <p className="text-lg">18.5 km/l</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Next Service</p>
              <p className="text-lg">2,770 km</p>
            </div>
          </div>
        </Card>

        {/* Upcoming Service Reminder */}
        <Card className="p-4 bg-red-50 border-destructive/30">
          <div className="flex items-start gap-3">
            <div className="bg-destructive/10 p-2 rounded-lg">
              <Calendar className="w-5 h-5 text-destructive" />
            </div>
            <div className="flex-1">
              <h4 className="text-foreground mb-1">Upcoming Service</h4>
              <p className="text-sm text-muted-foreground">
                Oil change due in 2,770 km or by April 15, 2026
              </p>
              <Button
                onClick={() => navigate("/services")}
                variant="link"
                className="text-destructive hover:text-destructive/80 px-0 h-auto mt-2"
              >
                Book Now →
              </Button>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <div>
          <h3 className="mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-4">
            <button
              onClick={() => navigate("/services")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-center">Book Service</span>
            </button>

            <button
              onClick={() => navigate("/maintenance")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <History className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-center">View History</span>
            </button>

            <button
              onClick={() => navigate("/emergency")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-destructive/10 p-3 rounded-full">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <span className="text-sm text-center">Emergency</span>
            </button>

            <button
              onClick={() => navigate("/fuel-tracker")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-secondary/10 p-3 rounded-full">
                <Droplet className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm text-center">Add Fuel</span>
            </button>

            <button
              onClick={() => navigate("/fuel-tracker")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-secondary/10 p-3 rounded-full">
                <DollarSign className="w-6 h-6 text-secondary" />
              </div>
              <span className="text-sm text-center">Expenses</span>
            </button>

            <button
              onClick={() => navigate("/vehicles")}
              className="flex flex-col items-center gap-2 p-4 bg-accent rounded-xl hover:bg-accent/80 transition-colors"
            >
              <div className="bg-primary/10 p-3 rounded-full">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm text-center">Manage</span>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div>
          <h3 className="mb-4">Recent Activity</h3>
          <div className="space-y-3">
            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-secondary/10 p-2 rounded-lg">
                  <Wrench className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm">Oil Change Service</h4>
                  <p className="text-xs text-muted-foreground">
                    Completed on March 5, 2026
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">₹2,500</p>
                </div>
              </div>
            </Card>

            <Card className="p-4">
              <div className="flex items-center gap-3">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Droplet className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm">Fuel Refill</h4>
                  <p className="text-xs text-muted-foreground">
                    45 liters on March 12, 2026
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm">₹4,500</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}