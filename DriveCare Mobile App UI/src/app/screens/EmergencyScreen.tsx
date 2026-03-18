import { AlertCircle, Phone, MapPin, Wrench, Ambulance, AlertTriangle } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";

export function EmergencyScreen() {
  const handleSOS = () => {
    alert("SOS Alert sent! Emergency services will be notified.");
  };

  const handleCallMechanic = () => {
    alert("Calling nearest mechanic...");
  };

  const handleShareLocation = () => {
    alert("Location shared successfully!");
  };

  const emergencyContacts = [
    {
      name: "Roadside Assistance",
      number: "1800-XXX-XXXX",
      icon: Wrench,
      color: "bg-primary",
    },
    {
      name: "Emergency Services",
      number: "911",
      icon: Ambulance,
      color: "bg-destructive",
    },
    {
      name: "Towing Service",
      number: "1800-XXX-YYYY",
      icon: AlertTriangle,
      color: "bg-amber-500",
    },
  ];

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <div className="bg-destructive/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
            <AlertCircle className="w-8 h-8 text-destructive" />
          </div>
          <h1 className="text-3xl">Emergency Help</h1>
          <p className="text-muted-foreground mt-1">
            Get immediate assistance
          </p>
        </div>

        {/* SOS Button */}
        <Card className="p-8 bg-gradient-to-br from-destructive to-red-600 text-white text-center shadow-lg">
          <button
            onClick={handleSOS}
            className="w-full flex flex-col items-center gap-4 active:scale-95 transition-transform"
          >
            <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 shadow-xl animate-pulse">
              <AlertCircle className="w-16 h-16" />
            </div>
            <div>
              <h2 className="text-2xl mb-2">SOS Emergency</h2>
              <p className="text-white/90 text-sm">
                Tap to send distress signal
              </p>
            </div>
          </button>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={handleCallMechanic}
            className="h-28 flex flex-col gap-2 bg-primary hover:bg-primary/90"
          >
            <Phone className="w-8 h-8" />
            <span>Call Mechanic</span>
          </Button>
          <Button
            onClick={handleShareLocation}
            className="h-28 flex flex-col gap-2 bg-secondary hover:bg-secondary/90"
          >
            <MapPin className="w-8 h-8" />
            <span>Share Location</span>
          </Button>
        </div>

        {/* Current Location */}
        <Card className="p-4">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-2 rounded-lg">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="mb-1">Current Location</h4>
              <p className="text-sm text-muted-foreground">
                Connaught Place, New Delhi, India
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Lat: 28.6315, Long: 77.2167
              </p>
            </div>
          </div>
        </Card>

        {/* Emergency Contacts */}
        <div>
          <h3 className="mb-4">Emergency Contacts</h3>
          <div className="space-y-3">
            {emergencyContacts.map((contact) => {
              const Icon = contact.icon;
              return (
                <Card key={contact.name} className="p-4">
                  <div className="flex items-center gap-3">
                    <div className={`${contact.color} p-3 rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="mb-0.5">{contact.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {contact.number}
                      </p>
                    </div>
                    <Button
                      size="sm"
                      onClick={() => alert(`Calling ${contact.number}...`)}
                      className="bg-primary hover:bg-primary/90"
                    >
                      <Phone className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Safety Tips */}
        <Card className="p-4 bg-accent border-primary/20">
          <h4 className="mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-primary" />
            Safety Tips
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Turn on hazard lights if stopped on road</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Move to safe location away from traffic</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Keep your phone charged for emergencies</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary">•</span>
              <span>Stay inside vehicle if on highway</span>
            </li>
          </ul>
        </Card>
      </div>
    </MobileLayout>
  );
}
