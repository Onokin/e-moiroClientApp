import {AlignmentType, convertMillimetersToTwip, Paragraph, TableCell, TableRow, VerticalAlign, WidthType} from 'docx';

export class TableScheduleHeader {
  private child: any = [];

  constructor() {// private occupationForms: any[]
    this.child.push(
      this.generateTableCell('Дата', 12),
      this.generateTableCell('День', 15.8),
      this.generateTableCell('Время занятий', 26.6),
      this.generateTableCell('Тема и вид занятий', 128.7),
      this.generateTableCell('Преподаватель (Ф.И.О., ученая степень, звание)', 52.5),
      this.generateTableCell('Кол-во часов', 20),
      this.generateTableCell('№ ауд.', 28.6)
    );
  }

  private generateTableCell(text: string, size: number): TableCell {
    return new TableCell({
      children: [new Paragraph({text, alignment: AlignmentType.CENTER})],
      // columnSpan: this.occupationForms.length,
      verticalAlign: VerticalAlign.CENTER,
      width: {
        size: convertMillimetersToTwip(size),
        type: WidthType.DXA
      }
    });
  }

  // width: {
  // size: size.toString() + '%',
  // type: WidthType.PERCENTAGE
  // }


  public insert(): TableRow {
    return new TableRow({
      children: this.child,
      cantSplit: false,
      tableHeader: true,
    });
  }
}
