import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import { CTAFooter } from "@/app/new-homepage/components/CTAFooter";
import { RESOURCES } from "@/app/resources/config";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  if (!resource) return {};
  return {
    title: `Request received — ${resource.title} | Fystack`,
    robots: { index: false },
  };
}

export default async function ThankYouPage({ params }: Props) {
  const { slug } = await params;
  const resource = RESOURCES[slug];
  if (!resource) notFound();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="py-24 lg:py-36">
        <div className="max-w-[1440px] px-4 lg:px-16 2xl:px-0 mx-auto">
          <div className="max-w-xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-[#3b82f6]/10 rounded-full flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-[#3b82f6]" />
              </div>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              We&apos;ve received your request
            </h1>

            <p className="text-slate-600 text-lg leading-relaxed mb-10">
              Our team will send{" "}
              <span className="font-medium text-slate-800">{resource.title}</span>{" "}
              to your inbox within 24 hours.
            </p>

            <div className="flex items-start gap-3 border border-slate-200 bg-slate-50/60 rounded-lg p-5 mb-10 text-left">
              <Mail className="w-5 h-5 text-[#3b82f6] flex-shrink-0 mt-0.5" />
              <p className="text-sm text-slate-600 leading-relaxed">
                Keep an eye on your inbox — and check your spam folder just in
                case. If you don&apos;t hear from us within 24 hours, reach us
                at{" "}
                <a
                  href="mailto:ops@fystack.io"
                  className="text-[#3b82f6] hover:underline"
                >
                  ops@fystack.io
                </a>
                .
              </p>
            </div>

            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-[#3b82f6] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to blog
            </Link>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
}
