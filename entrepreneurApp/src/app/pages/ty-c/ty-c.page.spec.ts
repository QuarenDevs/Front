import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TyCPage } from './ty-c.page';

describe('TyCPage', () => {
  let component: TyCPage;
  let fixture: ComponentFixture<TyCPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyCPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TyCPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
