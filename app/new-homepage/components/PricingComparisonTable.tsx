"use client";

import { Check } from "lucide-react";

type Cell = boolean | string;

type Row = {
  label: string;
  values: [Cell, Cell, Cell, Cell]; // Free, Pro, Growth, Enterprise
};

type Group = {
  title: string;
  description: string;
  rows: Row[];
};

const PLAN_NAMES = ["Free", "Pro", "Growth", "Enterprise"] as const;

const GROUPS: Group[] = [
  {
    title: "Wallets & Volume",
    description: "Wallet capacity and transaction volume limits.",
    rows: [
      { label: "MPC wallets", values: ["2", "3", "20", "Custom"] },
      { label: "Hyper wallets", values: ["100", "2,000", "5,000", "Custom"] },
      { label: "Maximum outbound volume", values: ["$20K", "$200K", "$1M", "Custom"] },
    ],
  },
  {
    title: "Team & Access",
    description: "Workspaces, seats, and environment access.",
    rows: [
      { label: "Workspaces", values: ["1", "1", "1", "Unlimited"] },
      { label: "Users", values: ["2", "4", "10", "Unlimited"] },
      { label: "Sandbox / testnet access", values: [false, true, true, true] },
    ],
  },
  {
    title: "Security",
    description: "Key management and account protection.",
    rows: [
      { label: "MPC key management", values: [true, true, true, true] },
      { label: "Advanced security features", values: [false, true, true, true] },
      { label: "Policy rules", values: ["None", "3 policies", "15 policies", "Unlimited"] },
    ],
  },
  {
    title: "Analytics & Monitoring",
    description: "Visibility into wallet activity and account changes.",
    rows: [
      { label: "Analytics", values: [true, true, true, true] },
      { label: "Alert & monitoring", values: [false, true, true, true] },
      { label: "Audit trails", values: [false, true, true, true] },
    ],
  },
  {
    title: "Support",
    description: "How you reach us, and how fast.",
    rows: [
      { label: "Support level", values: ["Community", "Basic", "Priority", "Dedicated"] },
      { label: "SLA guarantee", values: [false, false, false, true] },
    ],
  },
];

function ValueCell({ value }: { value: Cell }) {
  if (typeof value === "boolean") {
    return (
      <div className="flex justify-center">
        {value ? (
          <div className="w-6 h-6 rounded-full bg-[#3b82f6] flex items-center justify-center">
            <Check className="w-4 h-4 text-white" strokeWidth={3} />
          </div>
        ) : (
          <span className="text-lg text-slate-300">–</span>
        )}
      </div>
    );
  }
  return <div className="text-center text-base font-medium text-slate-600">{value}</div>;
}

export function PricingComparisonTable() {
  return (
    <div className="border border-slate-200 bg-white">
      {/* Column headers */}
      <div className="bg-white border-b border-slate-200">
        <div className="grid grid-cols-[1.5fr_repeat(4,minmax(90px,1fr))] items-center gap-6 px-6 sm:px-8 py-6">
          <div />
          {PLAN_NAMES.map((name) => (
            <div
              key={name}
              className={`relative text-center text-lg sm:text-xl font-semibold ${
                name === "Growth" ? "text-[#3b82f6]" : "text-slate-800"
              }`}
            >
              {name === "Growth" && (
                <div className="absolute -top-6 -bottom-6 left-0 right-0 bg-slate-100" />
              )}
              <span className="relative">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Groups */}
      <div>
        {GROUPS.map((group) => (
          <div key={group.title} className="border-b border-slate-200 last:border-b-0">
            <div className="grid grid-cols-[1.5fr_repeat(4,minmax(90px,1fr))] gap-6 px-6 sm:px-8 pt-8 pb-5">
              <div className="col-span-3">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-800 mb-1.5">{group.title}</h3>
                <p className="text-base text-slate-500">{group.description}</p>
              </div>
              <div className="relative">
                <div className="absolute -top-8 -bottom-5 left-0 right-0 bg-slate-100" />
              </div>
            </div>
            {group.rows.map((row) => (
              <div
                key={row.label}
                className="grid grid-cols-[1.5fr_repeat(4,minmax(90px,1fr))] items-center gap-6 px-6 sm:px-8 py-4 border-t border-slate-100"
              >
                <span className="text-base text-slate-700">{row.label}</span>
                {row.values.map((value, i) => (
                  <div key={i} className={i === 2 ? "relative" : undefined}>
                    {i === 2 && (
                      <div className="absolute -top-4 -bottom-4 left-0 right-0 bg-slate-100" />
                    )}
                    <div className="relative">
                      <ValueCell value={value} />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
