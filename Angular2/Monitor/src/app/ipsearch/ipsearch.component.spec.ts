import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpsearchComponent } from './ipsearch.component';

describe('IpsearchComponent', () => {
  let component: IpsearchComponent;
  let fixture: ComponentFixture<IpsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
