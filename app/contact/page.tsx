"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, ArrowRight, Calendar, Mail, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { useScrollReveal } from "@/app/new-homepage/hooks/useScrollReveal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useSubmitContact } from "@/hooks/useSubmitContact";
import { isBusinessEmail, isValidWebsite } from "@/lib/utils";
import { CALENDLY_URL, EXPECTED_VOLUMES, NEXT_STEPS, ROLES, SOLUTIONS, TRUST_BULLETS } from "@/configs/constant";

const formSchema = z
  .object({
    email: z.string().email("Please enter a valid email"),
    website: z.string().optional(),
    role: z.string().min(1, "Please select your role"),
    solutionsInterest: z.string().min(1, "Please tell us what you're building"),
    expectedVolume: z.string().optional(),
    message: z.string().optional(),
  })
  .superRefine((values, ctx) => {
    // A business email is enough on its own. Otherwise we require a company
    // website so we can still tie the lead to an organization.
    if (z.string().email().safeParse(values.email).success && !isBusinessEmail(values.email)) {
      const website = values.website?.trim();
      if (!website) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["website"],
          message: "Please use a business email, or enter your company website",
        });
      } else if (!isValidWebsite(website)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["website"],
          message: "Please enter a valid website (e.g. company.com)",
        });
      }
    }
  });

type FormValues = z.infer<typeof formSchema>;

function StepConfirmation({ email, onDone }: { email: string; onDone: () => void }) {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl lg:text-3xl font-bold text-slate-800 mb-3 leading-tight">
          Thank you! We&apos;ll respond within one business day
        </h2>
        <p className="text-slate-600 leading-relaxed">
          We&apos;ve received your message at <span className="font-medium text-slate-800">{email}</span>. Here&apos;s what happens next — and if you&apos;d like to talk sooner, you can book a call with us below.
        </p>
      </div>

      {/* 3-step process */}
      <div className="space-y-3">
        {NEXT_STEPS.map((step, i) => (
          <div key={step.label} className="flex items-start gap-4">
            <div className="w-7 h-7 rounded-full bg-[#3b82f6] flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-white">{i + 1}</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">{step.label}</p>
              <p className="text-sm text-slate-500 leading-relaxed">{step.description}</p>
            </div>
            {i < NEXT_STEPS.length - 1 && (
              <ArrowRight className="w-4 h-4 text-slate-300 flex-shrink-0 mt-1 ml-auto hidden sm:block" />
            )}
          </div>
        ))}
      </div>

      <div className="border-t border-slate-100 pt-6 space-y-3">
        <p className="text-sm font-medium text-slate-700 mb-4">
          Want to move faster? Book a call now while we review.
        </p>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onDone}
          className="flex items-center justify-center gap-2 w-full h-11 bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white text-sm font-medium transition-colors"
        >
          <Calendar className="w-4 h-4" />
          Book a call now via Calendly
        </a>
        <button
          onClick={onDone}
          className="flex items-center justify-center gap-2 w-full h-11 border border-slate-200 hover:border-slate-300 text-slate-600 text-sm font-medium transition-colors bg-white"
        >
          <Mail className="w-4 h-4" />
          I&apos;ll wait for your email
        </button>
      </div>
    </div>
  );
}

