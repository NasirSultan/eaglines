import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+1 (234) 567-8900", "+1 (234) 567-8901"],
      delay: "0s",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@example.com", "support@example.com"],
      delay: "0.1s",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["123 Business Street", "City, State, Country"],
      delay: "0.2s",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Weekend: Closed"],
      delay: "0.3s",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {contactDetails.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-secondary to-secondary/50 border border-border rounded-lg p-4 hover:border-primary transition-all duration-300 animate-scale-in hover:shadow-glow cursor-pointer"
            style={{ animationDelay: item.delay }}
          >
            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
            
            <div className="relative z-10 space-y-3">
              {/* Icon */}
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-glow rounded-md flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {item.title}
              </h3>

              {/* Details */}
              <div className="space-y-0.5">
                {item.details.map((detail, idx) => (
                  <p
                    key={idx}
                    className="text-muted-foreground text-sm group-hover:text-foreground transition-colors duration-300"
                  >
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactInfo;
