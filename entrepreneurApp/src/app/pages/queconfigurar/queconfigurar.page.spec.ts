import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QueconfigurarPage } from './queconfigurar.page';

describe('QueconfigurarPage', () => {
  let component: QueconfigurarPage;
  let fixture: ComponentFixture<QueconfigurarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueconfigurarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QueconfigurarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
