

public class Factory_Method_Pattern {

    interface Doc {
        void openDoc();
    }

    static class WordDoc implements Doc {
        public void openDoc() {
            System.out.println("Word document is opened.");
        }
    }

    static class PdfDoc implements Doc {
        public void openDoc() {
            System.out.println("PDF document is opened.");
        }
    }

    static class ExcelDoc implements Doc {
        public void openDoc() {
            System.out.println("Excel document is opened.");
        }
    }

    static abstract class DocFactory {
        public abstract Doc createDoc();
    }

    static class WordDocFactory extends DocFactory {
        public Doc createDoc() {
            return new WordDoc();
        }
    }

    static class PdfDocFactory extends DocFactory {
        public Doc createDoc() {
            return new PdfDoc();
        }
    }

    static class ExcelDocFactory extends DocFactory {
        public Doc createDoc() {
            return new ExcelDoc();
        }
    }


    public static class FactoryMethodPatternDemo {
        public static void main(String[] args) {
            Factory_Method_Pattern.DocFactory wordCreator = new Factory_Method_Pattern.WordDocFactory();
            Factory_Method_Pattern.Doc wordFile = wordCreator.createDoc();
            wordFile.openDoc();

            Factory_Method_Pattern.DocFactory pdfCreator = new Factory_Method_Pattern.PdfDocFactory();
            Factory_Method_Pattern.Doc pdfFile = pdfCreator.createDoc();
            pdfFile.openDoc();

            Factory_Method_Pattern.DocFactory excelCreator = new Factory_Method_Pattern.ExcelDocFactory();
            Factory_Method_Pattern.Doc excelFile = excelCreator.createDoc();
            excelFile.openDoc();
        }
    }
}
