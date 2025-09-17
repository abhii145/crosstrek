import React, { useState } from "react"

const EnquireForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) {
      errs.email = "Email is required"
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      errs.email = "Invalid email"
    }
    if (!form.mobile.trim()) {
      errs.mobile = "Mobile number is required"
    } else if (!/^\d{10}$/.test(form.mobile)) {
      errs.mobile = "Enter 10 digit mobile number"
    }
    return errs
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitting(true)
      try {
        const res = await fetch("https://formspree.io/f/mpwjgjjl", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            mobile: form.mobile,
            message: form.message,
          }),
        })
        if (res.ok) {
          console.log(form)
          if (onClose) onClose()
        } else {
          setErrors({ submit: "Submission failed. Please try again." })
        }
      } catch {
        setErrors({ submit: "Submission failed. Please try again." })
      } finally {
        setSubmitting(false)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1">{errors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Mobile No</label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        {errors.mobile && (
          <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          rows={3}
        />
        {errors.message && (
          <p className="text-red-500 text-xs mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        disabled={submitting}
      >
        {submitting ? "Submitting..." : "Submit"}
      </button>
      {errors.submit && (
        <p className="text-red-500 text-xs mt-2 text-center">{errors.submit}</p>
      )}
    </form>
  )
}

export default EnquireForm
