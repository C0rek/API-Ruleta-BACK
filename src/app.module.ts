import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RandomrouletteModule } from './randomroulette/randomroulette.module';
import { RandomrouletteController } from './randomroulette/randomroulette.controller';
import { LoggingMiddleware } from './logging/logging.middleware';

@Module({
  imports: [RandomrouletteModule],
  controllers: [AppController, RandomrouletteController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer){
    consumer
    .apply(LoggingMiddleware)
    .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
