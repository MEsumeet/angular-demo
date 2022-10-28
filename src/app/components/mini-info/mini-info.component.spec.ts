import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniInfoComponent } from './mini-info.component';

describe('MiniInfoComponent', () => {
  let component: MiniInfoComponent;
  let fixture: ComponentFixture<MiniInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
