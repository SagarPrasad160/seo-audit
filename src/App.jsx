import { AuditProvider } from "./context/AuditContext";
import AuditForm from "./components/AuditForm";
import PerformanceBars from "./components/PerformanceBars";

function App() {
  return (
    <AuditProvider>
      <AuditForm />
      <PerformanceBars />
    </AuditProvider>
  );
}

export default App;
