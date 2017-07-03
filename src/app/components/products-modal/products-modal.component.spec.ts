import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsModalComponent } from './products-modal.component';

describe('ProductsModalComponent', () => {
  let component: ProductsModalComponent;
  let fixture: ComponentFixture<ProductsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
