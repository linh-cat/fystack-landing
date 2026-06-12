"use client";

import { Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm, Controller } from "react-hook-form"; // Controller still used for guides + newsletter
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle, FileText, ArrowRight } from "lucide-react";
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
import { useCreateLead } from "@/hooks/useCreateLead";
import { ComplianceResourceLibrary } from "@/app/resources/components/ComplianceResourceLibrary";
import type { Resource } from "@/app/resources/config";

const GUIDES = [
  { value: "sea", label: "SEA", comingSoon: false },
  { value: "apac", label: "APAC", comingSoon: false },
  { value: "middle_east", label: "Middle East", comingSoon: true },
  { value: "latam", label: "LATAM", comingSoon: true },
  { value: "central_asia", label: "Central Asia", comingSoon: true },
];

const ROLES = [
  "Founder / CEO",
  "CTO / Engineering",
  "Compliance / Legal",
  "BD / Partnerships",
  "Others",
];

const formSchema = z.object({
  firstname: z.string().min(1, "First name is required"),
  lastname: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email"),
  guides: z.array(z.string()).min(1, "Please select at least one guide"),
  role: z.string().min(1, "Please select your role"),
  newsletterOptIn: z.boolean().default(true),
});

type FormValues = z.infer<typeof formSchema>;

function ResourceForm({ resource: _resource, slug }: { resource: Resource; slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { submit, isLoading, isError } = useCreateLead();

  const utmSource = searchParams.get("utm_source") ?? "";
  const utmMedium = searchParams.get("utm_medium") ?? "";
  const utmCampaign = searchParams.get("utm_campaign") ?? "";

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      guides: [],
      role: "",
      newsletterOptIn: true,
    },
  });

  async function onSubmit(values: FormValues) {
    await submit({
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      resourceId: slug,
      guides: values.guides,
      role: values.role,
      newsletterOptIn: values.newsletterOptIn,
      utmSource,
      utmMedium,
      utmCampaign,
    }).then(() => {
      form.reset();
      router.push("/thank-you");
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        {/* Name row */}
        <div className="grid grid-cols-2 gap-3">
          <FormField
            control={form.control}
            name="firstname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">
                  First Name <span className="text-[#3b82f6]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Jane"
                    className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastname"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">
                  Last Name <span className="text-[#3b82f6]">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Smith"
                    className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                Work Email <span className="text-[#3b82f6]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="jane@company.com"
                  className="border-slate-200 focus:border-[#3b82f6] focus:ring-[#3b82f6]/20"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Guide checkboxes */}
        <Controller
          control={form.control}
          name="guides"
          render={({ field, fieldState }) => (
            <div>
              <p className="text-sm font-medium text-slate-700 mb-2">
                Which guides do you want to download? <span className="text-[#3b82f6]">*</span>
              </p>
              <div className="space-y-2">
                {GUIDES.map((guide) => {
                  const checked = field.value.includes(guide.value);
                  return (
                    <label
                      key={guide.value}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <span
                        className={`w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
                          checked
                            ? "bg-[#3b82f6] border-[#3b82f6]"
                            : "border-slate-300 group-hover:border-[#3b82f6]"
                        }`}
                      >
                        {checked && (
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                            <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </span>
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={checked}
                        onChange={(e) => {
                          const next = e.target.checked
                            ? [...field.value, guide.value]
                            : field.value.filter((v) => v !== guide.value);
                          field.onChange(next);
                        }}
                      />
                      <span className="text-sm text-slate-700">{guide.label}</span>
                      {guide.comingSoon && (
                        <span className="text-xs text-slate-400 font-medium">(Coming Soon)</span>
                      )}
                    </label>
                  );
                })}
              </div>
              {fieldState.error && (
                <p className="text-sm text-destructive mt-1">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />

        {/* Role select */}
        <FormField
          control={form.control}
          name="role"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                What best describes you? <span className="text-[#3b82f6]">*</span>
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

        {/* Newsletter opt-in */}
        <Controller
          control={form.control}
          name="newsletterOptIn"
          render={({ field }) => (
            <label className="flex items-start gap-3 cursor-pointer">
              <span
                className={`mt-0.5 w-4 h-4 flex-shrink-0 rounded border flex items-center justify-center transition-colors ${
                  field.value
                    ? "bg-[#3b82f6] border-[#3b82f6]"
                    : "border-slate-300 hover:border-[#3b82f6]"
                }`}
              >
                {field.value && (
                  <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 10 8">
                    <path d="M1 4l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={field.value}
                onChange={(e) => field.onChange(e.target.checked)}
              />
              <span className="text-sm text-slate-600 leading-relaxed">
                Keep me updated on new compliance guides and regulatory changes across emerging markets.
              </span>
            </label>
          )}
        />

        {isError && (
          <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
        )}

        <Button
          type="submit"
          disabled={isLoading}
          className="w-full bg-[#3b82f6] hover:bg-[#3b82f6]/90 text-white h-11 font-medium gap-2"
        >
          {isLoading ? "Sending…" : "Get Free Guide"}
          {!isLoading && <ArrowRight className="w-4 h-4" />}
        </Button>

        <p className="text-xs text-slate-400 text-center leading-relaxed">
          We respect your privacy. No spam — just relevant content from Fystack.
        </p>
      </form>
    </Form>
  );
}

type Props = { resource: Resource; slug: string };

export function ResourceLandingPage({ resource, slug }: Props) {
  const heroRef = useScrollReveal(0.1);
  const formRef = useScrollReveal(0.1);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left — resource preview */}
            <div
              ref={heroRef.ref}
              className={`${heroRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_forwards]" : "opacity-0"}`}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3b82f6]/10 border border-[#3b82f6]/20 mb-6">
                <FileText className="w-3.5 h-3.5 text-[#3b82f6]" />
                <span className="text-sm text-[#3b82f6] font-medium">Free Resource</span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-slate-800 mb-6 leading-tight">
                {resource.title}
              </h1>

              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {resource.description}
              </p>

              {resource.bullets && resource.bullets.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-slate-800 uppercase tracking-wide mb-4">
                    What you&apos;ll learn
                  </p>
                  <ul className="space-y-3">
                    {resource.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {resource.coverImage && (
                <div className="mt-10 border border-slate-200 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={resource.coverImage}
                    alt={`${resource.title} preview`}
                    className="w-full object-cover"
                  />
                </div>
              )}
            </div>

            {/* Right — lead capture form */}
            <div
              ref={formRef.ref}
              className={`${formRef.isVisible ? "animate-[scroll-fade-up_0.6s_ease-out_0.15s_forwards]" : "opacity-0"}`}
            >
              <div className="relative border border-[#3b82f6]/20 bg-gradient-to-br from-[#3b82f6]/5 to-transparent p-8 lg:p-10">
                {/* corner accents */}
                <div className="absolute -top-[3px] -left-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -top-[3px] -right-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -bottom-[3px] -left-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />
                <div className="absolute -bottom-[3px] -right-[3px] w-2.5 h-2.5 bg-[#3b82f6]" />

                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-[#3b82f6] rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                      Free resource
                    </p>
                    <p className="text-sm font-semibold text-slate-800">{resource.title}</p>
                  </div>
                </div>

                <div className="border-t border-slate-200 my-6" />

                <Suspense fallback={null}>
                  <ResourceForm resource={resource} slug={slug} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ComplianceResourceLibrary />
      <CTAFooter />
    </div>
  );
}
