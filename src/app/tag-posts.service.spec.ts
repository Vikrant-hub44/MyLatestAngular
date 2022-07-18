import { TestBed } from '@angular/core/testing';

import { TagPostsService } from './tag-posts.service';

describe('TagPostsService', () => {
  let service: TagPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TagPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
