import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs  } from 'react-syntax-highlighter/dist/esm/styles/prism';  // Use 'prism' instead of 'docco'

function CodeBlock() {
  const codeString = `
class ProgrammingConcept:
    """
    A class to represent a programming concept and explain its purpose.
    """
    def __init__(self, name: str, why: str) -> None:
        """
        Initialize a programming concept with a name and a why.
        
        Args:
            name (str): The name of the programming concept.
            why (str): Explanation of why the concept is useful.
        """
        self.name = name
        self.why = why

    def get_why(self) -> str:
        """
        Retrieve the why of the programming concept.
        
        Returns:
            str: The why of the concept.
        """
        return self.why


def explain_concept(concept: ProgrammingConcept) -> str:
    """
    Get the why of a given programming concept.
    
    Args:
        concept (ProgrammingConcept): An instance of ProgrammingConcept.
        
    Returns:
        str: The why of the concept.
    """
    return concept.get_why()

# Let's create a concept
negative_indexing = ProgrammingConcept(
    name="Negative Indexing",
    why="Allows access to elements from the end of a sequence (like a list or string), "
                "making it more convenient to work with the last elements without needing to know the sequence's length."
)

if __name__ == "__main__":
    print(explain_concept(negative_indexing))
`;

  return (
    <SyntaxHighlighter language="python" style={vs }>
      {codeString}
    </SyntaxHighlighter>
  );
}

export default CodeBlock;
