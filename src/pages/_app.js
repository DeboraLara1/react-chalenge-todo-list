// pages/_app.js
import '../../index.css';  
import { TaskProvider } from "../context/TaskContext"; // Caminho para o contexto

function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Component {...pageProps} />
    </TaskProvider>
  );
}

export default MyApp;
