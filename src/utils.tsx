export const shufffleArray = (array: any[]) => 
  [...array].sort(()=> Math.random() - 0.5);