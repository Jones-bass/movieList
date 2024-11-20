import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterMoviesComponent } from './register-movies.component';


describe('RegisterMoviesComponent', () => {
  let component: RegisterMoviesComponent;
  let fixture: ComponentFixture<RegisterMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterMoviesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
