import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSideNavComponent } from './menu-side-nav.component';

describe('MenuSideNavComponent', () => {
  let component: MenuSideNavComponent;
  let fixture: ComponentFixture<MenuSideNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSideNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MenuSideNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
