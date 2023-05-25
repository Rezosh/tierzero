import ProfileStat from "@/components/ProfileStat/ProfileStat";
import { formatNumber } from "@/utils/dateFunctions";
import Image from "next/image";

const mockData = {
  avatar:
    "https://avatars.akamai.steamstatic.com/31b7378fba39a6263022f90ab9ec75a437f70806_full.jpg",
  username: "KorzaKapitány",
  steamId: "76561198043886064",
  steamProfile: "https://steamcommunity.com/profiles/76561198043886064",
  huntId: "76561198043886064",
  joinDate: "2023-01-01T15:00:00.000Z",
  globalStats: {
    bountyHunt: 1221,
    quickPlay: 26,
    skillBased: 614,
  },
  totalStats: {
    kills: 1764,
    deaths: 1038,
    assists: 513,
    kdRatio: 1.7,
    mmr: 2000,
  },
};

const calculateMMRStars = (mmr: number) => {
  if (mmr < 2000) return 1;
  else if (mmr < 2300) return 2;
  else if (mmr < 2600) return 3;
  else if (mmr < 2750) return 4;
  else if (mmr < 3000) return 5;
  else return 6;
};

export default function Overview() {
  const mmrStars = calculateMMRStars(mockData.totalStats.mmr);

  return (
    <div className="mt-4 grid grid-cols-1 grid-rows-1 gap-4 md:grid-cols-3">
      <div className="rounded-md bg-zinc-900/60 px-8 py-3 backdrop-blur md:col-span-2">
        <div>
          <h1 className="text-xl">Overview</h1>
          <div className="mt-4 grid w-full grid-cols-2 place-items-start gap-x-12 gap-y-6 pb-4 md:grid-cols-4">
            <ProfileStat
              label="Bounty Hunt"
              value={formatNumber(mockData.globalStats.bountyHunt)}
              primary
            />
            <ProfileStat
              label="Quick Play"
              value={formatNumber(mockData.globalStats.quickPlay)}
              primary
            />
            <ProfileStat
              label="Kills"
              value={mockData.totalStats.kills}
              primary
            />
            <ProfileStat
              label="Deaths"
              value={mockData.totalStats.deaths}
              primary
            />
            <ProfileStat label="Kills/match" value={"4.67"} />
            <ProfileStat label="Avg Match Length" value={"14m 57s"} />
            <ProfileStat label="Extractions" value={"807"} />
            <ProfileStat label="Assists" value={mockData.totalStats.assists} />
          </div>
        </div>
      </div>
      <div className="h-min rounded-md bg-zinc-900/60 px-8 py-3 backdrop-blur">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            {/* Make a array of 6, return the mmr star image at full opacity and the rest make opacity 20% */}
            {Array.from({ length: 6 }, (_, i) => (
              <Image
                key={i}
                src="/mmr_indicator.png"
                alt="MMR Star"
                width={24}
                height={24}
                className={`${i < mmrStars ? "opacity-100" : "opacity-20"}`}
              />
            ))}
          </div>
          <span>MMR: {mockData.totalStats.mmr}</span>

          <span>KD: {mockData.totalStats.kdRatio}</span>
        </div>
      </div>
    </div>
  );
}
