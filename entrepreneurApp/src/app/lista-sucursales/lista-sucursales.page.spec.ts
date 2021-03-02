import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaSucursalesPage } from './lista-sucursales.page';

describe('ListaSucursalesPage', () => {
  let component: ListaSucursalesPage;
  let fixture: ComponentFixture<ListaSucursalesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSucursalesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaSucursalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
