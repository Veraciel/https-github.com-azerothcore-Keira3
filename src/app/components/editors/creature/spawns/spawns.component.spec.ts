import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { anything, instance, when } from 'ts-mockito';
import { of } from 'rxjs';

import { SpawnsComponent } from './spawns.component';
import { CommonTestModule } from '../../../../test-utils/common-test.module';
import { MysqlService } from '../../../../services/mysql.service';
import { MockedMysqlService } from '../../../../test-utils/mocks';
import { CommonEditorTestModule } from '../../../../test-utils/common-editor-test-module';

describe('SpawnsComponent', () => {
  let component: SpawnsComponent;
  let fixture: ComponentFixture<SpawnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SpawnsComponent,
      ],
      imports: [
        CommonTestModule,
        CommonEditorTestModule,
      ],
      providers: [
        { provide : MysqlService, useValue: instance(MockedMysqlService) },
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    when(MockedMysqlService.query(anything(), anything())).thenReturn(of());

    fixture = TestBed.createComponent(SpawnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
