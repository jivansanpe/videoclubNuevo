import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UpdatePeliculaPage } from './update-pelicula.page';

describe('UpdatePeliculaPage', () => {
  let component: UpdatePeliculaPage;
  let fixture: ComponentFixture<UpdatePeliculaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatePeliculaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UpdatePeliculaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should update', () => {
    expect(component).toBeTruthy();
  });
});
