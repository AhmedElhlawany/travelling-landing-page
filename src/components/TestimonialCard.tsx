import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
}

export function TestimonialCard({
  name,
  location,
  avatar,
  rating,
  review
}: TestimonialCardProps) {
  return (
    <Card className="border-0 shadow-card hover:shadow-travel transition-all duration-300 animate-fade-up">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-4 w-4 ${
                i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-200"
              }`}
            />
          ))}
        </div>
        
        <p className="text-muted-foreground mb-4 italic">"{review}"</p>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-sm">{name}</p>
            <p className="text-xs text-muted-foreground">{location}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}