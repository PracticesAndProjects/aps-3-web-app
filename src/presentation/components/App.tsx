import { AuthProvider } from "../../implementation/contexts/AuthContext";
import MyRouter from "./MyRouter";

function App() {
  return (
    <AuthProvider>
      <MyRouter />
    </AuthProvider>
  );
}

export default App;
