import { useState } from "react";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Email sent successfully!");
        setFormData({ name: "", email: "", phone: "", title: "", description: "" });
      } else {
        setMessage("Failed to send email. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setMessage("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navigation />
      <div className="flex items-center justify-center min-h-screen m-4">
        <div className="w-full max-w-md p-6 rounded-3xl shadow-lg bg-gradient-to-b from-red-600 via-orange-500 to-black text-white">
          <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
          {message && (
            <p className={`mb-4 text-center ${message.includes("success") ? "text-green-300" : "text-red-300"}`}>
              {message}
            </p>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            {["name", "email", "phone", "title"].map((field) => (
              <input
                key={field}
                type={field === "email" ? "email" : "text"}
                name={field}
                placeholder={`Your ${field.charAt(0).toUpperCase() + field.slice(1)}`}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full border border-white/30 px-3 py-2 rounded-full bg-transparent text-white placeholder-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              />
            ))}
            <textarea
              name="description"
              placeholder="Description"
              value={formData.description}
              onChange={handleChange}
              required
              className="w-full border border-white/30 px-3 py-2 rounded-2xl bg-transparent text-white placeholder-white focus:border-red-500 focus:ring-2 focus:ring-red-500 focus:outline-none transition h-32"
            />
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-red-600 via-orange-500 to-black text-white py-2 rounded-full hover:from-red-700 hover:via-orange-600 hover:to-gray-900 transition"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
