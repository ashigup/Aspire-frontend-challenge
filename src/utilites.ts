export const generateRandomNumber = (length:number, maxValue:number) => {
    const min = Math.pow(10, length - 1);
    const max = maxValue - 1;
    return Math.floor(min + Math.random() * (max - min + 1));
  }