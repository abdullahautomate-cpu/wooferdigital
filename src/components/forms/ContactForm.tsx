"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Select from "@/components/ui/Select";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
}

const serviceOptions = [
  { value: "media-buying", label: "Media Buying" },
  { value: "google-ads", label: "Google Ads Management" },
  { value: "facebook-instagram", label: "Facebook & Instagram Ads" },
  { value: "tiktok", label: "TikTok Advertising" },
  { value: "programmatic", label: "Programmatic Advertising" },
  { value: "ctv", label: "Connected TV (CTV)" },
  { value: "lead-generation", label: "Lead Generation" },
  { value: "ecommerce", label: "Ecommerce Advertising" },
  { value: "other", label: "Other / Not Sure Yet" },
];

const budgetOptions = [
  { value: "5k-10k", label: "$5,000 – $10,000/mo" },
  { value: "10k-25k", label: "$10,000 – $25,000/mo" },
  { value: "25k-50k", label: "$25,000 – $50,000/mo" },
  { value: "50k-100k", label: "$50,000 – $100,000/mo" },
  { value: "100k+", label: "$100,000+/mo" },
];

export default function ContactForm() {
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
        body: JSON.stringify({ ...data, formType: "contact" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-navy mb-3">Message Received!</h3>
        <p className="text-gray-600 max-w-md mx-auto">
          Thank you for contacting Woofer Digital. One of our performance marketing strategists will reach out within 1 business day to schedule your free consultation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="name"
          label="Full Name *"
          placeholder="Jane Smith"
          error={errors.name?.message}
          {...register("name", { required: "Name is required" })}
        />
        <Input
          id="company"
          label="Company Name"
          placeholder="Acme Corp"
          {...register("company")}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          id="email"
          type="email"
          label="Work Email *"
          placeholder="jane@company.com"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
        />
        <Input
          id="phone"
          type="tel"
          label="Phone Number *"
          placeholder="+1 (555) 000-0000"
          error={errors.phone?.message}
          {...register("phone", { required: "Phone is required" })}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Select
          id="service"
          label="Service Interested In"
          options={serviceOptions}
          placeholder="Select a service..."
          {...register("service")}
        />
        <Select
          id="budget"
          label="Monthly Ad Budget *"
          options={budgetOptions}
          placeholder="Select budget range..."
          error={errors.budget?.message}
          {...register("budget", { required: "Budget is required" })}
        />
      </div>
      <Textarea
        id="message"
        label="Tell Us About Your Goals"
        placeholder="Describe your business goals, current challenges, and what you'd like to achieve with paid advertising..."
        {...register("message")}
      />
      <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
        Send Message & Request Free Consultation
      </Button>
      <p className="text-sm text-gray-400 text-center">
        🔒 Your information is secure and will never be shared. We typically respond within 24 business hours.
      </p>
    </form>
  );
}
