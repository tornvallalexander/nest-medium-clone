import { Controller, Get } from '@nestjs/common';
import { TagService } from './tag.service';

@Controller('tags')
class TagController {
  constructor(private readonly tagService: TagService) {}
  @Get()
  getAll() {
    return this.tagService.getAll();
  }
}

export { TagController };
