import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';  // Import necessary modules
import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],  // Import necessary modules
      providers: [HomeService],     // Provide the service and its dependencies
    });
    service = TestBed.inject(HomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});