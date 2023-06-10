import MatchList from "@/components/MatchList/MatchList";
import MatchStat from "@/components/MatchList/MatchStat";

const mockData = {
  matches: [
    {
      id: 1,
      date: "3 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: 178,
      kills: 7,
      deaths: 2,
      kd: 2.5,
      outcome: "win",
    },
    {
      id: 2,
      date: "4 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: -57,
      kills: 6,
      deaths: 4,
      kd: 2.5,
      outcome: "loss",
    },
    {
      id: 3,
      date: "5 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: 94,
      kills: 1,
      deaths: 2,
      kd: 2.5,
      outcome: "win",
    },
    {
      id: 4,
      date: "6 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: -74,
      kills: 0,
      deaths: 3,
      kd: 2.5,
      outcome: "loss",
    },
    {
      id: 5,
      date: "7 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: 178,
      kills: 7,
      deaths: 2,
      kd: 2.5,
      outcome: "win",
    },
    {
      id: 6,
      date: "8 hours ago",
      mode: "Bounty Hunt",
      mmrDiff: -57,
      kills: 6,
      deaths: 4,
      kd: 2.5,
      outcome: "loss",
    },
  ],
};

function EmptyState() {
  return (
    <div className="flex h-40 items-center justify-center rounded border border-zinc-400/20 bg-zinc-400/10 text-zinc-400">
      KorzaKapitány has no matches to display.
    </div>
  );
}

export default function Matches() {
  return (
    <>
      <div className="mt-4 rounded-md bg-zinc-900/60 px-8 py-6 backdrop-blur">
        <h1 className="text-xl">Matches</h1>

        <div className="mt-6">
          {/* If no matches then display empty state */}
          {mockData.matches.length > 0 ? (
            <MatchList matches={mockData.matches} />
          ) : (
            <EmptyState />
          )}
        </div>
      </div>
    </>
  );
}
