import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickDefComponent } from './quick-def.component';

describe('QuickDefComponent', () => {
  let component: QuickDefComponent;
  let fixture: ComponentFixture<QuickDefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickDefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickDefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
