import { Controller, Get } from '@nestjs/common';
import { CommitsService } from './commits.service';
import { CommitResponseDto } from './dto/commits.dto';

@Controller('commits')
export class CommitsController {
  constructor(private readonly commitsService: CommitsService) {}

  @Get()
  async getCommits(): Promise<CommitResponseDto[]> {
    return this.commitsService.getCommits();
  }
}
