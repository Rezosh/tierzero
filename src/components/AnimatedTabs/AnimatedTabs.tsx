"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useParams } from "next/navigation";
interface AnimatedTabsProps {
  tabs: { href: string; label: string }[];
}

export default function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  let [activeTab, setActiveTab] = useState(0);
  const params = useParams();

  return (
    <div className="flex items-center justify-between">
      {tabs.map((tab, index) => (
        <Link
          href={tab.href.replace("[id]", params.id)}
          key={index}
          onClick={() => setActiveTab(index)}
          className={`${
            activeTab === index ? "" : "hover:text-zinc-200/60"
          } relative rounded-md px-3 py-1.5 text-sm font-medium uppercase text-zinc-200 outline-primary transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === index && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 z-10 bg-zinc-50 mix-blend-difference"
              style={{ borderRadius: "inherit" }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          {tab.label}
        </Link>
      ))}
    </div>
  );
}
