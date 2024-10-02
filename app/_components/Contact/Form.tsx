"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import React from "react";

const validateEmail = (email: string) =>
  email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
const validateName = (name: string) => name.length > 0;
const validateMessage = (message: string) => message.length > 0;

const Form = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!validateName(name)) {
      setError("Name is required");
      setLoading(false);
      return;
    }

    if (!validateEmail(email)) {
      setError("Invalid email address");
      setLoading(false);
      return;
    }

    if (!validateMessage(message)) {
      setError("Message is required");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex flex-col gap-4 order-2 md:order-1"
    >
      <input
        type="text"
        value={name}
        autoComplete="name"
        placeholder="Your name"
        onChange={(e) => setName(e.target.value)}
        className={`border-2 font-semibold placeholder:font-[500] border-black rounded-custom bg-transparent px-3 h-[45px] transition-all duration-300 dark:border-white ${
          error?.includes("Name") ? "border-red-600" : ""
        }`}
      />
      <input
        type="email"
        value={email}
        autoComplete="email"
        placeholder="Your email"
        onChange={(e) => setEmail(e.target.value)}
        className={`border-2 font-semibold placeholder:font-[500] border-black rounded-custom bg-transparent px-3 h-[45px] transition-all duration-300 dark:border-white ${
          error?.includes("email") ? "border-red-600" : ""
        }`}
      />
      <textarea
        value={message}
        placeholder="How can I help you?"
        onChange={(e) => setMessage(e.target.value)}
        className={`border-2 font-semibold placeholder:font-[500] border-black rounded-custom bg-transparent p-3 min-h-[200px] transition-all duration-300 dark:border-white ${
          error?.includes("Message") ? "border-red-600" : ""
        }`}
      />
      <Button disabled={loading} className="py-4">
        Get In Touch
        {loading && <Loader2 className="animate-spin ml-2" size={16} />}
      </Button>
      <p
        className={`text-red-600 text-sm font-[500] ${
          error ? "animate-fade-in" : "animate-fade-out"
        }`}
      >
        {error}
      </p>
    </form>
  );
};

export default Form;
