"use client";

import Link from "next/link";
import {
  Shield,
  ShieldCheck,
  Lock,
  Server,
  Cloud,
  Globe,
  AlertTriangle,
  Check,
  Infinity,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SelfHostedComparison() {
  return (
    <div className="w-full">
      <div className="text-center">
        <p className="text-slate-600 mb-8 max-w-3xl mx-auto">
          Control your uptime, your data, your keys. Deploy on your
          infrastructure with complete sovereignty.
        </p>
        <Button
          className="bg-slate-900 hover:bg-slate-800 text-white rounded-lg px-8 py-6 text-base font-medium mb-12"
          asChild
        >
          <Link
            href="https://github.com/fystack/fystack-selfhost-scripts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Shield className="w-5 h-5 mr-2" />
            Deploy pilot with one single command
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Fystack Self-Hosted */}
        <Card className="relative border-2 border-emerald-500 bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-center mb-4">
              <ShieldCheck className="w-12 h-12 text-emerald-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Fystack Self-Hosted
            </h3>

            <div className="mb-6 flex justify-center">
              <Badge className="bg-emerald-500 hover:bg-emerald-500 text-white px-4 py-2 text-sm font-medium">
                🔒 Private Network
              </Badge>
            </div>

            <div className="space-y-3 mb-6 border-2 border-dashed border-emerald-300 rounded-xl p-4 md:p-6 bg-emerald-50/50">
              <ComparisonRow
                icon={<Server className="w-5 h-5 text-slate-600" />}
                title="Your Infrastructure"
              />
              <ComparisonRow
                icon={<Lock className="w-5 h-5 text-slate-600" />}
                title="Your Keys"
              />
              <ComparisonRow
                icon={<ShieldCheck className="w-5 h-5 text-slate-600" />}
                title="Your Control"
              />
              <ComparisonRow
                icon={<Infinity className="w-5 h-5 text-slate-600" />}
                title="Unlimited Volume & Wallets"
                subtitle="No caps on transactions, volume, or wallets"
              />
              <ComparisonRow
                icon={<MapPin className="w-5 h-5 text-slate-600" />}
                title="Data Stays in Your Region"
                subtitle="Jurisdiction-safe deployment for compliance needs"
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-emerald-600 font-medium">
              <Check className="w-5 h-5" />
              <span>Isolated from Internet</span>
            </div>
          </CardContent>
        </Card>

        {/* Others Cloud-based */}
        <Card className="relative border-2 border-orange-500 bg-white rounded-2xl overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex items-center justify-center mb-4">
              <AlertTriangle className="w-12 h-12 text-orange-600" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4 text-center">
              Others (Cloud-based)
            </h3>

            <div className="mb-6 flex justify-center">
              <Badge className="bg-orange-500 hover:bg-orange-500 text-white px-4 py-2 text-sm font-medium">
                🌐 Public Internet
              </Badge>
            </div>

            <div className="space-y-3 mb-6 border-2 border-dashed border-orange-300 rounded-xl p-4 md:p-6 bg-orange-50/50">
              <ComparisonRow
                icon={<Cloud className="w-5 h-5 text-slate-600" />}
                title="Vendor Infrastructure"
              />
              <ComparisonRow
                icon={<Globe className="w-5 h-5 text-slate-600" />}
                title="Shared Keys"
              />
              <ComparisonRow
                icon={<AlertTriangle className="w-5 h-5 text-slate-600" />}
                title="Limited Control"
              />
              <ComparisonRow
                icon={<TrendingUp className="w-5 h-5 text-slate-600" />}
                title="Capped Outbound + Overage Rates"
                subtitle="Volume and wallet limits with extra fees"
              />
              <ComparisonRow
                icon={<Cloud className="w-5 h-5 text-slate-600" />}
                title="Data in Vendor Region"
                subtitle="Cross-border data transfer risks"
              />
            </div>

            <div className="flex items-center justify-center gap-2 text-orange-600 font-medium">
              <AlertTriangle className="w-5 h-5" />
              <span>Exposed Attack Surface</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function ComparisonRow({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex items-start gap-3 bg-white p-3 md:p-4 rounded-lg">
      <div className="mt-0.5 flex-shrink-0">{icon}</div>
      <div>
        <div className="text-slate-900 font-medium">{title}</div>
        {subtitle && (
          <div className="text-xs text-slate-500 mt-0.5">{subtitle}</div>
        )}
      </div>
    </div>
  );
}
