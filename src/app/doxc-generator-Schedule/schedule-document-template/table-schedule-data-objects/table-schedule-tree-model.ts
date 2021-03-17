import {AlignmentType, convertMillimetersToTwip, Paragraph, TableCell, TableRow, VerticalAlign, WidthType} from 'docx';
import {ScheduleTheme} from './table-schedule-theme';

export class ScheduleRowTree {

  public fields: any[];
  public subs: ScheduleRowTree[];


  constructor(fields: any[], subs: any[]) {
    this.fields = fields;
    this.subs = subs;
  }

  public calcRowSpan(): number {
    if (this.subs.length === 0) {
      return 1;
    }
    let rs;
    this.subs.forEach(t => {
      rs += t.calcRowSpan();
    });
    return rs;
  }
}
