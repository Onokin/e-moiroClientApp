import {AlignmentType, convertMillimetersToTwip, Paragraph, TableCell, TableRow, VerticalAlign, WidthType} from 'docx';
import {ScheduleTheme} from './table-schedule-theme';

export class ScheduleDataRow {
  public date: Date;
  public hours: string;
  public themes: ScheduleTheme[];

  constructor(date: Date, hours: string, themes: ScheduleTheme[] ) {
    this.date = date;
    this.themes = themes;
    this.hours = hours;
  }

  public getDayOfTheWeek(day: Date): string {
    switch (day.getDay()) {
      case 1:
        return 'Понедельник';
        break;
      case 2:
        return 'Вторник';
        break;
      case 3:
        return 'Среда';
        break;
      case 4:
        return 'Четверг';
        break;
      case 5:
        return 'Пятница';
        break;
      case 6:
        return 'Суббота';
        break;
      case 7:
        return 'Воскресенье';
        break;
    }
  }
  public getDayOfTheWeekBlR(day: Date): string{
      switch (day.getDay()) {
        case 1:
          return 'Панядзелак';
          break;
        case 2:
          return 'Аўторак';
          break;
        case 3:
          return 'Серада';
          break;
        case 4:
          return 'Чацвер';
          break;
        case 5:
          return 'Пятніца';
          break;
        case 6:
          return 'Субота';
          break;
        case 7:
          return 'Нядзеля';
          break;
      }
  }
}
