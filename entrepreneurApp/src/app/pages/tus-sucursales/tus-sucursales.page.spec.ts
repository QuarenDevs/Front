import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TusSucursalesPage } from './tus-sucursales.page';

describe('TusSucursalesPage', () => {
  let component: TusSucursalesPage;
  let fixture: ComponentFixture<TusSucursalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TusSucursalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TusSucursalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
