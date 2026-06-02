"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/Select";

interface FormData {
  name: string;
  email: string;
  website: string;
  budget: string;
}

const budgetOptions = [
  { value: "5k-10k", label: "$5,000 – $10,000/mo" },
  { value: "10k-25k", label: "$10,000 – $25,000/mo" },
  { value: "25k-50k", label: "$25,000 – $50,000/mo" },
  { value: "50k+", label: "$50,000+/mo" },
];

interface AuditRequestFormProps {
  onClose?: () => void;
}

export default function AuditRequestForm({ onClose }: AuditRequestFormProps) {
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
        body: JSON.stringify({ ...data, formType: "audit_request" }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-navy mb-2">Audit Request Received!</h3>
        <p className="text-gray-600 mb-6">We&apos;ll send your free audit within 24 hours.</p>
        {onClose && (
          <button onClick={onClose} className="text-electric hover:underline text-sm">
            Close
          </button>
        )}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        id="audit-name"
        placeholder="Full Name *"
        error={errors.name?.message}
        {...register("name", { required: "Name is required" })}
      />
      <Input
        id="audit-email"
        type="email"
        placeholder="Work Email *"
        error={errors.email?.message}
        {...register("email", {
          required: "Email is required",
          pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
        })}
      />
      <Input
        id="audit-website"
        placeholder="Website URL"
        {...register("website")}
      />
      <Select
        id="audit-budget"
        options={budgetOptions}
        placeholder="Monthly Ad Budget *"
        error={errors.budget?.message}
        {...register("budget", { required: "Budget required" })}
      />
      <Button type="submit" variant="primary" size="lg" className="w-full" loading={isSubmitting}>
        Get My Free Audit
      </Button>
    </form>
  );
}
