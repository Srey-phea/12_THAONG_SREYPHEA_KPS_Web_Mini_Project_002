export const fetchWorkspacesServiceById = async () => {
    try {
      const header = await headerToken();
      const res = await fetch(
        `${baseUrl}/task/workspace/{todoId}`,
        {
          headers: header,
        }
      );
  
      const data = await res.json();
      // console.log(" API Response in Service:", data); 
      return data; 
    } catch (err) {
      console.log(" API Fetch Error:", err);
      return { payload: [] }; 
    }
  }

  