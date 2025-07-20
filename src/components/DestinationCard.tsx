import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

interface DestinationCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: number;
  badge?: string;
}

export function DestinationCard({
  image,
  title,
  location,
  price,
  rating,
  reviews,
  badge
}: DestinationCardProps) {
  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-travel transition-all duration-300 hover:scale-[1.02] animate-fade-up">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {badge && (
          <Badge className="absolute top-3 left-3 gradient-sunset border-0">
            {badge}
          </Badge>
        )}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
          <span className="text-xs font-medium">{rating}</span>
        </div>
      </div>
      
      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm mb-2">{location}</p>
        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground">
            {reviews} reviews
          </span>
          <div className="text-right">
            <span className="text-lg font-bold text-primary">{price}</span>
            <span className="text-sm text-muted-foreground">/night</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}