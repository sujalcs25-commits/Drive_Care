import { useState } from "react";
import { Droplet, Plus, TrendingUp, DollarSign } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../components/ui/dialog";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface FuelEntry {
  id: string;
  date: string;
  liters: number;
  cost: number;
  odometer: number;
  station: string;
}

const initialEntries: FuelEntry[] = [
  {
    id: "1",
    date: "March 12, 2026",
    liters: 45,
    cost: 4500,
    odometer: 45230,
    station: "Indian Oil",
  },
  {
    id: "2",
    date: "March 5, 2026",
    liters: 40,
    cost: 4000,
    odometer: 44650,
    station: "HP",
  },
  {
    id: "3",
    date: "February 25, 2026",
    liters: 42,
    cost: 4200,
    odometer: 44050,
    station: "Bharat Petroleum",
  },
  {
    id: "4",
    date: "February 18, 2026",
    liters: 38,
    cost: 3800,
    odometer: 43420,
    station: "Indian Oil",
  },
];

const chartData = [
  { month: "Dec", amount: 3500 },
  { month: "Jan", amount: 4200 },
  { month: "Feb", amount: 4800 },
  { month: "Mar", amount: 4500 },
];

export function FuelTrackerScreen() {
  const [entries, setEntries] = useState<FuelEntry[]>(initialEntries);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({
    liters: "",
    cost: "",
    odometer: "",
    station: "",
  });

  const handleAddEntry = (e: React.FormEvent) => {
    e.preventDefault();
    const entry: FuelEntry = {
      id: Date.now().toString(),
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      liters: parseFloat(newEntry.liters),
      cost: parseFloat(newEntry.cost),
      odometer: parseInt(newEntry.odometer),
      station: newEntry.station,
    };
    setEntries([entry, ...entries]);
    setNewEntry({ liters: "", cost: "", odometer: "", station: "" });
    setIsDialogOpen(false);
  };

  const totalSpent = entries.reduce((acc, entry) => acc + entry.cost, 0);
  const totalLiters = entries.reduce((acc, entry) => acc + entry.liters, 0);
  const avgCostPerLiter = totalSpent / totalLiters;
  const avgMileage =
    entries.length > 1
      ? (entries[0].odometer - entries[entries.length - 1].odometer) / totalLiters
      : 18.5;

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl">Fuel & Expenses</h1>
            <p className="text-muted-foreground mt-1">Track fuel and costs</p>
          </div>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 rounded-full w-12 h-12 p-0">
                <Plus className="w-6 h-6" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90%] rounded-2xl">
              <DialogHeader>
                <DialogTitle>Add Fuel Entry</DialogTitle>
              </DialogHeader>
              <form onSubmit={handleAddEntry} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <label className="text-sm">Liters</label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g., 45"
                    value={newEntry.liters}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, liters: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Cost (₹)</label>
                  <Input
                    type="number"
                    step="0.01"
                    placeholder="e.g., 4500"
                    value={newEntry.cost}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, cost: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Odometer Reading (km)</label>
                  <Input
                    type="number"
                    placeholder="e.g., 45230"
                    value={newEntry.odometer}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, odometer: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm">Fuel Station</label>
                  <Input
                    placeholder="e.g., Indian Oil"
                    value={newEntry.station}
                    onChange={(e) =>
                      setNewEntry({ ...newEntry, station: e.target.value })
                    }
                    className="h-12 bg-input-background border-0"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-12 bg-primary hover:bg-primary/90"
                >
                  Add Entry
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 bg-primary text-white border-0">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="w-5 h-5" />
              <span className="text-white/70 text-sm">Total Spent</span>
            </div>
            <p className="text-2xl">₹{totalSpent.toLocaleString()}</p>
            <p className="text-white/60 text-xs mt-1">
              ₹{avgCostPerLiter.toFixed(2)}/liter
            </p>
          </Card>

          <Card className="p-4 bg-secondary text-white border-0">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5" />
              <span className="text-white/70 text-sm">Avg Mileage</span>
            </div>
            <p className="text-2xl">{avgMileage.toFixed(1)}</p>
            <p className="text-white/60 text-xs mt-1">km/liter</p>
          </Card>

          <Card className="p-4 bg-muted border-0">
            <div className="flex items-center gap-2 mb-2">
              <Droplet className="w-5 h-5 text-primary" />
              <span className="text-muted-foreground text-sm">Total Fuel</span>
            </div>
            <p className="text-2xl text-foreground">{totalLiters}</p>
            <p className="text-muted-foreground text-xs mt-1">liters</p>
          </Card>

          <Card className="p-4 bg-muted border-0">
            <div className="flex items-center gap-2 mb-2">
              <Droplet className="w-5 h-5 text-secondary" />
              <span className="text-muted-foreground text-sm">Fill-ups</span>
            </div>
            <p className="text-2xl text-foreground">{entries.length}</p>
            <p className="text-muted-foreground text-xs mt-1">this month</p>
          </Card>
        </div>

        {/* Expense Chart */}
        <Card className="p-4">
          <h3 className="mb-4">Monthly Spending</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="amount" fill="#1e3a8a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Fuel Entries */}
        <div>
          <h3 className="mb-4">Recent Fill-ups</h3>
          <div className="space-y-3">
            {entries.map((entry) => (
              <Card key={entry.id} className="p-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Droplet className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <div>
                        <h4 className="mb-0.5">{entry.station}</h4>
                        <p className="text-xs text-muted-foreground">
                          {entry.date}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-primary">₹{entry.cost}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mt-2">
                      <span>{entry.liters}L</span>
                      <span>•</span>
                      <span>{entry.odometer.toLocaleString()} km</span>
                      <span>•</span>
                      <span>₹{(entry.cost / entry.liters).toFixed(2)}/L</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </MobileLayout>
  );
}