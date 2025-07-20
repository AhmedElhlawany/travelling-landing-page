import { useState } from "react";
import { Search, MapPin, Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

export function SearchForm() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [guests, setGuests] = useState("2");

  return (
    <Card className="p-6 bg-white/95 backdrop-blur-sm shadow-travel border-0 animate-scale-in">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="date"
            placeholder="Check in"
            value={checkIn}
            onChange={(e) => setCheckIn(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        
        <div className="relative">
          <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            type="date"
            placeholder="Check out"
            value={checkOut}
            onChange={(e) => setCheckOut(e.target.value)}
            className="pl-10 h-12"
          />
        </div>
        
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Users className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              type="number"
              placeholder="Guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              min="1"
              className="pl-10 h-12"
            />
          </div>
          <Button variant="hero" size="lg" className="h-12 px-8">
            <Search className="h-4 w-4" />
            Search
          </Button>
        </div>
      </div>
    </Card>
  );
}