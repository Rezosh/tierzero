import MatchStat from "@/components/MatchStat/MatchStat";

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
  ],
};

export default function Matches() {
  return (
    <>
      <div className="mt-4 rounded-md bg-zinc-900/60 px-8 py-6 backdrop-blur">
        <h1 className="text-xl">Matches</h1>

        <div className="mt-6 space-y-2 lg:space-y-1">
          {mockData.matches.map((match) => (
            <MatchStat key={match.id} match={match} />
          ))}
        </div>
      </div>
    </>
  );
}
