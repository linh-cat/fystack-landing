"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, MessageCircle, Clock, Shield, Zap } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BuyPage() {
  const [selectedSupport, setSelectedSupport] = useState<string | null>(null);

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
      price: 2000,
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

  const calculateTotal = () => {
    const basePrice = 10000;
    const supportPrice = selectedSupport
      ? supportPackages.find(p => p.id === selectedSupport)?.price || 0
      : 0;
    return basePrice + supportPrice;
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 md:py-28 text-slate-900 overflow-hidden bg-[linear-gradient(135deg,#c2e3ff_0%,#e1fff5_55%,#ffffff_100%)]">
          <div className="absolute inset-0 -z-10 pointer-events-none">
            <div className="absolute -top-32 -left-16 h-72 w-72 rounded-full bg-sky-300/40 blur-[120px]" />
            <div className="absolute top-16 left-1/3 h-[560px] w-[560px] -translate-x-1/3 rounded-full bg-sky-200/35 blur-[170px]" />
            <div className="absolute top-24 right-1/4 h-[420px] w-[420px] rounded-full bg-emerald-200/35 blur-[160px]" />
            <div className="absolute bottom-[-6rem] left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-emerald-300/40 blur-[140px]" />
            <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(255,255,255,0.65)_0%,rgba(255,255,255,0.2)_70%)]" />
          </div>
          <div className="container mx-auto px-4 max-w-7xl relative">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-sky-100 text-sky-700 border-sky-200">
                2025 Limited Offer
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Buy One-Time License
              </h1>
              <p className="text-xl text-slate-600 mb-6">
                Get lifetime access to Fystack's MPC wallet infrastructure
              </p>
              <div className="inline-flex items-center gap-4">
                <div className="text-left">
                  <div className="text-sm text-slate-400 line-through">$14,000</div>
                  <div className="text-5xl font-bold">$10,000</div>
                </div>
                <div className="text-left">
                  <Badge className="bg-green-500 text-white border-0">
                    Save $4,000
                  </Badge>
                  <div className="text-sm text-slate-500 mt-1">Limited time offer</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* License Details */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-12">
                <CardHeader>
                  <CardTitle className="text-2xl">What's Included</CardTitle>
                  <CardDescription>
                    Everything you need to build secure wallet infrastructure
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">7-Day Deployment Support</div>
                          <div className="text-sm text-muted-foreground">
                            Guided onboarding to launch your infrastructure fast
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Lifetime License</div>
                          <div className="text-sm text-muted-foreground">
                            No recurring fees, pay once and use forever
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">MPC Technology</div>
                          <div className="text-sm text-muted-foreground">
                            Secure multi-party computation infrastructure
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Multi-Chain Support</div>
                          <div className="text-sm text-muted-foreground">
                            10+ blockchain networks supported
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Self-Hosted</div>
                          <div className="text-sm text-muted-foreground">
                            Deploy on your own infrastructure
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Updates & Security Patches</div>
                          <div className="text-sm text-muted-foreground">
                            Regular updates included for 1 year
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Documentation</div>
                          <div className="text-sm text-muted-foreground">
                            Comprehensive guides and API docs
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-none" />
                        <div>
                          <div className="font-medium">Commercial Use</div>
                          <div className="text-sm text-muted-foreground">
                            Use in unlimited commercial projects
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Packages */}
              <div className="mb-12">
                <div className="text-center mb-8">
                  <Badge className="mb-3 bg-sky-100 text-sky-700 border-sky-200">
                    Optional Add-on
                  </Badge>
                  <h2 className="text-3xl font-bold mb-2">Add Technical Support</h2>
                  <p className="text-muted-foreground">
                    Choose a support package only if you need ongoing help—the license works without it.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {supportPackages.map((pkg) => {
                    const Icon = pkg.icon;
                    const isSelected = selectedSupport === pkg.id;

                    return (
                      <Card
                        key={pkg.id}
                        className={`relative cursor-pointer transition-all ${
                          isSelected
                            ? 'border-blue-500 shadow-lg'
                            : 'hover:border-gray-400'
                        }`}
                        onClick={() => setSelectedSupport(isSelected ? null : pkg.id)}
                      >
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <Badge className="bg-blue-600 text-white">Most Popular</Badge>
                          </div>
                        )}
                        <CardHeader>
                          <div className="flex items-center gap-3 mb-2">
                            <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                              <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                            </div>
                            {isSelected && (
                              <CheckCircle className="w-5 h-5 text-blue-600 ml-auto" />
                            )}
                          </div>
                          <CardTitle className="text-xl">{pkg.name}</CardTitle>
                          <div className="flex items-baseline gap-1">
                            <span className="text-3xl font-bold">${pkg.price}</span>
                            <span className="text-muted-foreground">/month</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="w-4 h-4" />
                            <span>SLA: {pkg.sla}</span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-3">
                            {pkg.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm">
                                <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-none" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Order Summary */}
              <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/20 dark:to-cyan-950/20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-lg">Fystack License (2025 Offer)</span>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground line-through">$14,000</div>
                        <div className="text-lg font-semibold">$10,000</div>
                      </div>
                    </div>
                    {selectedSupport && (
                      <div className="flex justify-between items-center">
                        <span className="text-lg">
                          {supportPackages.find(p => p.id === selectedSupport)?.name}
                        </span>
                        <span className="text-lg font-semibold">
                          ${supportPackages.find(p => p.id === selectedSupport)?.price}
                        </span>
                      </div>
                    )}
                    <div className="border-t pt-3 flex justify-between items-center">
                      <span className="text-2xl font-bold">Total</span>
                      <span className="text-3xl font-bold text-blue-600">
                        ${calculateTotal().toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-3">
                    <Button
                      size="lg"
                      className="w-full text-lg"
                      asChild
                    >
                      <Link
                        href="https://t.me/anhthind"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Talk to Founders
                      </Link>
                    </Button>
                    <p className="text-sm text-center text-muted-foreground">
                      Contact us to complete your purchase and get started
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose One-Time License */}
              <div className="mt-12 grid md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <Shield className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Full Control</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Self-hosted on your infrastructure. Complete control over your data and keys.
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <Zap className="w-8 h-8 text-blue-600 mb-2" />
                    <CardTitle className="text-lg">Production Ready</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-muted-foreground">
                    Battle-tested code used by enterprises. Start building immediately.
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
