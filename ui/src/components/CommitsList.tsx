import { Commit } from "../interfaces";
import CommitCard from "./CommitCard";

export default function CommitsList({commits}:{commits: Commit[]}) {
    return (
      <div className=" h-full lg:max-h-screen overflow-y-auto grid pb-36 gap-y-20 mt-5 justify-items-center">
          {commits.map((commit) => (
            <CommitCard key={commit.sha} commit={commit}/>
          ))}
      </div>
    )
}