import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
        <div className="flex flex-col w-full h-full pb-4 bg-secondary">
            <h2 className="self-center mt-4 text-3xl text-primary md:border-b-2 border-primary border-0 text-center">Real Problems, Real Solutions</h2>
            <div className="flex flex-col md:flex-row w-full h-fit gap-10 p-10">
                <Link className="flexImage" href="https://github.com/KanuniKayan/RPS-dueling-bot" target="_blank">
                    <p className="imageTitle">Rock Paper Scissors Duel Bot</p>
                    <Image
                        className="imageInFlex"
                        src="/RPS_duel_start.png"
                        alt="Screenshot of project 'Rock Paper Scissors Discord Dueling Bot'"
                        width={453}
                        height={307}
                    />
                </Link>
                <Link className="flexImage" href="https://github.com/KanuniKayan/simple-fasting-timer" target="_blank">
                    <p className="imageTitle">Fasting Timer App</p>
                    <Image
                        className="imageInFlex"
                        src="/fasting_timer.png"
                        alt="Screenshot of project 'fasting timer'"
                        width={360}
                        height={801}
                    />
                </Link>
                <Link className="flexImage" href="/harvard">
                    <p className="imageTitle">Harvard CS50</p>
                    <Image
                        className="imageInFlex"
                        src="/CS50_cover.png"
                        alt="Screenshot of Harvard's CS50 cover image"
                        width={530}
                        height={298}
                    />
                </Link>

            </div>
        </div>
  );
}
// Remember: It's V1!
