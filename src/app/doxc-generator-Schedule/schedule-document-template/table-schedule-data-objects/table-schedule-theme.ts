import {AlignmentType, convertMillimetersToTwip, Paragraph, TableCell, TableRow, VerticalAlign, WidthType} from 'docx';

export class ScheduleTheme {
  public name: string;
  public teachers: ScheduleTheme[];


  constructor(name: string, teachers: ScheduleTheme[]) {
    this.name = name;
    this.teachers = teachers;
  }
}
