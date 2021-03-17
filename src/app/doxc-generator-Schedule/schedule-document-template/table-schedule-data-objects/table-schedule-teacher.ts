import {AlignmentType, convertMillimetersToTwip, Paragraph, TableCell, TableRow, VerticalAlign, WidthType} from 'docx';

export class ScheduleTeacher {
  public name: string;
  public hours: number;
  public audienceNumber: string;


  constructor(name: string, hours: number, audienceNumber: string) {
    this.name = name;
    this.hours = hours;
    this.audienceNumber = audienceNumber;
  }

  public calcRowSpan(): number {
    return 0;
  }
}
