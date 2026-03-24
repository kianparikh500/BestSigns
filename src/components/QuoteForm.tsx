"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, CheckCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const signTypes = [
  "Channel Letters",
  "Monument Sign",
  "Vehicle Wrap",
  "Banner / Display",
  "LED Sign",
  "Storefront Sign",
  "Custom / Other",
]

export function QuoteForm() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    signType: "",
    description: "",
  })
  const [errors, setErrors] = useState<Partial<typeof formData>>({})

  const validate = () => {
    const newErrors: Partial<typeof formData> = {}
    if (!formData.name.trim()) newErrors.name = "Name is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email"
    if (!formData.signType) newErrors.signType = "Please select a sign type"
    return newErrors
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }
    setLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setLoading(false)
    setSubmitted(true)
  }

  const handleChange = (field: keyof typeof formData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }))
  }

  if (submitted) {
    return (
      <motion.div
        className="bg-[#111] border border-[#3b82f6]/30 rounded-2xl p-10 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} className="text-[#3b82f6]" />
        </div>
        <h3 className="font-oswald text-2xl font-bold text-white mb-2 uppercase">
          Quote Request Received!
        </h3>
        <p className="text-gray-400 mb-6">
          Thank you, {formData.name}! We&apos;ll review your request and get back to you within 24
          hours with a detailed quote.
        </p>
        <button
          onClick={() => {
            setSubmitted(false)
            setFormData({ name: "", businessName: "", phone: "", email: "", signType: "", description: "" })
          }}
          className="text-[#3b82f6] hover:text-white text-sm font-semibold transition-colors"
        >
          Submit Another Request &rarr;
        </button>
      </motion.div>
    )
  }

  return (
    <div className="bg-[#111] border border-white/10 rounded-2xl p-8">
      <h2 className="font-oswald text-2xl font-bold text-white uppercase tracking-wide mb-2">
        Request a Free Quote
      </h2>
      <p className="text-gray-400 text-sm mb-6">
        Fill out the form below and we&apos;ll get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        {/* Row 1 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="name" className="text-gray-300 text-sm font-medium">
              Your Name <span className="text-[#3b82f6]">*</span>
            </Label>
            <Input
              id="name"
              placeholder="John Smith"
              value={formData.name}
              onChange={handleChange("name")}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
            />
            {errors.name && <span className="text-red-400 text-xs">{errors.name}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="businessName" className="text-gray-300 text-sm font-medium">
              Business Name
            </Label>
            <Input
              id="businessName"
              placeholder="Acme Corp"
              value={formData.businessName}
              onChange={handleChange("businessName")}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
            />
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="phone" className="text-gray-300 text-sm font-medium">
              Phone <span className="text-[#3b82f6]">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(702) 555-0000"
              value={formData.phone}
              onChange={handleChange("phone")}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
            />
            {errors.phone && <span className="text-red-400 text-xs">{errors.phone}</span>}
          </div>
          <div className="flex flex-col gap-1.5">
            <Label htmlFor="email" className="text-gray-300 text-sm font-medium">
              Email <span className="text-[#3b82f6]">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="john@company.com"
              value={formData.email}
              onChange={handleChange("email")}
              className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
            />
            {errors.email && <span className="text-red-400 text-xs">{errors.email}</span>}
          </div>
        </div>

        {/* Sign Type */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="signType" className="text-gray-300 text-sm font-medium">
            Sign Type <span className="text-[#3b82f6]">*</span>
          </Label>
          <select
            id="signType"
            value={formData.signType}
            onChange={handleChange("signType")}
            className="w-full bg-white/5 border border-white/10 text-white rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-colors"
          >
            <option value="" disabled className="bg-[#111] text-gray-400">Select a sign type...</option>
            {signTypes.map((type) => (
              <option key={type} value={type} className="bg-[#111] text-white">{type}</option>
            ))}
          </select>
          {errors.signType && <span className="text-red-400 text-xs">{errors.signType}</span>}
        </div>

        {/* Description */}
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="description" className="text-gray-300 text-sm font-medium">
            Project Description
          </Label>
          <Textarea
            id="description"
            placeholder="Tell us about your project — size, location, timeline, special requirements..."
            rows={5}
            value={formData.description}
            onChange={handleChange("description")}
            className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 resize-none"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full flex items-center justify-center gap-2 bg-[#3b82f6] hover:bg-[#3b82f6]/90 disabled:opacity-70 text-black font-bold py-4 rounded-lg uppercase tracking-wider text-sm shadow-lg shadow-[#3b82f6]/20 transition-all duration-200 hover:shadow-[#3b82f6]/40 hover:-translate-y-0.5 disabled:hover:translate-y-0"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              Sending...
            </>
          ) : (
            <>
              <Send size={16} />
              Send Quote Request
            </>
          )}
        </button>

        <p className="text-gray-500 text-xs text-center">
          By submitting, you agree to our privacy policy. We never share your information.
        </p>
      </form>
    </div>
  )
}
