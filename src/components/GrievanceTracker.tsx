"use client";

import React, { useState } from "react";
import { useLanguage } from "./LanguageContext";
import { GrievanceRecord, INITIAL_GRIEVANCES } from "@/lib/data";
import { Search, Send, CheckCircle2, Clock, AlertCircle, Tag, User, Phone, MapPin } from "lucide-react";

export const GrievanceTracker: React.FC = () => {
  const { t } = useLanguage();
  const [grievances, setGrievances] = useState<GrievanceRecord[]>(INITIAL_GRIEVANCES);
  const [activeTab, setActiveTab] = useState<"submit" | "track">("submit");
  
  // Submit Form State
  const [citizenName, setCitizenName] = useState("");
  const [phone, setPhone] = useState("");
  const [wardArea, setWardArea] = useState("");
  const [category, setCategory] = useState("Road Repair");
  const [subject, setSubject] = useState("");
  const [details, setDetails] = useState("");
  const [submittedTicket, setSubmittedTicket] = useState<GrievanceRecord | null>(null);

  // Track State
  const [searchTicket, setSearchTicket] = useState("");
  const [searchedRecord, setSearchedRecord] = useState<GrievanceRecord | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!citizenName || !phone || !subject || !details) return;

    const newTicket: GrievanceRecord = {
      id: `grv-${Date.now()}`,
      ticketNo: `JKY-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`,
      citizenName,
      phone,
      wardArea: wardArea || "Constituency Main Ward",
      category,
      subject,
      details,
      status: "New",
      submittedAt: new Date().toLocaleString(),
      updatedAt: new Date().toLocaleString(),
    };

    setGrievances([newTicket, ...grievances]);
    setSubmittedTicket(newTicket);
    // Reset Form
    setCitizenName("");
    setPhone("");
    setWardArea("");
    setSubject("");
    setDetails("");
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setHasSearched(true);
    const found = grievances.find(
      (g) => g.ticketNo.toLowerCase() === searchTicket.trim().toLowerCase()
    );
    setSearchedRecord(found || null);
  };

  const getStatusBadge = (status: GrievanceRecord["status"]) => {
    switch (status) {
      case "New":
        return <span className="bg-blue-950 text-blue-400 border border-blue-800 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> New</span>;
      case "Under Review":
        return <span className="bg-amber-950 text-amber-400 border border-amber-800 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> Under Review</span>;
      case "In Progress":
        return <span className="bg-purple-950 text-purple-400 border border-purple-800 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1"><Tag className="w-3.5 h-3.5" /> In Progress</span>;
      case "Resolved":
        return <span className="bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs px-3 py-1 rounded-full font-bold flex items-center gap-1"><CheckCircle2 className="w-3.5 h-3.5" /> Resolved</span>;
    }
  };

  return (
    <div className="glass-card rounded-3xl border border-slate-800 p-6 md:p-8 shadow-2xl">
      {/* Header Tabs */}
      <div className="flex border-b border-slate-800 mb-6">
        <button
          onClick={() => setActiveTab("submit")}
          className={`pb-3 px-5 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "submit"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Send className="w-4 h-4" />
          <span>{t({ en: "Submit Grievance / Request", hi: "समस्या / आवेदन दर्ज करें" })}</span>
        </button>
        <button
          onClick={() => setActiveTab("track")}
          className={`pb-3 px-5 font-bold text-sm border-b-2 transition-colors flex items-center gap-2 ${
            activeTab === "track"
              ? "border-emerald-500 text-emerald-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Search className="w-4 h-4" />
          <span>{t({ en: "Track Status", hi: "स्थिति जांचें (Ticket Status)" })}</span>
        </button>
      </div>

      {/* Submit Tab */}
      {activeTab === "submit" && (
        <div>
          {submittedTicket ? (
            <div className="bg-emerald-950/80 border border-emerald-800 rounded-2xl p-6 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-emerald-300">
                {t({ en: "Grievance Successfully Registered!", hi: "आपकी शिकायत सफलतापूर्वक दर्ज कर ली गई है!" })}
              </h3>
              <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 inline-block text-left shadow-sm">
                <p className="text-xs text-slate-400 uppercase font-bold">{t({ en: "Your Ticket Tracking ID:", hi: "आपका संदर्भ / टिकट संख्या:" })}</p>
                <p className="text-2xl font-black text-emerald-400 tracking-wider my-1 font-mono">{submittedTicket.ticketNo}</p>
                <p className="text-xs text-slate-300">
                  {t({ en: "Please save this ID to track resolution progress.", hi: "कृपया इस नंबर को सुरक्षित रखें, इसी से स्थिति की जांच कर सकेंगे।" })}
                </p>
              </div>
              <div>
                <button
                  onClick={() => setSubmittedTicket(null)}
                  className="bg-emerald-600 text-white px-6 py-2.5 rounded-xl text-sm font-bold shadow hover:bg-emerald-500 transition-colors btn-shine"
                >
                  {t({ en: "Submit Another Request", hi: "एक और आवेदन दर्ज करें" })}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t({ en: "Full Name *", hi: "नागरिक का पूरा नाम *" })}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      value={citizenName}
                      onChange={(e) => setCitizenName(e.target.value)}
                      placeholder={t({ en: "e.g. Ramesh Kumar", hi: "उदा. रमेश कुमार" })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t({ en: "Mobile / WhatsApp Number *", hi: "मोबाइल / व्हाट्सएप नंबर *" })}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 99353 XXXXX"
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t({ en: "Ward / Village / Area", hi: "वार्ड / गांव / क्षेत्र" })}
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      value={wardArea}
                      onChange={(e) => setWardArea(e.target.value)}
                      placeholder={t({ en: "e.g. Ward No. 5, East Tola", hi: "उदा. वार्ड संख्या 5" })}
                      className="w-full pl-9 pr-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1">
                    {t({ en: "Category", hi: "समस्या श्रेणी" })}
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  >
                    <option value="Road Repair">Road & Interlocking Repair</option>
                    <option value="Drinking Water">Drinking Water & Handpump</option>
                    <option value="Street Lighting">Solar Street Lighting</option>
                    <option value="Sanitation">Sanitation & Drainage</option>
                    <option value="Health Assistance">Health Assistance</option>
                    <option value="Other Seva">Other Public Seva</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t({ en: "Subject / Brief Headline *", hi: "विषय / मुख्य शीर्षक *" })}
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder={t({ en: "e.g. Repair request for street light pole #4", hi: "उदा. सोलर लाइट मरम्मत हेतु आवेदन" })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1">
                  {t({ en: "Detailed Explanation *", hi: "विस्तृत विवरण *" })}
                </label>
                <textarea
                  required
                  rows={3}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder={t({ en: "Describe the issue clearly...", hi: "समस्या का पूरा विवरण लिखें..." })}
                  className="w-full px-3 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm shadow-lg shadow-emerald-900/30 transition-all flex items-center justify-center gap-2 btn-shine"
              >
                <Send className="w-4 h-4" />
                <span>{t({ en: "Submit Grievance Application", hi: "शिकायत आवेदन प्रेषित करें" })}</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Track Tab */}
      {activeTab === "track" && (
        <div className="space-y-6">
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              required
              value={searchTicket}
              onChange={(e) => setSearchTicket(e.target.value)}
              placeholder={t({ en: "Enter Ticket ID (e.g. JKY-2025-0891)", hi: "टिकट संख्या दर्ज करें (उदा. JKY-2025-0891)" })}
              className="flex-1 px-4 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-sm text-white focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md btn-shine"
            >
              <Search className="w-4 h-4" />
              <span>{t({ en: "Track", hi: "खोजें" })}</span>
            </button>
          </form>

          {hasSearched && (
            <div>
              {searchedRecord ? (
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-4">
                  <div className="flex flex-wrap justify-between items-start gap-2 border-b border-slate-800 pb-3">
                    <div>
                      <span className="text-xs text-slate-400 font-bold uppercase">{t({ en: "Ticket ID:", hi: "टिकट ID:" })}</span>
                      <h4 className="text-xl font-black text-emerald-400 font-mono">{searchedRecord.ticketNo}</h4>
                    </div>
                    <div>{getStatusBadge(searchedRecord.status)}</div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div>
                      <span className="text-slate-400 block font-semibold">{t({ en: "Applicant Name:", hi: "आवेदक का नाम:" })}</span>
                      <span className="font-bold text-white">{searchedRecord.citizenName}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">{t({ en: "Ward / Area:", hi: "क्षेत्र:" })}</span>
                      <span className="font-bold text-white">{searchedRecord.wardArea}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">{t({ en: "Category:", hi: "श्रेणी:" })}</span>
                      <span className="font-bold text-white">{searchedRecord.category}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block font-semibold">{t({ en: "Submitted On:", hi: "दिनांक:" })}</span>
                      <span className="font-bold text-white">{searchedRecord.submittedAt}</span>
                    </div>
                  </div>

                  <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 text-xs">
                    <span className="font-bold text-white block mb-1">{searchedRecord.subject}</span>
                    <p className="text-slate-300">{searchedRecord.details}</p>
                  </div>

                  {/* Workflow Stepper */}
                  <div className="pt-2">
                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">Workflow Status Progress</span>
                    <div className="grid grid-cols-4 gap-1.5 text-center text-[10px] font-bold">
                      <div className={`p-2 rounded-lg ${["New", "Under Review", "In Progress", "Resolved"].includes(searchedRecord.status) ? "bg-blue-600 text-white" : "bg-slate-800 text-slate-500"}`}>
                        1. New
                      </div>
                      <div className={`p-2 rounded-lg ${["Under Review", "In Progress", "Resolved"].includes(searchedRecord.status) ? "bg-amber-600 text-white" : "bg-slate-800 text-slate-500"}`}>
                        2. Under Review
                      </div>
                      <div className={`p-2 rounded-lg ${["In Progress", "Resolved"].includes(searchedRecord.status) ? "bg-purple-600 text-white" : "bg-slate-800 text-slate-500"}`}>
                        3. In Progress
                      </div>
                      <div className={`p-2 rounded-lg ${searchedRecord.status === "Resolved" ? "bg-emerald-600 text-white" : "bg-slate-800 text-slate-500"}`}>
                        4. Resolved
                      </div>
                    </div>
                  </div>

                </div>
              ) : (
                <div className="bg-red-950/80 border border-red-800 text-red-300 p-4 rounded-xl text-center text-sm font-medium">
                  {t({ en: "No record found matching ticket ID. Please check the ticket number.", hi: "इस टिकट संख्या का कोई रिकॉर्ड नहीं मिला। कृपया नंबर की जांच करें।" })}
                </div>
              )}
            </div>
          )}

          <div className="border-t border-slate-800 pt-4">
            <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-2">
              {t({ en: "Sample Demo Ticket IDs to test:", hi: "नमूना टिकट ID जिनका परीक्षण कर सकते हैं:" })}
            </span>
            <div className="flex flex-wrap gap-2">
              {grievances.map((g) => (
                <button
                  key={g.id}
                  onClick={() => {
                    setSearchTicket(g.ticketNo);
                    setSearchedRecord(g);
                    setHasSearched(true);
                  }}
                  className="bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-slate-700 text-xs px-3 py-1 rounded-lg font-mono font-bold transition-colors"
                >
                  {g.ticketNo} ({g.status})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
