import { Exclude } from 'class-transformer';

export class CommitResponseDto {
  @Exclude()
  node_id: string;
  @Exclude()
  html_url: string;
  @Exclude()
  author: Record<string, never>;
  @Exclude()
  committer: Record<string, never>;
  @Exclude()
  parents: Record<string, never>;
  @Exclude()
  comments_url: string;
  sha: string;
  commit: {
    message: string;
    author: {
      name: string;
      date: string;
    };
  };

  url: string;

  constructor(commits: CommitResponseDto) {
    Object.assign(this, commits);
  }
}
