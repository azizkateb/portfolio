import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VedioComponent } from './vedio.component';

describe('VedioComponent', () => {
  let component: VedioComponent;
  let fixture: ComponentFixture<VedioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VedioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
