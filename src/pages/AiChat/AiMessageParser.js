export const parseAiResponse = (message) => {
    
    const lines = message.split("\n");
  return lines.map((line) => {
    // const match = line.match(/^(.+?)\s*-\s*(.+)$/); // Matches "Title - Description"
    const match = line.match(/^\s*\d+\.\s*(.+?)\s*-\s*(.+)$/);
 // Matches "Title - Description"
    if (match) {
      const title = match[1].trim();
      const description = match[2].trim();
      const searchURL = `/search?q=${encodeURIComponent(title.trim())}`;
      return {
        type: "suggestion",
        title,
        description,
        link: searchURL,
      };
    } else {
      return {
        type: "text",
        text: line.trim(),
      };
    }
  });
}
