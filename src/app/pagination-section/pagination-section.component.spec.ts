import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginationSectionComponent } from './pagination-section.component';

describe('PaginationSectionComponent', () => {
  let component: PaginationSectionComponent;
  let fixture: ComponentFixture<PaginationSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationSectionComponent],
    });

    fixture = TestBed.createComponent(PaginationSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.totalPages).toBe(0);
    expect(component.pageNumber).toBe(1);
  });

  it('should emit page number on previous button click', () => {
    spyOn(component.changePageNumberEvent, 'emit');
    
    component.onClickPrevious();
    
    expect(component.pageNumber).toBe(2);
    expect(component.changePageNumberEvent.emit).toHaveBeenCalledWith(2);
  });

  it('should emit page number on next button click', () => {
    spyOn(component.changePageNumberEvent, 'emit');

    component.onClickNext();

    expect(component.pageNumber).toBe(2);
    expect(component.changePageNumberEvent.emit).toHaveBeenCalledWith(2);
  });

  it('should not decrement page number below 1', () => {
    spyOn(component.changePageNumberEvent, 'emit');

    component.pageNumber = 1;
    component.onClickPrevious();

    expect(component.pageNumber).toBe(1);
    expect(component.changePageNumberEvent.emit).not.toHaveBeenCalled();
  });

  it('should reflect updated totalPages', () => {
    component.totalPages = 5;
    expect(component.totalPages).toBe(5);
  });

  it('should not increment page number beyond totalPages', () => {
    spyOn(component.changePageNumberEvent, 'emit');

    component.totalPages = 3;
    component.pageNumber = 3;
    component.onClickNext();

    expect(component.pageNumber).toBe(3);
    expect(component.changePageNumberEvent.emit).not.toHaveBeenCalled();
  });

});
