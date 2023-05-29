"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useMemo } from "react";

interface AnimatedTabsProps {
  tabs: { href: string; label: string }[];
}

export default function AnimatedTabs({ tabs }: AnimatedTabsProps) {
  const pathname = usePathname();
  const params = useParams();

  const  actualTabsHref = useMemo(() => {
    return tabs.map((tab) => tab.href.replace("[id]", params.id));
  }, [tabs, params.id]);

  const activeTab = useMemo(() => {
    const tab = actualTabsHref.find((tab) => pathname.startsWith(tab));
    return tab;
  }, [actualTabsHref, pathname]);


  return (
    <div className="flex items-center justify-between">
      {tabs.map((tab, index) => (
        <Link
          href={tab.href.replace("[id]", params.id)}
          key={index}
          className={`${
            activeTab === tab.href.replace("[id]", params.id)
              ? ""
              : "hover:text-zinc-200/60"
          } relative rounded-md px-3 py-1.5 text-sm font-medium uppercase text-zinc-200 outline-primary transition focus-visible:outline-2`}
          style={{
            WebkitTapHighlightColor: "transparent",
          }}
        >
          {activeTab === tab.href.replace("[id]", params.id) && (
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
