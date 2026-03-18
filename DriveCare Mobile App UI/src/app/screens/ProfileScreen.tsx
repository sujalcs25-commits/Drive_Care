import { User, Bell, Shield, HelpCircle, FileText, LogOut, ChevronRight, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";

export function ProfileScreen() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      navigate("/login");
    }
  };

  const settingsOptions = [
    {
      icon: Bell,
      label: "Notifications",
      hasToggle: true,
      toggleValue: true,
    },
    {
      icon: Shield,
      label: "Privacy & Security",
      hasToggle: false,
    },
    {
      icon: HelpCircle,
      label: "Help & Support",
      hasToggle: false,
    },
    {
      icon: FileText,
      label: "Terms & Conditions",
      hasToggle: false,
    },
  ];

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl">Profile</h1>
          <p className="text-muted-foreground mt-1">Manage your account</p>
        </div>

        {/* Profile Card */}
        <Card className="p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-lg">
              <User className="w-10 h-10" strokeWidth={1.5} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl mb-1">John Doe</h2>
              <p className="text-sm text-muted-foreground">Premium Member</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-border">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-muted-foreground" />
              <span className="text-muted-foreground">+91 98765 43210</span>
            </div>
          </div>

          <Button
            variant="outline"
            className="w-full mt-4 h-10"
            onClick={() => alert("Edit profile feature coming soon!")}
          >
            Edit Profile
          </Button>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          <Card className="p-4 text-center border-0 bg-muted">
            <p className="text-2xl text-primary mb-1">2</p>
            <p className="text-xs text-muted-foreground">Vehicles</p>
          </Card>
          <Card className="p-4 text-center border-0 bg-muted">
            <p className="text-2xl text-primary mb-1">12</p>
            <p className="text-xs text-muted-foreground">Services</p>
          </Card>
          <Card className="p-4 text-center border-0 bg-muted">
            <p className="text-2xl text-destructive mb-1">3</p>
            <p className="text-xs text-muted-foreground">Upcoming</p>
          </Card>
        </div>

        {/* Settings */}
        <div>
          <h3 className="mb-4">Settings</h3>
          <Card className="divide-y divide-border">
            {settingsOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <button
                  key={index}
                  onClick={() => !option.hasToggle && alert(`${option.label} clicked`)}
                  className="w-full flex items-center gap-3 p-4 hover:bg-accent transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="flex-1 text-left">{option.label}</span>
                  {option.hasToggle ? (
                    <Switch defaultChecked={option.toggleValue} />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              );
            })}
          </Card>
        </div>

        {/* App Info */}
        <Card className="p-4 bg-muted">
          <div className="text-center">
            <h4 className="mb-1">DriveCare</h4>
            <p className="text-sm text-muted-foreground">Version 1.0.0</p>
            <p className="text-xs text-muted-foreground mt-2">
              Smart Care for Your Vehicle
            </p>
          </div>
        </Card>

        {/* Logout Button */}
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-12 border-2 border-destructive text-destructive hover:bg-destructive hover:text-white"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>
    </MobileLayout>
  );
}