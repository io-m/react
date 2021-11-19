import { usePDF } from '@react-pdf/renderer';
import PDFDocument  from './components/Document';


const App = () => {
  const [instance, updateInstance] = usePDF({ document: PDFDocument });
  if (instance.loading) return <div>Loading ...</div>;
  
  return (
      <>
        <a href={instance.url} target="_blank" type="pdf">
          Se Følgeseddel
        </a>
      </>
  );
}

export default App