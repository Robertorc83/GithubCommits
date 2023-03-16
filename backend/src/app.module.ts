import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { CommitsModule } from './modules/commits/commits.module';
import { APP_INTERCEPTOR } from '@nestjs/core';

@Module({
  imports: [CommitsModule],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
