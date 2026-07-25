"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, CalendarDays, Clock, User, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/lib/i18n/LanguageContext";

interface BookAppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookAppointmentModal({ isOpen, onClose }: BookAppointmentModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            className="relative bg-white rounded-lg shadow-lg w-full max-w-md p-6"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 rtl:left-4 rtl:right-auto text-gray-500 hover:text-gray-700"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold font-heading text-primary">{t.modal.title}</h2>
              <p className="text-muted-foreground mt-2">
                {t.modal.subtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="modal-name" className="flex items-center text-sm font-medium">
                  <User className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                  {t.contactSection.nameLabel}
                </label>
                <input
                  id="modal-name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="modal-phone" className="flex items-center text-sm font-medium">
                  <Phone className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                  {t.contactSection.phoneLabel}
                </label>
                <input
                  id="modal-phone"
                  type="tel"
                  placeholder="+973 1234 5678"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="modal-email" className="flex items-center text-sm font-medium">
                  <Mail className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                  {t.contactSection.emailLabel}
                </label>
                <input
                  id="modal-email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Date */}
              <div className="space-y-2">
                <label htmlFor="modal-date" className="flex items-center text-sm font-medium">
                  <CalendarDays className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                  {t.modal.dateLabel}
                </label>
                <input
                  id="modal-date"
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Time */}
              <div className="space-y-2">
                <label htmlFor="modal-time" className="flex items-center text-sm font-medium">
                  <Clock className="h-4 w-4 mr-2 rtl:ml-2 rtl:mr-0 text-primary" />
                  {t.modal.timeLabel}
                </label>
                <input
                  id="modal-time"
                  type="time"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                  required
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="modal-message" className="text-sm font-medium">
                  {t.modal.notesLabel}
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  placeholder="..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full p-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                {t.modal.submitButton}
              </Button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}