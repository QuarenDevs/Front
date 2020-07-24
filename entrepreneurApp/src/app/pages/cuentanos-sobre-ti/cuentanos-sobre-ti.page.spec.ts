import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuentanosSobreTiPage } from './cuentanos-sobre-ti.page';

describe('CuentanosSobreTiPage', () => {
  let component: CuentanosSobreTiPage;
  let fixture: ComponentFixture<CuentanosSobreTiPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentanosSobreTiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuentanosSobreTiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
