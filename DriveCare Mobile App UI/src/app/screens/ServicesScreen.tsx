import { useState } from "react";
import { Wrench, Calendar as CalendarIcon, Clock, Check } from "lucide-react";
import { MobileLayout } from "../components/MobileLayout";
import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Calendar } from "../components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "../components/ui/popover";
import { format } from "date-fns";

interface Service {
  id: string;
  name: string;
  description: string;
  duration: string;
  price: string;
  icon: string;
}

const services: Service[] = [
  {
    id: "1",
    name: "Oil Change",
    description: "Complete engine oil and filter replacement",
    duration: "30-45 min",
    price: "₹2,500",
    icon: "oil",
  },
  {
    id: "2",
    name: "General Repair",
    description: "Diagnostic check and repairs",
    duration: "2-3 hours",
    price: "Starting ₹5,000",
    icon: "repair",
  },
  {
    id: "3",
    name: "Car Wash",
    description: "Interior and exterior cleaning",
    duration: "45-60 min",
    price: "₹500",
    icon: "wash",
  },
  {
    id: "4",
    name: "Tire Service",
    description: "Rotation, balancing, and alignment",
    duration: "1-2 hours",
    price: "₹1,500",
    icon: "tire",
  },
  {
    id: "5",
    name: "AC Service",
    description: "AC gas refill and cleaning",
    duration: "1-1.5 hours",
    price: "₹3,000",
    icon: "ac",
  },
  {
    id: "6",
    name: "Battery Check",
    description: "Battery health check and replacement",
    duration: "30 min",
    price: "₹3,500",
    icon: "battery",
  },
];

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
];

export function ServicesScreen() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isBooked, setIsBooked] = useState(false);

  const handleBookService = () => {
    if (selectedService && selectedDate && selectedTime) {
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setSelectedService(null);
        setSelectedDate(undefined);
        setSelectedTime(null);
      }, 3000);
    }
  };

  const isBookingComplete = selectedService && selectedDate && selectedTime;

  return (
    <MobileLayout>
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-3xl">Book Service</h1>
          <p className="text-muted-foreground mt-1">
            Choose a service and schedule
          </p>
        </div>

        {/* Service Selection */}
        <div>
          <h3 className="mb-4">Select Service Type</h3>
          <div className="grid grid-cols-2 gap-3">
            {services.map((service) => (
              <Card
                key={service.id}
                className={`p-4 cursor-pointer transition-all ${
                  selectedService === service.id
                    ? "border-2 border-primary bg-accent"
                    : "hover:shadow-md"
                }`}
                onClick={() => setSelectedService(service.id)}
              >
                <div className="flex flex-col h-full">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-3">
                    <Wrench className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-sm mb-1">{service.name}</h4>
                  <p className="text-xs text-muted-foreground mb-2 flex-1">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t border-border">
                    <span>{service.duration}</span>
                    <span className="text-primary">{service.price}</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Date Selection */}
        {selectedService && (
          <div>
            <h3 className="mb-4">Select Date</h3>
            <Card className="p-4">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-12 justify-start text-left font-normal"
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {selectedDate ? (
                      format(selectedDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    disabled={(date) => date < new Date()}
                  />
                </PopoverContent>
              </Popover>
            </Card>
          </div>
        )}

        {/* Time Selection */}
        {selectedService && selectedDate && (
          <div>
            <h3 className="mb-4">Select Time</h3>
            <div className="grid grid-cols-4 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`p-3 rounded-lg border-2 text-sm transition-all ${
                    selectedTime === time
                      ? "border-primary bg-accent text-primary"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Clock className="w-4 h-4 mx-auto mb-1" />
                  {time}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Booking Summary */}
        {isBookingComplete && (
          <Card className="p-4 bg-accent border-primary">
            <h4 className="mb-3">Booking Summary</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Service:</span>
                <span>
                  {services.find((s) => s.id === selectedService)?.name}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Date:</span>
                <span>{selectedDate && format(selectedDate, "PPP")}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>{selectedTime}</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-border">
                <span className="text-muted-foreground">Price:</span>
                <span className="text-primary">
                  {services.find((s) => s.id === selectedService)?.price}
                </span>
              </div>
            </div>
          </Card>
        )}

        {/* Confirm Button */}
        {isBookingComplete && (
          <Button
            onClick={handleBookService}
            disabled={isBooked}
            className="w-full h-12 bg-primary hover:bg-primary/90"
          >
            {isBooked ? (
              <>
                <Check className="w-5 h-5 mr-2" />
                Booking Confirmed!
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        )}
      </div>
    </MobileLayout>
  );
}
