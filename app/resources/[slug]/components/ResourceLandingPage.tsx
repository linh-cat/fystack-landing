"use client";

import { useEffect, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
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
import { useHubSpotForm } from "@/hooks/useHubSpotForm";
import type { Resource } from "@/app/resources/config";

const formSchema = z.object({
  firstname: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email"),
  howDidYouHear: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const HOW_OPTIONS = [
  "Search engine (Google, Bing…)",
  "Blog post / article",
  "Social media",
  "Colleague / referral",
  "Newsletter",
  "Other",
];

function ResourceForm({ resource: _resource, slug }: { resource: Resource; slug: string }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { submit, isLoading, isError } = useHubSpotForm();

  const utmSource = searchParams.get("utm_source") ?? "";
  const utmMedium = searchParams.get("utm_medium") ?? "";
  const utmCampaign = searchParams.get("utm_campaign") ?? "";
  const hasUtm = Boolean(utmSource || utmMedium || utmCampaign);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: { firstname: "", email: "", howDidYouHear: "" },
  });

  async function onSubmit(values: FormValues) {
    await submit({
      firstname: values.firstname,
      email: values.email,
      resourceId: slug,
      utmSource,
      utmMedium,
      utmCampaign,
      howDidYouHear: values.howDidYouHear,
    }).then(() => {
      form.reset();
      router.push("/thank-you");
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="firstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-slate-700 font-medium">
                Full Name <span className="text-[#3b82f6]">*</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Jane Smith"
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

        {!hasUtm && (
          <FormField
            control={form.control}
            name="howDidYouHear"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-slate-700 font-medium">
                  How did you hear about us?
                </FormLabel>
                <FormControl>
                  <select
                    className="w-full h-10 rounded-md border border-slate-200 bg-background px-3 py-2 text-sm focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
                    {...field}
                  >
                    <option value="">Select an option…</option>
                    {HOW_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

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
                <span className="text-sm text-[#3b82f6] font-medium">
                  Free Resource
                </span>
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
                    <p className="text-sm font-semibold text-slate-800">
                      {resource.title}
                    </p>
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

      <CTAFooter />
    </div>
  );
}
