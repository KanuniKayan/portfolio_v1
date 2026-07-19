import Image from "next/image";

export default function Page() {
    return (
        <div>
            <div className="flex flex-col m-4">
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-wrap max-w-120 mb-4">
                        <h2 className="font-bold border-b-2 mb-1">Harvard&#39;s Computer Science Course</h2>
                        <p>
                            When I started Harvard&#39;s computer science course, I wasn&#39;t aware of the challenge I had
                            signed myself up for. Every week was a flood of incredible information taught in a succinct way,
                            and prepared me just enough to figure out my own solutions to the practice problems they gave.
                            <br/><br/>
                            It taught me everything I know about the basis of programming. Memory allocation, CRUD usage,
                            correct coding and beautiful coding. All these things and many more allow me now to look at
                            any programming language and pick it up relatively quickly. Which is also why picking up new
                            challenges is exciting!
                            <br/><br/>
                            I graduated with 100% score.
                        </p>
                    </div>
                    <div className="flex w-full h-full pl-0 md:pl-3 pb-6">
                        <Image
                            className="object-contain w-full max-w-[450px]"
                            src="/Harvard.png"
                            alt="Screenshot of Harvard CS50 Verified Certificate"
                            width={2200}
                            height={1700}
                        />
                    </div>
                </div>
                <div>
                    <a className="w-fit h-fit p-1.5 my-4 rounded-lg border-2 border-highlight bg-highlight
                    hover:border-primary" href="https://pll.harvard.edu/course/cs50-introduction-computer-science"
                       target="_blank">
                        More on CS50&#39;s course
                    </a>
                </div>
            </div>
        </div>
    )
}