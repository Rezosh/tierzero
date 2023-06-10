"use client";
import Link from "next/link";
import { classNames } from "@/utils/dateFunctions";
import { useParams } from "next/navigation";

// If number is positive, add a plus sign
function formatMMR(mmr: number) {
  return mmr > 0 ? `+${mmr}` : mmr;
}

// calculate kd ratio to 2 decimal places
function calculateKD(kills: number, deaths: number) {
  return (kills / deaths).toFixed(2);
}

export default function MatchStat({ match }: { match: Match }) {
  const params = useParams();

  return (
    <div
      className={classNames(
        match.outcome === "loss"
          ? "border-l-red-600"
          : "border-l-green-500 bg-gradient-to-r from-green-700/5 from-10%  ",
        " border-l-4 border-b-zinc-50/5 px-9 py-3 lg:border-b"
      )}
    >
      <div className="flex flex-col divide-y divide-zinc-50/5 lg:flex-row lg:divide-y-0">
        <div className="flex lg:mr-auto">
          <div>
            <span className="text-xs text-zinc-400">{match.date}</span>
            <h1 className="font-bold uppercase">
              {match.outcome === "loss" ? "Defeat" : "Extracted"}
            </h1>
            <Link
              href={`/players/${params.id}/matches/${match.id}`}
              className="text-sm font-bold text-primary"
            >
              View Match
            </Link>
          </div>
          <div className="ml-auto lg:hidden">
            <div className="font-bold uppercase text-zinc-400">Mode</div>
            <div className="font-bold uppercase">{match.mode}</div>
          </div>
        </div>

        <div className="mt-6 flex gap-x-8 pt-4 lg:mt-0 lg:gap-x-16 lg:pt-0">
          <div className="hidden lg:block">
            <div className="font-bold uppercase text-zinc-400">Mode</div>
            <div className="font-bold uppercase">{match.mode}</div>
          </div>
          <div>
            <div className="font-bold uppercase text-zinc-400">MMR</div>
            <div className="font-bold uppercase text-primary/80">
              {formatMMR(match.mmrDiff)}
            </div>
          </div>
          <div>
            <div className="font-bold uppercase text-zinc-400">Kills</div>
            <div className="font-bold uppercase">{match.kills}</div>
          </div>
          <div>
            <div className="font-bold uppercase text-zinc-400">Deaths</div>
            <div className="font-bold uppercase">{match.deaths}</div>
          </div>
          <div>
            <div className="font-bold uppercase text-zinc-400">K/D</div>
            <div className="font-bold uppercase">
              {calculateKD(match.kills, match.deaths)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