function StepDone({ email }: { email: string }) {
  return (
    <div className="py-4 text-center space-y-5">
      <div className="flex justify-center">
        <div className="w-14 h-14 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
          <CheckCircle className="w-7 h-7 text-[#3b82f6]" />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-bold text-slate-800 mb-2">You&apos;re all set</h2>
        <p className="text-sm text-slate-600 leading-relaxed max-w-xs mx-auto">
          We&apos;ll reach you at{" "}
          <span className="font-medium text-slate-800">{email}</span>{" "}
          within one business day.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm text-[#3b82f6] hover:underline font-medium"
      >
        Back to fystack.io
        <ArrowRight className="w-3.5 h-3.5" />
      </Link>
    </div>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" className={className} aria-hidden="true">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212-.07-.062-.174-.041-.249-.024-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const supportLinks = [
  {
    icon: <TelegramIcon className="w-5 h-5" />,
    title: "Developer Community",
    description: "Chat with builders on Telegram",
    href: "https://t.me/+9AtC0z8sS79iZjFl",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email Us",
    description: "ops@fystack.io",
    href: "mailto:ops@fystack.io",
  },
];

export default function ContactPage() {
  const heroRef = useScrollReveal(0.1);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const { submit, isLoading, isError } = useSubmitContact();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      website: "",
      role: "",
      solutionsInterest: "",
      expectedVolume: "",
      message: "",
    },
  });

  const emailValue = form.watch("email");
  const needsWebsite =
    z.string().email().safeParse(emailValue).success && !isBusinessEmail(emailValue);

  async function onSubmit(values: FormValues) {
    await submit({
      email: values.email,
      website: needsWebsite ? values.website?.trim() || undefined : undefined,
      role: values.role,
      solutionsInterest: values.solutionsInterest,
      expectedVolume: values.expectedVolume || undefined,
      message: values.message || undefined,
    });
    setSubmittedEmail(values.email);
    setStep(2);
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* ── Contact form ── */}
      <section id="contact-form" className="relative py-16 lg:py-24 overflow-hidden bg-slate-50/50">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div
            ref={heroRef.ref}
            className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${
              heroRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"
            }`}
          >
            {/* Left — copy */}
            <div className="lg:pt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6">
                <span className="text-xs font-semibold text-[#3b82f6] uppercase tracking-wide">
                  Get in touch
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                Tell us about your project
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-10">
                We respond within one business day — a direct, technical conversation about what you&apos;re building and how Fystack fits your infrastructure.
              </p>

              <ul className="space-y-4">
                {TRUST_BULLETS.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#3b82f6]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4 text-[#3b82f6]" />
                    </div>
                    <span className="text-slate-700 leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — panel */}
            <div>
              <div className="relative border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/5 to-transparent p-8 lg:p-10">
                {/* Corner accents */}
                <div className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />

                {step === 1 && (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Business email <span className="text-[#3b82f6]">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="you@company.com"
                                className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {needsWebsite && (
                        <FormField
                          control={form.control}
                          name="website"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-slate-700 font-medium">
                                Company website <span className="text-[#3b82f6]">*</span>
                              </FormLabel>
                              <p className="text-xs text-slate-500 -mt-1">
                                No problem if you&apos;d rather use a personal email — just add your company website so we can connect you with the right team.
                              </p>
                              <FormControl>
                                <Input
                                  type="text"
                                  inputMode="url"
                                  placeholder="company.com"
                                  className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      )}

                      <FormField
                        control={form.control}
                        name="role"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Your role <span className="text-[#3b82f6]">*</span>
                            </FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                                {...field}
                              >
                                <option value="">Select your role…</option>
                                {ROLES.map((role) => (
                                  <option key={role} value={role}>{role}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="solutionsInterest"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Solutions you&apos;re interested in <span className="text-[#3b82f6]">*</span>
                            </FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                                {...field}
                              >
                                <option value="">What are you building?</option>
                                {SOLUTIONS.map((solution) => (
                                  <option key={solution} value={solution}>{solution}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="expectedVolume"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              How much monthly volume are you moving today?{" "}
                              <span className="text-slate-400 font-normal">(optional)</span>
                            </FormLabel>
                            <FormControl>
                              <select
                                className="w-full h-10 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                                {...field}
                              >
                                <option value="">Select monthly volume…</option>
                                {EXPECTED_VOLUMES.map((volume) => (
                                  <option key={volume} value={volume}>{volume}</option>
                                ))}
                              </select>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-slate-700 font-medium">
                              Anything else?{" "}
                              <span className="text-slate-400 font-normal">(optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Share any other context that would help us prepare…"
                                className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20 resize-none"
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {isError && (
                        <p className="text-sm text-destructive">
                          Something went wrong. Please try again.
                        </p>
                      )}

                      <Button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white h-11 font-medium gap-2"
                      >
                        {isLoading ? "Submitting…" : "Submit"}
                      </Button>

                      <p className="text-xs text-slate-400 text-center leading-relaxed">
                        No spam. Your information is never shared with third parties.
                      </p>
                    </form>
                  </Form>
                )}

                {step === 2 && (
                  <StepConfirmation email={submittedEmail} onDone={() => setStep(3)} />
                )}

                {step === 3 && (
                  <StepDone email={submittedEmail} />
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other ways to reach us ── */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          {/* Divider */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs font-semibold tracking-widest text-slate-400 uppercase">Or reach us another way</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Faster alternative — Telegram */}
          <a
            href="https://t.me/TheTedNguyen"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative border border-[#3b82f6]/30 bg-gradient-to-br from-[#3b82f6]/5 to-transparent hover:border-[#3b82f6]/50 p-8 transition-all hover:shadow-lg block mb-6"
          >
            <div className="flex flex-col sm:flex-row items-start gap-5">
              <div className="w-12 h-12 rounded-lg bg-[#3b82f6] text-white flex items-center justify-center flex-shrink-0">
                <TelegramIcon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-800 mb-2">Need a faster reply? Message us on Telegram</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Prefer to skip the form? Reach our team directly. Share your role, the product you&apos;re building, and what you&apos;d like our help with.
                </p>
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-[#3b82f6] group-hover:gap-2.5 transition-all">
                  Message on Telegram
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </a>

          {/* Support links */}
          <div className="grid sm:grid-cols-2 gap-4">
            {supportLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="group flex items-center gap-4 border border-slate-200 p-4 hover:border-[#3b82f6]/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-md bg-slate-50 flex items-center justify-center text-slate-600 group-hover:bg-[#3b82f6]/10 group-hover:text-[#3b82f6] transition-colors flex-shrink-0">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <div className="text-sm font-medium text-slate-800">{link.title}</div>
                  <div className="text-xs text-slate-500">{link.description}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-[#3b82f6] transition-colors" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
