export function checkNumberPadding(inputStrings: string[]): number {
    const parsedEntries: {
      original: string;
      numericPart: string;
      paddingLength: number;
    }[] = [];
  
    for (const str of inputStrings) {
      // check if all are digits 
      if (!/^\d+$/.test(str)) continue;
  
      // Remove any zeros at the beginning 
      const numericPart = str.replace(/^0+/, "") || "0";
  
      // how many zeros were removed from the front
      const paddingLength = str.length - numericPart.length;
  
      // Save all this info 
      parsedEntries.push({ original: str, numericPart, paddingLength });
    }
  
    // If no valid entries were found, return 0 (nothing to check)
    if (parsedEntries.length === 0) return 0;
  
    // Find all the different padding lengths
    const uniquePaddingLengths = new Set(parsedEntries.map(e => e.paddingLength));
  
    //  if every string has some padding
    const allHavePadding = parsedEntries.every(e => e.paddingLength > 0);
  
    //  if none of the strings have padding 
    const noneHavePadding = parsedEntries.every(e => e.paddingLength === 0);
  
    // All strings have the same padding and they're padded . consistent
    if (uniquePaddingLengths.size === 1 && allHavePadding) {
      const [padding] = Array.from(uniquePaddingLengths);
  
      // largest number 
      const minFullLength = Math.max(
        ...parsedEntries.map(e => e.numericPart.length + padding)
      );
  
      return minFullLength;
    }
  
    // No padding .plain numbers
    if (noneHavePadding) {
      return 1;
    }
  
    // Mixed padding  .   inconsistent
    if (uniquePaddingLengths.size > 1) {
      return -1;
    }
  
    // edge case . maybe one padded, others not

    const minObservedLength = Math.min(...parsedEntries.map(e => e.original.length));
    return -minObservedLength;
  }
  