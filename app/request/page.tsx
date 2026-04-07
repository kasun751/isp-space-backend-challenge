"use client";

import { useState } from "react";
import RequestForm from "@/components/RequestForm";
import Header from "@/app/request/_ui/Header";
import Footer from "@/app/request/_ui/Footer";

export default function RequestPage() {
    const [form, setForm] = useState<any>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        const res = await fetch("/api/requests", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            alert("Mission parameters logged. Engineering will review.");
        } else {
            alert("Uplink error. Please verify connection.");
        }
        setIsSubmitting(false);
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-6 font-sans">
            <div className="w-full max-w-xl bg-slate-900 border border-slate-800 p-8 rounded-sm shadow-2xl">
                <Header />
                <RequestForm form={form} setForm={setForm} isSubmitting={isSubmitting} handleSubmit={handleSubmit} />
                <Footer />
            </div>
        </div>
    );
}