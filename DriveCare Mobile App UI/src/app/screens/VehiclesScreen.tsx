import { useState } from "react";
import { Plus, Car, Calendar, Droplet } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { Input } from "../components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

interface Vehicle {
  id: string;
  name: string;
  number: string;
  fuelType: string;
  lastService: string;
  mileage: string;
}

export function VehiclesScreen() {
  const [vehicles, setVehicles] = useState<Vehicle[]>([
    {
      id: "1",
      name: "Honda Civic",
      number: "DL 01 AB 1234",
      fuelType: "Petrol",
      lastService: "March 5, 2026",
      mileage: "45,230 km",
    },
    {
      id: "2",
      name: "Toyota Fortuner",
      number: "DL 02 CD 5678",
      fuelType: "Diesel",
      lastService: "February 20, 2026",
      mileage: "62,450 km",
    },
  ]);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    name: "",
    number: "",
    fuelType: "Petrol",
  });

  const handleAddVehicle = (e: React.FormEvent) => {
    e.preventDefault();
    const vehicle: Vehicle = {
      id: Date.now().toString(),
      name: newVehicle.name,
      number: newVehicle.number,
      fuelType: newVehicle.fuelType,
      lastService: "Not yet serviced",
      mileage: "0 km",
    };
    setVehicles([...vehicles, vehicle]);
    setNewVehicle({ name: "", number: "", fuelType: "Petrol" });
    setIsDialogOpen(false);
  };

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl">My Vehicles</h1>
            <p className="text-muted-foreground mt-1">
              Manage your vehicle fleet
            </p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 rounded-full w-12 h-12 p-0">
                <Plus className="w-6 h-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90%] rounded-2xl">
              <DialogHeader>
                <DialogTitle>Add New Vehicle</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddVehicle} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm">Vehicle Name</label>
                  <Input
                    placeholder="e.g., Honda Civic"
                    value={newVehicle.name}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, name: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Registration Number</label>
                  <Input
                    placeholder="e.g., DL 01 AB 1234"
                    value={newVehicle.number}
                    onChange={(e) =>
                      setNewVehicle({ ...newVehicle, number: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Fuel Type</label>
                  <Select
                    value={newVehicle.fuelType}
                    onValueChange={(value) =>
                      setNewVehicle({ ...newVehicle, fuelType: value })
                    }
                  >
                    <SelectTrigger className="h-12 bg-input-background border-0">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Petrol">Petrol</SelectItem>
                      <SelectItem value="Diesel">Diesel</SelectItem>
                      <SelectItem value="Electric">Electric</SelectItem>
                      <SelectItem value="Hybrid">Hybrid</SelectItem>
                      <SelectItem value="CNG">CNG</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" className="w-full h-12 bg-primary hover:bg-primary/90">
                  Add Vehicle
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Vehicle List */}
        <div className="space-y-4">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="p-5 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-4 rounded-xl">
                  <Car className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1">{vehicle.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {vehicle.number}
                  </p>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Droplet className="w-4 h-4 text-primary" />
                      <span className="text-muted-foreground">
                        {vehicle.fuelType}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">
                        {vehicle.mileage}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      Last Service: <span className="text-foreground">{vehicle.lastService}</span>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {vehicles.length === 0 && (
          <div className="text-center py-12">
            <div className="bg-muted rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
              <Car className="w-12 h-12 text-muted-foreground" />
            </div>
            <h3 className="mb-2">No Vehicles Yet</h3>
            <p className="text-muted-foreground text-sm">
              Add your first vehicle to get started
            </p>
          </div>
        )}
      </div>
    </MobileLayout>
  );
}