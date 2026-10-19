import { FormEvent, useState } from "react";
import { motion } from "motion/react";
import { CheckCircle2, Clock, Globe2, Mail, MapPin, Send } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { CartSidebar } from "@/components/cart/CartSidebar";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

type SubmissionState = "idle" | "sending" | "sent" | "error";

const Contact = () => {
  const [status, setStatus] = useState<SubmissionState>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      subject: String(formData.get("subject") || "General enquiry").trim(),
      message: String(formData.get("message") || "").trim(),
      status: "new",
      source: "website-contact-form",
      received_at: new Date().toISOString(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus("error");
      return;
    }

    try {
      const response = await fetch("/api/data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          table: "contact_messages",
          operation: "insert",
          payload,
          returnsRows: false,
        }),
      });
      if (!response.ok) throw new Error("Contact submission failed");
      event.currentTarget.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      name: "Contact Living Culture Health South Africa",
      url: "https://www.livingculturehealth.company/contact",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Contact Living Culture Health South Africa | Support"
        description="Contact Living Culture Health South Africa for product questions, culture guidance, order support and partnership enquiries through our secure online form."
        canonical="https://www.livingculturehealth.company/contact"
        jsonLd={jsonLd}
      />
      <Header />
      <CartSidebar />

      <section className="relative overflow-hidden pb-16 pt-28 md:pt-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-emerald-500/10" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Mail className="h-4 w-4" />
              Independent South African support
            </span>
            <h1 className="font-display text-4xl font-bold tracking-tight md:text-6xl">
              Contact <span className="text-gradient-tropical">Living Culture Health</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Send us your product, culture, partnership or order enquiry. Your message is securely recorded in the Living Culture Health South Africa system.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-10">
        <div className="container mx-auto grid max-w-5xl gap-4 px-4 md:grid-cols-3">
          <Card className="glass-card">
            <CardContent className="flex gap-4 p-5">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold">Secure enquiry form</h2>
                <p className="mt-1 text-sm text-muted-foreground">Use the form below; contact details remain under the new site’s control.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="flex gap-4 p-5">
              <Globe2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold">Serving South Africa</h2>
                <p className="mt-1 text-sm text-muted-foreground">Culture, wellness and growing knowledge for homes, practitioners and farms.</p>
              </div>
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardContent className="flex gap-4 p-5">
              <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <div>
                <h2 className="font-semibold">Response updates</h2>
                <p className="mt-1 text-sm text-muted-foreground">New contact details and response times will be managed independently by the new site owner.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact-form" className="pb-20 pt-6">
        <div className="container mx-auto grid max-w-5xl gap-8 px-4 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-3xl bg-[#0B3D2E] p-8 text-white md:p-10">
            <MapPin className="h-8 w-8 text-[#D5A83E]" />
            <h2 className="mt-6 font-display text-3xl font-bold">Let’s grow something healthy.</h2>
            <p className="mt-4 leading-relaxed text-white/70">
              Living Culture Health South Africa is a fully independent platform. New payment, delivery, social and administration details will be added only when they are configured for this site.
            </p>
            <ul className="mt-8 space-y-4 text-sm text-white/80">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#4ADE80]" />Product and starter-culture questions</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#4ADE80]" />Order and delivery assistance</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#4ADE80]" />Wholesale, practitioner and partnership enquiries</li>
            </ul>
          </div>

          <Card className="glass-card border-primary/10">
            <CardContent className="p-6 md:p-8">
              <h2 className="font-display text-2xl font-bold">Send an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">Fields marked with an asterisk are required.</p>
              <form className="mt-7 space-y-5" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" name="name" autoComplete="name" required placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" autoComplete="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone (optional)</Label>
                    <Input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="Your preferred number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Topic *</Label>
                    <Input id="subject" name="subject" required placeholder="Product, order or partnership" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea id="message" name="message" required rows={6} placeholder="How can Living Culture Health help?" />
                </div>
                {status === "sent" && <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Thank you — your enquiry has been recorded successfully.</p>}
                {status === "error" && <p className="rounded-lg bg-destructive/10 p-3 text-sm text-destructive">Please complete the required fields and try again.</p>}
                <Button type="submit" className="w-full gap-2" disabled={status === "sending"}>
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending enquiry…" : "Send enquiry"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Contact;
