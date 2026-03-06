"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  title: string;
  description: string;
}

const SendMail = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://eaglines-backend.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          title: formData.title,
          description: formData.description,
        }),
      });

      if (!response.ok) throw new Error("Network response was not ok");

      const data = await response.json();
      console.log("Email sent successfully:", data);

      setIsSubmitting(false);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);
      alert("Failed to send message. Try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8 glow-red">
            <Send className="w-10 h-10 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">MESSAGE SENT</h2>
          <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {(["name", "email", "phone", "title"] as (keyof FormData)[]).map((field) => {
        const hasValue = formData[field];
        const isActive = focusedField === field || hasValue;
        return (
          <div key={field} className="relative">
            <input
              type={field === "email" ? "email" : "text"}
              value={formData[field]}
              onChange={(e) => handleChange(field, e.target.value)}
              onFocus={() => setFocusedField(field)}
              onBlur={() => setFocusedField(null)}
              placeholder=" "
              className="peer w-full bg-transparent border-b-2 border-muted py-3 px-0 text-foreground placeholder-transparent focus:outline-none focus:border-primary"
              required
            />
            <label
              className={`absolute left-0 text-muted-foreground text-sm transition-all duration-300 pointer-events-none ${
                isActive ? "-top-5 text-xs text-primary" : "top-3"
              }`}
            >
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <div
              className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
                focusedField === field ? "w-full" : "w-0"
              }`}
            />
          </div>
        );
      })}

      <div className="relative">
        <textarea
          rows={4}
          value={formData.description}
          onChange={(e) => handleChange("description", e.target.value)}
          onFocus={() => setFocusedField("description")}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-muted py-3 px-0 text-foreground placeholder-transparent resize-none focus:outline-none focus:border-primary"
          required
        />
        <label
          className={`absolute left-0 text-muted-foreground text-sm transition-all duration-300 pointer-events-none ${
            focusedField === "description" || formData.description ? "-top-5 text-xs text-primary" : "top-3"
          }`}
        >
          Description
        </label>
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
            focusedField === "description" ? "w-full" : "w-0"
          }`}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group relative py-3 px-6 border-2 border-primary rounded-lg text-primary font-display text-lg tracking-widest transition-all duration-500 hover:text-primary-foreground hover:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <span className="flex items-center gap-2">
            <Loader2 className="w-5 h-5 animate-spin" />
            SENDING...
          </span>
        ) : (
          <span className="flex items-center gap-2">
            SEND MESSAGE
            <Send className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        )}
      </button>
    </form>
  );
};

export default SendMail;
