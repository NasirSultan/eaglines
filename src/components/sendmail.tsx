"use client";

import { useState } from "react";
import { Send, Loader2 } from "lucide-react";
import { Resend } from "resend";

const resend = new Resend("re_8CKfk229_DdVrgJtpPEXatVghuWSEYWEH");

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SendMail = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
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
      const emailContent = `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
          <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
            <div style="background: #bb4006ff; color: #ffffff; padding: 20px; text-align: center;">
              <img src="https://eaglines.co/loader.png" alt="Eaglines Logo" style="max-width: 150px; margin-bottom: 10px;">
              <h1>Eaglines</h1>
            </div>
            <div style="padding: 20px; color: #333333;">
              <h2>New Contact Message</h2>
              <p><strong>Name:</strong> ${formData.name}</p>
              <p><strong>Email:</strong> ${formData.email}</p>
              <p><strong>Subject:</strong> ${formData.subject}</p>
              <p><strong>Message:</strong></p>
              <p style="background:#f9f9f9; padding:10px; border-left:3px solid #004aad;">${formData.message}</p>
            </div>
            <div style="background: #f0f0f0; padding: 15px; text-align: center; font-size: 12px; color: #555555;">
              <p>© ${new Date().getFullYear()} Eaglines. All rights reserved.</p>
            </div>
          </div>
        </div>
      `;

      await resend.emails.send({
        from: "onboarding@resend.dev",
        to: "eaglines1@gmail.com",
        subject: formData.subject || "New Contact Message",
        html: emailContent,
      });

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
      {(["name", "email", "subject"] as (keyof FormData)[]).map((field) => {
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
          value={formData.message}
          onChange={(e) => handleChange("message", e.target.value)}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          placeholder=" "
          className="peer w-full bg-transparent border-b-2 border-muted py-3 px-0 text-foreground placeholder-transparent resize-none focus:outline-none focus:border-primary"
          required
        />
        <label
          className={`absolute left-0 text-muted-foreground text-sm transition-all duration-300 pointer-events-none ${
            focusedField === "message" || formData.message ? "-top-5 text-xs text-primary" : "top-3"
          }`}
        >
          Message
        </label>
        <div
          className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 ${
            focusedField === "message" ? "w-full" : "w-0"
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
