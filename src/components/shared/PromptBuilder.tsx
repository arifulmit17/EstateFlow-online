export function buildPrompt(type: string, input: any) {
  switch (type) {
    case "DESCRIPTION":
      return `
Generate a real estate property description.

Property:
Title: ${input.title}
Type: ${input.propertyType}
City: ${input.city}
Price: ${input.price}
Bedrooms: ${input.bedrooms}
Bathrooms: ${input.bathrooms}

Make it:
- Attractive
- Professional
- SEO optimized
- 100-150 words
`;

    case "BLOG":
      return `
Write a real estate blog post.

Topic: ${input.topic}

Make it:
- SEO friendly
- Engaging
- 600-800 words
- Include headings
`;

    case "SUMMARY":
      return `
Summarize this content:
${input.text}

Make it short and clear (3-5 lines).
`;

    case "CAPTION":
      return `
Create a social media caption for this property:
${input.title} in ${input.city} priced at ${input.price}

Make it:
- catchy
- emoji friendly
- short (1-2 lines)
`;

    default:
      return input;
  }
}