function processFiles(files) {
    // 1. Total Size: Using reduce to sum up the file sizes
    const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  
    // 2. Largest Files: Sorting by size in descending order and getting the top 5 files
    const largestFiles = [...files] // Copying the array to not modify the original
      .sort((a, b) => b.size - a.size) // Sort by size in descending order
      .splice(0, 5) // Take the first 5 largest files
      .map(file => ({ name: file.name, size: file.size })); // Map to retain only name and size
  
    // 3. Files by Extension: Grouping files by their extension
    const filesByExtension = files.reduce((acc, file) => {
      // Extracting the extension (everything after the last '.')
      const ext = file.name.split('.').pop();
      
      // If the extension doesn't exist in the accumulator, initialize it with an empty array
      if (!acc[ext]) {
        acc[ext] = [];
      }
      
      // Push the file name into the corresponding extension array
      acc[ext].push(file.name);
      
      return acc;
    }, {}); // Initial value of the accumulator is an empty object
  
    // Return the result as an object
    return {
      totalSize,
      largestFiles,
      filesByExtension
    };
  }
  
  // Test Example:
  const files = [
    { name: "document1.pdf", size: 500 },
    { name: "document2.pdf", size: 700 },
    { name: "image1.png", size: 200 },
    { name: "image2.png", size: 300 },
    { name: "text1.txt", size: 100 },
    { name: "text2.txt", size: 150 },
    { name: "photo1.jpg", size: 400 },
    { name: "photo2.jpg", size: 350 },
    { name: "program1.exe", size: 1000 },
    { name: "program2.exe", size: 1200 },
    { name: "data1.csv", size: 600 },
    { name: "data2.csv", size: 500 },
    { name: "report1.pdf", size: 800 },
    { name: "report2.pdf", size: 900 },
    { name: "image3.png", size: 250 },
    { name: "text3.txt", size: 175 },
    { name: "photo3.jpg", size: 450 },
    { name: "document3.pdf", size: 750 }
  ];
  
  console.log(processFiles(files));
  