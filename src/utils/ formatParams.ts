function formatParams(params: { [key: string]: string }): string {
    const queryParams: string[] = [];
  
    Object.keys(params).forEach((key) => {
      const values = params[key].split(",");
      if (key === "price") {
        queryParams.push(`${key}_lte=${values[0]}`);
      } else {
        values.forEach((value) => {
          if (key === "gender") {
            queryParams.push(`${key}=${value}`);
          } else {
            queryParams.push(`${key}_like=${value}`);
          }
        });
      }
    });
  
    return "?" + queryParams.join("&");
  }
  
  export default formatParams;