import AnimatedTabs from "@/components/AnimatedTabs/AnimatedTabs";
import { formatDate } from "@/utils/dateFunctions";
import Image from "next/image";
import { FaSteam, FaTwitch } from "react-icons/fa";
import { HiOutlineShare, HiOutlineStar } from "react-icons/hi";

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
  },
};

export default function Layout(props: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const tabs = [
    { href: `/players/${props.params.id}/overview`, label: "Overview" },
    { href: `/players/${props.params.id}/stats`, label: "Stats" },
    { href: `/players/${props.params.id}/modes`, label: "Modes" },
    { href: `/players/${props.params.id}/matches`, label: "Matches" },
    { href: `/players/${props.params.id}/mmr-history`, label: "MMR History" },
  ];
  
  return (
    <div className="mx-auto h-full max-w-5xl px-6 lg:px-8">
      <div className="rounded-md bg-zinc-900/60 px-4 pb-2 pt-6 backdrop-blur">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 pl-4">
            <Image
              src={mockData.avatar}
              alt="Avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h2 className="text-lg font-bold">{mockData.username}</h2>
              <span className="text-xs text-zinc-400">
                Joined: {formatDate(mockData.joinDate)}
              </span>
              <div className="mt-2 flex gap-x-2.5">
                <FaSteam className="h-5 w-5 hover:cursor-pointer hover:text-primary" />
                <FaTwitch className="h-5 w-5 hover:cursor-pointer hover:text-primary" />
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-x-4 pr-4">
              <HiOutlineShare className="h-5 w-5 hover:cursor-pointer hover:text-primary" />
              <HiOutlineStar className="h-5 w-5 hover:cursor-pointer hover:text-primary" />
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-50/5 px-4 pt-2 ">
          <AnimatedTabs tabs={tabs} />
        </div>
      </div>

      {props.children}
    </div>
  );
}
