"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import AnimatedGridPattern from "../ui/animated-grid-pattern";
import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { AnimateOnScroll } from "@/components/shared/animate";
import { useTranslations } from "next-intl";
import { Badge } from "../ui/badge";
import { toast } from "sonner";
import ContactHeader from "../tools/ContactHeader";

export default function Contact() {
  const t = useTranslations("contact");
  const global_t = useTranslations();
  const [form, setForm] = useState({ email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      if (data.success) {
        setSent(true);
        setForm({ email: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong.");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimateOnScroll animation="fade-up">
      <div id="contact" className="py-20 px-6">
        <ContactHeader />

        <div className="relative overflow-hidden my-10 w-full bg-background text-foreground max-w-screen-lg mx-auto rounded-2xl py-10 md:py-16 px-6 md:px-14 border border-border shadow-lg">
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_right,white,rgba(255,255,255,0.6),transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />
          <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_top_left,white,rgba(255,255,255,0.6),transparent)]",
              "inset-x-0 inset-y-0 h-[200%] skew-y-12"
            )}
          />
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-3xl md:text-4xl font-semibold">
                {t("heading")}
              </h3>
              <p className="mt-2 text-base md:text-lg text-muted-foreground">
                {t("description")}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
              <Input
                type="email"
                required
                placeholder={t("email_placeholder")}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-muted text-foreground outline-none"
              />
              <Textarea
                required
                placeholder={t("message_placeholder")}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-md bg-muted text-foreground h-32 outline-none"
              />
              <Button
                size="lg"
                type="submit"
                className="w-full md:w-auto"
                disabled={loading}>
                {loading ? t("sending") : t("send_button")}
                <ArrowUpRight className="ml-2 w-5 h-5" />
              </Button>
              {sent && (
                <p className="text-green-600 dark:text-green-400 text-sm mt-2">
                  {t("success_message")}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
}
