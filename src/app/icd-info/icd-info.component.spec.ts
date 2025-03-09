import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcdInfoComponent } from './icd-info.component';

describe('IcdInfoComponent', () => {
  let component: IcdInfoComponent;
  let fixture: ComponentFixture<IcdInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IcdInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IcdInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
