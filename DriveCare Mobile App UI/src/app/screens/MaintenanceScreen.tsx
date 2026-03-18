import { CheckCircle2, Circle, Wrench, Droplet, Battery, Wind } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";

interface MaintenanceRecord {
  id: string;
  type: string;
  date: string;
  cost: string;
  status: "completed" | "pending";
  description: string;
  icon: "wrench" | "droplet" | "battery" | "wind";
}

const maintenanceRecords: MaintenanceRecord[] = [
  {
    id: "1",
    type: "Oil Change",
    date: "March 5, 2026",
    cost: "₹2,500",
    status: "completed",
    description: "Engine oil and filter replaced",
    icon: "droplet",
  },
  {
    id: "2",
    type: "Tire Rotation",
    date: "February 20, 2026",
    cost: "₹1,500",
    status: "completed",
    description: "All four tires rotated and balanced",
    icon: "wrench",
  },
  {
    id: "3",
    type: "AC Service",
    date: "January 10, 2026",
    cost: "₹3,000",
    status: "completed",
    description: "AC gas refill and filter cleaning",
    icon: "wind",
  },
  {
    id: "4",
    type: "Battery Check",
    date: "December 15, 2025",
    cost: "Free",
    status: "completed",
    description: "Battery health check - Good condition",
    icon: "battery",
  },
  {
    id: "5",
    type: "General Service",
    date: "November 5, 2025",
    cost: "₹5,500",
    status: "completed",
    description: "Complete vehicle checkup and maintenance",
    icon: "wrench",
  },
  {
    id: "6",
    type: "Oil Change",
    date: "April 15, 2026",
    cost: "₹2,500",
    status: "pending",
    description: "Scheduled for next service",
    icon: "droplet",
  },
];

const iconMap = {
  wrench: Wrench,
  droplet: Droplet,
  battery: Battery,
  wind: Wind,
};

export function MaintenanceScreen() {
  const completedRecords = maintenanceRecords.filter((r) => r.status === "completed");
  const pendingRecords = maintenanceRecords.filter((r) => r.status === "pending");

  const totalSpent = completedRecords.reduce((acc, record) => {
    const cost = parseInt(record.cost.replace(/[^0-9]/g, "")) || 0;
    return acc + cost;
  }, 0);

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl">Maintenance Tracker</h1>
          <p className="text-muted-foreground mt-1">
            Track your service history
          </p>
        </div>

        {/* Stats Card */}
        <Card className="p-6 bg-primary text-white border-0">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <p className="text-white/60 text-xs mb-1">Total Services</p>
              <p className="text-2xl">{completedRecords.length}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Total Spent</p>
              <p className="text-2xl">₹{totalSpent.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-white/60 text-xs mb-1">Upcoming</p>
              <p className="text-2xl">{pendingRecords.length}</p>
            </div>
          </div>
        </Card>

        {/* Upcoming Services */}
        {pendingRecords.length > 0 && (
          <div>
            <h3 className="mb-4">Upcoming Services</h3>
            <div className="space-y-3">
              {pendingRecords.map((record) => {
                const Icon = iconMap[record.icon];
                return (
                  <Card key={record.id} className="p-4 bg-red-50 border-destructive/30">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0">
                        <div className="bg-destructive/10 p-2 rounded-lg">
                          <Icon className="w-5 h-5 text-destructive" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h4 className="text-foreground">{record.type}</h4>
                          <span className="text-foreground text-sm whitespace-nowrap">
                            {record.cost}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-1">{record.date}</p>
                        <p className="text-xs text-muted-foreground">{record.description}</p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        )}

        {/* Timeline */}
        <div>
          <h3 className="mb-4">Service History</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-[21px] top-2 bottom-2 w-0.5 bg-border"></div>

            {/* Timeline Items */}
            <div className="space-y-4">
              {completedRecords.map((record, index) => {
                const Icon = iconMap[record.icon];
                return (
                  <div key={record.id} className="relative flex gap-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0 relative z-10">
                      <div className="w-11 h-11 rounded-full bg-secondary flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-white" />
                      </div>
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 p-4 -mt-1">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2 mb-1">
                            <h4>{record.type}</h4>
                            <span className="text-primary whitespace-nowrap">
                              {record.cost}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">
                            {record.date}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {record.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}