const api = {
    notes: {
      list: function () {
        try {
          return JSON.parse(localStorage.getItem('todos') || '[]');
        }
        catch (error) {
          return [];
        }
      },
      set: function (notes) {
        localStorage.setItem('todos', JSON.stringify(notes));
      },
    },
  };
  
  export default api;