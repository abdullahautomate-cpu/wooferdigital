"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  adBudget: string;
}

const budgetOptions = [
  { value: "5k-10k", label: "$5,000 – $10,000/mo" },
  { value: "10k-25k", label: "$10,000 – $25,000/mo" },
  { value: "25k-50k", label: "$25,000 – $50,000/mo" },
  { value: "50k-100k", label: "$50,000 – $100,000/mo" },
  { value: "100k+", label: "$100,000+/mo" },
];

interface LeadCaptureFormProps {
  dark?: boolean;
  title?: string;
  subtitle?: string;
}

export default function LeadCaptureForm({
  dark = false,
  title = "Get Your Free Media Audit",
  subtitle = "Our team will analyze your current ad spend and identify untapped growth opportunities.",
}: LeadCaptureFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, formType: "lead_capture" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  const inputClass = dark ? "bg-white/10 border-white/20 text-white placeholder-white/50 focus:border-white" : "";

  if (submitted) {
    return (
      <div className={`rounded-2xl p-8 text-center ${dark ? "glass" : "bg-light-gray border border-gray-100"}`}>
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-navy"}`}>
          We&apos;ll Be In Touch!
        </h3>
        <p className={dark ? "text-white/70" : "text-gray-600"}>
          Thank you for reaching out. A Woofer Digital strategist will contact you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl p-6 md:p-8 ${dark ? "glass" : "bg-white shadow-card border border-gray-100"}`}>
      <h3 className={`text-xl font-bold mb-1 ${dark ? "text-white" : "text-navy"}`}>{title}</h3>
      <p className={`text-sm mb-6 ${dark ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          id="name"
          placeholder="Full Name *"
          className={inputClass}
          error={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          id="email"
          type="email"
          placeholder="Work Email *"
          className={inputClass}
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        <Input
          id="phone"
          type="tel"
          placeholder="Phone Number *"
          className={inputClass}
          error={errors.phone?.message}
          {...register("phone", { required: "Phone is required" })}
        />
        <Select
          id="adBudget"
          options={budgetOptions}
          placeholder="Monthly Ad Budget *"
          className={inputClass}
          error={errors.adBudget?.message}
          {...register("adBudget", { required: "Budget selection required" })}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-2"
          loading={isSubmitting}
        >
          Get My Free Audit →
        </Button>

        <p className={`text-xs text-center ${dark ? "text-white/50" : "text-gray-400"}`}>
          No obligation. 100% confidential. Results in 24 hours.
        </p>
      </form>
    </div>
  );
}
