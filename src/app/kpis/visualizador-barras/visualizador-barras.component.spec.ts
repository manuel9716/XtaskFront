import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizadorBarrasComponent } from './visualizador-barras.component';

describe('VisualizadorBarrasComponent', () => {
  let component: VisualizadorBarrasComponent;
  let fixture: ComponentFixture<VisualizadorBarrasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizadorBarrasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizadorBarrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
