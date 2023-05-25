import "server-only";
import Image from "next/image";

// TODO: Make steam svg use class color instead of the colors defined in the file.

export default function Home() {
  return (
    <main>
      <div className="h-[563px] w-full bg-hero-bg bg-cover bg-center">
        <div className="flex h-full flex-col items-center justify-center bg-black/60">
          <h3 className="text-xs uppercase tracking-wider text-primary md:text-base">
            Welcome To Tier-Zero
          </h3>
          <h1 className="mt-2 max-w-lg text-center text-2xl font-bold uppercase tracking-wide md:text-6xl">
            Your One-Stop Destination
          </h1>

          <a
            href="#"
            className="mt-12 flex gap-x-2 rounded border border-primary px-5 py-3 font-bold hover:bg-primary hover:text-black"
          >
            <Image
              alt="Steam"
              aria-hidden="true"
              src="/steam.svg"
              width={24}
              height={24}
            />
            Login With Steam
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <dl className="-mt-12 grid grid-cols-1 gap-0.5 overflow-hidden rounded-md  text-center md:grid-cols-3">
          <div className="flex flex-col bg-zinc-900/60 p-8 backdrop-blur">
            <dt className="text-sm font-semibold leading-6 text-primary">
              Matches Played
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              18,354
            </dd>
          </div>
          <div className="flex flex-col bg-zinc-900/60 p-8 backdrop-blur">
            <dt className="text-sm font-semibold leading-6 text-primary">
              Players Killed
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              18,884
            </dd>
          </div>
          <div className="flex flex-col bg-zinc-900/60 p-8 backdrop-blur">
            <dt className="text-sm font-semibold leading-6 text-primary">
              Bounties Extracted
            </dt>
            <dd className="order-first text-3xl font-semibold tracking-tight">
              5,026
            </dd>
          </div>
        </dl>
      </div>

      <div className="mx-auto mt-16 max-w-5xl px-6  lg:px-8">
        <div className="flex justify-center rounded-md bg-zinc-900/60 px-8 py-14 backdrop-blur">
          <div className="flex max-w-3xl flex-col gap-4">
            <h2 className="mb-2 text-xl font-bold">
              Introducing the ultimate Hunt: Showdown web app!
            </h2>
            <p>
              Discover the power of our platform as you effortlessly track your
              personal and match statistics, gaining valuable insights into your
              performance and progress within the game.
            </p>
            <p>
              Our intuitive user interface provides a seamless experience,
              offering all your data in one convenient location. Explore your
              win/loss ratio, K/D ratio, and more, and easily compare your stats
              with fellow players on the global leaderboards.
            </p>
            <p>
              Uncover your strengths, address your weaknesses, and level up your
              gameplay with our comprehensive match history feature. Take
              command of your Hunt: Showdown experience with our cutting-edge
              web application and dominate the competition like never before!
            </p>
            <p>
              <a href="#" className="text-primary underline">
                Sign up
              </a>{" "}
              today and start tracking your stats with precision and confidence.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
