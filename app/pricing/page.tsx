"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, ArrowRight, MessageCircle, Clock, Shield, Zap, Info } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuyPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly");
  const [selectedSupport, setSelectedSupport] = useState<string | null>(null);

  const getPrice = (monthlyPrice: number, yearlyPrice: number) => {
    if (billingPeriod === "yearly") {
      return yearlyPrice;
    }
    return monthlyPrice;
  };

  const saasPlans = [
    {
      name: "Developer",
      monthlyPrice: 0,
      yearlyPrice: 0,
      description: "Perfect for individual developers starting with Fystack wallet infrastructure.",
      features: [
        { text: "Up to 2 MPC wallets", hasInfo: true },
        { text: "1,000 Hyper wallets", hasInfo: true },
        { text: "100 crypto payments", hasInfo: false },
        { text: "1 workspace", hasInfo: false },
        { text: "3 team members", hasInfo: false },
        { text: "Email support", hasInfo: true },
        { text: "Community access", hasInfo: false },
      ],
    },
    {
      name: "Starter",
      monthlyPrice: 74,
      yearlyPrice: 59,
      popular: true,
      description: "Ideal for startups looking to scale their crypto payment infrastructure.",
      features: [
        { text: "All Developer features", hasInfo: false },
        { text: "Up to 3 MPC wallets", hasInfo: true },
        { text: "3,000 Hyper wallets", hasInfo: true },
        { text: "500 crypto payments", hasInfo: false },
        { text: "2 workspaces", hasInfo: false },
        { text: "5 team members", hasInfo: false },
        { text: "3 blockchain networks", hasInfo: true },
        { text: "Advanced security features", hasInfo: true },
        { text: "Basic support", hasInfo: true },
      ],
    },
    {
      name: "Team",
      monthlyPrice: 118,
      yearlyPrice: 94,
      description: "Complete solution for growing teams wanting to maximize their wallet operations.",
      features: [
        { text: "All Starter features", hasInfo: false },
        { text: "Up to 20 MPC wallets", hasInfo: true },
        { text: "10,000 Hyper wallets", hasInfo: true },
        { text: "2,000 crypto payments", hasInfo: false },
        { text: "5 workspaces", hasInfo: false },
        { text: "Unlimited team members", hasInfo: false },
        { text: "5 blockchain networks", hasInfo: true },
        { text: "Priority Telegram support", hasInfo: true },
        { text: "Advanced analytics", hasInfo: true },
      ],
    },
  ];

  const supportPackages = [
    {
      id: "basic",
      name: "Basic Support",
      price: 500,
      sla: "< 2 hours",
      icon: MessageCircle,
      features: [
        "Telegram support channel",
        "Response time < 2 hours (business hours)",
        "Integration support for implementation questions",
        "Technical troubleshooting assistance",
      ],
    },
    {
      id: "professional",
      name: "Professional Support",
      price: 1000,
      sla: "< 1 hour",
      icon: Shield,
      popular: true,
      features: [
        "Priority Telegram support with scheduled check-ins",
        "Integration support with architecture guidance",
        "Best practice reviews for your deployment",
        "Security consultant sessions",
        "Response SLA under 1 hour",
      ],
    },
    {
      id: "enterprise",
      name: "Enterprise Support",
      price: "Flexible",
      sla: "< 30 mins",
      icon: Zap,
      features: [
        "24/7 dedicated support",
        "Immediate response time and escalation path",
        "Feature request prioritization",
        "Influence Fystack roadmap with roadmap workshops",
        "Direct access to the engineering leadership team",
        "Advanced integration support and delivery assistance",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 text-slate-900 overflow-hidden bg-[linear-gradient(135deg,#c2e3ff_0%,#e1fff5_55%,#ffffff_100%)]">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-sky-300/40 blur-[120px]" />
            <div className="absolute top-16 left-1/3 h-[560px] w-[560px] -translate-x-1/3 rounded-full bg-sky-200/35 blur-[170px]" />
            <div className="absolute top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-[160px]" />
            <div className="absolute bottom-[-6rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/40 blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_70%)]" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Choose Your Plan
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Cloud SaaS or Self-Hosted — Pick what works best for your team
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Options */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <Tabs defaultValue="saas" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
                <TabsTrigger value="saas">Cloud (SaaS)</TabsTrigger>
                <TabsTrigger value="self-hosted">Self-Hosted</TabsTrigger>
              </TabsList>

              {/* SaaS Tab */}
              <TabsContent value="saas">
                <div className="max-w-5xl mx-auto">
                  {/* Billing Toggle */}
                  <div className="flex items-center justify-center gap-2 mb-12">
                    <div className="flex items-center bg-gray-100 dark:bg-gray-800 rounded-full p-1">
                      <button
                        onClick={() => setBillingPeriod("monthly")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                          billingPeriod === "monthly"
                            ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Monthly
                      </button>
                      <button
                        onClick={() => setBillingPeriod("yearly")}
                        className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                          billingPeriod === "yearly"
                            ? "bg-white dark:bg-gray-700 text-slate-900 dark:text-white shadow-sm"
                            : "text-slate-500 dark:text-slate-400"
                        }`}
                      >
                        Yearly
                      </button>
                    </div>
                    <span className="text-[#155dfc] text-sm font-medium">
                      -20%
                    </span>
                  </div>

                  {/* Pricing Cards */}
                  <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {saasPlans.map((plan) => (
                      <Card
                        key={plan.name}
                        className={`relative flex flex-col bg-white dark:bg-gray-900 rounded-2xl shadow-sm border ${
                          plan.popular
                            ? "border-2 border-[#155dfc] shadow-lg"
                            : "border-gray-200 dark:border-gray-800"
                        }`}
                      >
                        {plan.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-[#155dfc] hover:bg-[#155dfc] text-white px-4 py-1 text-xs font-medium">
                              Most Popular
                            </Badge>
                          </div>
                        )}
                        <CardContent className="p-8 flex flex-col flex-1">
                          <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                              {plan.name}
                            </h3>
                            <div className="flex items-baseline gap-1 mb-3">
                              {plan.monthlyPrice === 0 ? (
                                <span className="text-4xl font-bold text-slate-900 dark:text-white">Free</span>
                              ) : (
                                <>
                                  <span className="text-4xl font-bold text-slate-900 dark:text-white">
                                    ${getPrice(plan.monthlyPrice, plan.yearlyPrice)}
                                  </span>
                                  <span className="text-slate-500 dark:text-slate-400">/month</span>
                                </>
                              )}
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                              {plan.description}
                            </p>
                          </div>

                          <Button
                            className="w-full mb-8 rounded-full py-6 text-sm font-medium bg-[#155dfc] hover:bg-[#1350d9] text-white"
                            asChild
                          >
                            <Link href="https://app.fystack.io" target="_blank" rel="noopener noreferrer">
                              Get started <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>

                          <ul className="space-y-4 flex-1">
                            {plan.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                                  {feature.text}
                                  {feature.hasInfo && (
                                    <Info className="w-3.5 h-3.5 text-slate-400" />
                                  )}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {/* Enterprise Plan */}
                  <Card className="bg-gradient-to-br from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-blue-950/20 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-8">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                        <div className="flex-1">
                          <Badge className="mb-4 bg-blue-600 hover:bg-blue-600 text-white text-xs">
                            Custom Solution
                          </Badge>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                            Enterprise
                          </h3>
                          <p className="text-slate-600 dark:text-slate-400 mb-4">
                            For large organizations with custom requirements
                          </p>
                          <div className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                            Custom pricing
                          </div>
                          <ul className="grid md:grid-cols-2 gap-3">
                            <li className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Unlimited everything</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Dedicated support</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">Custom integrations</span>
                            </li>
                            <li className="flex items-center gap-2">
                              <Check className="w-5 h-5 text-slate-400 flex-shrink-0" />
                              <span className="text-sm text-slate-700 dark:text-slate-300">SLA guarantees</span>
                            </li>
                          </ul>
                        </div>
                        <div className="md:w-auto">
                          <Button
                            size="lg"
                            className="bg-[#155dfc] hover:bg-[#1350d9] text-white rounded-full px-8"
                            asChild
                          >
                            <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                              Talk to Founders <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Self-Hosted Tab */}
              <TabsContent value="self-hosted">
                <div className="max-w-4xl mx-auto">
                  <Card className="mb-12 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                    <CardContent className="p-8">
                      <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                        What's Included
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 mb-8">
                        Everything you need to build secure wallet infrastructure
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-5">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">7-Day Deployment Support</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Guided onboarding to launch your infrastructure fast
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">MPC Technology</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Secure multi-party computation infrastructure
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Multi-Chain Support</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                10+ blockchain networks supported
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Self-Hosted</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Deploy on your own infrastructure
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-5">
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Updates & Security Patches</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Regular updates included for 1 year
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Documentation</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Comprehensive guides and API docs
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Commercial Use</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Use in unlimited commercial projects
                              </div>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <Check className="w-5 h-5 text-[#155dfc] mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-slate-900 dark:text-white">Docker & K8s Deployment</div>
                              <div className="text-sm text-slate-500 dark:text-slate-400">
                                Ready-to-use Docker and Kubernetes configs
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact CTA */}
                  <div className="max-w-md mx-auto text-center space-y-4">
                    <Button
                      size="lg"
                      className="w-full text-base bg-[#155dfc] hover:bg-[#1350d9] text-white rounded-full py-6"
                      asChild
                    >
                      <Link href="https://t.me/anhthind" target="_blank" rel="noopener noreferrer">
                        Talk to Founders <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <p className="text-sm text-slate-500">
                      Contact us to discuss pricing and get started
                    </p>
                  </div>

                  {/* Why Choose One-Time License */}
                  <div className="mt-12 grid md:grid-cols-2 gap-6">
                    <Card className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                      <CardContent className="p-8">
                        <Shield className="w-8 h-8 text-slate-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          Full Control
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Self-hosted on your infrastructure. Complete control over your data and keys.
                        </p>
                      </CardContent>
                    </Card>
                    <Card className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800">
                      <CardContent className="p-8">
                        <Zap className="w-8 h-8 text-slate-600 mb-4" />
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                          Production Ready
                        </h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                          Battle-tested code used by enterprises. Start building immediately.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
