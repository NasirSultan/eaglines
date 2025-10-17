"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: "", // optional field (you can add if needed)
          title: formData.subject,
          description: formData.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "✅ Message Sent!",
          description: "We'll get back to you as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "❌ Failed to send email",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error(error);
      toast({
        title: "⚠️ Something went wrong!",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div className="relative group animate-fade-in">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary h-12 transition-all duration-300 group-hover:border-primary/50"
            placeholder="Your Name"
          />
        </div>

        {/* Email */}
        <div
          className="relative group animate-fade-in"
          style={{ animationDelay: "0.1s" }}
        >
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="bg-secondary border-border focus:border-primary focus:ring-primary h-12 transition-all duration-300 group-hover:border-primary/50"
            placeholder="Your Email"
          />
        </div>
      </div>

      {/* Subject */}
      <div
        className="relative group animate-fade-in"
        style={{ animationDelay: "0.2s" }}
      >
        <Input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="bg-secondary border-border focus:border-primary focus:ring-primary h-12 transition-all duration-300 group-hover:border-primary/50"
          placeholder="Subject"
        />
      </div>

      {/* Message */}
      <div
        className="relative group animate-fade-in"
        style={{ animationDelay: "0.3s" }}
      >
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="bg-secondary border-border focus:border-primary focus:ring-primary resize-none transition-all duration-300 group-hover:border-primary/50"
          placeholder="Your Message"
        />
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={loading}
        className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow hover:shadow-[0_0_50px_hsl(0_84%_60%/0.5)] transition-all duration-300 animate-fade-in group"
        style={{ animationDelay: "0.4s" }}
      >
        <span className="flex items-center justify-center space-x-2">
          <span>{loading ? "Sending..." : "Send Message"}</span>
          <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </Button>
    </form>
  );
};

export default ContactForm;
