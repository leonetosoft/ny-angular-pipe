import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NyNgPipesComponent } from './ny-ng-pipes.component';

describe('NyNgPipesComponent', () => {
  let component: NyNgPipesComponent;
  let fixture: ComponentFixture<NyNgPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NyNgPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NyNgPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
