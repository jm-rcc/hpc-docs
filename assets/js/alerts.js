// Convert GitHub-style alerts [!NOTE] etc. to styled blockquotes
document.addEventListener('DOMContentLoaded', function() {
  const blockquotes = document.querySelectorAll('blockquote');
  
  const alertTypes = {
    'NOTE': 'note',
    'TIP': 'tip',
    'IMPORTANT': 'important',
    'WARNING': 'warning',
    'CAUTION': 'caution'
  };
  
  blockquotes.forEach(function(blockquote) {
    const firstPara = blockquote.querySelector('p:first-child');
    if (!firstPara) return;
    
    const text = firstPara.textContent.trim();
    const match = text.match(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]/i);
    
    if (match) {
      const alertType = match[1].toUpperCase();
      const alertClass = alertTypes[alertType];
      
      if (alertClass) {
        blockquote.classList.add('alert-' + alertClass);
        // Remove the [!TYPE] text from the first paragraph
        firstPara.textContent = text.replace(/^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*/i, '');
      }
    }
  });
});
