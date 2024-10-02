import { useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/auth/login"); // Redirige al login si no está autenticado
    }
    // Opcional: puedes decodificar el token para obtener información del usuario
    const decoded = jwt_decode(token);
    console.log(decoded);
  }, []);

  return (
    <div>
      <h2>Bienvenido al Dashboard</h2>
      <p>Esta es una página protegida. Solo accesible si estás autenticado.</p>
    </div>
  );
};

export default Dashboard;
