import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { CommitsModule } from './modules/commits/commits.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [CommitsModule, ConfigModule.forRoot()],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
