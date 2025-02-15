"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";

interface Alert {
  type: "success" | "error";
  message: string;
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState<Alert | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setAlert(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setAlert({ type: "success", message: "Thank you for your message!" });
        setName("");
        setEmail("");
        setMessage("");
      } else {
        const errorData = await response.json();
        setAlert({
          type: "error",
          message: errorData.message || "An error occurred. Please try again.",
        });
      }
    } catch (err) {
      setIsSubmitting(false);
      setAlert({
        type: "error",
        message: "A network error occurred. Please try again.",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-4 mt-4"
    >
      <h1 className="text-xl font-bold mb-4">Contact Us</h1>

      {alert && (
        <div
          className={`bg-${
            alert.type === "success" ? "green" : "red"
          }-500 text-lg font-bold text-white p-2 mb-4 rounded`}
        >
          {alert.message}
        </div>
      )}

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
          <FontAwesomeIcon icon={faUser} className="mr-2" /> Name
        </label>
        <input
          type="text"
          id="name"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setName(e.target.value)
          }
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
        </label>
        <input
          type="email"
          id="email"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={email}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setEmail(e.target.value)
          }
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
          <FontAwesomeIcon icon={faPaperPlane} className="mr-2" /> Message
        </label>
        <textarea
          id="message"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={message}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setMessage(e.target.value)
          }
          rows={4}
          required
        ></textarea>
      </div>
      <div style={{ display: "none" }}>
        {/* Hide the field for honeypot protection */}
        <label htmlFor="botCheck">Bot Check</label>
        <input type="text" id="botCheck" name="botCheck" />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
          isSubmitting ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
