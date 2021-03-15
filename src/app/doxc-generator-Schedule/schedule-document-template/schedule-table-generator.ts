import {
  AlignmentType,
  convertMillimetersToTwip,
  Paragraph,
  Table,
  TableCell,
  TableRow,
  VerticalAlign,
  WidthType
} from 'docx';
import {TableScheduleHeader} from './schedule-table-header';

export class TableScheduleGenerator {
  private child: any = [];
  private header: TableScheduleHeader;
  constructor(
  ) {
    this.header = new TableScheduleHeader();
    this.child.push(this.header.insert());
  }




  public insertTable(): Table {
    return new Table({
      rows: this.child,
      width: {
        size: 100,
        type: WidthType.PERCENTAGE
      }
    });
  }
}
