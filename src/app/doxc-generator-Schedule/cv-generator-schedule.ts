import {
  AlignmentType,
  convertMillimetersToTwip,
  Document,
  Header,
  PageNumberFormat,
  PageOrientation,
  Paragraph,
  TextRun
} from 'docx';
import {TrainingProgram} from '../models/TrainingProgram';
import {TrainingProgramCurriculumSection} from '../models/TrainingProgramCurriculumSection';
import {CurriculumTopicTrainingProgram} from '../models/СurriculumTopicTrainingProgram';
import {TrainingProgramFinalExamination} from '../models/TrainingProgramFinalExamination';
import {TrainingProgramMainLiterature} from '../models/TrainingProgramMainLiterature';
import {TrainingProgramAdditionalLiterature} from '../models/TrainingProgramAdditionalLiterature';
import {TrainingProgramRegulation} from '../models/TrainingProgramRegulation';
import {StudentCategory} from '../models/StudentCategory';
import {CertificationType} from '../models/CertificationType';
import {DocxGeneratorDataTemplate} from '../docx-generator-data-template/docx-generator-data-template';
import {FormOfEducation} from '../models/FormOfEducation';
import {OccupationForm} from '../models/OccupationForm';
import {Department} from '../models/Department';
import {TableATPGenerator} from '../docx-generator-data-template/table-ATP/table-ATP-generator';
import {Page} from 'docx/build/file/paragraph/run/page-number';
import {DocxGeneratorScheduleTemplate} from './schedule-document-template/schedule-document-template';
import {TableScheduleGenerator} from './schedule-document-template/schedule-table-generator';

export class DocumentCreatorSchedule {
  docxGeneratorDataTemplate: DocxGeneratorDataTemplate = new DocxGeneratorDataTemplate(28);
  docxGeneratorScheduleTemplate: DocxGeneratorScheduleTemplate = new DocxGeneratorScheduleTemplate(24);
  tableScheduleGenerator: TableScheduleGenerator = new TableScheduleGenerator();

  constructor(
    isBLR: boolean
  ) { }

  public create([]): Document {
    const document = new Document({
      creator: 'MOIRO',
      title: 'Document of MOIRO',
      styles: {
        paragraphStyles: [ {
          id: 'default',
          name: 'My Standard style',
          basedOn: 'Normal',
          next: 'Normal',
          quickFormat: true,
          run: {
            size: 28,
          },
        }],
      },
    });

    document.addSection({
      size: {
        orientation: PageOrientation.LANDSCAPE,
      },
      headers: {
        default: new Header({
          children: [this.docxGeneratorDataTemplate.pageNumbers()],
        })
      },
      properties: {

        pageNumberStart: 2,
        pageNumberFormatType: PageNumberFormat.DECIMAL,
        titlePage: true
      },
      margins: {
        top: convertMillimetersToTwip(5),
        right: convertMillimetersToTwip(9.5),
        bottom: convertMillimetersToTwip(4),
        left: convertMillimetersToTwip(9)
      },
      children: [
        this.docxGeneratorScheduleTemplate.tableScheduleHeader(),
        this.docxGeneratorScheduleTemplate.mainNameSchedule(),
        this.docxGeneratorScheduleTemplate.groupInfo(5,
          'Современные подходы в образовании младших школьников',
          'учителей начальных классов учреждений общего среднего образования',
          Date.now(),
          Date.now()),
        this.docxGeneratorScheduleTemplate.trainingProgramInfoATP(5, 'kek', true),
        this.tableScheduleGenerator.insertTable(),
        this.docxGeneratorScheduleTemplate.signatureSchedule(),
        this.docxGeneratorDataTemplate.emptyParagraph(),
      ],
    });
    return document;
  }
}
