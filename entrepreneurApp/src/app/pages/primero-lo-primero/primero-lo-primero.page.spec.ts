import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PrimeroLoPrimeroPage } from './primero-lo-primero.page';

describe('PrimeroLoPrimeroPage', () => {
  let component: PrimeroLoPrimeroPage;
  let fixture: ComponentFixture<PrimeroLoPrimeroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrimeroLoPrimeroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PrimeroLoPrimeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
