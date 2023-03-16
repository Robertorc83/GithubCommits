import { Commit } from "../interfaces";
import CommitCard from "./CommitCard";

export default function CommitsList({commits}:{commits: Commit[]}) {
    return (
      <div className="max-h-screen overflow-y-auto grid grid-cols-2 pb-36 gap-y-10 mt-5 justify-items-center">
          {commits.map((commit) => (
            <CommitCard key={commit.sha} commit={commit}/>
          ))}
      </div>
    )
}