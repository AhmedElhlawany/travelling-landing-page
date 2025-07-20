import { SearchForm } from "@/components/SearchForm";
import { DestinationCard } from "@/components/DestinationCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Shield, Clock, Heart } from "lucide-react";
import heroBeach from "@/assets/hero-beach.jpg";

const Index = () => {
  const destinations = [
    {
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop",
      title: "Bali Paradise",
      location: "Indonesia",
      price: "$89",
      rating: 4.8,
      reviews: 1250,
      badge: "Popular"
    },
    {
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop",
      title: "Swiss Alps",
      location: "Switzerland",
      price: "$156",
      rating: 4.9,
      reviews: 892,
      badge: "Featured"
    },
    {
      image: "https://i.pinimg.com/1200x/91/af/11/91af1119c06d6f2346e179634bce6250.jpg",
      title: "Tokyo Nights",
      location: "Japan",
      price: "$127",
      rating: 4.7,
      reviews: 2103,
    },
    {
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600&fit=crop",
      title: "Forest Retreat",
      location: "Canada",
      price: "$73",
      rating: 4.6,
      reviews: 567,
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "New York, USA",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612ef4d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Amazing experience! The booking process was seamless and the destinations exceeded all expectations."
    },
    {
      name: "Marco Rodriguez",
      location: "Barcelona, Spain",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Best travel platform I've used. Great prices and incredible customer service throughout the journey."
    },
    {
      name: "Emma Chen",
      location: "Singapore",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      review: "Found my dream vacation here! The recommendations were spot-on and everything was perfectly organized."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBeach})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 border-white/30 text-white hover:bg-white/30">
            ✈️ Your Dream Vacation Awaits
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Discover Your Next
            <span className="block gradient-sunset bg-clip-text text-light">
              Adventure
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-up">
            Explore breathtaking destinations and create unforgettable memories with our curated travel experiences.
          </p>
          
          <div className="max-w-4xl mx-auto mb-8">
            <SearchForm />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>1M+ Happy Travelers</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span>4.9 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span>150+ Destinations</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-ocean border-0">Featured Destinations</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Popular Places to Visit
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our handpicked destinations that offer the perfect blend of adventure, culture, and relaxation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="hero" size="lg">
              View All Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make travel planning effortless with our comprehensive platform and exceptional service.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Booking</h3>
              <p className="text-muted-foreground">
                Your payments and personal information are protected with enterprise-grade security.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 gradient-sunset rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-muted-foreground">
                Our dedicated team is available around the clock to assist with your travel needs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 mx-auto mb-4 gradient-ocean rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-muted-foreground">
                We guarantee the best prices with our price match promise and exclusive deals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 gradient-sunset border-0">Testimonials</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Travelers Say
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Read authentic reviews from travelers who have experienced unforgettable journeys with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-ocean">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join millions of travelers who trust us to make their dream vacations a reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="text-lg px-8 py-6">
              Start Planning Now
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-gray-900 hover:bg-white hover:text-primary">
              Browse Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4  bg-clip-text text-light">
                TravelBook
              </h3>
              <p className="text-gray-400">
                Your trusted partner for unforgettable travel experiences around the world.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Destinations</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Asia</li>
                <li>Europe</li>
                <li>Americas</li>
                <li>Africa</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Booking Policy</li>
                <li>Safety</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Careers</li>
                <li>Press</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TravelBook. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
