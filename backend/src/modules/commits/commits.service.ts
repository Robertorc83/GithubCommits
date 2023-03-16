import { HttpService } from '@nestjs/axios';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { CommitResponseDto } from './dto/commits.dto';

@Injectable()
export class CommitsService {
  constructor(private readonly http: HttpService) {}

  async getCommits(): Promise<CommitResponseDto[]> {
    try {
      const response = await firstValueFrom(
        this.http.get(
          'https://api.github.com/repos/Robertorc83/GithubCommits/commits',
          {
            headers: {
              Authorization: `token  ${process.env.TOKEN_AUTH}`,
            },
          },
        ),
      );
      return response.data.map(
        (commit: CommitResponseDto) => new CommitResponseDto(commit),
      );
    } catch (error) {
      throw new HttpException(
        'Failed to fetch commits',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
