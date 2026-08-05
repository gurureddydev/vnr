import React, { useState } from 'react';
import { LEADER_INFO } from '../data/profileData';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    mandal: 'Chittoor Town',
    subject: '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormData({
        name: '',
        phone: '',
        email: '',
        mandal: 'Chittoor Town',
        subject: '',
        message: '',
      });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/75 flex items-center justify-center p-4">
      <div className="bg-white rounded-xs max-w-lg w-full overflow-hidden border-2 border-[#0E4FAE] shadow-2xl relative animate-in fade-in zoom-in duration-200">

        {/* Modal Header */}
        <div className="bg-[#0E4FAE] text-white p-3 px-4 flex items-center justify-between">
          <div className="font-bold text-xs sm:text-sm uppercase tracking-wide">
            Contact Constituency Office – {LEADER_INFO.name}
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-red-200 font-bold text-base px-1"
          >
            ✕
          </button>
        </div>

        {/* Modal Body */}
        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <div className="w-12 h-12 bg-[#0B8F45] text-white rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
              ✓
            </div>
            <h3 className="text-base font-bold text-gray-900">
              Message Submitted Successfully!
            </h3>
            <p className="text-xs text-gray-600">
              Thank you for reaching out. The Chittoor Constituency office of M.C. Vijayananda Reddy will review your query and respond promptly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-4 space-y-3 text-xs">
            <p className="text-gray-600">
              Submit your grievance, suggestion, or appointment request directly to the Chittoor YSRCP coordinator office:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Mobile Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="10-digit mobile number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-bold text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="yourname@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-gray-700 mb-1">Mandal / Area</label>
                <select
                  value={formData.mandal}
                  onChange={(e) => setFormData({ ...formData, mandal: e.target.value })}
                  className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none bg-white"
                >
                  <option value="Chittoor Town">Chittoor Town</option>
                  <option value="Chittoor Rural">Chittoor Rural</option>
                  <option value="Gudipala">Gudipala</option>
                  <option value="Kothapallemitta">Kothapallemitta</option>
                  <option value="Other">Other Area</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Subject *</label>
              <input
                type="text"
                required
                placeholder="e.g. Welfare scheme inquiry / Constituency issue"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-gray-700 mb-1">Message Detail *</label>
              <textarea
                required
                rows={3}
                placeholder="Describe your message or representation..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded-xs focus:border-[#0E4FAE] outline-none"
              />
            </div>

            <div className="pt-2 flex justify-end gap-2 border-t border-gray-200">
              <button
                type="button"
                onClick={onClose}
                className="btn-secondary px-4 py-2 font-bold rounded-xs"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="btn-green px-5 py-2 font-bold rounded-xs shadow-sm"
              >
                Submit Message
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
