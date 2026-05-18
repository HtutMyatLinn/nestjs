import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { Post } from './posts/post.entity';
import { TagsModule } from './tags/tags.module';
import { PostMetaModule } from './post-meta/post-meta.module';
import { PostMetaController } from './post-meta/post-meta.controller';
import { TagsController } from './—no-spec/tags/tags.controller';
import { TagsController } from './—no-spec/tags/tags.controller';
import { UsersController } from './—no-spec/users/users.controller';
import { TagsModule } from './tags/tags.module';
import { TagsController } from './—no-spec/tags/tags.controller';
import { TagsController } from './—no-spec/tags/tags.controller';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    UsersModule,
    PostsModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123456',
      database: 'nest-basic',
      entities: [User, Post],
      synchronize: true,
    }),
    TagsModule,
    PostMetaModule,
  ],
  controllers: [AppController, TagsController, UsersController, PostMetaController],
  providers: [AppService],
})
export class AppModule {}
