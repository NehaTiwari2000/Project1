import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemocarComponent } from './democar.component';

describe('DemocarComponent', () => {
  let component: DemocarComponent;
  let fixture: ComponentFixture<DemocarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemocarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemocarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
