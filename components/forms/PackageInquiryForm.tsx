"use client";

import { useState } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

interface PackageInquiryFormProps {
  packageName: string;
  packageId: string;
}

export default function PackageInquiryForm({
  packageName,
  packageId,
}: PackageInquiryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    travelers: "",
    travelDate: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    }

    if (!formData.travelers.trim()) {
      newErrors.travelers = "Number of travelers is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // In production, this would send to an API endpoint with packageId
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        travelers: "",
        travelDate: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-gray-50 p-6 rounded-lg"
    >
      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Inquiring about:</p>
        <p className="font-semibold text-gray-900">{packageName}</p>
      </div>

      <Input
        label="Name"
        type="text"
        value={formData.name}
        onChange={(e) => handleChange("name", e.target.value)}
        error={errors.name}
        required
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange("email", e.target.value)}
        error={errors.email}
        required
      />

      <Input
        label="Phone"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleChange("phone", e.target.value)}
        error={errors.phone}
        required
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          label="Number of Travelers"
          type="number"
          min="1"
          value={formData.travelers}
          onChange={(e) => handleChange("travelers", e.target.value)}
          error={errors.travelers}
          required
        />

        <Input
          label="Preferred Travel Date"
          type="date"
          value={formData.travelDate}
          onChange={(e) => handleChange("travelDate", e.target.value)}
        />
      </div>

      <Textarea
        label="Additional Message (Optional)"
        rows={4}
        value={formData.message}
        onChange={(e) => handleChange("message", e.target.value)}
      />

      {submitStatus === "success" && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
          Thank you! Your inquiry has been submitted. We&apos;ll get back to you
          soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
          Something went wrong. Please try again later.
        </div>
      )}

      <Button type="submit" disabled={isSubmitting} className="w-full">
        {isSubmitting ? "Submitting..." : "Submit Inquiry"}
      </Button>
    </form>
  );
}
