export const getWords = (words: string, to: number = 20): string => {
  // Split the string into words and take the first 'to' words
  const wordArray = words.split(" ");
  return wordArray.slice(0, to).join(" ");
};

