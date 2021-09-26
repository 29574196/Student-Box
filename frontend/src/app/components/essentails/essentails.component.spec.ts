import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EssentailsComponent } from './essentails.component';

describe('EssentailsComponent', () => {
  let component: EssentailsComponent;
  let fixture: ComponentFixture<EssentailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EssentailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EssentailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
