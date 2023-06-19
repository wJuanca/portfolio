document.addEventListener("DOMContentLoaded", function() {
    // Obtener todas las secciones
    const sections = document.querySelectorAll("section");
  
    // Obtener todos los enlaces del menú
    const menuLinks = document.querySelectorAll(".menu a");
  
    // Agregar el evento de clic a cada enlace del menú
    menuLinks.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
  
        // Obtener el atributo href del enlace
        const targetId = this.getAttribute("href");
  
        // Obtener la sección objetivo
        const targetSection = document.querySelector(targetId);
  
        // Calcular la posición de desplazamiento
        const offsetTop = targetSection.offsetTop;
  
        // Obtener la posición actual del scroll
        const currentPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
        // Calcular la distancia de desplazamiento
        const distance = offsetTop - currentPosition;
  
        // Duración del desplazamiento suave (ms)
        const duration = 800;
  
        // Número de pasos en el desplazamiento suave
        const steps = 60;
  
        // Intervalo de tiempo entre cada paso (ms)
        const interval = duration / steps;
  
        // Calcular el incremento de desplazamiento para cada paso
        const increment = distance / steps;
  
        // Función para realizar el desplazamiento suave en cada paso
        function smoothScrollStep(step) {
          if (step >= steps) {
            // Fin del desplazamiento suave, establecer la posición final
            window.scrollTo(0, offsetTop);
          } else {
            // Calcular la nueva posición del scroll para este paso
            const scrollTop = currentPosition + increment * step;
            window.scrollTo(0, scrollTop);
  
            // Llamar recursivamente para el siguiente paso
            setTimeout(function() {
              smoothScrollStep(step + 1);
            }, interval);
          }
        }
  
        // Iniciar el desplazamiento suave
        smoothScrollStep(0);
      });
    });
  });
  