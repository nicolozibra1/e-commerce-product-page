// GESTIONE DEL RIDIMENSIONAMENTO
export function manageResize() {
    function handleResize() {
      this.innerWidth = window.innerWidth;
    }
  
    return {
      mounted() {
        this.innerWidth = window.innerWidth;
        window.addEventListener('resize', handleResize.bind(this));
      },
      beforeDestroy() {
        window.removeEventListener('resize', handleResize.bind(this));
      },
    };
  }